'use client'

import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Img } from '@/components/ui/img'
import { LineRise } from '@/components/motion/line-rise'
import { routes, t, type Locale } from '@/content/i18n'
import { brand } from '@/content/site'

/**
 * Paper first, photograph second. The type sits on the page rather than on the
 * image, which keeps the opening light and leaves the photo un-dimmed.
 */
export function Hero({
  locale,
  title,
  eyebrow,
  subtitle,
  image,
  imageAlt,
  imageCaption,
}: {
  locale: Locale
  title: string[]
  eyebrow: string
  subtitle: string
  image: string
  imageAlt: string
  imageCaption?: string
}) {
  const d = t(locale)
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section ref={ref} className="relative pt-28 lg:pt-36">
      <div className="shell">
        <p className="label anim-rise-in" style={{ animationDelay: '0.15s' }}>
          {eyebrow}
        </p>

        <LineRise
          as="h1"
          immediate
          delay={0.25}
          lines={title}
          className="display mt-6 max-w-[16ch] text-[clamp(2.75rem,8.5vw,8rem)] text-ink"
        />

        <div
          className="anim-rise-in mt-10 flex flex-col gap-6 border-t border-[var(--rule)] pt-6 sm:flex-row sm:items-start sm:justify-between"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="max-w-lg text-base leading-relaxed text-ink-2 sm:text-lg">{subtitle}</p>
          <Link
            href={routes.projects(locale)}
            data-cursor={d.common.explore}
            className="group inline-flex shrink-0 items-center gap-3 border border-ink px-7 py-3.5 transition-colors hover:bg-ink hover:text-paper"
          >
            <span className="label text-inherit">{d.nav.projects}</span>
            <span className="text-carmine transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      <figure className="relative mt-12 lg:mt-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
          <motion.div className="absolute inset-0" style={reduced ? undefined : { scale, y }}>
            <Img src={image} alt={imageAlt} sizes="100vw" priority quality={86} />
          </motion.div>
          <span className="grain pointer-events-none absolute inset-0" />
        </div>
        {imageCaption && (
          <figcaption className="shell mt-3 flex items-baseline justify-between gap-6">
            <span className="label">{imageCaption}</span>
            <span className="label">{brand.founded}</span>
          </figcaption>
        )}
      </figure>
    </section>
  )
}
