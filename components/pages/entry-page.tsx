import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/ui/page-hero'
import { CtaBand } from '@/components/ui/cta-band'
import { Img } from '@/components/ui/img'
import { Reveal } from '@/components/motion/reveal'
import { JsonLd } from '@/components/ui/json-ld'
import { image } from '@/content'
import { routes, t, type Locale } from '@/content/i18n'
import { specsFor } from '@/content/locale'
import { SYSTEMS_CATALOGUE } from '@/content/catalogues'
import { breadcrumbSchema, productSchema } from '@/lib/schema'
import type { CatalogueEntry } from './collection-page'

type Entry = CatalogueEntry & { intro: string }

/** One layout for a single system, product group or service. */
export function EntryPage({
  locale,
  slug,
  entries,
  collectionTitle,
  collectionHref,
  hrefFor,
  /** systems get the "documentation is in the catalogue" block */
  withDocsRequest = false,
}: {
  locale: Locale
  slug: string
  entries: Entry[]
  collectionTitle: string
  collectionHref: string
  hrefFor: (slug: string) => string
  withDocsRequest?: boolean
}) {
  const d = t(locale)
  const entry = entries.find((e) => e.slug === slug)
  if (!entry) notFound()

  const docs = specsFor(locale)
  const others = entries.filter((e) => e.slug !== entry.slug)

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: d.common.homeCrumb, path: routes.home(locale) },
            { name: collectionTitle, path: collectionHref },
            { name: entry.title, path: hrefFor(entry.slug) },
          ]),
          ...(withDocsRequest
            ? [
                productSchema({
                  name: entry.title,
                  description: entry.intro,
                  image: entry.image ? image(entry.image).src : '/brand/has-metal-logo.png',
                  path: hrefFor(entry.slug),
                }),
              ]
            : []),
        ]}
      />

      <PageHero
        crumbs={[
          { label: d.common.homeCrumb, href: routes.home(locale) },
          { label: collectionTitle, href: collectionHref },
          { label: entry.code ?? entry.title },
        ]}
        title={entry.title}
        meta={entry.summary}
      />

      <section className="shell pb-16 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal>
            <p className="display max-w-xl text-xl leading-[1.35] text-ink sm:text-2xl">
              {entry.intro}
            </p>

            {withDocsRequest && (
              <div className="rule-t mt-12 pt-8">
                <p className="label">{docs.title}</p>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink-2">{docs.body}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <Link
                    href={routes.catalogue(locale, SYSTEMS_CATALOGUE)}
                    className="group inline-flex items-center gap-3 border border-ink px-7 py-3.5 transition-colors hover:bg-ink hover:text-paper"
                  >
                    <span className="label text-inherit">{docs.cta}</span>
                    <span className="text-carmine transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <Link href={routes.contact(locale)} className="label transition-colors hover:text-ink">
                    {docs.ask}
                  </Link>
                </div>
              </div>
            )}
          </Reveal>

          {entry.image && (
            <Reveal i={1}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-2">
                <Img
                  src={entry.image}
                  alt={entry.title}
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-contain p-8"
                  priority
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="shell rule-t py-16 lg:py-20">
        <Reveal>
          <p className="label">{collectionTitle}</p>
        </Reveal>
        <ul className="rule-t mt-8">
          {others.map((o, i) => (
            <Reveal key={o.slug} i={i} as="li">
              <Link
                href={hrefFor(o.slug)}
                className="group flex flex-wrap items-baseline justify-between gap-x-10 gap-y-1 border-b border-[var(--rule)] py-5"
              >
                <span className="display text-xl text-ink transition-colors group-hover:text-carmine sm:text-2xl">
                  {o.title}
                </span>
                <span className="text-sm text-ink-2">{o.summary}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
