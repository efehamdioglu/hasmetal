/**
 * English overlay. Turkish in `content/site.ts` is the source of truth; this
 * file only restates the words. Every figure, address, phone number, brand
 * name and slug is deliberately absent here so the two languages can never
 * drift on a fact.
 *
 * Translated by hand, not by machine: the old site ran gtranslate, which is
 * exactly the thing this replaces.
 */

export const brandEn = {
  tagline: 'Architectural aluminium since 1974.',
}

/** Facility labels and legal-ish names; the addresses stay Turkish. */
export const locationsEn: Record<string, { label: string; name: string }> = {
  merkez: {
    label: 'Head office',
    name: 'Has Metal Aluminium, Siteler',
  },
  lojistik: {
    label: 'Logistics and projects',
    name: 'Has Metal Aluminium, İvedik',
  },
  'hm-commerce-center': {
    label: 'HM Commerce Center',
    name: 'HM Commerce Center Hotel and Business Centre',
  },
}

export const systemsEn: Record<string, { title: string; summary: string; intro: string }> = {
  'hm-55': {
    title: 'HM 55 Door and Window System',
    summary: 'Non insulated door and window series',
    intro:
      'Has Metal’s own door and window series. It is drawn for openings that ask for a slim section and a clean action, from interior partitions to apertures that carry no heating load.',
  },
  'hm-55-t': {
    title: 'HM 55 T Thermally Broken Door and Window System',
    summary: 'Thermally broken door and window series',
    intro:
      'The insulated member of the HM 55 family. A barrier between the inner and outer shells of the profile cuts the thermal bridge, which is what heated volumes and projects with a stated energy target need.',
  },
  c50: {
    title: 'C50 Curtain Wall System',
    summary: 'Curtain wall series',
    intro:
      'Glass and infill panels hung on a grid of load carrying mullions and transoms. That intermediate layer passes the load back to the structure and lets the facade read as one uninterrupted surface.',
  },
  c60: {
    title: 'C60 Door and Window System',
    summary: 'Door and window series for wide openings',
    intro:
      'The door and window arm of the C family, defined for larger sash dimensions and the thicker glass build ups that come with them.',
  },
}

export const productsEn: Record<string, { title: string; summary: string; intro: string }> = {
  'standart-profiller': {
    title: 'Standard Profiles',
    summary: 'Aluminium profile supply from stock',
    intro:
      'Beyond the architectural systems, we supply the standard aluminium profiles a project calls for from stock. The logistics unit in İvedik OSB exists to keep the gap between order and dispatch short.',
  },
  'aksesuar-ve-mekanizma': {
    title: 'Hardware and Mechanisms',
    summary: 'Hardware built to European standards',
    intro:
      'The parts nobody sees are the ones that decide how long a door or window lasts. From hinges to lock cylinders, from door closers to espagnolette gear, we source hardware from the established manufacturers of Europe.',
  },
  'fitil-ve-conta': {
    title: 'Gaskets and Seals',
    summary: 'The layer that decides the seal',
    intro:
      'How airtight and watertight a frame turns out is largely settled by the gasket and seal selection. We supply the seal groups matched to each system series from one source.',
  },
}

export const servicesEn: Record<string, { title: string; summary: string; intro: string }> = {
  'ahsap-kaplama-ve-elektrostatik-toz-boyama': {
    title: 'Wood Effect Coating and Powder Coating',
    summary: 'Surface finishing line',
    intro:
      'Surface finishing for aluminium profiles happens in house. Electrostatic powder coating gives the colours of the RAL catalogue, wood effect coating gives a natural appearance; which one is used follows the language of the architecture.',
  },
  'insaat-ve-taahhut': {
    title: 'Construction and Contracting',
    summary: 'Building since 2013',
    intro:
      'A board decision in 2013 took us into construction. The line began with our own business and trade centre and continued with housing and contracting projects. We know aluminium as the party that installs it, not only the one that supplies it.',
  },
}

export const partnersEn: Record<string, string> = {
  'GU-Gretsch Unitas': 'Window and door hardware',
  SIEGENIA: 'Architectural hardware systems',
  GIESSE: 'Door and window accessories',
  DORMA: 'Door closing and access control',
  KALE: 'Locks and security hardware',
}

export const homeEn = {
  hero: {
    eyebrow: 'Since 1974',
    title: ['Fifty one years of', 'architectural aluminium.'],
    subtitle:
      'From Ankara to seven cities; door and window systems through to curtain walling, aluminium work on forty six projects.',
  },
  intro: {
    kicker: 'Has Metal',
    body: 'We started in an iron fabrication workshop with 600 square metres. Today there are two facilities in Ankara, system series of our own making, dealerships for the established hardware manufacturers of Europe and a reference list spread across seven cities. The one thing that has not changed in between is the insistence that a job finishes on the right detail.',
  },
  timeline: [
    {
      title: 'Founded',
      body: 'Halis Bekar began in iron fabrication and its fittings, in 600 m² of covered space.',
      metricUnit: 'm² covered area',
    },
    {
      title: 'The move into aluminium',
      body: 'Manufacture and sale of aluminium framing and accessories in 4,000 m² of covered space in Ankara Siteler.',
      metricUnit: 'm² in Siteler',
    },
    {
      title: 'Logistics and project unit',
      body: 'A branch on 4,500 m² in Ankara İvedik OSB; the sales network and the product range both widened.',
      metricUnit: 'm² in İvedik OSB',
    },
    {
      title: 'Into construction',
      body: 'A business and trade centre with 50,710 m² of construction on a 15,243 m² site in İvedik OSB.',
      metricUnit: 'm² of construction',
    },
  ],
  projectsIntro: {
    kicker: 'Projects',
    title: 'Forty six buildings, seven cities.',
    body: 'Housing to hotels, a university research centre to a municipal headquarters. Run down the list and the building appears beside it.',
  },
  commerce: {
    kicker: 'HM Commerce Center',
    title: 'The building we made ourselves.',
    body: 'A hotel and business centre on a 15,243 m² site in İvedik OSB, with 50,710 m² of construction. The clearest evidence that we do not merely supply the aluminium work but carry it end to end.',
    statLabels: ['site area', 'construction area'],
  },
}

export const aboutEn: string[] = [
  'Founded in 1974 by Halis Bekar, the company began in 600 m² of covered space working in iron fabrication and its fittings, and arrived at today on a principle of constant development and renewal. Operating from 4,000 m² of covered space in Ankara Siteler, it set out to meet the needs of the sector and to offer quality products through the manufacture and sale of aluminium framing and accessories.',
  'Through agreements with significant manufacturers, the company took on distribution of products made to European standards and put both its own name and the names of its solution partners in front of the sector. A branch on 4,500 m² in Ankara İvedik OSB, opened for the logistics and project unit, widened the sales network and developed the product range. Aluminium framing and curtain wall systems have been supplied to business centres, shopping centres and housing projects at home and abroad.',
  'In 2013 the Has Metal board took the decision to step into construction and began a business and trade centre project on a 15,243 m² site in Ankara İvedik OSB, with 50,710 m² of construction area. After that first step the company turned towards housing and contracting projects and made its name on a number of them.',
  'The founding principle is to put customer satisfaction first and to deliver quality in both product and service. With a team that keeps growing and strengthening, we work at high performance and efficiency to hold our position in the sector. Ahead of us, we intend to keep standing out through a customer focused approach, through our projects and through our quality, and to keep offering the best solutions with a product range and a service capacity that widen year on year.',
]
