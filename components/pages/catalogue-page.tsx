import Link from 'next/link'
import { PageHero } from '@/components/ui/page-hero'
import { CtaBand } from '@/components/ui/cta-band'
import { Img } from '@/components/ui/img'
import { Reveal } from '@/components/motion/reveal'
import { JsonLd } from '@/components/ui/json-ld'
import { routes, t, type Locale } from '@/content/i18n'
import { breadcrumbSchema, itemListSchema } from '@/lib/schema'
import { pad2 } from '@/lib/utils'

export type CatalogueEntry = {
  slug: string
  title: string
  summary: string
  code?: string
  image?: string
}

/** One layout for the systems, products and services listings. */
export function CataloguePage({
  locale,
  title,
  lead,
  entries,
  hrefFor,
  withImages = false,
}: {
  locale: Locale
  title: string
  lead: string
  entries: CatalogueEntry[]
  hrefFor: (slug: string) => string
  withImages?: boolean
}) {
  const d = t(locale)

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: d.common.homeCrumb, path: routes.home(locale) },
            { name: title, path: hrefFor('').replace(/\/$/, '') },
          ]),
          itemListSchema(entries.map((e) => ({ name: e.title, path: hrefFor(e.slug) }))),
        ]}
      />

      <PageHero
        crumbs={[{ label: d.common.homeCrumb, href: routes.home(locale) }, { label: title }]}
        title={title}
        lead={lead}
      />

      <section className="shell pb-20 lg:pb-28">
        {withImages ? (
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {entries.map((e, i) => (
              <Reveal key={e.slug} i={i % 4}>
                <Link href={hrefFor(e.slug)} className="group block">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-2">
                    {e.image ? (
                      <Img
                        src={e.image}
                        alt={e.title}
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                        className="object-contain p-6 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    ) : (
                      <span className="display absolute inset-0 flex items-center justify-center text-5xl text-paper-3">
                        {e.code ?? pad2(i + 1)}
                      </span>
                    )}
                  </div>
                  <p className="label mt-4 transition-colors group-hover:text-carmine">
                    {e.code ?? pad2(i + 1)}
                  </p>
                  <h2 className="mt-2 text-base text-ink">{e.summary}</h2>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <ul className="rule-t">
            {entries.map((e, i) => (
              <Reveal key={e.slug} i={i} as="li">
                <Link
                  href={hrefFor(e.slug)}
                  className="group flex flex-wrap items-baseline justify-between gap-x-10 gap-y-2 border-b border-[var(--rule)] py-7"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="label text-ink-3 transition-colors group-hover:text-carmine">
                      {pad2(i + 1)}
                    </span>
                    <span className="display text-2xl text-ink sm:text-3xl">{e.title}</span>
                  </span>
                  <span className="text-sm text-ink-2">{e.summary}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        )}
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
