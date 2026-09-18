import type { Metadata } from 'next'
import { CollectionPage } from '@/components/pages/collection-page'
import { INTL_LOCALES, copy, metaFor, routes, type Locale } from '@/content/i18n'
import { systemsFor } from '@/content/locale'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/systems'>): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const meta = metaFor(l).systems
  return pageMetadata({
    locale: l,
    title: meta.title,
    description: meta.description,
    path: routes.systems(l),
  })
}

export default async function Page({ params }: PageProps<'/[locale]/systems'>) {
  const { locale } = await params
  const l = locale as Locale
  const c = copy(l).systems
  return (
    <CollectionPage
      locale={l}
      title={c.title}
      lead={c.lead}
      entries={systemsFor(l)}
      hrefFor={(slug) => (slug ? routes.system(l, slug) : routes.systems(l))}
      withImages
    />
  )
}
