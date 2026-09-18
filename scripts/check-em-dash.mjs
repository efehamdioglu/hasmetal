/**
 * The site must not render an em dash anywhere, in either language. This walks
 * the built HTML of every route and fails if one slipped back in.
 */
import fs from 'node:fs'
import { legacyRedirects } from '../content/redirects.ts'
import { LOCALES, routes } from '../content/i18n.ts'
import { products, services, systems } from '../content/site.ts'

// read straight from disk: the JSON import attribute syntax differs between
// the bundler and bare node, and this script runs under bare node
const projects = JSON.parse(fs.readFileSync('content/data.json', 'utf8')).projects
const catalogues = Object.keys(JSON.parse(fs.readFileSync('content/catalogues.json', 'utf8')))

const BASE = process.env.BASE ?? 'http://localhost:3001'
const EM = '—'

const paths = [
  ...new Set([
    ...legacyRedirects.map((r) => r.to),
    ...LOCALES.flatMap((l) => [
      routes.home(l),
      routes.about(l),
      routes.systems(l),
      routes.products(l),
      routes.services(l),
      routes.projects(l),
      routes.partners(l),
      routes.commerce(l),
      routes.contact(l),
      routes.quote(l),
      routes.catalogues(l),
      ...catalogues.map((slug) => routes.catalogue(l, slug)),
      ...systems.map((s) => routes.system(l, s.slug)),
      ...products.map((p) => routes.product(l, p.slug)),
      ...services.map((s) => routes.service(l, s.slug)),
      ...projects.map((p) => routes.project(l, p.slug)),
    ]),
    '/yok-boyle-sayfa',
  ]),
]

let hits = 0
for (const path of paths) {
  const html = await (await fetch(BASE + path)).text()
  // only the rendered document matters, not the RSC payload inside <script>
  const visible = html.replace(/<script[\s\S]*?<\/script>/g, '')
  if (!visible.includes(EM)) continue
  hits++
  const at = visible.indexOf(EM)
  console.log(`  ${path}: …${visible.slice(Math.max(0, at - 70), at + 40).replace(/\s+/g, ' ')}…`)
}

console.log(
  hits === 0 ? `no em dash across ${paths.length} pages` : `${hits} page(s) still contain one`,
)
if (hits) process.exitCode = 1
