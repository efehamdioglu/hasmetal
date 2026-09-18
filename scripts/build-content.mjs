/**
 * Turns the scraped WordPress pages into one typed JSON file.
 *
 * The old site has almost no unique copy outside the About story, the
 * reference grid and the contact block, so this pulls those out precisely and
 * leaves everything else to the hand-written layer in content/site.ts.
 */
import fs from 'node:fs'
import path from 'node:path'

const SCRAPE = 'scripts/_scrape'
const images = JSON.parse(fs.readFileSync('scripts/_images.json', 'utf8'))

const decode = (s) =>
  s
    .replace(/&#8217;|&#0?39;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()

const strip = (s) => decode(String(s).replace(/<[^>]*>/g, ''))

function read(name) {
  return fs
    .readFileSync(path.join(SCRAPE, name + '.html'), 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
}

/** the uploads URL a page references maps back to our local webp key */
function imageKey(url) {
  const clean = url.replace(/^http:/, 'https:').replace(/-\d+x\d+(?=\.[a-z]+$)/i, '')
  const base = decodeURIComponent(path.basename(new URL(clean).pathname))
  const key = base
    .replace(/\.[a-z]+$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)
  return images[key] ? key : null
}

/* ------------------------------------------------------------- projects */

const CARD =
  /<img[^>]*src="([^"]+)"[^>]*>[\s\S]{0,900}?<h2 class="title">([\s\S]*?)<\/h2>[\s\S]{0,400}?<p class="icon-box-description">([\s\S]*?)<\/p>/g

/** the same building appears under slightly different spellings across pages */
const NAME_FIXES = new Map([
  ['THE ONE RESIDENCE', 'THE ONE RESIDANCE'],
  ['QENT İSTİNYE', 'QUENT İSTİNYE'],
  ['ATİYE RESIDENCE', 'ATIYE RESIDENCE'],
  ['PARK HAYAT KONUTLARI', 'PARK HAYAT'],
])

const CITY_FIXES = new Map([['Bodrum - Muğla', 'Bodrum']])

function slugify(name) {
  const map = { ç: 'c', ğ: 'g', ı: 'i', İ: 'i', ö: 'o', ş: 's', ü: 'u', Ç: 'c', Ğ: 'g', Ö: 'o', Ş: 's', Ü: 'u' }
  return name
    .split('')
    .map((c) => map[c] ?? c)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Two projects only appear in the home slider, which is a bare image + name
 * list with no city. The Green Park is placed by its own filename; HM Saray
 * has no city anywhere on the old site, so it is left blank and listed in the
 * README as something to confirm with the client.
 */
const EXTRA_PROJECTS = [
  { name: 'THE GREEN PARK', city: 'Sivas', image: 'the-green-park-sivas-exterior' },
  { name: 'HM SARAY', city: '', image: '5454' },
]

const projects = new Map()
for (const page of ['referanslar', 'home']) {
  for (const m of read(page).matchAll(CARD)) {
    const [, src, rawName, rawCity] = m
    let name = strip(rawName)
    const city = CITY_FIXES.get(strip(rawCity)) ?? strip(rawCity)
    if (!name || !city) continue
    name = NAME_FIXES.get(name) ?? name
    const key = imageKey(src)
    if (!key) continue
    if (projects.has(name)) continue
    projects.set(name, { slug: slugify(name), name, city, cover: key })
  }
}

for (const extra of EXTRA_PROJECTS) {
  if (projects.has(extra.name)) continue
  if (!images[extra.image]) {
    console.warn('  ! missing image for', extra.name, extra.image)
    continue
  }
  projects.set(extra.name, {
    slug: slugify(extra.name),
    name: extra.name,
    city: extra.city,
    cover: extra.image,
  })
}

/* ---------------------------------------------------------- about story */

function paragraphsOf(page, minLength = 120) {
  const out = []
  for (const m of read(page).matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)) {
    const text = strip(m[1])
    if (text.length >= minLength) out.push(text)
  }
  return out
}

const about = paragraphsOf('hakkimizda')

/* ----------------------------------------------------------- page meta */

function meta(page) {
  const html = read(page)
  return {
    title: strip((html.match(/<title>([^<]*)<\/title>/) || [, ''])[1]),
    description: decode((html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1]),
  }
}

/* ----------------------------------------------------------------- out */

const data = {
  images,
  projects: [...projects.values()],
  about,
  legacyMeta: Object.fromEntries(
    fs
      .readdirSync(SCRAPE)
      .map((f) => f.replace(/\.html$/, ''))
      .map((name) => [name, meta(name)]),
  ),
}

fs.mkdirSync('content', { recursive: true })
fs.writeFileSync('content/data.json', JSON.stringify(data, null, 2))

const cities = {}
for (const p of data.projects) cities[p.city] = (cities[p.city] ?? 0) + 1

console.log('images  :', Object.keys(images).length)
console.log('projects:', data.projects.length)
console.log('cities  :', cities)
console.log('about   :', about.length, 'paragraphs')
console.log('missing cover:', data.projects.filter((p) => !p.cover).map((p) => p.name))
