import type { Metadata } from 'next'
import { CataloguePage } from '@/components/pages/catalogue-page'
import { catalogue, catalogues, pageImage } from '@/content/catalogues'
import { routes } from '@/content/i18n'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return catalogues.map((c) => ({ katalog: c.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/kataloglar/[katalog]'>): Promise<Metadata> {
  const { katalog } = await params
  const c = catalogue(katalog)
  if (!c) return {}
  return pageMetadata({
    locale: 'tr',
    title: `${c.title.tr} | ${c.pages} sayfa`,
    description: c.summary.tr,
    path: routes.catalogue('tr', c.slug),
    altPath: routes.catalogue('en', c.slug),
    image: pageImage(c.slug, 1),
  })
}

export default async function Page({ params }: PageProps<'/kataloglar/[katalog]'>) {
  const { katalog } = await params
  return <CataloguePage locale="tr" slug={katalog} />
}
