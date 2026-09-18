'use client'

import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useMemo, useState } from 'react'
import { Img } from '@/components/ui/img'
import { routes, t, type Locale } from '@/content/i18n'
import type { Project } from '@/content/types'
import { EASE } from '@/lib/motion'
import { cn, pad2 } from '@/lib/utils'

type Props = {
  locale: Locale
  projects: Project[]
  cities: { name: string; count: number }[]
  /** the home page shows a slice and links on; the index page shows everything */
  limit?: number
  withFilter?: boolean
}

/**
 * The centrepiece. Forty-six building names set large; whichever one the
 * reader is on appears as a photograph in the fixed frame beside the list.
 *
 * The frame is deliberately a controlled size rather than full bleed: the
 * client's photographs range from 700 px to 2560 px wide, and this keeps even
 * the smallest of them sharp.
 */
export function ProjectIndex({ locale, projects, cities, limit, withFilter = false }: Props) {
  const d = t(locale)
  const reduced = useReducedMotion()
  const [city, setCity] = useState<string | null>(null)
  const [active, setActive] = useState(0)

  const visible = useMemo(() => {
    const filtered = city ? projects.filter((p) => p.city === city) : projects
    return limit ? filtered.slice(0, limit) : filtered
  }, [projects, city, limit])

  const shown = visible[Math.min(active, visible.length - 1)] ?? visible[0]

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-16">
      <div>
        {withFilter && (
          <div
            role="group"
            aria-label={d.common.city}
            className="rule-b mb-2 flex flex-wrap items-center gap-x-5 gap-y-2 pb-5"
          >
            <button
              type="button"
              aria-pressed={city === null}
              onClick={() => {
                setCity(null)
                setActive(0)
              }}
              className={cn(
                'label transition-colors',
                city === null ? 'text-carmine' : 'hover:text-[var(--text-strong)]',
              )}
            >
              {d.common.all} ({projects.length})
            </button>
            {cities.map((c) => (
              <button
                key={c.name}
                type="button"
                aria-pressed={city === c.name}
                onClick={() => {
                  setCity(c.name)
                  setActive(0)
                }}
                className={cn(
                  'label transition-colors',
                  city === c.name ? 'text-carmine' : 'hover:text-[var(--text-strong)]',
                )}
              >
                {c.name} ({c.count})
              </button>
            ))}
          </div>
        )}

        <ul>
          {visible.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={routes.project(locale, p.slug)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                data-cursor={d.common.view}
                className={cn(
                  'group flex items-baseline gap-4 border-b border-[var(--rule)] py-3.5 transition-colors sm:gap-6',
                  i === active ? 'border-[var(--rule-strong)]' : '',
                )}
              >
                <span
                  className={cn(
                    'text-[0.625rem] font-medium tracking-[0.18em] tabular-nums transition-colors',
                    i === active ? 'text-carmine' : 'text-[var(--text-faint)]',
                  )}
                >
                  {pad2(i + 1)}
                </span>
                <span
                  className={cn(
                    'display flex-1 text-xl transition-colors sm:text-2xl lg:text-[1.75rem]',
                    i === active ? 'text-[var(--text-strong)]' : 'text-[var(--text-muted)]',
                  )}
                >
                  {p.name}
                </span>
                {p.city && (
                  <span className="label hidden shrink-0 sm:block">{p.city}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {limit && projects.length > limit && (
          <Link
            href={routes.projects(locale)}
            className="mt-8 inline-flex items-center gap-3 border border-[var(--border-strong)] px-7 py-3.5 transition-colors hover:bg-[var(--border-strong)] hover:text-[var(--on-border-strong)]"
          >
            <span className="label text-inherit">{d.common.allProjects}</span>
            <span className="text-carmine">→</span>
          </Link>
        )}
      </div>

      {/* the photograph tracks the list, and sticks while the list scrolls past */}
      <div className="relative hidden lg:block lg:sticky lg:top-28">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-3">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={shown?.slug}
              className="absolute inset-0"
              initial={reduced ? false : { opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              {shown && (
                <Img
                  src={shown.cover}
                  alt={`${shown.name}${shown.city ? ', ' + shown.city : ''}`}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>
          <span className="grain pointer-events-none absolute inset-0" />
        </div>

        {shown && (
          <div className="mt-4 flex items-baseline justify-between gap-6">
            <p className="label">{shown.city}</p>
            <p className="label tabular-nums">
              {pad2(Math.min(active, visible.length - 1) + 1)} / {pad2(visible.length)}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
