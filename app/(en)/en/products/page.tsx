import type { Metadata } from 'next'
import { CataloguePage } from '@/components/pages/catalogue-page'
import { routes } from '@/content/i18n'
import { productsFor } from '@/content/locale'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  title: 'Products | Standard profiles, hardware and seals',
  description:
    'Standard aluminium profiles, door and window hardware built to European standards, and seal groups matched to the system series; supplied from the logistics unit in İvedik OSB, Ankara.',
  path: '/en/products',
  altPath: '/urunler',
})

export default function Page() {
  return (
    <CataloguePage
      locale="en"
      title="Products"
      lead="Alongside the system series, everything that holds a frame together: profile, hardware and the seal."
      entries={productsFor('en')}
      hrefFor={(slug) => (slug ? routes.product('en', slug) : routes.products('en'))}
    />
  )
}
