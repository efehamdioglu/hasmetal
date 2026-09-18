import { motion } from 'motion/react'
import type { ComponentType, ReactNode } from 'react'

export type LooseProps = Record<string, unknown> & { children?: ReactNode }
export type Tag = 'div' | 'section' | 'span' | 'li' | 'ul' | 'p' | 'figure' | 'h1' | 'h2' | 'h3'

/**
 * Motion components resolved once at module scope. Looking a tag up here keeps
 * render free of component creation, which both React Compiler and the
 * `react-hooks` lint rules require.
 */
const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  li: motion.li,
  ul: motion.ul,
  p: motion.p,
  figure: motion.figure,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
} as unknown as Record<Tag, ComponentType<LooseProps>>

export function motionTag(as: Tag): ComponentType<LooseProps> {
  return MOTION_TAGS[as] ?? MOTION_TAGS.div
}

const PLAIN_TAGS = {
  div: 'div',
  section: 'section',
  span: 'span',
  li: 'li',
  ul: 'ul',
  p: 'p',
  figure: 'figure',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
} as const

export function plainTag(as: Tag) {
  return PLAIN_TAGS[as] ?? 'div'
}
