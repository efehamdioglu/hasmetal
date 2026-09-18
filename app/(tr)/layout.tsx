import type { Metadata, Viewport } from 'next'
import '../globals.css'

import { SiteShell } from '@/components/shell/site-shell'
import { metaFor } from '@/content/i18n'
import { brand } from '@/content/site'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: metaFor('tr').home.title, template: `%s | ${brand.name}` },
  description: metaFor('tr').home.description,
  applicationName: brand.legalName,
  openGraph: { type: 'website', siteName: brand.legalName, locale: 'tr_TR' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#f7f5f2',
  colorScheme: 'light',
}

export default function TurkishLayout({ children }: LayoutProps<'/'>) {
  return <SiteShell locale="tr">{children}</SiteShell>
}
