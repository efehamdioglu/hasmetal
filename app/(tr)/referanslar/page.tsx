import type { Metadata } from 'next'
import { ProjectsPage } from '@/components/pages/projects-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Referanslar | 46 alüminyum doğrama ve cephe projesi',
  description:
    'Regnum Sky Tower, Hilton Garden Inn, ODTÜ Araştırma Merkezi, Şişli Belediyesi ve daha fazlası. Ankara, İstanbul, Samsun, Bodrum, Adana, İzmir ve Sivas’ta 46 referans proje.',
  path: '/referanslar',
  altPath: '/en/projects',
})

export default function Page() {
  return <ProjectsPage locale="tr" />
}
