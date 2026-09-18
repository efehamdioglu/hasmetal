import type { Metadata } from 'next'
import { CataloguePage } from '@/components/pages/catalogue-page'
import { catalogueFacts, catalogueFor, pageImage } from '@/content/catalogues'
import { patterns, routes } from '@/content/i18n'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return catalogueFacts.map((c) => ({ katalog: c.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/kataloglar/[katalog]'>): Promise<Metadata> {
  const { katalog } = await params
  const c = catalogueFor('tr', katalog)
  if (!c) return {}
  return pageMetadata({
    locale: 'tr',
    title: patterns('tr').catalogueTitle(c.title, c.pages),
    description: c.summary,
    path: routes.catalogue('tr', c.slug),
    image: pageImage(c.slug, 1),
  })
}

export default async function Page({ params }: PageProps<'/kataloglar/[katalog]'>) {
  const { katalog } = await params
  return <CataloguePage locale="tr" slug={katalog} />
}
