import type { Metadata } from 'next'
import { EntryPage } from '@/components/pages/entry-page'
import {
  INTL_LOCALES,
  PRODUCT_SLUGS,
  copy,
  patterns,
  productSlugTr,
  routes,
  type Locale,
} from '@/content/i18n'
import { productsFor } from '@/content/locale'
import { products } from '@/content/site'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.flatMap((locale) =>
    products.map((p) => ({ locale, product: PRODUCT_SLUGS[p.slug] ?? p.slug })),
  )
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/products/[product]'>): Promise<Metadata> {
  const { locale, product } = await params
  const l = locale as Locale
  const p = productsFor(l).find((x) => x.slug === productSlugTr(product))
  if (!p) return {}
  return pageMetadata({
    locale: l,
    title: patterns(l).entryTitle(p.title),
    description: p.intro,
    path: routes.product(l, p.slug),
  })
}

export default async function Page({ params }: PageProps<'/[locale]/products/[product]'>) {
  const { locale, product } = await params
  const l = locale as Locale
  return (
    <EntryPage
      locale={l}
      slug={productSlugTr(product)}
      entries={productsFor(l)}
      collectionTitle={copy(l).products.title}
      collectionHref={routes.products(l)}
      hrefFor={(slug) => routes.product(l, slug)}
    />
  )
}
