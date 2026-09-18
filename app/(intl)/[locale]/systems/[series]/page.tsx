import type { Metadata } from 'next'
import { EntryPage } from '@/components/pages/entry-page'
import { image } from '@/content'
import { INTL_LOCALES, copy, patterns, routes, type Locale } from '@/content/i18n'
import { systemsFor } from '@/content/locale'
import { systems } from '@/content/site'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.flatMap((locale) => systems.map((s) => ({ locale, series: s.slug })))
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/systems/[series]'>): Promise<Metadata> {
  const { locale, series } = await params
  const l = locale as Locale
  const s = systemsFor(l).find((x) => x.slug === series)
  if (!s) return {}
  return pageMetadata({
    locale: l,
    title: patterns(l).entryTitle(s.title),
    description: s.intro,
    path: routes.system(l, s.slug),
    image: s.image ? image(s.image).src : undefined,
  })
}

export default async function Page({ params }: PageProps<'/[locale]/systems/[series]'>) {
  const { locale, series } = await params
  const l = locale as Locale
  return (
    <EntryPage
      locale={l}
      slug={series}
      entries={systemsFor(l)}
      collectionTitle={copy(l).systems.title}
      collectionHref={routes.systems(l)}
      hrefFor={(slug) => routes.system(l, slug)}
      withDocsRequest
    />
  )
}
