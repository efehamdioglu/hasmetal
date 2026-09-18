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
import { routes, t, type Locale } from '@/content/i18n'
import { aboutFor, homeFor, locationsFor, partnersFor } from '@/content/locale'
import { brand, contact } from '@/content/site'

/* ------------------------------------------------------------------ about */

const ABOUT_COPY = {
  tr: {
    title: 'Kurumsal',
    lead: '1974’te bir demir doğrama atölyesinde başlayan iş, bugün Ankara’da iki tesis, kendi sistem serileri ve yedi şehre yayılmış bir referans listesi.',
    story: 'Hikâye',
    timelineTitle: 'Bir atölyeden dört tesise.',
    imageAlt: 'Has Metal Siteler tesisi',
  },
  en: {
    title: 'Company',
    lead: 'What began in an iron fabrication workshop in 1974 is today two facilities in Ankara, our own system series and a reference list spread across seven cities.',
    story: 'The story',
    timelineTitle: 'From one workshop to four facilities.',
    imageAlt: 'The Has Metal facility in Siteler, Ankara',
  },
}

export function AboutPage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = ABOUT_COPY[locale]
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

const PARTNERS_COPY = {
  tr: {
    title: 'Bayiliklerimiz',
    lead: 'Kapı ve pencerenin ömrünü belirleyen donanımı, Avrupa’nın yerleşik üreticilerinden tedarik ediyoruz. Bu markaların bayisi olmak, yedek parçanın ve teknik desteğin yıllar sonra da bulunabilmesi demek.',
  },
  en: {
    title: 'Partners',
    lead: 'The hardware that decides how long a door or window lasts comes from established European manufacturers. Being their dealer means spare parts and technical support are still there years later.',
  },
}

export function PartnersPage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = PARTNERS_COPY[locale]
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

const COMMERCE_COPY = {
  tr: {
    title: 'HM Commerce Center',
    lead: 'İvedik OSB’de 15.243 m² arazi üzerinde, 50.710 m² inşaat alanına sahip otel ve iş merkezi. 2013’te alınan kararla girdiğimiz inşaat hattının ilk ve en büyük işi.',
    body: 'Alüminyumu kırk yıl boyunca başkalarının yapıları için ürettikten sonra kendi yapımızı yaptık. Cephesinden doğramasına kadar her detayı kendi sistemlerimizle çözdüğümüz bu bina, hem bir iş merkezi hem de üretim kalitemizin ölçeğe vurulmuş hâli.',
    imageAlt: 'HM Commerce Center otel ve iş merkezi',
  },
  en: {
    title: 'HM Commerce Center',
    lead: 'A hotel and business centre on a 15,243 m² site in İvedik OSB, with 50,710 m² of construction. The first and largest job on the construction line we entered in 2013.',
    body: 'After forty years of making aluminium for other people’s buildings, we built our own. Every detail from the facade to the framing is solved with our own systems; the building is both a business centre and the scale test of how we manufacture.',
    imageAlt: 'HM Commerce Center hotel and business centre',
  },
}

export function CommercePage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = COMMERCE_COPY[locale]
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

const CONTACT_COPY = {
  tr: {
    title: 'İletişim',
    lead: 'Üç tesis, tek numara yerine doğru numara. Proje teklifi, teknik doküman ve bayilik başvuruları için aşağıdaki formu kullanabilirsiniz.',
    formTitle: 'Bize yazın',
    address: 'Adres',
    fax: 'Faks',
  },
  en: {
    title: 'Contact',
    lead: 'Three facilities, so the right number rather than one number. Use the form below for project enquiries, technical documentation and dealership applications.',
    formTitle: 'Write to us',
    address: 'Address',
    fax: 'Fax',
  },
}

export function ContactPage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = CONTACT_COPY[locale]
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

const QUOTE_COPY = {
  tr: {
    title: 'Teklif alın',
    lead: 'Projenizin ölçüleri, sistem tercihi ve teslim takvimi belli olduğunda net bir çalışma hazırlıyoruz. Elinizde proje dosyası varsa formda belirtin, dönüşte paylaşım yolunu iletelim.',
  },
  en: {
    title: 'Request a quote',
    lead: 'Once the dimensions, the chosen system and the delivery schedule are clear we prepare a firm proposal. If you already have project files, say so in the form and we will send you a way to share them.',
  },
}

export function QuotePage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = QUOTE_COPY[locale]
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
