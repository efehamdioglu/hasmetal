/**
 * The hand-written layer. Every factual claim here is traceable to the old
 * site: the founding year and founder, the square metres, the 2013 decision,
 * the three addresses, the dealer brands and the four system names.
 *
 * Nothing technical is invented. Where the client has not supplied data yet
 * (profile depths, Uf values, project years) the field is simply absent and
 * the template renders honestly around it.
 */

export const brand = {
  name: 'Has Metal',
  legalName: 'Has Metal Alüminyum',
  founded: 1974,
  founder: 'Halis Bekar',
  tagline: '1974’ten bu yana mimari alüminyum.',
  url: 'https://hasmetal.com.tr',
}

export const locations = [
  {
    id: 'merkez',
    label: 'Merkez',
    name: 'Has Metal Alüminyum Siteler',
    lines: ['Hurma Sokak No: 44/2', 'Siteler, Altındağ / Ankara'],
    postalCode: '06160',
    phone: '+90 312 353 29 55',
    phoneHref: 'tel:+903123532955',
    fax: '+90 312 351 42 74',
  },
  {
    id: 'lojistik',
    label: 'Lojistik ve Proje',
    name: 'Has Metal Alüminyum İvedik',
    lines: ['İvedik OSB, Serhat 1468. Cad. No: 4', 'Has Emek Sitesi, Yenimahalle / Ankara'],
    postalCode: '06070',
    phone: '+90 312 394 11 75',
    phoneHref: 'tel:+903123941175',
  },
  {
    id: 'hm-commerce-center',
    label: 'HM Commerce Center',
    name: 'HM Commerce Center Otel ve İş Merkezi',
    lines: ['İvedik OSB, Melih Gökçek Bulvarı No: 63', 'İvedik, Ostim / Ankara'],
    postalCode: '06370',
    phone: '+90 312 380 90 00',
    phoneHref: 'tel:+903123809000',
  },
]

export const contact = {
  email: 'info@hasmetal.com.tr',
  emailHref: 'mailto:info@hasmetal.com.tr',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Has+Metal+Alüminyum+Siteler+Ankara',
}

/* --------------------------------------------------------------- systems */

export const systems = [
  {
    slug: 'hm-55',
    code: 'HM 55',
    title: 'HM 55 Kapı ve Pencere Sistemi',
    summary: 'Yalıtımsız kapı ve pencere serisi',
    image: '55-yalitimsiz-render-kopya',
    intro:
      'Has Metal’in kendi üretimi kapı ve pencere serisi. İç mekân bölmelerinden ısıtma yükü olmayan açıklıklara kadar, ince kesit ve düzgün işleyiş arayan uygulamalar için kurgulanmıştır.',
  },
  {
    slug: 'hm-55-t',
    code: 'HM 55 T',
    title: 'HM 55 T Yalıtımlı Kapı ve Pencere Sistemi',
    summary: 'Isı bariyerli kapı ve pencere serisi',
    image: '55-t-golge',
    intro:
      'HM 55 ailesinin ısı yalıtımlı üyesi. Profilin iç ve dış kabuğu arasındaki bariyer ısı köprüsünü keser; ısıtılan hacimlerde ve enerji performansı tanımlı projelerde kullanılır.',
  },
  {
    slug: 'c50',
    code: 'C50',
    title: 'C50 Cephe Sistemi',
    summary: 'Giydirme cephe serisi',
    image: 'c50-kopya-katalog',
    intro:
      'Taşıyıcı dikme ve kayıt ızgarası üzerine cam ve dolgu panellerin giydirildiği cephe sistemi. Yükü yapıya aktaran bu ara katman, cephenin kesintisiz bir yüzey olarak okunmasını sağlar.',
  },
  {
    slug: 'c60',
    code: 'C60',
    title: 'C60 Kapı ve Pencere Sistemi',
    summary: 'Geniş açıklıklar için kapı ve pencere serisi',
    intro:
      'C ailesinin kapı ve pencere kolu. Daha büyük kanat ölçülerinin ve kalın cam kombinasyonlarının gerektiği açıklıklar için tanımlanmıştır.',
  },
]

