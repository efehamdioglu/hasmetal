import type { Metadata } from 'next'
import { HomePage } from '@/components/pages/home-page'
import { INTL_LOCALES, metaFor, routes, type Locale } from '@/content/i18n'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const meta = metaFor(l).home
  return pageMetadata({
    locale: l,
    title: meta.title,
    description: meta.description,
    path: routes.home(l),
    image: '/images/holiday-inn-ankara-3815075007-2x1-1-scaled.webp',
  })
}

export default async function Page({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params
  return <HomePage locale={locale as Locale} />
}
