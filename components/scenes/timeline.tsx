'use client'

import { Counter } from '@/components/motion/counter'
import { LineRise } from '@/components/motion/line-rise'
import { Reveal } from '@/components/motion/reveal'
import { t, type Locale } from '@/content/i18n'
import { cn } from '@/lib/utils'

type Step = {
  year: string
  title: string
  body: string
  metric: number
  metricUnit: string
}

/**
 * 1974 to today, read as four measured steps. Every figure comes from the
 * company's own About page; nothing here is estimated.
 */
export function Timeline({
  locale,
  kicker,
  title,
  steps,
}: {
  locale: Locale
  kicker: string
  title: string
  steps: Step[]
}) {
  const t0 = t(locale)
  void t0

  return (
    <section className="shell rule-t py-20 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="label">{kicker}</p>
          </Reveal>
          <LineRise
            lines={[title]}
            className="display mt-5 max-w-[14ch] text-3xl text-ink sm:text-4xl lg:text-5xl"
          />
        </div>

        <ol className="rule-t">
          {steps.map((step, i) => (
            <Reveal key={step.title} i={i} as="li">
              <div className="grid gap-4 border-b border-[var(--rule)] py-8 sm:grid-cols-[6rem_1fr_auto] sm:items-baseline sm:gap-8">
                <span
                  className={cn(
                    'label tabular-nums',
                    step.year ? 'text-carmine' : 'text-ink-3',
                  )}
                >
                  {step.year || '·'}
                </span>

                <div>
                  <h3 className="display text-xl text-ink sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-2">{step.body}</p>
                </div>

                <p className="font-mono text-2xl text-ink tabular-nums sm:text-right lg:text-3xl">
                  <Counter
                    from={0}
                    to={step.metric}
                    decimals={0}
                    locale={locale}
                    grouped
                  />
                  <span className="label mt-1.5 block sm:text-right">{step.metricUnit}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
