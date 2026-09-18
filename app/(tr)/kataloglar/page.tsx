import type { Metadata } from 'next'
import { CataloguesPage } from '@/components/pages/catalogues-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Kataloglar | Mimari sistemler, profil ve donanım',
  description:
    'Has Metal mimari sistemler ve standart profil katalogları ile GU, SIEGENIA, GIESSE, ASSA ABLOY, KALE ve KAHE donanım katalogları. Sayfa sayfa okuyun, PDF indirin.',
  path: '/kataloglar',
})

export default function Page() {
  return <CataloguesPage locale="tr" />
}
