import type { Metadata } from 'next'
import { ProjectsPage } from '@/components/pages/projects-page'
import { INTL_LOCALES, metaFor, routes, type Locale } from '@/content/i18n'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/projects'>): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const meta = metaFor(l).projects
  return pageMetadata({
    locale: l,
    title: meta.title,
    description: meta.description,
    path: routes.projects(l),
  })
}

export default async function Page({ params }: PageProps<'/[locale]/projects'>) {
  const { locale } = await params
  return <ProjectsPage locale={locale as Locale} />
}
