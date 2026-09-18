import type { Metadata } from 'next'
import { CollectionPage } from '@/components/pages/collection-page'
import { routes } from '@/content/i18n'
import { systems } from '@/content/site'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Mimari Sistem Serileri | HM 55, HM 55 T, C50, C60',
  description:
    'Has Metal’in kendi ürettiği mimari alüminyum sistemleri: HM 55 ve HM 55 T kapı-pencere serileri, C50 giydirme cephe ve C60 kapı-pencere sistemi.',
  path: '/sistemler',
  altPath: '/en/systems',
})

export default function Page() {
  return (
    <CollectionPage
      locale="tr"
      title="Mimari Sistem Serileri"
      lead="Kendi ürettiğimiz kapı, pencere ve cephe serileri. Yalıtımlı ve yalıtımsız kurgular, giydirme cephe ızgarası ve geniş açıklıklar için tanımlanmış kesitler."
      entries={systems}
      hrefFor={(slug) => (slug ? routes.system('tr', slug) : routes.systems('tr'))}
      withImages
    />
  )
}
