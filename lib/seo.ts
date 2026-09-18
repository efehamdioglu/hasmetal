import type { Metadata } from 'next'
import { ogLocale, type Locale } from '@/content/i18n'
import { brand } from '@/content/site'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hasmetal.com.tr'

export const abs = (p: string) => new URL(p, SITE_URL).toString()

/**
 * Every page has to carry a share image. Without one a link posted to
 * WhatsApp or LinkedIn renders as a bare grey card, which is exactly how the
 * old site looked when anyone shared it.
 */
export const DEFAULT_OG = '/images/hm-commerce-hotel.webp'

type Args = {
  locale: Locale
  title: string
  description: string
  /** path for this locale */
  path: string
  /** the same page in the other locale, for hreflang */
  altPath: string
  image?: string
  type?: 'website' | 'article'
}

export function pageMetadata({
  locale,
  title,
  description,
  path,
  altPath,
  image,
  type = 'website',
}: Args): Metadata {
  const url = abs(path)
  const trPath = locale === 'tr' ? path : altPath
  const enPath = locale === 'en' ? path : altPath

  // the layout template appends the brand, so a title that already carries it
  // has to opt out or the name lands in the tab twice
  const titleTag = title.includes(brand.name) ? { absolute: title } : title
  const share = abs(image ?? DEFAULT_OG)

  return {
    title: titleTag,
    description,
    alternates: {
      canonical: url,
      languages: { tr: abs(trPath), en: abs(enPath), 'x-default': abs(trPath) },
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: brand.legalName,
      locale: ogLocale[locale],
      images: [{ url: share }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [share],
    },
  }
}
