import type { Metadata } from 'next'
import { QuotePage } from '@/components/pages/simple-pages'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  title: 'Request a quote | Has Metal',
  description:
    'Ask for a quote on architectural aluminium systems, profiles and hardware. With the dimensions, system and schedule settled we prepare a firm proposal.',
  path: '/en/quote',
  altPath: '/teklif',
})

export default function Page() {
  return <QuotePage locale="en" />
}
