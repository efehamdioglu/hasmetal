import type { Metadata } from 'next'
import { PartnersPage } from '@/components/pages/simple-pages'
import { INTL_LOCALES, metaFor, routes, type Locale } from '@/content/i18n'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps<'/[locale]/partners'>): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const meta = metaFor(l).partners
  return pageMetadata({
    locale: l,
    title: meta.title,
    description: meta.description,
    path: routes.partners(l),
  })
}

export default async function Page({ params }: PageProps<'/[locale]/partners'>) {
  const { locale } = await params
  return <PartnersPage locale={locale as Locale} />
}
