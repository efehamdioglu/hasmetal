import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/ui/cta-band'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Reveal } from '@/components/motion/reveal'
import { LineRise } from '@/components/motion/line-rise'
import { JsonLd } from '@/components/ui/json-ld'
import { CatalogueViewer } from '@/components/scenes/catalogue-viewer'
import { catalogueFor, cataloguesFor, pageImage } from '@/content/catalogues'
import { copy as copy_, routes, t, type Locale } from '@/content/i18n'
import { breadcrumbSchema } from '@/lib/schema'
import { abs } from '@/lib/seo'

export function CataloguePage({ locale, slug }: { locale: Locale; slug: string }) {
  const d = t(locale)
  const copy = copy_(locale).catalogues
  const item = catalogueFor(locale, slug)
  if (!item) notFound()

  const others = cataloguesFor(locale).filter((c) => c.slug !== item.slug).slice(0, 4)

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: d.common.homeCrumb, path: routes.home(locale) },
            { name: copy.title, path: routes.catalogues(locale) },
            { name: item.title, path: routes.catalogue(locale, item.slug) },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Book',
            name: item.title,
            description: item.summary,
            numberOfPages: item.pages,
            inLanguage: item.language.toLowerCase(),
            bookFormat: 'https://schema.org/EBook',
            image: abs(pageImage(item.slug, 1)),
            url: abs(routes.catalogue(locale, item.slug)),
            ...(item.year ? { datePublished: item.year } : {}),
            ...(item.brand ? { publisher: { '@type': 'Organization', name: item.brand } } : {}),
          },
        ]}
      />

      <header className="shell pt-28 pb-8 lg:pt-36 lg:pb-10">
        <Reveal immediate>
          <Breadcrumbs
            items={[
              { label: d.common.homeCrumb, href: routes.home(locale) },
              { label: copy.title, href: routes.catalogues(locale) },
              { label: item.title },
            ]}
          />
        </Reveal>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <LineRise
              as="h1"
              immediate
              delay={0.1}
              lines={[item.title]}
              className="display max-w-[20ch] text-[clamp(2rem,5vw,3.75rem)] text-ink"
            />
            <Reveal immediate i={1}>
              <p className="label mt-4 flex flex-wrap items-center gap-x-3">
                <span>{d.catalogue.pageCount(item.pages)}</span>
                <span className="text-ink-3">·</span>
                <span>{item.language}</span>
                {item.year && (
                  <>
                    <span className="text-ink-3">·</span>
                    <span>{item.year}</span>
                  </>
                )}
                {item.brand && (
                  <>
                    <span className="text-ink-3">·</span>
                    <span>{item.brand}</span>
                  </>
                )}
              </p>
            </Reveal>
          </div>

          <Reveal immediate i={2}>
            <p className="max-w-md text-base leading-relaxed text-ink-2">{item.summary}</p>
          </Reveal>
        </div>
      </header>

      <section className="shell pb-16 lg:pb-20">
        <CatalogueViewer locale={locale} item={item} />
      </section>

      <section className="shell rule-t py-14 lg:py-16">
        <Reveal>
          <p className="label">{copy.others}</p>
        </Reveal>
        <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o, i) => {
            const [w, h] = o.size[0] ?? [1200, 1600]
            return (
              <Reveal key={o.slug} i={i} as="li">
                <Link href={routes.catalogue(locale, o.slug)} className="group block">
                  <div className="overflow-hidden bg-paper-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pageImage(o.slug, 1)}
                      alt={o.title}
                      width={w}
                      height={h}
                      loading="lazy"
                      className="block w-full bg-white object-contain transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="label mt-3">{d.catalogue.pageCount(o.pages)}</p>
                  <h3 className="display mt-1 text-lg text-ink transition-colors group-hover:text-carmine">
                    {o.title}
                  </h3>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
