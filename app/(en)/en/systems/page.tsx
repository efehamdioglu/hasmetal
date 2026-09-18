import type { Metadata } from 'next'
import { CataloguePage } from '@/components/pages/catalogue-page'
import { routes } from '@/content/i18n'
import { systemsFor } from '@/content/locale'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  title: 'Architectural System Series | HM 55, HM 55 T, C50, C60',
  description:
    'The architectural aluminium systems Has Metal manufactures itself: the HM 55 and HM 55 T door and window series, the C50 curtain wall and the C60 door and window system.',
  path: '/en/systems',
  altPath: '/sistemler',
})

export default function Page() {
  return (
    <CataloguePage
      locale="en"
      title="Architectural System Series"
      lead="Door, window and facade series of our own making. Insulated and non insulated builds, a curtain wall grid, and sections defined for wide openings."
      entries={systemsFor('en')}
      hrefFor={(slug) => (slug ? routes.system('en', slug) : routes.systems('en'))}
      withImages
    />
  )
}
