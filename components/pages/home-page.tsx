import Link from 'next/link'
import { Hero } from '@/components/scenes/hero'
import { Timeline } from '@/components/scenes/timeline'
import { ProjectIndex } from '@/components/scenes/project-index'
import { BrandWall } from '@/components/scenes/brand-wall'
import { Img } from '@/components/ui/img'
import { LineRise } from '@/components/motion/line-rise'
import { Reveal } from '@/components/motion/reveal'
import { Counter } from '@/components/motion/counter'
import { cities, projects } from '@/content'
import { routes, t, type Locale } from '@/content/i18n'
import { homeFor, partnersFor, systemsFor } from '@/content/locale'

const COPY = {
  tr: {
    timelineTitle: 'Bir atölyeden dört tesise.',
    heroAlt: 'Şişli Belediyesi hizmet binası, alüminyum cephe ve güneş kırıcı uygulaması',
    heroCaption: 'Şişli Belediyesi, İstanbul',
    commerceAlt: 'HM Commerce Center otel ve iş merkezi, İvedik OSB Ankara',
  },
  en: {
    timelineTitle: 'From one workshop to four facilities.',
    heroAlt: 'Şişli Municipality building, aluminium facade and brise soleil',
    heroCaption: 'Şişli Municipality, İstanbul',
    commerceAlt: 'HM Commerce Center hotel and business centre, İvedik OSB Ankara',
  },
}

export function HomePage({ locale }: { locale: Locale }) {
  const d = t(locale)
  const copy = COPY[locale]
  const home = homeFor(locale)
  const systems = systemsFor(locale)
  const partners = partnersFor(locale)

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        image="3cbe1b6ce556b8f702091fca7c39074e-1"
        imageAlt={copy.heroAlt}
        imageCaption={copy.heroCaption}
      />

      {/* manifesto */}
      <section className="shell py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr] lg:gap-16">
          <Reveal>
            <p className="label lg:sticky lg:top-28">{home.intro.kicker}</p>
          </Reveal>
          <Reveal i={1}>
            <p className="display max-w-4xl text-2xl leading-[1.25] text-ink sm:text-3xl lg:text-[2.5rem]">
              {home.intro.body}
            </p>
          </Reveal>
        </div>
      </section>

      <Timeline
        locale={locale}
        kicker={d.sections.history}
        title={copy.timelineTitle}
        steps={home.timeline}
      />

      {/* the project index, on the one dark band in the site */}
      <section className="on-dark relative py-20 lg:py-28">
        <div className="shell">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Reveal>
                <p className="label">{home.projectsIntro.kicker}</p>
              </Reveal>
              <LineRise
                lines={[home.projectsIntro.title]}
                className="display mt-5 max-w-[16ch] text-3xl text-paper sm:text-4xl lg:text-5xl"
              />
            </div>
            <Reveal i={1}>
              <p className="max-w-sm text-sm leading-relaxed text-paper-3/80">
                {home.projectsIntro.body}
              </p>
            </Reveal>
          </div>

          <ProjectIndex locale={locale} projects={projects} cities={cities} limit={12} />
        </div>
      </section>

      {/* systems */}
      <section className="shell py-20 lg:py-28">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="label">{d.nav.systems}</p>
          </Reveal>
          <Reveal i={1}>
            <Link
              href={routes.systems(locale)}
              className="label transition-colors hover:text-ink"
            >
              {d.common.view} →
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((s, i) => (
            <Reveal key={s.slug} i={i % 4}>
              <Link href={routes.system(locale, s.slug)} className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-2">
                  {s.image ? (
                    <Img
                      src={s.image}
                      alt={s.title}
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                      className="object-contain p-6 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  ) : (
                    <span className="display absolute inset-0 flex items-center justify-center text-5xl text-paper-3">
                      {s.code}
                    </span>
                  )}
                </div>
                <p className="label mt-4 transition-colors group-hover:text-carmine">{s.code}</p>
                <h3 className="mt-2 text-base text-ink">{s.summary}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HM Commerce Center */}
      <section className="rule-t bg-paper-2 py-20 lg:py-28">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Img
                src="hm-commerce-hotel"
                alt={copy.commerceAlt}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <span className="grain pointer-events-none absolute inset-0" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="label">{home.commerce.kicker}</p>
            </Reveal>
            <LineRise
              lines={[home.commerce.title]}
              className="display mt-5 max-w-[14ch] text-3xl text-ink sm:text-4xl lg:text-5xl"
            />
            <Reveal i={1}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-2">
                {home.commerce.body}
              </p>
            </Reveal>
            <Reveal i={2}>
              <dl className="rule-t mt-10 grid grid-cols-2 gap-8 pt-8">
                {home.commerce.stats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="text-3xl tracking-tight text-ink tabular-nums lg:text-4xl">
                      <Counter from={0} to={stat.value} locale={locale} grouped />
                      <span className="ml-1 text-lg text-ink-3">{stat.unit}</span>
                    </dd>
                    <dt className="label mt-2">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* partners */}
      <section className="shell py-20 lg:py-28">
        <div className="mb-8 flex items-end justify-between gap-6">
          <Reveal>
            <p className="label">{d.nav.partners}</p>
          </Reveal>
          <Reveal i={1}>
            <Link href={routes.partners(locale)} className="label transition-colors hover:text-ink">
              {d.common.view} →
            </Link>
          </Reveal>
        </div>
        <BrandWall partners={partners} locale={locale} />
      </section>
    </>
  )
}
