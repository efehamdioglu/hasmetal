import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/ui/page-hero'
import { CtaBand } from '@/components/ui/cta-band'
import { Img } from '@/components/ui/img'
import { Reveal } from '@/components/motion/reveal'
import { JsonLd } from '@/components/ui/json-ld'
import { image, project, projects } from '@/content'
import { routes, t, type Locale } from '@/content/i18n'
import { breadcrumbSchema, projectSchema } from '@/lib/schema'
import { pad2 } from '@/lib/utils'

const COPY = {
  tr: {
    projects: 'Referanslar',
    detailsPending:
      'Bu yapıya ait kapsam, teslim yılı ve kullanılan sistem bilgisi arşivden derleniyor. Proje hakkında ayrıntı için bize yazabilirsiniz.',
  },
  en: {
    projects: 'Projects',
    detailsPending:
      'The scope, completion year and systems used on this building are being compiled from the archive. Write to us for details on the project.',
  },
}

export function ProjectPage({ locale, slug }: { locale: Locale; slug: string }) {
  const d = t(locale)
  const copy = COPY[locale]
  const p = project(slug)
  if (!p) notFound()

  const index = projects.findIndex((x) => x.slug === p.slug)
  const others = [...projects.slice(index + 1), ...projects.slice(0, index)].slice(0, 3)

  const facts = [
    p.city ? { label: d.common.city, value: p.city } : null,
    p.year ? { label: d.common.year, value: p.year } : null,
    p.scope ? { label: d.common.scope, value: p.scope } : null,
    p.systems?.length ? { label: d.common.system, value: p.systems.join(', ') } : null,
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: d.common.homeCrumb, path: routes.home(locale) },
            { name: copy.projects, path: routes.projects(locale) },
            { name: p.name, path: routes.project(locale, p.slug) },
          ]),
          projectSchema(p, image(p.cover).src, routes.project(locale, p.slug)),
        ]}
      />

      <PageHero
        crumbs={[
          { label: d.common.homeCrumb, href: routes.home(locale) },
          { label: copy.projects, href: routes.projects(locale) },
          { label: p.name },
        ]}
        title={p.name}
        meta={p.city || undefined}
        image={p.cover}
        imageAlt={`${p.name}${p.city ? ', ' + p.city : ''}`}
        imageCaption={p.city || undefined}
      />

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-16">
          <Reveal>
            <dl className="rule-t">
              {facts.map((f) => (
                <div key={f.label} className="border-b border-[var(--rule)] py-4">
                  <dt className="label">{f.label}</dt>
                  <dd className="mt-2 text-base text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal i={1}>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-2 lg:text-xl">
              {p.description ?? copy.detailsPending}
            </p>
          </Reveal>
        </div>
      </section>

      {p.gallery && p.gallery.length > 0 && (
        <section className="shell pb-20 lg:pb-28">
          <div className="grid gap-3 sm:grid-cols-2">
            {p.gallery.map((key, i) => (
              <Reveal key={key} i={i % 2}>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-2">
                  <Img src={key} alt={p.name} sizes="(min-width: 640px) 45vw, 90vw" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="shell rule-t py-16 lg:py-20">
        <Reveal>
          <p className="label">{d.sections.relatedProjects}</p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((o, i) => (
            <Reveal key={o.slug} i={i}>
              <Link href={routes.project(locale, o.slug)} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-2">
                  <Img
                    src={o.cover}
                    alt={o.name}
                    sizes="(min-width: 640px) 30vw, 90vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <p className="label mt-3">
                  {pad2(projects.findIndex((x) => x.slug === o.slug) + 1)}
                  {o.city ? ` · ${o.city}` : ''}
                </p>
                <h3 className="display mt-1 text-lg text-ink transition-colors group-hover:text-carmine">
                  {o.name}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
