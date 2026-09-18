'use client'

import { useCallback, useSyncExternalStore } from 'react'

const noopSubscribe = () => () => {}

/** True only after hydration: the sanctioned way to gate client-only UI. */
export function useIsClient() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  )
}

/** Live media-query result; stays correct when the query starts matching. */
export function useMediaQuery(query: string, serverValue = false) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query])

  return useSyncExternalStore(subscribe, getSnapshot, () => serverValue)
}

function subscribeScroll(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true })
  return () => window.removeEventListener('scroll', onChange)
}

/** Whether the page has scrolled past `threshold` pixels. */
export function useScrolledPast(threshold = 24) {
  const getSnapshot = useCallback(() => window.scrollY > threshold, [threshold])
  return useSyncExternalStore(subscribeScroll, getSnapshot, () => false)
}
