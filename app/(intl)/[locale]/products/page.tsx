import type { Metadata } from 'next'
import { CollectionPage } from '@/components/pages/collection-page'
import { INTL_LOCALES, copy, metaFor, routes, type Locale } from '@/content/i18n'
import { productsFor } from '@/content/locale'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/products'>): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const meta = metaFor(l).products
  return pageMetadata({
    locale: l,
    title: meta.title,
    description: meta.description,
    path: routes.products(l),
  })
}

export default async function Page({ params }: PageProps<'/[locale]/products'>) {
  const { locale } = await params
  const l = locale as Locale
  const c = copy(l).products
  return (
    <CollectionPage
      locale={l}
      title={c.title}
      lead={c.lead}
      entries={productsFor(l)}
      hrefFor={(slug) => (slug ? routes.product(l, slug) : routes.products(l))}
    />
  )
}
