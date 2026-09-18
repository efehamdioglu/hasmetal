import generated from './catalogues.json'
import { lang, type Locale } from './lang/index.ts'

type Generated = {
  slug: string
  pages: number
  /** [width, height] of each rendered page */
  size: [number, number][]
  pdf: string | null
}

/**
 * The eight catalogues the old site kept behind a flipbook plugin. Page images
 * come from scripts/catalogues.mjs, the titles and summaries from the language
 * files; only the facts live here.
 *
 * `owner` separates Has Metal's own documents from the dealer brands': our own
 * are offered as a PDF download, the brand catalogues are shown as pages
 * because those files belong to their manufacturers.
 */
export type CatalogueFacts = {
  slug: string
  owner: 'has-metal' | 'brand'
  /** the partner this belongs to, matched on partners[].name */
  brand?: string
  year?: string
  /** the language the document itself is written in */
  language: string
  pages: number
  size: [number, number][]
  pdf: string | null
}

export type Catalogue = CatalogueFacts & { title: string; summary: string }

const FACTS: Omit<CatalogueFacts, 'pages' | 'size' | 'pdf'>[] = [
  { slug: 'has-metal-mimari-sistemler', owner: 'has-metal', year: '2024', language: 'TR' },
  { slug: 'has-metal-standart-profiller', owner: 'has-metal', year: '2024', language: 'TR' },
  { slug: 'gu', owner: 'brand', brand: 'GU-Gretsch Unitas', language: 'TR' },
  { slug: 'siegenia', owner: 'brand', brand: 'SIEGENIA', language: 'EN' },
  { slug: 'giesse', owner: 'brand', brand: 'GIESSE', language: 'EN' },
  { slug: 'assa-abloy', owner: 'brand', brand: 'ASSA ABLOY', year: '2020', language: 'TR' },
  { slug: 'kale', owner: 'brand', brand: 'KALE', language: 'TR' },
  { slug: 'kahe', owner: 'brand', brand: 'KAHE', year: '2022', language: 'TR' },
]

const data = generated as unknown as Record<string, Generated>

export const catalogueFacts: CatalogueFacts[] = FACTS.filter((f) => data[f.slug]).map((f) => ({
  ...f,
  pages: data[f.slug].pages,
  size: data[f.slug].size,
  pdf: data[f.slug].pdf,
}))

export function cataloguesFor(locale: Locale): Catalogue[] {
  const words = lang(locale).content.catalogues
  return catalogueFacts.map((f) => ({
    ...f,
    title: words[f.slug]?.title ?? f.slug,
    summary: words[f.slug]?.summary ?? '',
  }))
}

export function catalogueFor(locale: Locale, slug: string): Catalogue | undefined {
  return cataloguesFor(locale).find((c) => c.slug === slug)
}

/** Matched on partners[].name, so a brand card can open its own catalogue. */
export function catalogueForBrand(locale: Locale, name: string): Catalogue | undefined {
  return cataloguesFor(locale).find((c) => c.brand === name)
}

/** The systems catalogue is what the "technical documentation" block points at. */
export const SYSTEMS_CATALOGUE = 'has-metal-mimari-sistemler'

export const pageImage = (slug: string, page: number) =>
  `/catalogs/${slug}/p${String(page).padStart(3, '0')}.webp`

export const thumbImage = (slug: string, page: number) =>
  `/catalogs/${slug}/t${String(page).padStart(3, '0')}.webp`