/**
 * The series catalogue carries the real drawings, so this sends the reader
 * straight to it and keeps writing to us as the second option.
 */
export const specsPending = {
  tr: {
    title: 'Teknik doküman',
    body: 'Kesit ölçüleri, teknik çizimler ve aksesuar listeleri 2024 mimari sistemler kataloğunda. Sayfa sayfa okuyabilir ya da PDF olarak indirebilirsiniz.',
    cta: 'Kataloğu aç',
    ask: 'Ya da bize yazın →',
  },
  en: {
    title: 'Technical documentation',
    body: 'Section dimensions, technical drawings and hardware schedules are in the 2024 architectural systems catalogue. Read it page by page or download the PDF.',
    cta: 'Open the catalogue',
    ask: 'Or write to us →',
  },
}

/* -------------------------------------------------------------- products */

export const products = [
  {
    slug: 'standart-profiller',
    title: 'Standart Profiller',
    summary: 'Stoktan alüminyum profil tedariği',
    intro:
      'Mimari sistemlerin dışında, projelerin gerektirdiği standart alüminyum profilleri stoktan tedarik ediyoruz. İvedik OSB’deki lojistik birimi, sipariş ile sevkiyat arasındaki süreyi kısa tutmak için kuruldu.',
  },
  {
    slug: 'aksesuar-ve-mekanizma',
    title: 'Aksesuar ve Mekanizma',
    summary: 'Avrupa normlarında donanım',
    intro:
      'Kapı ve pencerenin ömrünü belirleyen, görünmeyen parçalar. Menteşeden kilit göbeğine, kapı kapatıcıdan ispanyolet mekanizmasına kadar donanımı Avrupa’nın yerleşik üreticilerinden tedarik ediyoruz.',
  },
  {
    slug: 'fitil-ve-conta',
    title: 'Fitil ve Conta Grubu',
    summary: 'Sızdırmazlığın belirleyici katmanı',
    intro:
      'Bir doğramanın hava ve su geçirmezliği, büyük ölçüde fitil ve conta seçimiyle belirlenir. Sistem serilerine uygun conta gruplarını tek elden sağlıyoruz.',
  },
]

/* -------------------------------------------------------------- services */

export const services = [
  {
    slug: 'ahsap-kaplama-ve-elektrostatik-toz-boyama',
    title: 'Ahşap Kaplama ve Elektrostatik Toz Boyama',
    summary: 'Yüzey işlem hattı',
    intro:
      'Alüminyum profillerin yüzey işlemini kendi bünyemizde yapıyoruz. Elektrostatik toz boya ile RAL kataloğundaki renkler, ahşap desen kaplama ile doğal görünüm elde edilir; ikisi de mimari projenin diline göre seçilir.',
  },
  {
    slug: 'insaat-ve-taahhut',
    title: 'İnşaat ve Taahhüt',
    summary: '2013’ten bu yana yapı üreten taraf',
    intro:
      '2013’te alınan kararla inşaat sektörüne girdik. Kendi iş ve ticaret merkezimizle başlayan bu hat, toplu konut ve taahhüt projeleriyle sürdü. Alüminyumu yalnızca tedarik eden değil, uygulayan taraf olarak da tanıyoruz.',
  },
]

/* -------------------------------------------------------------- partners */

/**
 * The old site named these in two places that did not agree: the dealer list
 * carried five, the /aksesuarlar logo wall carried six. This is the union of
 * both. DORMA is the one the wall has no artwork for, so its card falls back
 * to the name set in type.
 *
 * Logos come from the client's own files, repainted from white to ink by
 * scripts/brand-logos.mjs so they can sit on the paper ground.
 */
export type Partner = {
  name: string
  note: string
  logo?: { src: string; width: number; height: number }
}

