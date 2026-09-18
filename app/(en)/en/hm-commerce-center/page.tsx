import type { Metadata } from 'next'
import { CommercePage } from '@/components/pages/simple-pages'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  title: 'HM Commerce Center | Hotel and business centre',
  description:
    'A hotel and business centre in İvedik OSB with 50,710 m² of construction on a 15,243 m² site; a building Has Metal put up itself.',
  path: '/en/hm-commerce-center',
  altPath: '/hm-commerce-center',
  image: '/images/hm-commerce-hotel.webp',
})

export default function Page() {
  return <CommercePage locale="en" />
}
