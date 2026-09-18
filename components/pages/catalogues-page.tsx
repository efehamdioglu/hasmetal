import Link from 'next/link'
import { PageHero } from '@/components/ui/page-hero'
import { CtaBand } from '@/components/ui/cta-band'
import { Reveal } from '@/components/motion/reveal'
import { JsonLd } from '@/components/ui/json-ld'
import { cataloguesFor, pageImage } from '@/content/catalogues'
import { copy as copy_, routes, t, type Locale } from '@/content/i18n'
import { breadcrumbSchema, itemListSchema } from '@/lib/schema'

function Card({ slug, locale, i }: { slug: string; locale: Locale; i: number }) {
  const d = t(locale)
  const item = cataloguesFor(locale).find((c) => c.slug === slug)!
  const [w, h] = item.size[0] ?? [1200, 1600]

  return (
    <Reveal i={i % 4} as="li">
      <Link href={routes.catalogue(locale, item.slug)} className="group block">
        <div className="relative overflow-hidden bg-paper-2 shadow-[0_18px_44px_-34px_rgba(0,0,0,0.55)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pageImage(item.slug, 1)}
            alt={item.title}
            width={w}
            height={h}
            loading={i < 4 ? 'eager' : 'lazy'}
            className="block w-full bg-white object-contain transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
        </div>
        <p className="label mt-4 flex flex-wrap items-center gap-x-3 transition-colors group-hover:text-carmine">
          <span>{d.catalogue.pageCount(item.pages)}</span>
          <span className="text-ink-3">·</span>
          <span>{item.language}</span>
          {item.year && (
            <>
              <span className="text-ink-3">·</span>
              <span>{item.year}</span>
            </>
          )}
        </p>
        <h3 className="display mt-2 text-xl text-ink sm:text-2xl">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">{item.summary}</p>
      </Link>
    </Reveal>
  )
}

export function CataloguesPage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = copy_(locale).catalogues

  const all = cataloguesFor(locale)
  const ours = all.filter((c) => c.owner === 'has-metal')
  const brands = all.filter((c) => c.owner === 'brand')

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: d.common.homeCrumb, path: routes.home(locale) },
            { name: copy.title, path: routes.catalogues(locale) },
          ]),
          itemListSchema(
            all.map((c) => ({
              name: c.title,
              path: routes.catalogue(locale, c.slug),
            })),
          ),
        ]}
      />

      <PageHero
        crumbs={[{ label: d.common.homeCrumb, href: routes.home(locale) }, { label: copy.title }]}
        title={copy.title}
        meta={d.catalogue.pageCount(all.reduce((n, c) => n + c.pages, 0))}
        lead={copy.lead}
      />

      <section className="shell pb-16 lg:pb-20">
        <Reveal>
          <p className="label">{copy.ours}</p>
        </Reveal>
        {/* only two, so they are given room rather than stranded in a wide grid */}
        <ul className="mt-8 grid max-w-3xl gap-x-10 gap-y-12 sm:grid-cols-2">
          {ours.map((c, i) => (
            <Card key={c.slug} slug={c.slug} locale={locale} i={i} />
          ))}
        </ul>
      </section>

      <section className="shell rule-t py-16 lg:py-20">
        <Reveal>
          <p className="label">{copy.brands}</p>
        </Reveal>
        <ul className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((c, i) => (
            <Card key={c.slug} slug={c.slug} locale={locale} i={i} />
          ))}
        </ul>
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