export const partners: Partner[] = [
  {
    name: 'GU-Gretsch Unitas',
    note: 'Pencere ve kapı donanımı',
    logo: { src: '/brand/gu.webp', width: 169, height: 120 },
  },
  {
    name: 'SIEGENIA',
    note: 'Mimari donanım sistemleri',
    logo: { src: '/brand/siegenia.webp', width: 498, height: 120 },
  },
  {
    name: 'GIESSE',
    note: 'Kapı ve pencere aksesuarları',
    logo: { src: '/brand/giesse.webp', width: 679, height: 120 },
  },
  {
    name: 'ASSA ABLOY',
    note: 'Giriş ve erişim çözümleri',
    logo: { src: '/brand/assa-abloy.webp', width: 864, height: 120 },
  },
  { name: 'DORMA', note: 'Kapı kapatma ve kontrol sistemleri' },
  {
    name: 'KALE',
    note: 'Kilit ve güvenlik donanımı',
    logo: { src: '/brand/kale.webp', width: 566, height: 120 },
  },
  {
    name: 'KAHE',
    note: 'Alüminyum doğrama aksesuarları',
    logo: { src: '/brand/kahe.webp', width: 283, height: 120 },
  },
]

/* ------------------------------------------------------------- homepage */

export const home = {
  hero: {
    eyebrow: '1974’ten bu yana',
    title: ['Mimari alüminyumda', 'elli bir yıl.'],
    subtitle:
      'Ankara’dan yedi şehre; kapı ve pencere sistemlerinden giydirme cepheye, kırk altı projede alüminyum işi.',
  },
  intro: {
    kicker: 'Has Metal',
    body: 'Bir demir doğrama atölyesinde 600 metrekareyle başladık. Bugün Ankara’da iki tesis, kendi ürettiğimiz sistem serileri, Avrupa’nın yerleşik donanım üreticilerinin bayiliği ve yedi şehre yayılmış bir referans listesi var. Arada geçen sürede değişmeyen tek şey, işin doğru detayla bitmesi konusundaki ısrar oldu.',
  },
  /** every figure traceable to the About page of the old site */
  timeline: [
    {
      year: '1974',
      title: 'Kuruluş',
      body: 'Halis Bekar, demir doğrama ve aksamları alanında 600 m² kapalı alanda işe başladı.',
      metric: 600,
      metricUnit: 'm² kapalı alan',
    },
    {
      year: '',
      title: 'Alüminyuma geçiş',
      body: 'Ankara Siteler’de 4.000 m² kapalı alanda alüminyum doğrama ve aksesuarları üretimi ile satışı.',
      metric: 4000,
      metricUnit: 'm² Siteler',
    },
    {
      year: '',
      title: 'Lojistik ve proje birimi',
      body: 'Ankara İvedik OSB’de 4.500 m² alanda şube; satış ağı ve ürün gamı genişledi.',
      metric: 4500,
      metricUnit: 'm² İvedik OSB',
    },
    {
      year: '2013',
      title: 'İnşaat sektörüne giriş',
      body: 'İvedik OSB’de 15.243 m² arazide, 50.710 m² inşaat alanlı iş ve ticaret merkezi projesi başladı.',
      metric: 50710,
      metricUnit: 'm² inşaat alanı',
    },
  ],
  projectsIntro: {
    kicker: 'Referanslar',
    title: 'Kırk altı yapı, yedi şehir.',
    body: 'Konuttan otele, üniversite araştırma merkezinden belediye binasına. Listeyi gezerken yapıyı yanında görürsünüz.',
  },
  commerce: {
    kicker: 'HM Commerce Center',
    title: 'Kendi yaptığımız yapı.',
    body: 'İvedik OSB’de 15.243 m² arazi üzerinde, 50.710 m² inşaat alanına sahip otel ve iş merkezi. Alüminyum işini yalnızca tedarik etmediğimizin, uçtan uca üstlendiğimizin en somut örneği.',
    stats: [
      { value: 15243, unit: 'm²', label: 'arazi' },
      { value: 50710, unit: 'm²', label: 'inşaat alanı' },
    ],
  },
}

/* ------------------------------------------------------ project overlays */

/**
 * The old site lists only a name and a city per project. Year, scope and the
 * systems used are being requested from the client; anything added here shows
 * up automatically on the project page.
 */
export const projectDetails: Record<
  string,
  { year?: string; scope?: string; systems?: string[]; description?: string }
> = {}
