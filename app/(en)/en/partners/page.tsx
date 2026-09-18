import type { Metadata } from 'next'
import { PartnersPage } from '@/components/pages/simple-pages'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  title: 'Partners | GU, SIEGENIA, GIESSE, DORMA, KALE',
  description:
    'Has Metal is the dealer for door and window hardware and mechanisms from GU-Gretsch Unitas, SIEGENIA, GIESSE, DORMA and KALE.',
  path: '/en/partners',
  altPath: '/bayiliklerimiz',
})

export default function Page() {
  return <PartnersPage locale="en" />
}
