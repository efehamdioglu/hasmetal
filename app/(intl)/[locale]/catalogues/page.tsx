import type { Metadata } from 'next'
import { CataloguesPage } from '@/components/pages/catalogues-page'
import { INTL_LOCALES, metaFor, routes, type Locale } from '@/content/i18n'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/catalogues'>): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const meta = metaFor(l).catalogues
  return pageMetadata({
    locale: l,
    title: meta.title,
    description: meta.description,
    path: routes.catalogues(l),
  })
}

export default async function Page({ params }: PageProps<'/[locale]/catalogues'>) {
  const { locale } = await params
  return <CataloguesPage locale={locale as Locale} />
}
