import type { Metadata } from 'next'
import { CollectionPage } from '@/components/pages/collection-page'
import { routes } from '@/content/i18n'
import { products } from '@/content/site'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Ürünler | Standart profil, aksesuar ve conta',
  description:
    'Standart alüminyum profiller, Avrupa normlarında kapı-pencere donanımı ve sistem serilerine uygun fitil-conta grupları. İvedik OSB’den stoktan tedarik.',
  path: '/urunler',
  altPath: '/en/products',
})

export default function Page() {
  return (
    <CollectionPage
      locale="tr"
      title="Ürünler"
      lead="Sistem serilerinin yanında, bir doğramayı ayakta tutan her şey: profil, donanım ve sızdırmazlık."
      entries={products}
      hrefFor={(slug) => (slug ? routes.product('tr', slug) : routes.products('tr'))}
    />
  )
}
