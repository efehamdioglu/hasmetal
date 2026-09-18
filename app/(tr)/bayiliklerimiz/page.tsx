import type { Metadata } from 'next'
import { PartnersPage } from '@/components/pages/simple-pages'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Bayiliklerimiz | GU, SIEGENIA, GIESSE, DORMA, KALE',
  description:
    'Has Metal; GU-Gretsch Unitas, SIEGENIA, GIESSE, DORMA ve KALE markalarının kapı-pencere donanımı ve mekanizma bayiliğini yürütür.',
  path: '/bayiliklerimiz',
  altPath: '/en/partners',
})

export default function Page() {
  return <PartnersPage locale="tr" />
}
