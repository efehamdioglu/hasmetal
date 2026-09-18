import type { Metadata } from 'next'
import { AboutPage } from '@/components/pages/simple-pages'
import { INTL_LOCALES, metaFor, routes, type Locale } from '@/content/i18n'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps<'/[locale]/about'>): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const meta = metaFor(l).about
  return pageMetadata({
    locale: l,
    title: meta.title,
    description: meta.description,
    path: routes.about(l),
  })
}

export default async function Page({ params }: PageProps<'/[locale]/about'>) {
  const { locale } = await params
  return <AboutPage locale={locale as Locale} />
}
