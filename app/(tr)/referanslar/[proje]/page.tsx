import type { Metadata } from 'next'
import { ProjectPage } from '@/components/pages/project-page'
import { image, project, projects } from '@/content'
import { routes } from '@/content/i18n'
import { clampDescription, pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return projects.map((p) => ({ proje: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/referanslar/[proje]'>): Promise<Metadata> {
  const { proje } = await params
  const p = project(proje)
  if (!p) return {}
  const where = p.city ? `${p.city}’da` : 'Türkiye’de'
  return pageMetadata({
    locale: 'tr',
    title: `${p.name} | Has Metal referans projesi`,
    description: clampDescription(`${p.name}, ${where} Has Metal alüminyum doğrama ve cephe sistemlerinin uygulandığı referans projelerden biri.`),
    path: routes.project('tr', p.slug),
    altPath: routes.project('en', p.slug),
    image: image(p.cover).src,
  })
}

export default async function Page({ params }: PageProps<'/referanslar/[proje]'>) {
  const { proje } = await params
  return <ProjectPage locale="tr" slug={proje} />
}
