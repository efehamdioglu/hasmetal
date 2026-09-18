import type { Metadata } from 'next'
import { CataloguesPage } from '@/components/pages/catalogues-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  title: 'Catalogues | Systems, profiles and hardware',
  description:
    'The Has Metal systems and profile catalogues, plus GU, SIEGENIA, GIESSE, ASSA ABLOY, KALE and KAHE hardware. Read page by page or download the PDF.',
  path: '/en/catalogues',
  altPath: '/kataloglar',
})

export default function Page() {
  return <CataloguesPage locale="en" />
}
