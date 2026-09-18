import type { Metadata } from 'next'
import { EntryPage } from '@/components/pages/entry-page'
import { image } from '@/content'
import { routes } from '@/content/i18n'
import { systemsFor } from '@/content/locale'
import { clampDescription, pageMetadata } from '@/lib/seo'

const systems = systemsFor('en')

export function generateStaticParams() {
  return systems.map((s) => ({ series: s.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/en/systems/[series]'>): Promise<Metadata> {
  const { series } = await params
  const s = systems.find((x) => x.slug === series)
  if (!s) return {}
  return pageMetadata({
    locale: 'en',
    title: `${s.title} | Has Metal`,
    description: clampDescription(s.intro),
    path: routes.system('en', s.slug),
    altPath: routes.system('tr', s.slug),
    image: s.image ? image(s.image).src : undefined,
  })
}

export default async function Page({ params }: PageProps<'/en/systems/[series]'>) {
  const { series } = await params
  return (
    <EntryPage
      locale="en"
      slug={series}
      entries={systems}
      collectionTitle="Architectural System Series"
      collectionHref={routes.systems('en')}
      hrefFor={(slug) => routes.system('en', slug)}
      withDocsRequest
    />
  )
}
