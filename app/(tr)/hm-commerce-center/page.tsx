import type { Metadata } from 'next'
import { CommercePage } from '@/components/pages/simple-pages'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'HM Commerce Center | Otel ve iş merkezi',
  description:
    'İvedik OSB’de 15.243 m² arazi üzerinde 50.710 m² inşaat alanına sahip otel ve iş merkezi; Has Metal’in kendi yaptığı yapı.',
  path: '/hm-commerce-center',
  altPath: '/en/hm-commerce-center',
  image: '/images/hm-commerce-hotel.webp',
})

export default function Page() {
  return <CommercePage locale="tr" />
}
