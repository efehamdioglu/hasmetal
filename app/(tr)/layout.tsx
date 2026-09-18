import type { Metadata, Viewport } from 'next'
import '../globals.css'

import { SiteShell } from '@/components/shell/site-shell'
import { brand } from '@/content/site'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Has Metal | Mimari Alüminyum Sistemler ve Cephe, Ankara',
    template: `%s | ${brand.name}`,
  },
  description:
    '1974’ten bu yana mimari alüminyum. Kapı ve pencere sistemleri, giydirme cephe, standart profil ve donanım tedariği; Ankara merkezli, yedi şehirde kırk altı referans proje.',
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
