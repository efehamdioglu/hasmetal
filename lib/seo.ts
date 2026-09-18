import type { Metadata } from 'next'
import { LOCALES, ogLocale, pathFor, type Locale } from '@/content/i18n'
import { brand } from '@/content/site'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hasmetal.com.tr'

export const abs = (p: string) => new URL(p, SITE_URL).toString()

/**
 * Every page has to carry a share image. Without one a link posted to
 * WhatsApp or LinkedIn renders as a bare grey card, which is exactly how the
 * old site looked when anyone shared it.
 */
export const DEFAULT_OG = '/images/hm-commerce-hotel.webp'

/**
 * Google cuts a description off around 155 to 160 characters. Slicing at a
 * fixed count leaves the sentence broken mid-word, so this backs up to the
 * last sentence end, or failing that the last word.
 */
export function clampDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean

  const window = clean.slice(0, max + 1)
  const sentence = Math.max(window.lastIndexOf('. '), window.lastIndexOf('; '))
  if (sentence > max * 0.6) return window.slice(0, sentence + 1).trim()

  const word = window.lastIndexOf(' ')
  return window.slice(0, word > 0 ? word : max).trim() + '…'
}

type Args = {
  locale: Locale
  title: string
  description: string
  /** path for this locale */
  path: string
  image?: string
  type?: 'website' | 'article'
}

export function pageMetadata({
  locale,
  title,
  description,
  path,
  image,
  type = 'website',
}: Args): Metadata {
  const url = abs(path)

  // the layout template appends the brand, so a title that already carries it
  // has to opt out or the name lands in the tab twice
  const titleTag = title.includes(brand.name) ? { absolute: title } : title
  const share = abs(image ?? DEFAULT_OG)

  // every language gets an alternate; Turkish is x-default because that is
  // the audience the company actually serves first
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, abs(pathFor(path, locale, l))]),
  ) as Record<string, string>

  return {
    title: titleTag,
    description: clampDescription(description),
    alternates: {
      canonical: url,
      languages: { ...languages, 'x-default': abs(pathFor(path, locale, 'tr')) },
    },
    openGraph: {
      title,
      description: clampDescription(description),
      url,
      type,
      siteName: brand.legalName,
      locale: ogLocale[locale],
      images: [{ url: share }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: clampDescription(description),
      images: [share],
    },
  }
}
