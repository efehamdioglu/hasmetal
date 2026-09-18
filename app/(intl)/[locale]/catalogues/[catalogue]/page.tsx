import type { Metadata } from 'next'
import { CataloguePage } from '@/components/pages/catalogue-page'
import { catalogueFacts, catalogueFor, pageImage } from '@/content/catalogues'
import { INTL_LOCALES, patterns, routes, type Locale } from '@/content/i18n'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.flatMap((locale) =>
    catalogueFacts.map((c) => ({ locale, catalogue: c.slug })),
  )
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/catalogues/[catalogue]'>): Promise<Metadata> {
  const { locale, catalogue: slug } = await params
  const l = locale as Locale
  const c = catalogueFor(l, slug)
  if (!c) return {}
  return pageMetadata({
    locale: l,
    title: patterns(l).catalogueTitle(c.title, c.pages),
    description: c.summary,
    path: routes.catalogue(l, c.slug),
    image: pageImage(c.slug, 1),
  })
}

export default async function Page({ params }: PageProps<'/[locale]/catalogues/[catalogue]'>) {
  const { locale, catalogue: slug } = await params
  return <CataloguePage locale={locale as Locale} slug={slug} />
}
