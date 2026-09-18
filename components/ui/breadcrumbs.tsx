import Link from 'next/link'

export type Crumb = { label: string; href?: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Sayfa yolu" className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
      {items.map((item, i) => (
        <span key={item.label + i} className="flex items-center gap-2.5">
          {item.href ? (
            <Link href={item.href} className="label transition-colors hover:text-alu-100">
              {item.label}
            </Link>
          ) : (
            <span className="label text-alu-100" aria-current="page">
              {item.label}
            </span>
          )}
          {i < items.length - 1 && (
            <span aria-hidden className="text-alu-700">
              ›
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
