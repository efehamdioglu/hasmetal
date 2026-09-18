import type { Metadata } from 'next'
import { EntryPage } from '@/components/pages/entry-page'
import { copy, routes } from '@/content/i18n'
import { productsFor } from '@/content/locale'

import { products } from '@/content/site'
import { clampDescription, pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return products.map((p) => ({ urun: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/urunler/[urun]'>): Promise<Metadata> {
  const { urun } = await params
  const p = productsFor('tr').find((x) => x.slug === urun)
  if (!p) return {}
  return pageMetadata({
    locale: 'tr',
    title: `${p.title} | Has Metal`,
    description: clampDescription(p.intro),
    path: routes.product('tr', p.slug),
  })
}

export default async function Page({ params }: PageProps<'/urunler/[urun]'>) {
  const { urun } = await params
  return (
    <EntryPage
      locale="tr"
      slug={urun}
      entries={productsFor('tr')}
      collectionTitle={copy('tr').products.title}
      collectionHref={routes.products('tr')}
      hrefFor={(slug) => routes.product('tr', slug)}
    />
  )
}
