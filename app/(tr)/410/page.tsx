import { NotFoundPage } from '@/components/pages/simple-pages'

/** The WordPress demo post used to live here; it is intentionally gone. */
export const metadata = { robots: { index: false, follow: false } }

export default function Page() {
  return <NotFoundPage locale="tr" />
}
