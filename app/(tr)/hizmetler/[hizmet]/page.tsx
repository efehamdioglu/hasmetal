import type { Metadata } from 'next'
import { EntryPage } from '@/components/pages/entry-page'
import { copy, routes } from '@/content/i18n'
import { servicesFor } from '@/content/locale'

import { services } from '@/content/site'
import { clampDescription, pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return services.map((s) => ({ hizmet: s.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/hizmetler/[hizmet]'>): Promise<Metadata> {
  const { hizmet } = await params
  const s = servicesFor('tr').find((x) => x.slug === hizmet)
  if (!s) return {}
  return pageMetadata({
    locale: 'tr',
    title: `${s.title} | Has Metal`,
    description: clampDescription(s.intro),
    path: routes.service('tr', s.slug),
  })
}

export default async function Page({ params }: PageProps<'/hizmetler/[hizmet]'>) {
  const { hizmet } = await params
  return (
    <EntryPage
      locale="tr"
      slug={hizmet}
      entries={servicesFor('tr')}
      collectionTitle={copy('tr').services.title}
      collectionHref={routes.services('tr')}
      hrefFor={(slug) => routes.service('tr', slug)}
    />
  )
}
