'use client'

import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import type { Locale } from '@/content/i18n'

type Props = {
  from: number
  to: number
  decimals?: number
  duration?: number
  className?: string
  locale?: Locale
  /** 50710 → 50.710 (tr) / 50,710 (en) */
  grouped?: boolean
}

export function Counter({
  from,
  to,
  decimals = 0,
  duration = 1.6,
  className,
  locale = 'tr',
  grouped = false,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' })
  const reduced = useReducedMotion()
  const [value, setValue] = useState(reduced ? to : from)

  useEffect(() => {
    if (reduced) return

    // If the reader arrives already past this point (a deep link, a fast
    // scroll, a restored position) the observer never fires and the figure
    // would sit at zero. Show the real number instead of animating to it.
    const box = ref.current?.getBoundingClientRect()
    if (!inView) {
      if (box && box.bottom < 0) setValue(to)
      return
    }

    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(latest),
    })
    return () => controls.stop()
  }, [inView, reduced, from, to, duration])

  const tag = locale === 'en' ? 'en-GB' : 'tr-TR'
  const text = grouped
    ? Math.round(value).toLocaleString(tag)
    : value.toLocaleString(tag, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  )
}
