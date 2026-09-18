import type { Metadata } from 'next'
import { EntryPage } from '@/components/pages/entry-page'
import { image } from '@/content'
import { routes } from '@/content/i18n'
import { systems } from '@/content/site'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return systems.map((s) => ({ seri: s.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/sistemler/[seri]'>): Promise<Metadata> {
  const { seri } = await params
  const s = systems.find((x) => x.slug === seri)
  if (!s) return {}
  return pageMetadata({
    locale: 'tr',
    title: `${s.title} | Has Metal`,
    description: s.intro.slice(0, 180),
    path: routes.system('tr', s.slug),
    altPath: routes.system('en', s.slug),
    image: s.image ? image(s.image).src : undefined,
  })
}

export default async function Page({ params }: PageProps<'/sistemler/[seri]'>) {
  const { seri } = await params
  return (
    <EntryPage
      locale="tr"
      slug={seri}
      entries={systems}
      collectionTitle="Mimari Sistem Serileri"
      collectionHref={routes.systems('tr')}
      hrefFor={(slug) => routes.system('tr', slug)}
      withDocsRequest
    />
  )
}
