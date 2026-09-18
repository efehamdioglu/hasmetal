'use client'

import { useReducedMotion, type Variants } from 'motion/react'
import { createElement, type ReactNode } from 'react'
import { clipReveal, fade, fadeUp, viewportOnce } from '@/lib/motion'
import { motionTag, plainTag, type Tag } from '@/lib/polymorphic'

const PRESETS: Record<string, Variants> = {
  up: fadeUp,
  fade,
  clip: clipReveal,
}

type Props = {
  children: ReactNode
  /** stagger index */
  i?: number
  preset?: keyof typeof PRESETS
  as?: Tag
  className?: string
  /**
   * Above-the-fold content: plays from CSS on first paint instead of waiting
   * for hydration and a viewport observer.
   */
  immediate?: boolean
}

export function Reveal({
  children,
  i = 0,
  preset = 'up',
  as = 'div',
  className,
  immediate = false,
}: Props) {
  const reduced = useReducedMotion()

  if (reduced) {
    return createElement(plainTag(as), { className }, children)
  }

  if (immediate) {
    return createElement(
      plainTag(as),
      {
        className: [className, 'anim-rise-in'].filter(Boolean).join(' '),
        style: { animationDelay: `${0.1 + i * 0.09}s` },
      },
      children,
    )
  }

  return createElement(
    motionTag(as),
    {
      className,
      variants: PRESETS[preset],
      initial: 'hidden',
      whileInView: 'show',
      viewport: viewportOnce,
      custom: i,
    },
    children,
  )
}

/** Reveals its children in sequence; children opt in with <RevealItem>. */
export function RevealGroup({
  children,
  className,
  as = 'div',
  stagger = 0.06,
}: {
  children: ReactNode
  className?: string
  as?: Tag
  stagger?: number
}) {
  const reduced = useReducedMotion()

  if (reduced) {
    return createElement(plainTag(as), { className }, children)
  }

  return createElement(
    motionTag(as),
    {
      className,
      initial: 'hidden',
      whileInView: 'show',
      viewport: viewportOnce,
      variants: { show: { transition: { staggerChildren: stagger } } },
    },
    children,
  )
}

export function RevealItem({
  children,
  className,
  as = 'div',
  preset = 'up',
}: {
  children: ReactNode
  className?: string
  as?: Tag
  preset?: keyof typeof PRESETS
}) {
  const reduced = useReducedMotion()

  if (reduced) {
    return createElement(plainTag(as), { className }, children)
  }

  return createElement(motionTag(as), { className, variants: PRESETS[preset] }, children)
}
