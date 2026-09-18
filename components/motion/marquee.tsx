'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  /** seconds for one full pass */
  speed?: number
  className?: string
  pauseOnHover?: boolean
}

/** Infinite horizontal ticker; the track is duplicated so the loop is seamless. */
export function Marquee({ children, speed = 38, className, pauseOnHover = true }: Props) {
  return (
    <div className={cn('group mask-fade-x relative overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
          'motion-reduce:animate-none',
        )}
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
