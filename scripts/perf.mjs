import fs from 'node:fs'
import path from 'node:path'
import { chromium } from 'playwright'

const BASE = process.env.BASE ?? 'http://localhost:3001'

/* ----------------------------------------------------- shipped JS weight */
const CHUNK_DIR = '.next/static/chunks'
function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else if (entry.name.endsWith('.js')) out.push(full)
  }
  return out
}
const chunks = walk(CHUNK_DIR)
  .map((f) => ({ file: path.relative(CHUNK_DIR, f), kb: fs.statSync(f).size / 1024 }))
  .sort((a, b) => b.kb - a.kb)

console.log('largest client chunks (uncompressed):')
for (const c of chunks.slice(0, 6)) console.log(`  ${c.kb.toFixed(0).padStart(5)} kB  ${c.file}`)
console.log(
  `  total ${chunks.reduce((n, c) => n + c.kb, 0).toFixed(0)} kB across ${chunks.length} files`,
)

/* ------------------------------------------------------- runtime metrics */
const browser = await chromium.launch()

async function measure(label, pathname, opts = {}) {
  const ctx = await browser.newContext({
    viewport: opts.mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 },
    isMobile: Boolean(opts.mobile),
  })
  const page = await ctx.newPage()

  // LCP and CLS only arrive through a buffered observer installed before paint
  await page.addInitScript(() => {
    const w = window
    w.__vitals = { lcp: 0, cls: 0 }
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) w.__vitals.lcp = entry.startTime
    }).observe({ type: 'largest-contentful-paint', buffered: true })
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) w.__vitals.cls += entry.value
      }
    }).observe({ type: 'layout-shift', buffered: true })
  })

  let transferred = 0
  page.on('response', (res) => {
    transferred += Number(res.headers()['content-length'] ?? 0)
  })

  await page.goto(BASE + pathname, { waitUntil: 'load' })
  await page.waitForTimeout(3000)

  const m = await page.evaluate(() => {
    const w = window
    const nav = performance.getEntriesByType('navigation')[0]
    return {
      lcp: Math.round(w.__vitals.lcp),
      cls: Number(w.__vitals.cls.toFixed(4)),
      domContentLoaded: Math.round(nav.domContentLoadedEventEnd),
      scripts: performance
        .getEntriesByType('resource')
        .filter((r) => r.initiatorType === 'script')
        .reduce((n, r) => n + (r.transferSize || 0), 0),
    }
  })

  console.log(
    `${label.padEnd(26)} LCP ${String(m.lcp).padStart(5)} ms   CLS ${String(m.cls).padStart(
      6,
    )}   DCL ${String(m.domContentLoaded).padStart(5)} ms   JS ${(m.scripts / 1024)
      .toFixed(0)
      .padStart(4)} kB   total ${(transferred / 1024).toFixed(0)} kB`,
  )
  await ctx.close()
  return m
}

console.log('\nruntime (production server, local):')
const results = [
  await measure('home / desktop', '/'),
  await measure('home / mobile', '/', { mobile: true }),
  await measure('project index / desktop', '/referanslar'),
  await measure('project page / mobile', '/referanslar/regnum-sky-tower', { mobile: true }),
  await measure('system page / desktop', '/sistemler/hm-55-t'),
  await measure('home EN / mobile', '/en', { mobile: true }),
]

await browser.close()

const worstLcp = Math.max(...results.map((r) => r.lcp ?? 0))
const worstCls = Math.max(...results.map((r) => r.cls))
console.log(`\nworst LCP ${worstLcp} ms (target < 1500) · worst CLS ${worstCls} (target < 0.05)`)
