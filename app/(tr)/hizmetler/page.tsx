import type { Metadata } from 'next'
import { CollectionPage } from '@/components/pages/collection-page'
import { routes } from '@/content/i18n'
import { services } from '@/content/site'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Hizmetler | Yüzey işlem ve inşaat taahhüt',
  description:
    'Elektrostatik toz boyama ve ahşap kaplama ile alüminyum yüzey işlemi; 2013’ten bu yana inşaat ve taahhüt işleri.',
  path: '/hizmetler',
  altPath: '/en/services',
})

export default function Page() {
  return (
    <CollectionPage
      locale="tr"
      title="Hizmetler"
      lead="Profili üretmekle bitmiyor: yüzeyini işliyoruz, gerektiğinde yapıyı da biz kuruyoruz."
      entries={services}
      hrefFor={(slug) => (slug ? routes.service('tr', slug) : routes.services('tr'))}
    />
  )
}
