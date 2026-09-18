import type { Metadata } from 'next'
import { EntryPage } from '@/components/pages/entry-page'
import { PRODUCT_SLUGS, productSlugTr, routes } from '@/content/i18n'
import { productsFor } from '@/content/locale'
import { pageMetadata } from '@/lib/seo'

const products = productsFor('en')

export function generateStaticParams() {
  return products.map((p) => ({ product: PRODUCT_SLUGS[p.slug] ?? p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/en/products/[product]'>): Promise<Metadata> {
  const { product } = await params
  const p = products.find((x) => x.slug === productSlugTr(product))
  if (!p) return {}
  return pageMetadata({
    locale: 'en',
    title: `${p.title} | Has Metal`,
    description: p.intro.slice(0, 180),
    path: routes.product('en', p.slug),
    altPath: routes.product('tr', p.slug),
  })
}

export default async function Page({ params }: PageProps<'/en/products/[product]'>) {
  const { product } = await params
  return (
    <EntryPage
      locale="en"
      slug={productSlugTr(product)}
      entries={products}
      collectionTitle="Products"
      collectionHref={routes.products('en')}
      hrefFor={(slug) => routes.product('en', slug)}
    />
  )
}
