import type { Metadata } from 'next'
import { EntryPage } from '@/components/pages/entry-page'
import { routes } from '@/content/i18n'
import { products } from '@/content/site'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return products.map((p) => ({ urun: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/urunler/[urun]'>): Promise<Metadata> {
  const { urun } = await params
  const p = products.find((x) => x.slug === urun)
  if (!p) return {}
  return pageMetadata({
    locale: 'tr',
    title: `${p.title} | Has Metal`,
    description: p.intro.slice(0, 180),
    path: routes.product('tr', p.slug),
    altPath: routes.product('en', p.slug),
  })
}

export default async function Page({ params }: PageProps<'/urunler/[urun]'>) {
  const { urun } = await params
  return (
    <EntryPage
      locale="tr"
      slug={urun}
      entries={products}
      collectionTitle="Ürünler"
      collectionHref={routes.products('tr')}
      hrefFor={(slug) => routes.product('tr', slug)}
    />
  )
}
