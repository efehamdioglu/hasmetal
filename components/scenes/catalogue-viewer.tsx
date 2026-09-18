'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { t, type Locale } from '@/content/i18n'
import { pageImage, thumbImage, type Catalogue } from '@/content/catalogues'
import { EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'

/**
 * A page-turning catalogue reader built on pre-rendered page images, so the
 * browser never downloads a 40 MB PDF or a PDF engine to read page one.
 *
 * The turn is the real thing rather than a cross-fade: a leaf carrying the
 * outgoing page on its front and the incoming page on its back rotates about
 * the spine, with the destination spread already painted underneath it.
 */

type Spread = { left: number | null; right: number | null }

/** Cover alone, then even/odd pairs, which is how a bound catalogue reads. */
function buildSpreads(pages: number): Spread[] {
  const out: Spread[] = [{ left: null, right: 1 }]
  for (let p = 2; p <= pages; p += 2) {
    out.push({ left: p, right: p + 1 <= pages ? p + 1 : null })
  }
  return out
}

function Page({
  slug,
  page,
  aspect,
  priority,
  onZoom,
  zoomLabel,
  className,
}: {
  slug: string
  page: number | null
  aspect: number
  priority?: boolean
  onZoom?: (page: number) => void
  zoomLabel?: string
  className?: string
}) {
  if (page === null) {
    return <div className={cn('bg-transparent', className)} style={{ aspectRatio: aspect }} />
  }

  const img = (
    // these are already sized and compressed at build time, so they are served
    // as plain images rather than through the image optimiser
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={pageImage(slug, page)}
      alt={`${page}`}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      draggable={false}
      className="block h-full w-full bg-white object-contain"
    />
  )

  return (
    <div className={cn('relative overflow-hidden bg-white', className)} style={{ aspectRatio: aspect }}>
      {onZoom ? (
        <button
          type="button"
          onClick={() => onZoom(page)}
          aria-label={`${zoomLabel}: ${page}`}
          className="block h-full w-full cursor-zoom-in"
        >
          {img}
        </button>
      ) : (
        img
      )}
    </div>
  )
}

export function CatalogueViewer({ locale, item }: { locale: Locale; item: Catalogue }) {
  const d = t(locale).catalogue
  const reduced = useReducedMotion()

  const spreads = useMemo(() => buildSpreads(item.pages), [item.pages])
  const [index, setIndex] = useState(0)
  const [flip, setFlip] = useState<{ dir: 1 | -1; from: number } | null>(null)
  const [rail, setRail] = useState(false)
  const [zoom, setZoom] = useState<number | null>(null)
  const frame = useRef<HTMLDivElement>(null)

  // page images are uniform within a catalogue in practice; the first page
  // settles the frame so nothing reflows as pages load
  const [w, h] = item.size[0] ?? [1200, 1600]
  const aspect = w / h

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((current) => {
        const next = Math.max(0, Math.min(spreads.length - 1, current + dir))
        if (next === current) return current
        if (!reduced) setFlip({ dir, from: current })
        return next
      })
    },
    [reduced, spreads.length],
  )

  const jumpToPage = (page: number) => {
    const target = spreads.findIndex((s) => s.left === page || s.right === page)
    if (target >= 0) {
      setFlip(null)
      setIndex(target)
    }
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoom !== null) {
        if (e.key === 'Escape') setZoom(null)
        return
      }
      if (!frame.current?.closest('body')) return
      if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'Home') setIndex(0)
      else if (e.key === 'End') setIndex(spreads.length - 1)
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, spreads.length, zoom])

  const current = spreads[index]
  const leaving = flip ? spreads[flip.from] : null
  /** the closed book: cover alone on the right, at half width */
  const coverOnly = current.left === null && !flip

  // the leaf shows the page being turned on its front and, on its back, the
  // page that was hidden behind it
  const leafFront = flip ? (flip.dir === 1 ? leaving?.right : leaving?.left) ?? null : null
  const leafBack = flip ? (flip.dir === 1 ? current.left : current.right) ?? null : null

  const label = (page: number | null) =>
    page === null ? '' : page === 1 ? d.cover : `${d.page} ${page}`

  return (
    <div ref={frame} className="select-none">
      {/* the book, with a gutter either side for the turn controls */}
      <div className="relative px-14 sm:px-16 lg:px-20">
        <div
          className="relative mx-auto flex w-full max-w-5xl"
          style={{ perspective: '2400px' }}
        >
          {/* desktop: two page spread. The cover sits alone, half width, the
              way a closed book does before you open it. */}
          <div
            className={cn(
              'relative hidden shadow-[0_24px_70px_-40px_rgba(0,0,0,0.5)] sm:grid',
              coverOnly ? 'ml-auto w-1/2 grid-cols-1' : 'w-full grid-cols-2',
            )}
          >
            {!coverOnly && (
              <Page
                slug={item.slug}
                page={current.left}
                aspect={aspect}
                priority={index === 0}
                onZoom={setZoom}
                zoomLabel={d.zoom}
              />
            )}
            <Page
              slug={item.slug}
              page={current.right}
              aspect={aspect}
              priority={index === 0}
              onZoom={setZoom}
              zoomLabel={d.zoom}
            />

            {/* the spine, drawn rather than photographed */}
            {!coverOnly && (
              <>
                <span className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/10" />
                <span className="pointer-events-none absolute inset-y-0 left-1/2 w-16 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.07),transparent)]" />
              </>
            )}

            {/* The turning leaf. It is mounted only while the turn is running
                and removed the instant it finishes: an exit animation here
                leaves a translucent ghost lying over the fresh spread. */}
            {flip && (
              <motion.div
                key={`${flip.from}-${flip.dir}`}
                className={cn(
                  'absolute top-0 bottom-0 z-10 w-1/2',
                  flip.dir === 1 ? 'right-0 origin-left' : 'left-0 origin-right',
                )}
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: flip.dir === 1 ? -178 : 178 }}
                transition={{ duration: 0.72, ease: EASE }}
                onAnimationComplete={() => setFlip(null)}
              >
                  {/* both faces need a transform of their own, or the browser
                      keeps painting the front one through the back */}
                  <div
                    className="absolute inset-0 bg-white"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
                  >
                    <Page slug={item.slug} page={leafFront} aspect={aspect} className="h-full" />
                    <span
                      className={cn(
                        'pointer-events-none absolute inset-y-0 w-24',
                        flip.dir === 1
                          ? 'left-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.10),transparent)]'
                          : 'right-0 bg-[linear-gradient(270deg,rgba(0,0,0,0.10),transparent)]',
                      )}
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-white"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <Page slug={item.slug} page={leafBack} aspect={aspect} className="h-full" />
                    <span
                      className={cn(
                        'pointer-events-none absolute inset-y-0 w-24',
                        flip.dir === 1
                          ? 'right-0 bg-[linear-gradient(270deg,rgba(0,0,0,0.10),transparent)]'
                          : 'left-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.10),transparent)]',
                      )}
                    />
                  </div>
              </motion.div>
            )}
          </div>

          {/* mobile: one page at a time */}
          <div className="w-full shadow-[0_18px_50px_-35px_rgba(0,0,0,0.5)] sm:hidden">
            <Page
              slug={item.slug}
              page={current.right ?? current.left}
              aspect={aspect}
              priority={index === 0}
              onZoom={setZoom}
              zoomLabel={d.zoom}
            />
          </div>
        </div>

        {/* the turn controls sit either side of the book, where a hand would be */}
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label={d.prev}
          className={cn(
            'absolute top-1/2 left-0 flex h-12 w-12 -translate-y-1/2 items-center justify-center',
            'border border-[var(--rule-strong)] bg-paper/90 text-xl text-ink backdrop-blur-sm',
            'transition-[background-color,border-color,opacity] hover:border-ink hover:bg-ink hover:text-paper',
            'disabled:pointer-events-none disabled:opacity-0',
          )}
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={index === spreads.length - 1}
          aria-label={d.next}
          className={cn(
            'absolute top-1/2 right-0 flex h-12 w-12 -translate-y-1/2 items-center justify-center',
            'border border-[var(--rule-strong)] bg-paper/90 text-xl text-ink backdrop-blur-sm',
            'transition-[background-color,border-color,opacity] hover:border-ink hover:bg-ink hover:text-paper',
            'disabled:pointer-events-none disabled:opacity-0',
          )}
        >
          ›
        </button>
      </div>

      {/* controls */}
      <div className="rule-t mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIndex(0)}
            disabled={index === 0}
            aria-label={d.first}
            className="label border border-[var(--rule-strong)] px-3 py-2 transition-colors hover:border-ink hover:text-ink disabled:opacity-35 disabled:hover:border-[var(--rule-strong)]"
          >
            ‹‹
          </button>
          <button
            type="button"
            onClick={() => setIndex(spreads.length - 1)}
            disabled={index === spreads.length - 1}
            aria-label={d.last}
            className="label border border-[var(--rule-strong)] px-3 py-2 transition-colors hover:border-ink hover:text-ink disabled:opacity-35 disabled:hover:border-[var(--rule-strong)]"
          >
            ››
          </button>
        </div>

        <p className="label tabular-nums" aria-live="polite">
          {d.of(current.right ?? current.left ?? 1, item.pages)}
        </p>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => setRail((v) => !v)}
            aria-expanded={rail}
            className="label transition-colors hover:text-ink"
          >
            {rail ? d.hideThumbnails : d.thumbnails}
          </button>
          {item.pdf && (
            <a href={item.pdf} download className="label transition-colors hover:text-ink">
              {d.download} ↓
            </a>
          )}
        </div>
      </div>

      <p className="mx-auto mt-3 hidden max-w-5xl text-xs text-ink-3 lg:block">{d.keyboardHint}</p>

      {/* page rail */}
      <AnimatePresence initial={false}>
        {rail && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mx-auto max-w-5xl overflow-hidden"
          >
            <ul className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-10">
              {Array.from({ length: item.pages }, (_, i) => i + 1).map((page) => {
                const on = current.left === page || current.right === page
                return (
                  <li key={page}>
                    <button
                      type="button"
                      onClick={() => jumpToPage(page)}
                      aria-label={`${d.goToPage} ${page}`}
                      aria-current={on}
                      className={cn(
                        'block w-full border bg-white transition-colors',
                        on ? 'border-carmine' : 'border-[var(--rule)] hover:border-ink',
                      )}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={thumbImage(item.slug, page)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="block w-full"
                        style={{ aspectRatio: aspect, objectFit: 'contain' }}
                      />
                      <span className="label block py-1.5 text-center tabular-nums">{page}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* single page, enlarged */}
      <AnimatePresence>
        {zoom !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-pitch/95 p-4 lg:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={() => setZoom(null)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pageImage(item.slug, zoom)}
              alt={label(zoom)}
              className="max-h-full max-w-full cursor-zoom-out bg-white object-contain"
            />
            <button
              type="button"
              onClick={() => setZoom(null)}
              className="label absolute top-5 right-6 text-paper-3 transition-colors hover:text-paper"
            >
              {d.close} ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
