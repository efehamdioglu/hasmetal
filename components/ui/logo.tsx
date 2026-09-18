import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * The client's mark, used as supplied. A vector original would render more
 * crisply at large sizes; noted in the README as something to request.
 */
export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/brand/has-metal-logo.png"
      alt="Has Metal"
      width={478}
      height={440}
      priority={priority}
      className={cn('h-8 w-auto', className)}
    />
  )
}
