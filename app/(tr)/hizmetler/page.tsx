import type { Metadata } from 'next'
import { CollectionPage } from '@/components/pages/collection-page'
import { copy, routes } from '@/content/i18n'
import { servicesFor } from '@/content/locale'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Hizmetler | Yüzey işlem ve inşaat taahhüt',
  description:
    'Elektrostatik toz boyama ve ahşap kaplama ile alüminyum yüzey işlemi; 2013’ten bu yana inşaat ve taahhüt işleri.',
  path: '/hizmetler',
})

export default function Page() {
  return (
    <CollectionPage
      locale="tr"
      title={copy('tr').services.title}
      lead={copy('tr').services.lead}
      entries={servicesFor('tr')}
      hrefFor={(slug) => (slug ? routes.service('tr', slug) : routes.services('tr'))}
    />
  )
}
