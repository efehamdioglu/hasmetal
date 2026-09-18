import Link from 'next/link'
import { PageHero } from '@/components/ui/page-hero'
import { CtaBand } from '@/components/ui/cta-band'
import { Img } from '@/components/ui/img'
import { EnquiryForm } from '@/components/ui/enquiry-form'
import { Timeline } from '@/components/scenes/timeline'
import { BrandWall } from '@/components/scenes/brand-wall'
import { LineRise } from '@/components/motion/line-rise'
import { Reveal } from '@/components/motion/reveal'
import { Counter } from '@/components/motion/counter'
import { copy as copy_, routes, t, type Locale } from '@/content/i18n'
import { aboutFor, homeFor, locationsFor, partnersFor } from '@/content/locale'
import { brand, contact } from '@/content/site'

/* ------------------------------------------------------------------ about */

export function AboutPage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = copy_(locale).about
  const about = aboutFor(locale)
  const home = homeFor(locale)

  return (
    <>
      <PageHero
        crumbs={[{ label: d.common.homeCrumb, href: routes.home(locale) }, { label: copy.title }]}
        title={copy.title}
        meta={`${brand.founded} · ${brand.founder}`}
        lead={copy.lead}
        image="has-metal-siteler-vektor-kopya"
        imageAlt={copy.imageAlt}
      />

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-16">
          <Reveal>
            <p className="label lg:sticky lg:top-28">{copy.story}</p>
          </Reveal>
          <div className="space-y-6">
            {about.map((paragraph, i) => (
              <Reveal key={i} i={i}>
                <p className="max-w-3xl text-base leading-[1.8] text-ink-2 sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Timeline
        locale={locale}
        kicker={d.sections.history}
        title={copy.timelineTitle}
        steps={home.timeline}
      />

      <CtaBand locale={locale} />
    </>
  )
}

/* --------------------------------------------------------------- partners */

export function PartnersPage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = copy_(locale).partners
  const partners = partnersFor(locale)

  return (
    <>
      <PageHero
        crumbs={[{ label: d.common.homeCrumb, href: routes.home(locale) }, { label: copy.title }]}
        title={copy.title}
        lead={copy.lead}
      />

      <section className="shell pb-20 lg:pb-28">
        <BrandWall partners={partners} locale={locale} />
      </section>

      <CtaBand locale={locale} />
    </>
  )
}

/* --------------------------------------------------------- HM Commerce */

export function CommercePage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = copy_(locale).commerce
  const home = homeFor(locale)

  return (
    <>
      <PageHero
        crumbs={[{ label: d.common.homeCrumb, href: routes.home(locale) }, { label: copy.title }]}
        title={copy.title}
        meta="İvedik OSB, Ankara"
        lead={copy.lead}
        image="hm-commerce-hotel"
        imageAlt={copy.imageAlt}
        imageCaption="HM Commerce Center, İvedik OSB"
      />

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-16">
          <Reveal>
            <dl className="rule-t">
              {home.commerce.stats.map((stat) => (
                <div key={stat.label} className="border-b border-[var(--rule)] py-5">
                  <dd className="text-3xl tracking-tight text-ink tabular-nums">
                    <Counter from={0} to={stat.value} locale={locale} grouped />
                    <span className="ml-1 text-lg text-ink-3">{stat.unit}</span>
                  </dd>
                  <dt className="label mt-2">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal i={1}>
            <p className="display max-w-2xl text-xl leading-[1.35] text-ink sm:text-2xl">
              {copy.body}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  )
}

/* --------------------------------------------------------------- contact */

export function ContactPage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = copy_(locale).contact
  const locations = locationsFor(locale)

  return (
    <>
      <PageHero
        crumbs={[{ label: d.common.homeCrumb, href: routes.home(locale) }, { label: copy.title }]}
        title={copy.title}
        lead={copy.lead}
      />

      <section className="shell pb-16 lg:pb-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {locations.map((l, i) => (
            <Reveal key={l.id} i={i}>
              <div className="rule-t h-full pt-6">
                <p className="label text-carmine">{l.label}</p>
                <h2 className="display mt-3 text-xl text-ink">{l.name}</h2>
                <address className="mt-4 text-sm leading-relaxed text-ink-2 not-italic">
                  {l.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block">{l.postalCode}</span>
                </address>
                <a
                  href={l.phoneHref}
                  className="mt-4 block text-base text-ink transition-colors hover:text-carmine"
                >
                  {l.phone}
                </a>
                {l.fax && <p className="label mt-2">{copy.fax}: {l.fax}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell rule-t py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="label">{copy.formTitle}</p>
            </Reveal>
            <Reveal i={1}>
              <a
                href={contact.emailHref}
                className="mt-4 inline-block text-lg text-ink underline decoration-[var(--rule-strong)] underline-offset-4 transition-colors hover:decoration-carmine"
              >
                {contact.email}
              </a>
            </Reveal>
          </div>
          <EnquiryForm locale={locale} />
        </div>
      </section>

      <section className="rule-t">
        <Reveal>
          <div className="relative h-[46svh] min-h-[20rem] w-full grayscale-[0.4] contrast-[1.05]">
            <iframe
              title={locations[0].name}
              src="https://www.google.com/maps?q=Hurma%20Sokak%2044%20Siteler%20Alt%C4%B1nda%C4%9F%20Ankara&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </Reveal>
      </section>
    </>
  )
}

/* ----------------------------------------------------------------- quote */

export function QuotePage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = copy_(locale).quote
  const locations = locationsFor(locale)

  return (
    <>
      <PageHero
        crumbs={[{ label: d.common.homeCrumb, href: routes.home(locale) }, { label: copy.title }]}
        title={copy.title}
        lead={copy.lead}
      />

      <section className="shell pb-20 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-16">
          <Reveal>
            <dl className="rule-t">
              {locations.map((l) => (
                <div key={l.id} className="border-b border-[var(--rule)] py-5">
                  <dt className="label">{l.label}</dt>
                  <dd className="mt-2">
                    <a
                      href={l.phoneHref}
                      className="text-base text-ink transition-colors hover:text-carmine"
                    >
                      {l.phone}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <EnquiryForm locale={locale} />
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------- not found */

export function NotFoundPage({ locale }: { locale: Locale }) {
  const d = t(locale)

  return (
    <section className="shell flex min-h-[70svh] flex-col justify-center py-32">
      <p className="label">404</p>
      <LineRise
        as="h1"
        immediate
        lines={[d.notFound.title]}
        className="display mt-6 max-w-[16ch] text-4xl text-ink sm:text-6xl"
      />
      <p className="mt-6 max-w-md text-base text-ink-2">{d.notFound.body}</p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={routes.home(locale)}
          className="inline-flex items-center border border-ink px-7 py-3.5 transition-colors hover:bg-ink hover:text-paper"
        >
          <span className="label text-inherit">{d.notFound.home}</span>
        </Link>
        <Link
          href={routes.projects(locale)}
          className="inline-flex items-center px-2 py-3.5 text-sm text-ink-2 transition-colors hover:text-ink"
        >
          {d.nav.projects} →
        </Link>
      </div>
    </section>
  )
}

/* re-exported so route files can import images without another hop */
export { Img }
