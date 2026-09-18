import type { Metadata } from 'next'
import { HomePage } from '@/components/pages/home-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  title: 'Has Metal | Architectural Aluminium Systems, Ankara',
  description:
    'Architectural aluminium since 1974. Door and window systems, curtain walling, profile and hardware supply. Ankara based, 46 references in seven cities.',
  path: '/en',
  altPath: '/',
  image: '/images/holiday-inn-ankara-3815075007-2x1-1-scaled.webp',
})

export default function Page() {
  return <HomePage locale="en" />
}
