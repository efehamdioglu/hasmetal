import type { ReactNode } from 'react'
import { Nav } from '@/components/shell/nav'
import { Footer } from '@/components/shell/footer'
import { SmoothScroll } from '@/components/motion/smooth-scroll'
import { JsonLd } from '@/components/ui/json-ld'
import { localBusinessSchemas, organizationSchema } from '@/lib/schema'
import { fontClass } from '@/lib/fonts'
import { htmlLang, type Locale } from '@/content/i18n'
import { navSections } from '@/content/nav'

/**
 * Each locale gets its own root layout so `<html lang>` is honest; everything
 * inside the document is shared from here.
 */
export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html
      lang={htmlLang[locale]}
      className={`${fontClass} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-paper">
        <JsonLd data={[organizationSchema(), ...localBusinessSchemas()]} />
        <SmoothScroll />
        <Nav locale={locale} sections={navSections(locale)} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  )
}
