import type { Transition, Variants } from 'motion/react'

export const EASE = [0.16, 1, 0.3, 1] as const
export const EASE_METAL = [0.33, 0, 0.1, 1] as const

export const DUR = {
  fast: 0.4,
  base: 0.8,
  slow: 1.2,
} as const

export const STAGGER = 0.06

export const transition = (duration = DUR.base, delay = 0): Transition => ({
  duration,
  delay,
  ease: EASE,
})

/** vertical fade used by most blocks */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: transition(DUR.base, i * STAGGER),
  }),
}

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: (i: number = 0) => ({ opacity: 1, transition: transition(DUR.base, i * STAGGER) }),
}

/** a line of display type rising out of its own overflow mask */
export const lineRise: Variants = {
  hidden: { y: '110%' },
  show: (i: number = 0) => ({
    y: '0%',
    transition: { duration: DUR.slow, delay: i * 0.08, ease: EASE },
  }),
}

/** image plates that uncover themselves */
export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  show: (i: number = 0) => ({
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: DUR.slow, delay: i * STAGGER, ease: EASE },
  }),
}

export const viewportOnce = { once: true, margin: '-12% 0px -12% 0px' } as const
