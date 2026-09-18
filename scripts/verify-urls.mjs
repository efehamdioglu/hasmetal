/**
 * Every URL the old WordPress site published must resolve: either 200 on its
 * new home, or a permanent redirect to it. Nothing may 404.
 */
import { legacyRedirects, goneUrls } from '../content/redirects.ts'

const BASE = process.env.BASE ?? 'http://localhost:3001'

let failures = 0

async function check(from, expectTo) {
  const res = await fetch(BASE + from, { redirect: 'manual' })
  const location = res.headers.get('location')

  if (res.status === 200) {
    if (expectTo && expectTo !== from) {
      console.log(`  FAIL 200 ${from} (expected redirect to ${expectTo})`)
      failures++
      return
    }
    return
  }

  if ([301, 308].includes(res.status)) {
    const target = new URL(location, BASE).pathname
    if (expectTo && target !== expectTo) {
      console.log(`  FAIL ${res.status} ${from} → ${target} (expected ${expectTo})`)
      failures++
      return
    }
    // follow it to make sure the destination is real
    const followed = await fetch(BASE + target)
    if (!followed.ok) {
      console.log(`  FAIL ${from} → ${target} which returns ${followed.status}`)
      failures++
    }
    return
  }

  console.log(`  FAIL ${res.status} ${from}`)
  failures++
}

console.log(`legacy URLs (${legacyRedirects.length}):`)
for (const r of legacyRedirects) await check(r.from, r.to)

console.log(`\nretired URLs (${goneUrls.length}):`)
for (const url of goneUrls) {
  const res = await fetch(BASE + url, { redirect: 'manual' })
  const ok = res.status === 404 || res.status === 410 || res.status === 200
  if (!ok) {
    console.log(`  FAIL ${res.status} ${url}`)
    failures++
  }
}

const extra = [
  '/',
  '/sitemap.xml',
  '/robots.txt',
  '/referanslar/regnum-sky-tower',
  '/sistemler/hm-55-t',
  '/en',
  '/en/about',
  '/en/systems',
  '/en/systems/hm-55-t',
  '/en/products',
  '/en/products/gaskets-and-seals',
  '/en/services',
  '/en/services/construction-and-contracting',
  '/en/projects',
  '/en/projects/regnum-sky-tower',
  '/en/partners',
  '/en/hm-commerce-center',
  '/en/contact',
  '/en/quote',
]
console.log(`\nnew URLs (${extra.length}):`)
for (const url of extra) {
  const res = await fetch(BASE + url)
  if (!res.ok) {
    console.log(`  FAIL ${res.status} ${url}`)
    failures++
  }
}

console.log(failures === 0 ? '\nall URLs resolve' : `\n${failures} failure(s)`)
if (failures) process.exitCode = 1
