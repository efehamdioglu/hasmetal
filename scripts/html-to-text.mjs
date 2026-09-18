import fs from 'node:fs'
import path from 'node:path'

const DIR = 'scripts/_scrape'
const OUT = 'scripts/_text'

const BLOCK = /<\/(p|div|section|li|h1|h2|h3|h4|h5|h6|tr|article|header|footer|figcaption|span)>/gi

export function toText(html) {
  let s = html
  s = s.replace(/<script[\s\S]*?<\/script>/gi, '')
  s = s.replace(/<style[\s\S]*?<\/style>/gi, '')
  s = s.replace(/<!--[\s\S]*?-->/g, '')
  s = s.replace(/<img[^>]*src="([^"]+)"[^>]*>/gi, (_m, src) => `\n[IMG ${src}]\n`)
  s = s.replace(BLOCK, '\n')
  s = s.replace(/<br\s*\/?>/gi, '\n')
  s = s.replace(/<[^>]+>/g, '')
  s = s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&#8217;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
  s = s
    .split('\n')
    .map((l) => l.replace(/[ \t]+/g, ' ').trim())
    .filter(Boolean)
    .join('\n')
  return s.replace(/\n{3,}/g, '\n\n')
}

const isEntry = Boolean(process.argv[1] && process.argv[1].includes('html-to-text'))

if (isEntry) {
  fs.mkdirSync(OUT, { recursive: true })
  for (const file of fs.readdirSync(DIR)) {
    const html = fs.readFileSync(path.join(DIR, file), 'utf8')
    fs.writeFileSync(path.join(OUT, file.replace(/\.html$/, '.txt')), toText(html))
  }
  console.log('converted', fs.readdirSync(OUT).length, 'files')
}
