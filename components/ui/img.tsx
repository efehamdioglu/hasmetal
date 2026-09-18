import NextImage from 'next/image'
import { image } from '@/content'
import { cn } from '@/lib/utils'

type Props = {
  /** key from content/data.json images map */
  src: string
  alt?: string
  sizes?: string
  priority?: boolean
  className?: string
  /** render as an absolutely positioned cover layer inside a positioned parent */
  fill?: boolean
  quality?: number
}

/**
 * Thin wrapper over next/image that resolves an image key to its real
 * dimensions and the blur placeholder harvested from the source site.
 */
export function Img({
  src,
  alt,
  sizes = '100vw',
  priority = false,
  className,
  fill = true,
  quality = 82,
}: Props) {
  const ref = image(src)
  const common = {
    src: ref.src,
    alt: alt ?? ref.alt ?? '',
    sizes,
    priority,
    quality,
    placeholder: 'blur' as const,
    blurDataURL: ref.blurDataURL,
  }

  if (fill) {
    return <NextImage {...common} fill className={cn('object-cover', className)} />
  }

  return (
    <NextImage
      {...common}
      width={ref.width}
      height={ref.height}
      className={cn('h-auto w-full', className)}
    />
  )
}
