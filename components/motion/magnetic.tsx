'use client'

import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** how far the element is allowed to drift, in px */
  strength?: number
}

/** Pulls an element gently toward the cursor while it is hovered. */
export function Magnetic({ children, className, strength = 14 }: Props) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 })

  if (reduced) return <span className={className}>{children}</span>

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x: sx, y: sy, display: 'inline-block' }}
      onPointerMove={(event) => {
        const el = ref.current
        if (!el || event.pointerType !== 'mouse') return
        const rect = el.getBoundingClientRect()
        const dx = event.clientX - (rect.left + rect.width / 2)
        const dy = event.clientY - (rect.top + rect.height / 2)
        x.set((dx / rect.width) * strength * 2)
        y.set((dy / rect.height) * strength * 2)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.span>
  )
}
