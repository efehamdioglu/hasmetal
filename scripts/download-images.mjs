/**
 * Mirrors every image the old site uses into public/images, re-encodes it to
 * webp at a sane size, and records the real dimensions plus a tiny blur
 * placeholder so next/image never causes a layout shift.
 *
 * The source site serves these over plain http from an https page; pulling them
 * in locally is what removes those 91 mixed-content warnings.
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const OUT = 'public/images'
const SCRAPE = 'scripts/_scrape'
const MAX_WIDTH = 2400

fs.mkdirSync(OUT, { recursive: true })

/* collect every upload referenced anywhere on the old site */
const urls = new Map()
for (const file of fs.readdirSync(SCRAPE)) {
  const html = fs.readFileSync(path.join(SCRAPE, file), 'utf8')
  for (const m of html.matchAll(/https?:\/\/hasmetal\.com\.tr\/wp-content\/uploads\/[^"'\s)]+/g)) {
    const url = m[0].replace(/^http:/, 'https:')
    if (!/\.(jpe?g|png|webp)$/i.test(url)) continue
    // skip WordPress' generated thumbnails, keep the original
    const clean = url.replace(/-\d+x\d+(?=\.[a-z]+$)/i, '')
    urls.set(clean, true)
  }
}

function slugFor(url) {
  const base = decodeURIComponent(path.basename(new URL(url).pathname))
  return base
    .replace(/\.[a-z]+$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)
}

const manifest = {}
const failed = []
const queue = [...urls.keys()]
let done = 0

async function one(url) {
  const key = slugFor(url)
  const file = path.join(OUT, key + '.webp')
  try {
    let buffer
    if (fs.existsSync(file) && fs.statSync(file).size > 1000) {
      buffer = fs.readFileSync(file)
    } else {
      const res = await fetch(url)
      if (!res.ok) throw new Error('HTTP ' + res.status)
      const input = Buffer.from(await res.arrayBuffer())
      buffer = await sharp(input)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toBuffer()
      fs.writeFileSync(file, buffer)
    }

    const meta = await sharp(buffer).metadata()
    const blur = await sharp(buffer).resize(12).webp({ quality: 40 }).toBuffer()

    manifest[key] = {
      src: `/images/${key}.webp`,
      width: meta.width,
      height: meta.height,
      blurDataURL: `data:image/webp;base64,${blur.toString('base64')}`,
      source: url,
      alt: '',
    }
    done++
  } catch (err) {
    failed.push({ url, error: String(err) })
  }
}

await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (queue.length) await one(queue.shift())
  }),
)

fs.writeFileSync('scripts/_images.json', JSON.stringify(manifest, null, 2))

const total = fs.readdirSync(OUT).reduce((n, f) => n + fs.statSync(path.join(OUT, f)).size, 0)
console.log(`images: ${done}/${urls.size}  ·  ${(total / 1024 / 1024).toFixed(1)} MB on disk`)
if (failed.length) console.log('failed:', failed.slice(0, 8))
