import type { Metadata } from 'next'
import { EntryPage } from '@/components/pages/entry-page'
import { image } from '@/content'
import { copy, routes } from '@/content/i18n'
import { systemsFor } from '@/content/locale'
import { systems } from '@/content/site'
import { clampDescription, pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return systems.map((s) => ({ seri: s.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/sistemler/[seri]'>): Promise<Metadata> {
  const { seri } = await params
  const s = systemsFor('tr').find((x) => x.slug === seri)
  if (!s) return {}
  return pageMetadata({
    locale: 'tr',
    title: `${s.title} | Has Metal`,
    description: clampDescription(s.intro),
    path: routes.system('tr', s.slug),
    image: s.image ? image(s.image).src : undefined,
  })
}

export default async function Page({ params }: PageProps<'/sistemler/[seri]'>) {
  const { seri } = await params
  return (
    <EntryPage
      locale="tr"
      slug={seri}
      entries={systemsFor('tr')}
      collectionTitle={copy('tr').systems.title}
      collectionHref={routes.systems('tr')}
      hrefFor={(slug) => routes.system('tr', slug)}
      withDocsRequest
    />
  )
}
