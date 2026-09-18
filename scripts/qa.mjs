/**
 * The checks that have to pass before this ships. Run against a production
 * build (`npm run build && npm start -- -p 3001`) so the numbers are honest.
 */
import { chromium } from 'playwright'

const BASE = process.env.BASE ?? 'http://localhost:3001'
const browser = await chromium.launch()
const failures = []

function check(name, ok, detail = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ' :: ' + detail : ''}`)
  if (!ok) failures.push(name)
}

/* ---------------------------------------------- console + network errors */
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await ctx.newPage()
  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  page.on('pageerror', (e) => errors.push(String(e)))
  page.on('requestfailed', (r) => errors.push(`${r.failure()?.errorText} ${r.url()}`))

  for (const path of [
    '/',
    '/kurumsal',
    '/sistemler',
    '/sistemler/hm-55-t',
    '/urunler/fitil-ve-conta',
    '/hizmetler/insaat-ve-taahhut',
    '/referanslar',
    '/referanslar/regnum-sky-tower',
    '/hm-commerce-center',
    '/bayiliklerimiz',
    '/iletisim',
    '/teklif',
    '/en',
    '/en/projects',
  ]) {
    await page.goto(BASE + path, { waitUntil: 'load' })
    await page.evaluate(() =>
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }),
    )
    await page.waitForTimeout(600)
  }
  // the embedded map is a third party frame; its own console noise is not ours
  const ours = errors.filter((e) => !e.includes('google.com/maps') && !e.includes('gstatic'))
  check('no console / network errors', ours.length === 0, ours.slice(0, 3).join(' | '))
  await ctx.close()
}

/* -------------------------------------------------------- reduced motion */
{
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: 'reduce',
  })
  const page = await ctx.newPage()

  for (const path of ['/', '/referanslar', '/kurumsal']) {
    await page.goto(BASE + path, { waitUntil: 'load' })
    await page.waitForTimeout(700)
    const hidden = await page.evaluate(() =>
      [...document.querySelectorAll('h1, h2, h3, p, li, dd, dt')].filter((n) => {
        const cs = getComputedStyle(n)
        if (cs.display === 'none' || cs.visibility === 'hidden') return false
        if (!n.textContent?.trim()) return false
        return Number(cs.opacity) < 0.05
      }).length,
    )
    check(`reduced motion: nothing stuck invisible on ${path}`, hidden === 0, `${hidden} nodes`)
  }

  // the counters must land on their final figure rather than sit at zero
  await page.goto(BASE + '/', { waitUntil: 'load' })
  await page.evaluate(() =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }),
  )
  await page.waitForTimeout(600)
  const body = await page.locator('body').innerText()
  check('counters reach their value', body.includes('50.710'), body.includes('50.710') ? '' : 'no 50.710')
  await ctx.close()
}

/* ----------------------------------------------------------- a11y basics */
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await ctx.newPage()

  for (const path of ['/', '/referanslar/regnum-sky-tower', '/sistemler/hm-55-t', '/en/about']) {
    await page.goto(BASE + path, { waitUntil: 'load' })
    const h1s = await page.locator('h1').count()
    check(`exactly one h1 on ${path}`, h1s === 1, `${h1s}`)
  }

  await page.goto(BASE + '/referanslar', { waitUntil: 'load' })
  await page.evaluate(() =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }),
  )
  await page.waitForTimeout(500)
  const noAlt = await page.evaluate(
    () => [...document.querySelectorAll('img')].filter((i) => i.alt === null || i.alt === '').length,
  )
  check('every image carries alt text', noAlt === 0, `${noAlt} without`)

  check('html lang is tr', (await page.getAttribute('html', 'lang')) === 'tr')

  const reachable = []
  for (let i = 0; i < 6; i++) {
    await page.keyboard.press('Tab')
    reachable.push(
      await page.evaluate(() => {
        const el = document.activeElement
        if (!el || el === document.body) return null
        return (
          el.tagName +
          ':' +
          (el.getAttribute('aria-label') ?? el.textContent?.trim().slice(0, 16) ?? '')
        )
      }),
    )
  }
  check(
    'keyboard reaches interactive elements',
    reachable.filter(Boolean).length >= 5,
    reachable.join(' > '),
  )

  // the city filter has to be operable without a mouse
  const chip = page.locator('button', { hasText: 'Ankara' }).first()
  await chip.focus()
  await page.keyboard.press('Enter')
  await page.waitForTimeout(500)
  const pressed = await chip.getAttribute('aria-pressed')
  check('city filter is keyboard operable', pressed === 'true', String(pressed))
  await ctx.close()
}

/* ------------------------------------------------------------ lead form */
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await ctx.newPage()

  await page.goto(BASE + '/teklif', { waitUntil: 'load' })
  await page.fill('input[name="name"]', 'Test Mimarlık')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('input[name="phone"]', '05001112233')
  await page.fill('textarea[name="message"]', 'C50 cephe sistemi için keşif ve teklif talebimiz var.')
  await page.click('button[type="submit"]')
  await page.waitForTimeout(2500)
  const ok = await page.locator('[role="status"]').first().textContent()
  check('quote form accepts a valid submission', Boolean(ok?.includes('alındı')), ok ?? 'no status')

  await page.goto(BASE + '/iletisim', { waitUntil: 'load' })
  await page.fill('input[name="name"]', 'x')
  await page.fill('input[name="email"]', 'someone@example.com')
  await page.fill('input[name="phone"]', '1')
  await page.fill('textarea[name="message"]', 'kısa')
  await page.click('button[type="submit"]')
  await page.waitForTimeout(1500)
  const bad = await page.locator('[role="status"]').first().textContent()
  check('contact form rejects bad input', Boolean(bad?.includes('kontrol')), bad ?? 'no status')

  await page.goto(BASE + '/en/quote', { waitUntil: 'load' })
  await page.fill('input[name="name"]', 'Test Architects')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('input[name="phone"]', '05001112233')
  await page.fill('textarea[name="message"]', 'We would like a quotation for the C50 curtain wall.')
  await page.click('button[type="submit"]')
  await page.waitForTimeout(2500)
  const okEn = await page.locator('[role="status"]').first().textContent()
  check('English form answers in English', Boolean(okEn?.includes('received')), okEn ?? 'no status')
  await ctx.close()
}

/* ----------------------------------------------------------------- i18n */
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await ctx.newPage()

  await page.goto(BASE + '/en/systems/hm-55-t', { waitUntil: 'load' })
  check('English page uses lang=en', (await page.getAttribute('html', 'lang')) === 'en')
  // the `.label` class uppercases, so compare on a case-folded copy
  const enBody = (await page.locator('body').innerText()).toLowerCase()
  check(
    'English page is actually in English',
    enBody.includes('technical documentation') && !enBody.includes('teknik doküman'),
    enBody.slice(0, 60).replace(/\s+/g, ' '),
  )

  // the switch is a client-side navigation, so wait on the URL, not on load
  await page.click('a[hreflang="tr"]')
  await page.waitForURL('**/sistemler/hm-55-t', { timeout: 5000 }).catch(() => {})
  check(
    'language switch keeps the same page',
    new URL(page.url()).pathname === '/sistemler/hm-55-t',
    new URL(page.url()).pathname,
  )
  check('switched page uses lang=tr', (await page.getAttribute('html', 'lang')) === 'tr')

  // the translated slugs have to survive the round trip too
  await page.goto(BASE + '/urunler/fitil-ve-conta', { waitUntil: 'load' })
  await page.click('a[hreflang="en"]')
  await page.waitForURL('**/en/products/gaskets-and-seals', { timeout: 5000 }).catch(() => {})
  check(
    'translated slug switches correctly',
    new URL(page.url()).pathname === '/en/products/gaskets-and-seals',
    new URL(page.url()).pathname,
  )

  const alternates = await page.evaluate(() =>
    [...document.querySelectorAll('link[rel="alternate"]')].map(
      (l) => l.getAttribute('hreflang') + ' ' + l.getAttribute('href'),
    ),
  )
  check('hreflang pair plus x-default', alternates.length >= 3, alternates.join(' | '))
  await ctx.close()
}

/* -------------------------------------------------------------- metadata */
{
  const ctx = await browser.newContext()
  const page = await ctx.newPage()
  await page.goto(BASE + '/sistemler/hm-55-t', { waitUntil: 'domcontentloaded' })
  const meta = await page.evaluate(() => ({
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    og: document.querySelector('meta[property="og:title"]')?.getAttribute('content'),
    jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].length,
  }))
  check('page title present', meta.title.includes('HM 55 T'), meta.title)
  check(
    'brand name appears once in the title',
    (meta.title.match(/Has Metal/g) ?? []).length === 1,
    meta.title,
  )
  check('meta description present', Boolean(meta.description))
  check('canonical present', Boolean(meta.canonical), meta.canonical ?? '')
  check('open graph title present', Boolean(meta.og))
  check('JSON-LD blocks present', meta.jsonLd >= 2, `${meta.jsonLd} blocks`)

  // three facilities, three LocalBusiness records
  const types = await page.evaluate(() =>
    [...document.querySelectorAll('script[type="application/ld+json"]')]
      .flatMap((s) => {
        const parsed = JSON.parse(s.textContent)
        return Array.isArray(parsed) ? parsed : [parsed]
      })
      .map((d) => d['@type']),
  )
  check(
    'three LocalBusiness records',
    types.filter((x) => x === 'LocalBusiness').length === 3,
    types.join(', '),
  )
  check('Organization record present', types.includes('Organization'))
  check('Product record on a system page', types.includes('Product'))
  await ctx.close()
}

await browser.close()

console.log('')
if (failures.length) {
  console.log(`${failures.length} check(s) failed: ${failures.join(', ')}`)
  process.exitCode = 1
} else {
  console.log('all checks passed')
}
