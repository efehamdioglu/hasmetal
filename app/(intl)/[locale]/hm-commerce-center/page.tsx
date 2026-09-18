import type { Metadata } from 'next'
import { CommercePage } from '@/components/pages/simple-pages'
import { INTL_LOCALES, metaFor, routes, type Locale } from '@/content/i18n'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps<'/[locale]/hm-commerce-center'>): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const meta = metaFor(l).commerce
  return pageMetadata({
    locale: l,
    title: meta.title,
    description: meta.description,
    path: routes.commerce(l),
    image: '/images/hm-commerce-hotel.webp',
  })
}

export default async function Page({ params }: PageProps<'/[locale]/hm-commerce-center'>) {
  const { locale } = await params
  return <CommercePage locale={locale as Locale} />
}
