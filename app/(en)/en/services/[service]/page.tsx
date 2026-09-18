import type { Metadata } from 'next'
import { EntryPage } from '@/components/pages/entry-page'
import { SERVICE_SLUGS, routes, serviceSlugTr } from '@/content/i18n'
import { servicesFor } from '@/content/locale'
import { pageMetadata } from '@/lib/seo'

const services = servicesFor('en')

export function generateStaticParams() {
  return services.map((s) => ({ service: SERVICE_SLUGS[s.slug] ?? s.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/en/services/[service]'>): Promise<Metadata> {
  const { service } = await params
  const s = services.find((x) => x.slug === serviceSlugTr(service))
  if (!s) return {}
  return pageMetadata({
    locale: 'en',
    title: `${s.title} | Has Metal`,
    description: s.intro.slice(0, 180),
    path: routes.service('en', s.slug),
    altPath: routes.service('tr', s.slug),
  })
}

export default async function Page({ params }: PageProps<'/en/services/[service]'>) {
  const { service } = await params
  return (
    <EntryPage
      locale="en"
      slug={serviceSlugTr(service)}
      entries={services}
      collectionTitle="Services"
      collectionHref={routes.services('en')}
      hrefFor={(slug) => routes.service('en', slug)}
    />
  )
}
