/**
 * The old site hid eight real catalogues behind a WordPress flipbook plugin:
 * six dealer brand catalogues on /aksesuarlar, plus Has Metal's own
 * architectural systems and standard profile catalogues. Over 1300 pages in
 * total, none of it reachable by search and all of it behind 170 MB of PDF.
 *
 * This mirrors each one and renders every page to webp, so the viewer on the
 * new site can page through them without shipping a PDF engine to the browser
 * or making the reader download a 40 MB file to see page one.
 *
 * Run: node scripts/catalogues.mjs [slug ...]
 */
import fs from 'node:fs'
import path from 'node:path'
import { pdf } from 'pdf-to-img'
import sharp from 'sharp'

const SRC = 'scripts/_pdf'
const OUT = 'public/catalogs'
const DATA = 'content/catalogues.json'

const PAGE_WIDTH = 1200
const PAGE_QUALITY = 66
const THUMB_WIDTH = 170
const THUMB_QUALITY = 58

const UPLOADS = 'https://hasmetal.com.tr/wp-content/uploads/2024/12/'

/** slug, source file on the old site, and whether the PDF itself is ours to offer */
const CATALOGUES = [
  { slug: 'has-metal-mimari-sistemler', file: 'HAS-METAL-ALUMINYUM-2024.pdf', own: true },
  { slug: 'has-metal-standart-profiller', file: 'Has-Metal-Katalog-2024.pdf', own: true },
  { slug: 'gu', file: 'GU-katalog-1.pdf', own: false },
  { slug: 'siegenia', file: 'fav_pk_en-1.pdf', own: false },
  { slug: 'giesse', file: 'giesse.pdf', own: false },
  { slug: 'assa-abloy', file: 'ASSA-ABLOY-2020-Urun-Katalogu-V3-low-res.pdf', own: false },
  { slug: 'kale', file: 'teknik_katalog.pdf', own: false },
  { slug: 'kahe', file: 'Kahe20221.pdf', own: false },
]

const only = process.argv.slice(2)
const wanted = only.length ? CATALOGUES.filter((c) => only.includes(c.slug)) : CATALOGUES

fs.mkdirSync(SRC, { recursive: true })
fs.mkdirSync(OUT, { recursive: true })

const existing = fs.existsSync(DATA) ? JSON.parse(fs.readFileSync(DATA, 'utf8')) : {}

for (const cat of wanted) {
  const src = path.join(SRC, `${cat.slug}.pdf`)

  if (!fs.existsSync(src)) {
    process.stdout.write(`${cat.slug}: indiriliyor... `)
    const res = await fetch(UPLOADS + cat.file)
    if (!res.ok) {
      console.log(`HTTP ${res.status}, atlandı`)
      continue
    }
    fs.writeFileSync(src, Buffer.from(await res.arrayBuffer()))
    console.log(`${(fs.statSync(src).size / 1048576).toFixed(1)} MB`)
  }

  const dir = path.join(OUT, cat.slug)
  fs.mkdirSync(dir, { recursive: true })

  // scale 2 gives enough pixels to downsample from cleanly
  const doc = await pdf(src, { scale: 2 })
  const pages = []
  let index = 0
  let bytes = 0

  for await (const raw of doc) {
    index++
    const n = String(index).padStart(3, '0')
    const pageFile = path.join(dir, `p${n}.webp`)
    const thumbFile = path.join(dir, `t${n}.webp`)

    if (fs.existsSync(pageFile) && fs.existsSync(thumbFile)) {
      const meta = await sharp(pageFile).metadata()
      pages.push([meta.width, meta.height])
      bytes += fs.statSync(pageFile).size + fs.statSync(thumbFile).size
      continue
    }

    const base = sharp(raw).resize({ width: PAGE_WIDTH, withoutEnlargement: true })
    const info = await base.clone().webp({ quality: PAGE_QUALITY }).toFile(pageFile)
    await sharp(raw)
      .resize({ width: THUMB_WIDTH })
      .webp({ quality: THUMB_QUALITY })
      .toFile(thumbFile)

    pages.push([info.width, info.height])
    bytes += info.size + fs.statSync(thumbFile).size

    if (index % 25 === 0) process.stdout.write(`\r  ${cat.slug}: ${index} sayfa`)
  }

  existing[cat.slug] = {
    slug: cat.slug,
    pages: pages.length,
    /** [w, h] per page; most catalogues are uniform but some carry foldouts */
    size: pages,
    pdf: cat.own ? `/catalogs/${cat.slug}.pdf` : null,
  }

  if (cat.own) {
    const copy = path.join(OUT, `${cat.slug}.pdf`)
    if (!fs.existsSync(copy)) fs.copyFileSync(src, copy)
  }

  console.log(
    `\r  ${cat.slug}: ${pages.length} sayfa, ${(bytes / 1048576).toFixed(1)} MB` + ' '.repeat(12),
  )

  fs.writeFileSync(DATA, JSON.stringify(existing, null, 2))
}

const total = Object.values(existing).reduce((n, c) => n + c.pages, 0)
console.log(`\n${Object.keys(existing).length} katalog, ${total} sayfa -> ${DATA}`)
