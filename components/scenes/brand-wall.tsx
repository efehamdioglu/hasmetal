import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/motion/reveal'
import { routes, type Locale } from '@/content/i18n'
import type { Partner } from '@/content/site'

const COPY = {
  tr: {
    title: 'Bayilik',
    body: 'Donanım tedariği ve bayilik başvuruları için bize yazın.',
  },
  en: {
    title: 'Dealership',
    body: 'Write to us about hardware supply and dealership enquiries.',
  },
}

/**
 * The dealer brands as a hairline lattice rather than the scrolling logo strip
 * the old site used. One brand has no artwork, so its cell falls back to the
 * name set in the display serif; the closing cell keeps the grid square and
 * carries the only thing a reader might actually want next.
 */
export function BrandWall({ partners, locale }: { partners: Partner[]; locale: Locale }) {
  const copy = COPY[locale]

  return (
    <ul className="rule-t grid grid-cols-2 border-l border-[var(--rule)] lg:grid-cols-4">
      {partners.map((p, i) => (
        <Reveal
          key={p.name}
          i={i % 4}
          as="li"
          className="border-r border-b border-[var(--rule)]"
        >
          <div className="flex h-full min-h-40 flex-col items-center justify-center gap-5 px-5 py-9 text-center">
            <span className="flex h-8 items-center">
              {p.logo ? (
                <Image
                  src={p.logo.src}
                  alt={p.name}
                  width={p.logo.width}
                  height={p.logo.height}
                  className="h-full w-auto max-w-[10rem] object-contain"
                />
              ) : (
                <span className="display text-2xl leading-none text-ink">{p.name}</span>
              )}
            </span>
            <span className="label">{p.note}</span>
          </div>
        </Reveal>
      ))}

      <Reveal
        i={partners.length % 4}
        as="li"
        className="border-r border-b border-[var(--rule)]"
      >
        <Link
          href={routes.contact(locale)}
          className="group flex h-full min-h-40 flex-col items-center justify-center gap-4 px-5 py-9 text-center transition-colors hover:bg-paper-2"
        >
          <span className="display text-2xl leading-none text-ink transition-colors group-hover:text-carmine">
            {copy.title}
          </span>
          <span className="max-w-[16rem] text-sm leading-snug text-ink-2">{copy.body}</span>
        </Link>
      </Reveal>
    </ul>
  )
}
