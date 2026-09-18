import type { Metadata } from 'next'
import { ProjectPage } from '@/components/pages/project-page'
import { image, project, projects } from '@/content'
import { routes } from '@/content/i18n'
import { clampDescription, pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return projects.map((p) => ({ project: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/en/projects/[project]'>): Promise<Metadata> {
  const { project: slug } = await params
  const p = project(slug)
  if (!p) return {}
  const where = p.city ? `in ${p.city}` : 'in Türkiye'
  return pageMetadata({
    locale: 'en',
    title: `${p.name} | Has Metal reference project`,
    description: clampDescription(`${p.name} ${where} is one of the reference projects where Has Metal aluminium framing and facade systems were installed.`),
    path: routes.project('en', p.slug),
    altPath: routes.project('tr', p.slug),
    image: image(p.cover).src,
  })
}

export default async function Page({ params }: PageProps<'/en/projects/[project]'>) {
  const { project: slug } = await params
  return <ProjectPage locale="en" slug={slug} />
}
