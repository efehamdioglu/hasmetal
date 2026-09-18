/**
 * Every URL the old WordPress site published, mapped onto the new structure.
 *
 * The old site carried five pairs of duplicate pages (mimari-sistem-serileri
 * and -2, hm-commerce-center and -2, aksesuarlar and aksesuar-ve-mekanizma,
 * conta-fitil-grubu and fitil-ve-conta, insaat-taahhut and insaat-ve-taahhut).
 * Each pair collapses onto one canonical address here, which is what stops the
 * duplicate content from splitting the site's authority.
 */
export const legacyRedirects: { from: string; to: string }[] = [
  /* corporate */
  { from: '/kurumsal', to: '/kurumsal' },
  { from: '/hakkimizda', to: '/kurumsal' },
  { from: '/basinda-biz', to: '/kurumsal' },

  /* systems: two duplicate index pages collapse onto one */
  { from: '/mimari-sistem-serileri', to: '/sistemler' },
  { from: '/mimari-sistem-serileri-2', to: '/sistemler' },
  { from: '/hm-55-kapi-ve-pencere-sistem', to: '/sistemler/hm-55' },
  { from: '/hm-55-t-yalitimli-kapi-ve-pencere-sistem', to: '/sistemler/hm-55-t' },
  { from: '/c50-cephe-sistem', to: '/sistemler/c50' },
  { from: '/c60-kapi-ve-pencere-sistem', to: '/sistemler/c60' },

  /* products: two duplicate pairs collapse */
  { from: '/standart-profiller', to: '/urunler/standart-profiller' },
  { from: '/aluminyum-profiller', to: '/urunler/standart-profiller' },
  { from: '/aksesuarlar', to: '/urunler/aksesuar-ve-mekanizma' },
  { from: '/aksesuar-ve-mekanizma', to: '/urunler/aksesuar-ve-mekanizma' },
  { from: '/conta-fitil-grubu', to: '/urunler/fitil-ve-conta' },
  { from: '/fitil-ve-conta', to: '/urunler/fitil-ve-conta' },

  /* services */
  { from: '/hizmetlerimiz', to: '/hizmetler' },
  {
    from: '/ahsap-kaplama-ve-elektrostatik-toz-boyama',
    to: '/hizmetler/ahsap-kaplama-ve-elektrostatik-toz-boyama',
  },
  { from: '/insaat-taahhut', to: '/hizmetler/insaat-ve-taahhut' },
  { from: '/insaat-ve-taahhut', to: '/hizmetler/insaat-ve-taahhut' },
  { from: '/cephe-kertme-makinesi', to: '/hizmetler' },

  /* projects */
  { from: '/referanslar', to: '/referanslar' },
  { from: '/cepa-evleri', to: '/referanslar/cepa-evleri' },

  /* HM Commerce Center: three addresses for one building */
  { from: '/hm-commerce-center', to: '/hm-commerce-center' },
  { from: '/hm-commerce-center-2', to: '/hm-commerce-center' },
  { from: '/hm-commerce-otel-is-merkezi', to: '/hm-commerce-center' },
  { from: '/2024/01/29/hm-commerce-center', to: '/hm-commerce-center' },

  /* the rest */
  { from: '/bayiliklerimiz', to: '/bayiliklerimiz' },
  { from: '/iletisim', to: '/iletisim' },
]

/** Left over from the WordPress install and never meant to be public. */
export const goneUrls = ['/2023/12/26/hello-world']

/** Paths the new site serves itself, so they must not be redirected. */
const SELF_SERVED = new Set([
  '/kurumsal',
  '/referanslar',
  '/hm-commerce-center',
  '/bayiliklerimiz',
  '/iletisim',
])

export const activeRedirects = legacyRedirects.filter((r) => !SELF_SERVED.has(r.from))

/** Everything the old sitemap listed, used by the URL verification script. */
export const legacyUrls = [
  '/',
  ...legacyRedirects.map((r) => r.from),
  ...goneUrls,
]
