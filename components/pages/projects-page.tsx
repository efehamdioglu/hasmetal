import { ProjectIndex } from '@/components/scenes/project-index'
import { PageHero } from '@/components/ui/page-hero'
import { CtaBand } from '@/components/ui/cta-band'
import { JsonLd } from '@/components/ui/json-ld'
import { cities, projects } from '@/content'
import { routes, t, type Locale } from '@/content/i18n'
import { breadcrumbSchema, itemListSchema } from '@/lib/schema'

const COPY = {
  tr: {
    title: 'Referanslar',
    lead: 'Konuttan otele, üniversite araştırma merkezinden belediye hizmet binasına. Yedi şehirde, kırk altı yapıda alüminyum doğrama ve cephe işi.',
  },
  en: {
    title: 'Projects',
    lead: 'From housing to hotels, from a university research centre to a municipal headquarters. Aluminium framing and facade work on forty-six buildings across seven cities.',
  },
}

export function ProjectsPage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = COPY[locale]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: d.common.homeCrumb, path: routes.home(locale) },
            { name: copy.title, path: routes.projects(locale) },
          ]),
          itemListSchema(
            projects.map((p) => ({ name: p.name, path: routes.project(locale, p.slug) })),
          ),
        ]}
      />

      <PageHero
        crumbs={[{ label: d.common.homeCrumb, href: routes.home(locale) }, { label: copy.title }]}
        title={copy.title}
        meta={d.common.projectCount(projects.length)}
        lead={copy.lead}
      />

      <section className="shell pb-20 lg:pb-28">
        <ProjectIndex locale={locale} projects={projects} cities={cities} withFilter />
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
