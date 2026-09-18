'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Logo } from '@/components/ui/logo'
import { lockScroll } from '@/components/motion/smooth-scroll'
import { counterpartPath, routes, t, type Locale } from '@/content/i18n'
import type { NavSection } from '@/content/nav'
import { EASE } from '@/lib/motion'
import { useScrolledPast } from '@/lib/use-client-env'
import { cn } from '@/lib/utils'

export function Nav({ locale, sections }: { locale: Locale; sections: NavSection[] }) {
  const pathname = usePathname()
  const reduced = useReducedMotion()
  const scrolled = useScrolledPast(16)
  const [open, setOpen] = useState(false)
  const [panel, setPanel] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const d = t(locale)
  const other: Locale = locale === 'tr' ? 'en' : 'tr'
  const switchHref = counterpartPath(pathname, locale)
  const active = sections.find((s) => s.key === panel)

  // a short grace period so crossing the gap into the panel does not close it
  const show = (key: string | null) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setPanel(key)
  }
  const hide = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setPanel(null), 120)
  }

  // close both overlays when the route changes, adjusting state during render
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
    setPanel(null)
  }

  useEffect(() => {
    lockScroll(open)
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      setPanel(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      lockScroll(false)
    }
  }, [open])

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    },
    [],
  )

  const opaque = scrolled || open || panel !== null

  return (
    <>
      <header
        onMouseLeave={hide}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
          opaque
            ? 'border-b border-[var(--rule)] bg-paper/95 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <Link href={routes.home(locale)} aria-label={d.nav.home} className="relative z-10 block">
            <Logo priority className="h-10 w-auto lg:h-11" />
          </Link>

          <nav className="hidden items-center gap-8 xl:flex" aria-label={d.nav.menu}>
            {sections.map((section) => {
              const current = pathname === section.href || pathname.startsWith(section.href + '/')
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  onMouseEnter={() => show(section.children ? section.key : null)}
                  onFocus={() => show(section.children ? section.key : null)}
                  aria-expanded={section.children ? panel === section.key : undefined}
                  className={cn(
                    'nav-link relative py-1 transition-colors hover:text-ink',
                    current && 'text-ink',
                  )}
                >
                  {section.label}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px w-full origin-left bg-carmine transition-transform duration-500',
                      current || panel === section.key ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4 lg:gap-6">
            <p className="nav-link hidden items-center sm:flex">
              <span className="text-ink">{locale.toUpperCase()}</span>
              <span className="mx-1.5 text-ink-3">/</span>
              <Link href={switchHref} hrefLang={other} className="transition-colors hover:text-ink">
                {other.toUpperCase()}
              </Link>
            </p>

            <Link
              href={routes.quote(locale)}
              onMouseEnter={() => show(null)}
              className="nav-link hidden border border-ink px-5 py-2.5 text-ink transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
            >
              {d.nav.quote}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? d.nav.closeMenu : d.nav.openMenu}
              className="relative z-10 flex h-10 w-10 items-center justify-center xl:hidden"
            >
              <span className="relative block h-3 w-6">
                <span
                  className={cn(
                    'absolute left-0 block h-px w-full bg-ink transition-all duration-500',
                    open ? 'top-1.5 rotate-45' : 'top-0',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 block h-px w-full bg-ink transition-all duration-500',
                    open ? 'top-1.5 -rotate-45' : 'top-3',
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        {/* the hovered tab previews its own pages underneath, desktop only */}
        <AnimatePresence initial={false}>
          {active?.children && (
            <motion.div
              key={active.key}
              onMouseEnter={() => show(active.key)}
              initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
              exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: reduced ? 0.15 : 0.45, ease: EASE }}
              className="hidden overflow-hidden border-t border-[var(--rule)] xl:block"
            >
              <div className="shell py-2">
                <div
                  className="grid divide-x divide-[var(--rule)]"
                  style={{
                    gridTemplateColumns: `repeat(${active.children.length + 1}, minmax(0, 1fr))`,
                  }}
                >
                  {active.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="group px-6 py-6 first:pl-0 transition-colors"
                    >
                      <span className="display block text-xl text-ink transition-colors group-hover:text-carmine">
                        {child.label}
                      </span>
                      <span className="mt-2 block text-sm leading-snug text-ink-2">
                        {child.summary}
                      </span>
                    </Link>
                  ))}
                  <Link href={active.href} className="group flex items-end px-6 py-6">
                    <span className="label transition-colors group-hover:text-carmine">
                      {active.label}
                      <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 overflow-y-auto bg-paper xl:hidden"
            initial={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            animate={reduced ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
            exit={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="shell flex min-h-full flex-col justify-center py-24">
              <ul className="flex flex-col">
                {sections.map((section, i) => (
                  <motion.li
                    key={section.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: EASE }}
                    className="border-b border-[var(--rule)] py-4"
                  >
                    <Link
                      href={section.href}
                      className="display block text-3xl text-ink sm:text-4xl"
                    >
                      {section.label}
                    </Link>
                    {section.children && (
                      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                        {section.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="nav-link hover:text-ink">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link href={routes.quote(locale)} className="label text-carmine">
                  {d.nav.quote} →
                </Link>
                <Link href={switchHref} hrefLang={other} className="label hover:text-ink">
                  {other.toUpperCase()}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
