/**
 * The reference grid is the most valuable thing on the old site: an image
 * followed by an <h2 class="title"> and a city. Pull all of it out, with the
 * real pixel dimensions the markup already declares.
 */
import fs from 'node:fs'

const html = fs
  .readFileSync('scripts/_scrape/referanslar.html', 'utf8')
  .replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<style[\s\S]*?<\/style>/g, '')

const decode = (s) =>
  s
    .replace(/&#8217;|&#039;|&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8211;/g, '-')
    .trim()

/* an image, then somewhere after it the title and the city */
const CARD =
  /<img[^>]*src="([^"]+)"[^>]*height="(\d+)"[^>]*width="(\d+)"[^>]*>[\s\S]{0,900}?<h2 class="title">([\s\S]*?)<\/h2>[\s\S]{0,400}?<p class="icon-box-description">([\s\S]*?)<\/p>/g

const projects = []
for (const m of html.matchAll(CARD)) {
  const [, src, height, width, rawName, rawCity] = m
  const name = decode(rawName.replace(/<[^>]*>/g, ''))
  const city = decode(rawCity.replace(/<[^>]*>/g, ''))
  if (!name) continue
  projects.push({
    name,
    city,
    src: src.replace(/^http:/, 'https:'),
    width: Number(width),
    height: Number(height),
  })
}

const byName = new Map()
for (const p of projects) if (!byName.has(p.name)) byName.set(p.name, p)
const unique = [...byName.values()]

console.log('cards found:', projects.length, '| unique:', unique.length)
console.log('')
for (const p of unique) {
  console.log(
    `${p.name.padEnd(30)} ${p.city.padEnd(12)} ${String(p.width + 'x' + p.height).padEnd(11)} ${p.src.split('/').pop()}`,
  )
}

const cities = {}
for (const p of unique) cities[p.city] = (cities[p.city] ?? 0) + 1
console.log('\ncities:', cities)

fs.writeFileSync('scripts/_projects.json', JSON.stringify(unique, null, 2))
