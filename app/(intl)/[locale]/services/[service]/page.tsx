import type { Metadata } from 'next'
import { EntryPage } from '@/components/pages/entry-page'
import {
  INTL_LOCALES,
  SERVICE_SLUGS,
  copy,
  patterns,
  routes,
  serviceSlugTr,
  type Locale,
} from '@/content/i18n'
import { servicesFor } from '@/content/locale'
import { services } from '@/content/site'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.flatMap((locale) =>
    services.map((s) => ({ locale, service: SERVICE_SLUGS[s.slug] ?? s.slug })),
  )
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/services/[service]'>): Promise<Metadata> {
  const { locale, service } = await params
  const l = locale as Locale
  const s = servicesFor(l).find((x) => x.slug === serviceSlugTr(service))
  if (!s) return {}
  return pageMetadata({
    locale: l,
    title: patterns(l).entryTitle(s.title),
    description: s.intro,
    path: routes.service(l, s.slug),
  })
}

export default async function Page({ params }: PageProps<'/[locale]/services/[service]'>) {
  const { locale, service } = await params
  const l = locale as Locale
  return (
    <EntryPage
      locale={l}
      slug={serviceSlugTr(service)}
      entries={servicesFor(l)}
      collectionTitle={copy(l).services.title}
      collectionHref={routes.services(l)}
      hrefFor={(slug) => routes.service(l, slug)}
    />
  )
}
