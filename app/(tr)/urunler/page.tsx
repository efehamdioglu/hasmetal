import type { Metadata } from 'next'
import { CollectionPage } from '@/components/pages/collection-page'
import { copy, routes } from '@/content/i18n'
import { productsFor } from '@/content/locale'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Ürünler | Standart profil, aksesuar ve conta',
  description:
    'Standart alüminyum profiller, Avrupa normlarında kapı-pencere donanımı ve sistem serilerine uygun fitil-conta grupları. İvedik OSB’den stoktan tedarik.',
  path: '/urunler',
})

export default function Page() {
  return (
    <CollectionPage
      locale="tr"
      title={copy('tr').products.title}
      lead={copy('tr').products.lead}
      entries={productsFor('tr')}
      hrefFor={(slug) => (slug ? routes.product('tr', slug) : routes.products('tr'))}
    />
  )
}
