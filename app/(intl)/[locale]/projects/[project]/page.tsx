import type { Metadata } from 'next'
import { ProjectPage } from '@/components/pages/project-page'
import { image, project, projects } from '@/content'
import { INTL_LOCALES, patterns, routes, type Locale } from '@/content/i18n'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return INTL_LOCALES.flatMap((locale) => projects.map((p) => ({ locale, project: p.slug })))
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/projects/[project]'>): Promise<Metadata> {
  const { locale, project: slug } = await params
  const l = locale as Locale
  const p = project(slug)
  if (!p) return {}
  const pat = patterns(l)
  const where = p.city ? pat.inCity(p.city) : pat.noCity
  return pageMetadata({
    locale: l,
    title: pat.projectTitle(p.name),
    description: pat.projectDescription(p.name, where),
    path: routes.project(l, p.slug),
    image: image(p.cover).src,
  })
}

export default async function Page({ params }: PageProps<'/[locale]/projects/[project]'>) {
  const { locale, project: slug } = await params
  return <ProjectPage locale={locale as Locale} slug={slug} />
}
