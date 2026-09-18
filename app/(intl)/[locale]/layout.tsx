import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import '../../globals.css'

import { SiteShell } from '@/components/shell/site-shell'
import { INTL_LOCALES, isLocale, metaFor, ogLocale, type Locale } from '@/content/i18n'
import { brand } from '@/content/site'
import { SITE_URL } from '@/lib/seo'

/**
 * One root layout for the seven languages that are not Turkish. They share a
 * set of path segments, so they can share a route tree; Turkish keeps its own
 * at the site root because every legacy URL points there.
 */
export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === 'tr') return {}
  const meta = metaFor(locale).home

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.title, template: `%s | ${brand.name}` },
    description: meta.description,
    applicationName: brand.legalName,
    openGraph: { type: 'website', siteName: brand.legalName, locale: ogLocale[locale] },
    robots: { index: true, follow: true },
  }
}

export const viewport: Viewport = {
  themeColor: '#f7f5f2',
  colorScheme: 'light',
}

export default async function IntlLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params
  if (!isLocale(locale) || locale === 'tr') notFound()

  return <SiteShell locale={locale as Locale}>{children}</SiteShell>
}
