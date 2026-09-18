/**
 * Pulls every page of the live hasmetal.com.tr into scripts/_scrape so the
 * content can be parsed once and committed as data. Read-only against the
 * source site; run again with `npm run content:refresh`.
 */
import fs from 'node:fs'
import path from 'node:path'

const ORIGIN = 'https://hasmetal.com.tr'
const OUT = 'scripts/_scrape'

const index = await (await fetch(`${ORIGIN}/wp-sitemap.xml`)).text()
const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])

const urls = new Set([ORIGIN + '/'])
for (const map of maps) {
  if (!/posts-(page|post)/.test(map)) continue
  const xml = await (await fetch(map)).text()
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(m[1])
}

fs.mkdirSync(OUT, { recursive: true })

function slugFor(url) {
  const p = new URL(url).pathname.replace(/^\/|\/$/g, '')
  return p === '' ? 'home' : p.replace(/\//g, '__')
}

let ok = 0
const failed = []
const queue = [...urls]

await Promise.all(
  Array.from({ length: 5 }, async () => {
    while (queue.length) {
      const url = queue.shift()
      const file = path.join(OUT, slugFor(url) + '.html')
      if (fs.existsSync(file)) {
        ok++
        continue
      }
      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        fs.writeFileSync(file, await res.text())
        ok++
      } catch (err) {
        failed.push([url, String(err)])
      }
    }
  }),
)

console.log('scraped', ok, '/', urls.size)
if (failed.length) console.log('failed:', failed)
