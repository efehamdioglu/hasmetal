import type { Metadata } from 'next'
import { QuotePage } from '@/components/pages/simple-pages'
import { INTL_LOCALES, metaFor, routes, type Locale } from '@/content/i18n'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps<'/[locale]/quote'>): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const meta = metaFor(l).quote
  return pageMetadata({
    locale: l,
    title: meta.title,
    description: meta.description,
    path: routes.quote(l),
  })
}

export default async function Page({ params }: PageProps<'/[locale]/quote'>) {
  const { locale } = await params
  return <QuotePage locale={locale as Locale} />
}
