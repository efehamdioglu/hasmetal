import fs from 'node:fs'
import path from 'node:path'
import { chromium } from 'playwright'

const BASE = process.env.BASE ?? 'http://localhost:3001'
const OUT = process.env.SHOT_DIR ?? 'scripts/_shots'
fs.mkdirSync(OUT, { recursive: true })

/** [name, path, scrollFraction] */
const SHOTS = process.env.SHOTS
  ? JSON.parse(process.env.SHOTS)
  : [
      ['01-hero', '/', 0],
      ['02-manifesto', '/', 0.12],
      ['03-timeline', '/', 0.22],
      ['04-project-index', '/', 0.38],
      ['05-systems', '/', 0.58],
      ['06-commerce', '/', 0.74],
      ['07-partners', '/', 0.9],
    ]

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1600, height: 950 } })
const page = await context.newPage()

for (const [name, url, fraction] of SHOTS) {
  await page.goto(BASE + url, { waitUntil: 'load' })
  if (fraction > 0) {
    await page.evaluate((f) => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      window.scrollTo({ top: total * f, behavior: 'instant' })
    }, fraction)
  }
  await page.waitForTimeout(fraction > 0 ? 1800 : 1400)
  await page.screenshot({ path: path.join(OUT, `${name}.png`) })
  console.log('shot', name)
}

const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
})
const mpage = await mobile.newPage()
for (const [name, url, fraction] of [
  ['m01-hero', '/', 0],
  ['m02-projects', '/', 0.45],
]) {
  await mpage.goto(BASE + url, { waitUntil: 'load' })
  if (fraction > 0) {
    await mpage.evaluate((f) => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      window.scrollTo({ top: total * f, behavior: 'instant' })
    }, fraction)
  }
  await mpage.waitForTimeout(1600)
  await mpage.screenshot({ path: path.join(OUT, `${name}.png`) })
  console.log('shot', name)
}

await browser.close()
console.log('done →', OUT)
