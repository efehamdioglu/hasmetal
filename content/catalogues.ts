import generated from './catalogues.json'
import type { Locale } from './i18n'

type Generated = {
  slug: string
  pages: number
  /** [width, height] of each rendered page */
  size: [number, number][]
  pdf: string | null
}

/**
 * The eight catalogues the old site kept behind a flipbook plugin. Page images
 * are produced by scripts/catalogues.mjs; everything descriptive is written
 * here, in both languages.
 *
 * `owner` separates Has Metal's own documents from the dealer brands': only
 * our own are offered as a PDF download, the brand catalogues are shown as
 * pages because the files belong to their manufacturers.
 */
export type Catalogue = {
  slug: string
  owner: 'has-metal' | 'brand'
  /** the partner this belongs to, matched on partners[].name */
  brand?: string
  year?: string
  language: string
  title: Record<Locale, string>
  summary: Record<Locale, string>
  pages: number
  size: [number, number][]
  pdf: string | null
}

const META: Omit<Catalogue, 'pages' | 'size' | 'pdf'>[] = [
  {
    slug: 'has-metal-mimari-sistemler',
    owner: 'has-metal',
    year: '2024',
    language: 'TR',
    title: {
      tr: 'Has Metal Mimari Sistemler',
      en: 'Has Metal Architectural Systems',
    },
    summary: {
      tr: 'HM 55, HM 55 T, C50 ve C60 serilerinin kesit ölçüleri, teknik çizimleri ve aksesuar listeleri.',
      en: 'Section dimensions, technical drawings and hardware schedules for the HM 55, HM 55 T, C50 and C60 series.',
    },
  },
  {
    slug: 'has-metal-standart-profiller',
    owner: 'has-metal',
    year: '2024',
    language: 'TR',
    title: {
      tr: 'Has Metal Standart Profiller',
      en: 'Has Metal Standard Profiles',
    },
    summary: {
      tr: 'Stoktan tedarik edilen standart alüminyum profillerin kesitleri ve ölçüleri.',
      en: 'Sections and dimensions of the standard aluminium profiles supplied from stock.',
    },
  },
  {
    slug: 'gu',
    owner: 'brand',
    brand: 'GU-Gretsch Unitas',
    language: 'TR',
    title: { tr: 'GU-Gretsch Unitas Kataloğu', en: 'GU-Gretsch Unitas Catalogue' },
    summary: {
      tr: 'Pencere ve kapı donanımı, ispanyolet ve menteşe grupları.',
      en: 'Window and door hardware, espagnolette and hinge groups.',
    },
  },
  {
    slug: 'siegenia',
    owner: 'brand',
    brand: 'SIEGENIA',
    language: 'EN',
    title: { tr: 'SIEGENIA Kataloğu', en: 'SIEGENIA Catalogue' },
    summary: {
      tr: 'Mimari donanım sistemleri; çevirmeli, sürme ve havalandırma çözümleri.',
      en: 'Architectural hardware systems; turn and tilt, sliding and ventilation solutions.',
    },
  },
  {
    slug: 'giesse',
    owner: 'brand',
    brand: 'GIESSE',
    language: 'EN',
    title: { tr: 'GIESSE Kataloğu', en: 'GIESSE Catalogue' },
    summary: {
      tr: 'Alüminyum doğrama için kapı ve pencere aksesuarları.',
      en: 'Door and window accessories for aluminium framing.',
    },
  },
  {
    slug: 'assa-abloy',
    owner: 'brand',
    brand: 'ASSA ABLOY',
    year: '2020',
    language: 'TR',
    title: { tr: 'ASSA ABLOY Ürün Kataloğu', en: 'ASSA ABLOY Product Catalogue' },
    summary: {
      tr: 'Giriş ve erişim çözümleri, kapı kapatıcılar ve kilit grupları.',
      en: 'Entrance and access solutions, door closers and locking groups.',
    },
  },
  {
    slug: 'kale',
    owner: 'brand',
    brand: 'KALE',
    language: 'TR',
    title: { tr: 'Kale Teknik Katalog', en: 'Kale Technical Catalogue' },
    summary: {
      tr: 'Kilit, silindir ve güvenlik donanımı teknik dokümanı.',
      en: 'Technical document for locks, cylinders and security hardware.',
    },
  },
  {
    slug: 'kahe',
    owner: 'brand',
    brand: 'KAHE',
    year: '2022',
    language: 'TR',
    title: { tr: 'KAHE Kataloğu', en: 'KAHE Catalogue' },
    summary: {
      tr: 'Alüminyum doğrama aksesuarları ve mekanizma grupları.',
      en: 'Aluminium framing accessories and mechanism groups.',
    },
  },
]

const data = generated as unknown as Record<string, Generated>

export const catalogues: Catalogue[] = META.filter((m) => data[m.slug]).map((m) => ({
  ...m,
  pages: data[m.slug].pages,
  size: data[m.slug].size,
  pdf: data[m.slug].pdf,
}))

export function catalogue(slug: string): Catalogue | undefined {
  return catalogues.find((c) => c.slug === slug)
}

/** The systems catalogue is what the "request technical documentation" block points at. */
export const SYSTEMS_CATALOGUE = 'has-metal-mimari-sistemler'

export const pageImage = (slug: string, page: number) =>
  `/catalogs/${slug}/p${String(page).padStart(3, '0')}.webp`

export const thumbImage = (slug: string, page: number) =>
  `/catalogs/${slug}/t${String(page).padStart(3, '0')}.webp`
