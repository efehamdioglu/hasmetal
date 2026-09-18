import type { Metadata } from 'next'
import { CollectionPage } from '@/components/pages/collection-page'
import { INTL_LOCALES, copy, metaFor, routes, type Locale } from '@/content/i18n'
import { servicesFor } from '@/content/locale'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/services'>): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const meta = metaFor(l).services
  return pageMetadata({
    locale: l,
    title: meta.title,
    description: meta.description,
    path: routes.services(l),
  })
}

export default async function Page({ params }: PageProps<'/[locale]/services'>) {
  const { locale } = await params
  const l = locale as Locale
  const c = copy(l).services
  return (
    <CollectionPage
      locale={l}
      title={c.title}
      lead={c.lead}
      entries={servicesFor(l)}
      hrefFor={(slug) => (slug ? routes.service(l, slug) : routes.services(l))}
    />
  )
}
