import type { Metadata, Viewport } from 'next'
import '../globals.css'

import { SiteShell } from '@/components/shell/site-shell'
import { brand } from '@/content/site'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Has Metal | Architectural Aluminium Systems and Facades, Ankara',
    template: `%s | ${brand.name}`,
  },
  description:
    'Architectural aluminium since 1974. Door and window systems, curtain walling, standard profile and hardware supply; based in Ankara, forty six reference projects across seven cities.',
  applicationName: brand.legalName,
  openGraph: { type: 'website', siteName: brand.legalName, locale: 'en_US' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#f7f5f2',
  colorScheme: 'light',
}

export default function EnglishLayout({ children }: LayoutProps<'/'>) {
  return <SiteShell locale="en">{children}</SiteShell>
}
