/**
 * Routing and language plumbing.
 *
 * Turkish sits at the root with Turkish path segments, so every URL the old
 * WordPress site published still resolves unchanged. The other seven
 * languages live under their own prefix and share one set of segments, which
 * is what lets them share a single route tree instead of seven copies of it.
 */
import {
  DEFAULT_LOCALE,
  LOCALES,
  INTL_LOCALES,
  LOCALE_NAMES,
  htmlLang,
  isLocale,
  lang,
  ogLocale,
  type Locale,
} from './lang/index.ts'

export { DEFAULT_LOCALE, LOCALES, INTL_LOCALES, LOCALE_NAMES, htmlLang, isLocale, ogLocale }
export type { Locale }
export type { Lang } from './lang/index.ts'

/* --------------------------------------------------------------- routing */

const TR_SEGMENTS = {
  about: 'kurumsal',
  systems: 'sistemler',
  products: 'urunler',
  services: 'hizmetler',
  projects: 'referanslar',
  partners: 'bayiliklerimiz',
  catalogues: 'kataloglar',
  commerce: 'hm-commerce-center',
  contact: 'iletisim',
  quote: 'teklif',
} as const

/** Shared by every language other than Turkish. */
const INTL_SEGMENTS = {
  about: 'about',
  systems: 'systems',
  products: 'products',
  services: 'services',
  projects: 'projects',
  partners: 'partners',
  catalogues: 'catalogues',
  commerce: 'hm-commerce-center',
  contact: 'contact',
  quote: 'quote',
} as const

type Section = keyof typeof TR_SEGMENTS

const segments = (l: Locale) => (l === DEFAULT_LOCALE ? TR_SEGMENTS : INTL_SEGMENTS)

/** Series are product codes, so only the descriptive slugs need translating. */
export const PRODUCT_SLUGS: Record<string, string> = {
  'standart-profiller': 'standard-profiles',
  'aksesuar-ve-mekanizma': 'hardware-and-mechanisms',
  'fitil-ve-conta': 'gaskets-and-seals',
}

export const SERVICE_SLUGS: Record<string, string> = {
  'ahsap-kaplama-ve-elektrostatik-toz-boyama': 'wood-effect-and-powder-coating',
  'insaat-ve-taahhut': 'construction-and-contracting',
}

const invert = (map: Record<string, string>) =>
  Object.fromEntries(Object.entries(map).map(([a, b]) => [b, a]))

const PRODUCT_TR = invert(PRODUCT_SLUGS)
const SERVICE_TR = invert(SERVICE_SLUGS)

export const productSlugTr = (slug: string) => PRODUCT_TR[slug] ?? slug
export const serviceSlugTr = (slug: string) => SERVICE_TR[slug] ?? slug

const localise = (map: Record<string, string>, slug: string, locale: Locale) =>
  locale === DEFAULT_LOCALE ? slug : (map[slug] ?? slug)

const prefix = (locale: Locale) => (locale === DEFAULT_LOCALE ? '' : `/${locale}`)

export const routes = {
  home: (l: Locale) => prefix(l) || '/',
  about: (l: Locale) => `${prefix(l)}/${segments(l).about}`,
  systems: (l: Locale) => `${prefix(l)}/${segments(l).systems}`,
  system: (l: Locale, slug: string) => `${prefix(l)}/${segments(l).systems}/${slug}`,
  products: (l: Locale) => `${prefix(l)}/${segments(l).products}`,
  product: (l: Locale, slug: string) =>
    `${prefix(l)}/${segments(l).products}/${localise(PRODUCT_SLUGS, slug, l)}`,
  services: (l: Locale) => `${prefix(l)}/${segments(l).services}`,
  service: (l: Locale, slug: string) =>
    `${prefix(l)}/${segments(l).services}/${localise(SERVICE_SLUGS, slug, l)}`,
  projects: (l: Locale) => `${prefix(l)}/${segments(l).projects}`,
  project: (l: Locale, slug: string) => `${prefix(l)}/${segments(l).projects}/${slug}`,
  partners: (l: Locale) => `${prefix(l)}/${segments(l).partners}`,
  catalogues: (l: Locale) => `${prefix(l)}/${segments(l).catalogues}`,
  catalogue: (l: Locale, slug: string) => `${prefix(l)}/${segments(l).catalogues}/${slug}`,
  commerce: (l: Locale) => `${prefix(l)}/${segments(l).commerce}`,
  contact: (l: Locale) => `${prefix(l)}/${segments(l).contact}`,
  quote: (l: Locale) => `${prefix(l)}/${segments(l).quote}`,
}

/**
 * The same page in another language. The trees use different path segments,
 * so this walks the route table rather than gluing on a prefix, which would
 * produce addresses like /de/referanslar that do not exist.
 */
export function pathFor(pathname: string, from: Locale, to: Locale): string {
  const parts = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)
  const rest0 = from === DEFAULT_LOCALE ? parts : parts.slice(1)

  if (rest0.length === 0) return routes.home(to)

  const [head, ...rest] = rest0
  const from_ = segments(from)
  const section = (Object.keys(from_) as Section[]).find((key) => from_[key] === head)

  switch (section) {
    case 'systems':
      return rest.length ? routes.system(to, rest[0]) : routes.systems(to)
    case 'products':
      return rest.length
        ? routes.product(to, from === DEFAULT_LOCALE ? rest[0] : productSlugTr(rest[0]))
        : routes.products(to)
    case 'services':
      return rest.length
        ? routes.service(to, from === DEFAULT_LOCALE ? rest[0] : serviceSlugTr(rest[0]))
        : routes.services(to)
    case 'projects':
      return rest.length ? routes.project(to, rest[0]) : routes.projects(to)
    case 'catalogues':
      return rest.length ? routes.catalogue(to, rest[0]) : routes.catalogues(to)
    case 'about':
      return routes.about(to)
    case 'partners':
      return routes.partners(to)
    case 'commerce':
      return routes.commerce(to)
    case 'contact':
      return routes.contact(to)
    case 'quote':
      return routes.quote(to)
    default:
      return routes.home(to)
  }
}

/** Every language's address for one page, for hreflang and the language menu. */
export function allPathsFor(pathname: string, from: Locale): Record<Locale, string> {
  return Object.fromEntries(LOCALES.map((l) => [l, pathFor(pathname, from, l)])) as Record<
    Locale,
    string
  >
}

/* ------------------------------------------------------------ ui strings */

export type Dictionary = ReturnType<typeof t>

export function t(locale: Locale) {
  return lang(locale).ui
}

export function copy(locale: Locale) {
  return lang(locale).pages
}

export function metaFor(locale: Locale) {
  return lang(locale).meta
}

export function patterns(locale: Locale) {
  return lang(locale).patterns
}
