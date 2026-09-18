import Link from 'next/link'
import { LineRise } from '@/components/motion/line-rise'
import { Reveal } from '@/components/motion/reveal'
import { routes, t, type Locale } from '@/content/i18n'
import { contact, locations } from '@/content/site'

const BODY = {
  tr: 'Projenizin ölçüleri, sistem tercihi ve teslim takvimi belli olduğunda net bir çalışma hazırlıyoruz. Yazın ya da arayın.',
  en: 'Once the dimensions, the system and the delivery schedule are clear we put a firm proposal together. Write or call.',
}

export function CtaBand({ locale, title }: { locale: Locale; title?: string }) {
  const d = t(locale)

  return (
    <section className="rule-t bg-paper-2 py-20 lg:py-24">
      <div className="shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <LineRise
            lines={[title ?? d.sections.ctaTitle]}
            className="display max-w-[18ch] text-3xl text-ink sm:text-4xl lg:text-5xl"
          />
          <Reveal i={1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-2">{BODY[locale]}</p>
          </Reveal>
        </div>

        <Reveal i={1}>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href={routes.quote(locale)}
              className="group inline-flex items-center gap-3 border border-ink px-8 py-4 transition-colors hover:bg-ink hover:text-paper"
            >
              <span className="label text-inherit">{d.nav.quote}</span>
              <span className="text-carmine transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a href={locations[0].phoneHref} className="label transition-colors hover:text-ink">
              {locations[0].phone}
            </a>
            <a href={contact.emailHref} className="label transition-colors hover:text-ink">
              {contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
