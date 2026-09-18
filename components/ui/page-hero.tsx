import { Breadcrumbs, type Crumb } from '@/components/ui/breadcrumbs'
import { Img } from '@/components/ui/img'
import { LineRise } from '@/components/motion/line-rise'
import { Reveal } from '@/components/motion/reveal'

type Props = {
  crumbs: Crumb[]
  title: string
  lead?: string
  meta?: string
  image?: string
  imageAlt?: string
  imageCaption?: string
}

/** Type on paper, photograph underneath. Used by every inner page. */
export function PageHero({ crumbs, title, lead, meta, image, imageAlt, imageCaption }: Props) {
  return (
    <header>
      <div className="shell pt-28 pb-12 lg:pt-36 lg:pb-16">
        <Reveal immediate>
          <Breadcrumbs items={crumbs} />
        </Reveal>

        <LineRise
          as="h1"
          immediate
          delay={0.1}
          lines={[title]}
          className="display mt-6 max-w-[18ch] text-[clamp(2.25rem,6vw,5rem)] text-ink"
        />

        {meta && (
          <Reveal immediate i={1}>
            <p className="label mt-5">{meta}</p>
          </Reveal>
        )}

        {lead && (
          <Reveal immediate i={2}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-2 sm:text-lg">{lead}</p>
          </Reveal>
        )}
      </div>

      {image && (
        <figure className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
            <Img src={image} alt={imageAlt} sizes="100vw" priority quality={86} />
            <span className="grain pointer-events-none absolute inset-0" />
          </div>
          {imageCaption && (
            <figcaption className="shell mt-3">
              <span className="label">{imageCaption}</span>
            </figcaption>
          )}
        </figure>
      )}
    </header>
  )
}
