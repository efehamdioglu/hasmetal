import type { Metadata } from 'next'
import { CataloguePage } from '@/components/pages/catalogue-page'
import { routes } from '@/content/i18n'
import { servicesFor } from '@/content/locale'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  title: 'Services | Surface finishing and contracting',
  description:
    'Aluminium surface finishing by electrostatic powder coating and wood effect coating; construction and contracting work since 2013.',
  path: '/en/services',
  altPath: '/hizmetler',
})

export default function Page() {
  return (
    <CataloguePage
      locale="en"
      title="Services"
      lead="Making the profile is not the end of it: we finish the surface, and where it is called for we put the building up as well."
      entries={servicesFor('en')}
      hrefFor={(slug) => (slug ? routes.service('en', slug) : routes.services('en'))}
    />
  )
}
