import type { Metadata } from 'next'
import { AboutPage } from '@/components/pages/simple-pages'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  title: 'Company | Has Metal since 1974',
  description:
    'Founded in 1974 by Halis Bekar. Fifty one years from iron fabrication to architectural aluminium, two facilities in Ankara and references in seven cities.',
  path: '/en/about',
  altPath: '/kurumsal',
})

export default function Page() {
  return <AboutPage locale="en" />
}
