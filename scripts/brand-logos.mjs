/**
 * The old /aksesuarlar page is a wall of dealer brand logos. The files are
 * pure white with an alpha channel, drawn for a dark band, so the mirroring
 * pass flattened them onto white and they came out blank.
 *
 * This takes the alpha channel of each one and repaints it in ink, which is
 * what a logo needs to be to sit on the paper ground. Nothing else about the
 * mark changes: the shape is the supplied artwork, pixel for pixel.
 *
 * Run: node scripts/brand-logos.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const OUT = 'public/brand'
const INK = { r: 0x11, g: 0x11, b: 0x11 }
const MAX_HEIGHT = 120

const LOGOS = [
  ['gu', 'https://hasmetal.com.tr/wp-content/uploads/2024/12/GU.png'],
  ['siegenia', 'https://hasmetal.com.tr/wp-content/uploads/2024/12/Siegenia-logo.png'],
  ['giesse', 'https://hasmetal.com.tr/wp-content/uploads/2024/12/GIESSE.png'],
  ['assa-abloy', 'https://hasmetal.com.tr/wp-content/uploads/2024/12/assa-abloy.png'],
  ['kale', 'https://hasmetal.com.tr/wp-content/uploads/2024/12/kale.png'],
  ['kahe', 'https://hasmetal.com.tr/wp-content/uploads/2024/12/kahe.png'],
]

fs.mkdirSync(OUT, { recursive: true })

const results = []

for (const [slug, url] of LOGOS) {
  const res = await fetch(url)
  if (!res.ok) {
    console.log(`  skip ${slug}: ${res.status}`)
    continue
  }
  const source = sharp(Buffer.from(await res.arrayBuffer()))
  const { width, height } = await source.metadata()

  // the mark lives entirely in the alpha channel
  const alpha = await source.clone().extractChannel('alpha').raw().toBuffer()

  const inked = await sharp({
    create: { width, height, channels: 3, background: INK },
  })
    .joinChannel(alpha, { raw: { width, height, channels: 1 } })
    .png()
    .toBuffer()

  const file = path.join(OUT, `${slug}.webp`)
  const info = await sharp(inked)
    .trim({ threshold: 1 })
    .resize({ height: MAX_HEIGHT, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(file)

  results.push({ slug, width: info.width, height: info.height })
  console.log(`  ${slug}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} kB`)
}

console.log('\npaste into content/site.ts:\n')
for (const r of results) {
  console.log(`  logo: { src: '/brand/${r.slug}.webp', width: ${r.width}, height: ${r.height} },`)
}
