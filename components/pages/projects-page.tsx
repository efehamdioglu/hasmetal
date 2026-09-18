import { ProjectIndex } from '@/components/scenes/project-index'
import { PageHero } from '@/components/ui/page-hero'
import { CtaBand } from '@/components/ui/cta-band'
import { JsonLd } from '@/components/ui/json-ld'
import { cities, projects } from '@/content'
import { copy, routes, t, type Locale } from '@/content/i18n'
import { breadcrumbSchema, itemListSchema } from '@/lib/schema'

export function ProjectsPage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const c = copy(locale).projects

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: d.common.homeCrumb, path: routes.home(locale) },
            { name: c.title, path: routes.projects(locale) },
          ]),
          itemListSchema(
            projects.map((p) => ({ name: p.name, path: routes.project(locale, p.slug) })),
          ),
        ]}
      />

      <PageHero
        crumbs={[{ label: d.common.homeCrumb, href: routes.home(locale) }, { label: c.title }]}
        title={c.title}
        meta={d.common.projectCount(projects.length)}
        lead={c.lead}
      />

      <section className="shell pb-20 lg:pb-28">
        <ProjectIndex locale={locale} projects={projects} cities={cities} withFilter />
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
