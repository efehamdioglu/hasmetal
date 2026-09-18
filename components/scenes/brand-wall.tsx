import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/motion/reveal'
import { catalogueForBrand } from '@/content/catalogues'
import { copy as copy_, routes, t, type Locale } from '@/content/i18n'
import type { Partner } from '@/content/site'
import { cn } from '@/lib/utils'

/**
 * The dealer brands as a hairline lattice rather than the scrolling logo strip
 * the old site used. Six of the seven have a catalogue of their own, so their
 * cards open it; DORMA has no artwork and no catalogue, so it stays a plain
 * cell with the name set in the display serif.
 */
export function BrandWall({ partners, locale }: { partners: Partner[]; locale: Locale }) {
  const d = t(locale)
  const copy = copy_(locale).brandWall

  return (
    <ul className="rule-t grid grid-cols-2 border-l border-[var(--rule)] lg:grid-cols-4">
      {partners.map((p, i) => {
        const cat = catalogueForBrand(locale, p.name)

        const face = (
          <>
            <span className="flex h-8 items-center">
              {p.logo ? (
                <Image
                  src={p.logo.src}
                  alt={p.name}
                  width={p.logo.width}
                  height={p.logo.height}
                  className="h-full w-auto max-w-[10rem] object-contain transition-opacity duration-500 group-hover:opacity-70"
                />
              ) : (
                <span className="display text-2xl leading-none text-ink">{p.name}</span>
              )}
            </span>
            <span className="label">{p.note}</span>
            {cat && (
              <span className="label text-carmine opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {d.catalogue.pageCount(cat.pages)} →
              </span>
            )}
          </>
        )

        const shell = 'flex h-full min-h-40 flex-col items-center justify-center gap-4 px-5 py-9 text-center'

        return (
          <Reveal key={p.name} i={i % 4} as="li" className="border-r border-b border-[var(--rule)]">
            {cat ? (
              <Link
                href={routes.catalogue(locale, cat.slug)}
                aria-label={`${p.name}, ${cat.title}`}
                className={cn(shell, 'group transition-colors hover:bg-paper-2')}
              >
                {face}
              </Link>
            ) : (
              <div className={cn(shell, 'group')}>{face}</div>
            )}
          </Reveal>
        )
      })}

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
