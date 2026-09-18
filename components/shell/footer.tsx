import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { routes, t, type Locale } from '@/content/i18n'
import { brandFor, locationsFor } from '@/content/locale'
import { contact } from '@/content/site'

export function Footer({ locale }: { locale: Locale }) {
  const d = t(locale)
  const brand = brandFor(locale)
  const locations = locationsFor(locale)

  const links = [
    { label: d.nav.about, href: routes.about(locale) },
    { label: d.nav.systems, href: routes.systems(locale) },
    { label: d.nav.products, href: routes.products(locale) },
    { label: d.nav.services, href: routes.services(locale) },
    { label: d.nav.projects, href: routes.projects(locale) },
    { label: d.nav.partners, href: routes.partners(locale) },
    { label: d.nav.contact, href: routes.contact(locale) },
  ]

  return (
    <footer className="rule-t bg-paper-2">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr_1.4fr] lg:gap-16">
          <div>
            <Logo className="h-9 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-2">{brand.tagline}</p>
            <a
              href={contact.emailHref}
              className="mt-6 inline-block text-sm text-ink underline decoration-[var(--rule-strong)] underline-offset-4 transition-colors hover:decoration-carmine"
            >
              {contact.email}
            </a>
          </div>

          <div>
            <p className="label">{d.common.navigation}</p>
            <ul className="mt-5 space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-2 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label">{d.common.locations}</p>
            <div className="mt-5 grid gap-6 sm:grid-cols-3">
              {locations.map((l) => (
                <address key={l.id} className="text-sm leading-relaxed text-ink-2 not-italic">
                  <span className="label block">{l.label}</span>
                  <span className="mt-2 block">{l.lines.join(', ')}</span>
                  <a
                    href={l.phoneHref}
                    className="mt-1.5 block text-ink transition-colors hover:text-carmine"
                  >
                    {l.phone}
                  </a>
                </address>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="shell rule-t flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {new Date().getFullYear()} {brand.legalName}. {d.common.rights}
        </p>
        <p className="label">{d.common.strapline}</p>
      </div>
    </footer>
  )
}
