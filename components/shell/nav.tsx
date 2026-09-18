'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Logo } from '@/components/ui/logo'
import { lockScroll } from '@/components/motion/smooth-scroll'
import { counterpartPath, routes, t, type Locale } from '@/content/i18n'
import { EASE } from '@/lib/motion'
import { useScrolledPast } from '@/lib/use-client-env'
import { cn } from '@/lib/utils'

export function Nav({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const reduced = useReducedMotion()
  const scrolled = useScrolledPast(16)
  const [open, setOpen] = useState(false)

  const d = t(locale)
  const other: Locale = locale === 'tr' ? 'en' : 'tr'
  const switchHref = counterpartPath(pathname, locale)

  const links = [
    { label: d.nav.about, href: routes.about(locale) },
    { label: d.nav.systems, href: routes.systems(locale) },
    { label: d.nav.products, href: routes.products(locale) },
    { label: d.nav.services, href: routes.services(locale) },
    { label: d.nav.projects, href: routes.projects(locale) },
    { label: d.nav.contact, href: routes.contact(locale) },
  ]

  // close the overlay when the route changes, adjusting state during render
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    lockScroll(open)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      lockScroll(false)
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
          scrolled || open
            ? 'border-b border-[var(--rule)] bg-paper/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <Link href={routes.home(locale)} aria-label={d.nav.home} className="relative z-10 block">
            <Logo priority className="h-10 w-auto lg:h-11" />
          </Link>

          <nav className="hidden items-center gap-8 xl:flex" aria-label={d.nav.menu}>
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'label relative py-1 transition-colors hover:text-ink',
                    active && 'text-ink',
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px w-full origin-left bg-carmine transition-transform duration-500',
                      active ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4 lg:gap-6">
            <p className="label hidden items-center sm:flex">
              <span className="text-ink">{locale.toUpperCase()}</span>
              <span className="mx-1.5 text-ink-3">/</span>
              <Link href={switchHref} hrefLang={other} className="transition-colors hover:text-ink">
                {other.toUpperCase()}
              </Link>
            </p>

            <Link
              href={routes.quote(locale)}
              className="hidden border border-ink px-5 py-2.5 transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
            >
              <span className="label text-ink transition-colors group-hover:text-paper">
                {d.nav.quote}
              </span>
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
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-paper xl:hidden"
            initial={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            animate={reduced ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
            exit={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="shell flex h-full flex-col justify-center pt-16">
              <ul className="flex flex-col">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      className="display block border-b border-[var(--rule)] py-4 text-3xl text-ink sm:text-4xl"
                    >
                      {link.label}
                    </Link>
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
