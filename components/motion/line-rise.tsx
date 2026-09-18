'use client'

import { motion, useReducedMotion } from 'motion/react'
import { createElement } from 'react'
import { lineRise, viewportOnce } from '@/lib/motion'
import { motionTag, plainTag, type Tag } from '@/lib/polymorphic'
import { cn } from '@/lib/utils'

type Props = {
  lines: string[]
  as?: Tag
  className?: string
  lineClassName?: string
  /** delay before the first line, in seconds */
  delay?: number
  /** play immediately instead of waiting for the viewport */
  immediate?: boolean
  id?: string
}

/**
 * Display type where each line rises out of its own overflow mask.
 *
 * Two code paths on purpose:
 *
 * - `immediate` (page and section heroes) runs as a CSS animation, so the words
 *   are painted on the server's HTML and appear without waiting for hydration.
 *   Driving those from JS delayed the largest contentful paint by seconds.
 * - the scroll-triggered path uses motion, with the viewport trigger on the
 *   heading rather than the masked line: an element translated out of an
 *   `overflow-hidden` parent has an empty intersection rect and would never
 *   fire its own observer.
 */
export function LineRise({
  lines,
  as = 'h2',
  className,
  lineClassName,
  delay = 0,
  immediate = false,
  id,
}: Props) {
  const reduced = useReducedMotion()

  if (immediate || reduced) {
    return createElement(
      plainTag(as),
      { className, id },
      lines.map((line, i) => (
        <span key={line + i} className="block overflow-hidden pb-[0.08em]">
          <span
            className={cn('block', !reduced && 'anim-line-rise', lineClassName)}
            style={reduced ? undefined : { animationDelay: `${delay + i * 0.08}s` }}
          >
            {line}
          </span>
        </span>
      )),
    )
  }

  return createElement(
    motionTag(as),
    { className, id, initial: 'hidden', whileInView: 'show', viewport: viewportOnce },
    lines.map((line, i) => (
      <span key={line + i} className="block overflow-hidden pb-[0.08em]">
        <motion.span className={cn('block', lineClassName)} variants={lineRise} custom={i}>
          {line}
        </motion.span>
      </span>
    )),
  )
}
