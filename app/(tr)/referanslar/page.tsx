import type { Metadata } from 'next'
import { ProjectsPage } from '@/components/pages/projects-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Referanslar | 46 doğrama ve cephe projesi',
  description:
    'Regnum Sky Tower, Hilton Garden Inn, ODTÜ Araştırma Merkezi, Şişli Belediyesi ve daha fazlası. Yedi şehirde 46 alüminyum doğrama ve cephe projesi.',
  path: '/referanslar',
})

export default function Page() {
  return <ProjectsPage locale="tr" />
}
