import type { Metadata } from 'next'
import { CataloguePage } from '@/components/pages/catalogue-page'
import { catalogue, catalogues, pageImage } from '@/content/catalogues'
import { routes } from '@/content/i18n'
import { clampDescription, pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return catalogues.map((c) => ({ catalogue: c.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/en/catalogues/[catalogue]'>): Promise<Metadata> {
  const { catalogue: slug } = await params
  const c = catalogue(slug)
  if (!c) return {}
  return pageMetadata({
    locale: 'en',
    title: `${c.title.en} | ${c.pages} pages`,
    description: clampDescription(c.summary.en),
    path: routes.catalogue('en', c.slug),
    altPath: routes.catalogue('tr', c.slug),
    image: pageImage(c.slug, 1),
  })
}

export default async function Page({ params }: PageProps<'/en/catalogues/[catalogue]'>) {
  const { catalogue: slug } = await params
  return <CataloguePage locale="en" slug={slug} />
}
