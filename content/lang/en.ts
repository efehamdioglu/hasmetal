import type { Lang } from './types.ts'

export const en: Lang = {
  ui: {
    nav: {
      about: 'Company',
      systems: 'Systems',
      products: 'Products',
      services: 'Services',
      projects: 'Projects',
      partners: 'Partners',
      catalogues: 'Catalogues',
      contact: 'Contact',
      quote: 'Request a quote',
      menu: 'Main menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home: 'Has Metal, home',
      language: 'Language',
    },
    common: {
      homeCrumb: 'Home',
      breadcrumb: 'Breadcrumb',
      view: 'View',
      explore: 'Explore',
      all: 'All',
      allProjects: 'All projects',
      projectCount: (n) => (n === 1 ? '1 project' : `${n} projects`),
      since: 'Since 1974',
      scrollHint: 'Scroll',
      locations: 'Locations',
      navigation: 'Navigation',
      rights: 'All rights reserved.',
      strapline: 'Architectural Aluminium Systems',
      city: 'City',
      year: 'Year',
      scope: 'Scope',
      system: 'System',
    },
    catalogue: {
      open: 'Open the catalogue',
      prev: 'Previous page',
      next: 'Next page',
      first: 'First page',
      last: 'Last page',
      page: 'Page',
      pageCount: (n) => (n === 1 ? '1 page' : `${n} pages`),
      of: (a, b) => `${a} / ${b}`,
      thumbnails: 'Pages',
      hideThumbnails: 'Hide pages',
      zoom: 'Enlarge',
      close: 'Close',
      download: 'Download PDF',
      goToPage: 'Go to page',
      keyboardHint: 'Use the arrow keys to turn pages.',
      cover: 'Cover',
    },
    sections: {
      about: 'About us',
      history: 'History',
      specs: 'Technical data',
      faq: 'Frequently asked',
      gallery: 'Gallery',
      relatedProjects: 'More projects',
      ctaTitle: 'Get a quote for your project',
    },
    form: {
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company',
      subject: 'Subject',
      message: 'Your message',
      submit: 'Send',
      sending: 'Sending…',
      honeypot: 'Website (leave empty)',
      workingHours: 'Opening hours',
    },
    notFound: {
      title: 'We could not find that page.',
      body: 'The link may have changed. Carry on from the projects, or get in touch.',
      home: 'Home',
    },
  },

  pages: {
    home: {
      timelineTitle: 'From one workshop to four facilities.',
      heroAlt: 'Şişli Municipality building, aluminium facade and brise soleil',
      heroCaption: 'Şişli Municipality, İstanbul',
      commerceAlt: 'HM Commerce Center hotel and business centre, İvedik OSB Ankara',
    },
    about: {
      title: 'Company',
      lead: 'What began in an iron fabrication workshop in 1974 is today two facilities in Ankara, our own system series and a reference list spread across seven cities.',
      story: 'The story',
      timelineTitle: 'From one workshop to four facilities.',
      imageAlt: 'The Has Metal facility in Siteler, Ankara',
    },
    systems: {
      title: 'Architectural System Series',
      lead: 'Door, window and facade series of our own making. Insulated and non insulated builds, a curtain wall grid, and sections defined for wide openings.',
    },
    products: {
      title: 'Products',
      lead: 'Alongside the system series, everything that holds a frame together: profile, hardware and the seal.',
    },
    services: {
      title: 'Services',
      lead: 'Making the profile is not the end of it: we finish the surface, and where it is called for we put the building up as well.',
    },
    projects: {
      title: 'Projects',
      lead: 'From housing to hotels, from a university research centre to a municipal headquarters. Aluminium framing and facade work on forty six buildings across seven cities.',
    },
    partners: {
      title: 'Partners',
      lead: 'The hardware that decides how long a door or window lasts comes from established European manufacturers. Being their dealer means spare parts and technical support are still there years later.',
    },
    commerce: {
      title: 'HM Commerce Center',
      lead: 'A hotel and business centre on a 15,243 m² site in İvedik OSB, with 50,710 m² of construction. The first and largest job on the construction line we entered in 2013.',
      body: 'After forty years of making aluminium for other people’s buildings, we built our own. Every detail from the facade to the framing is solved with our own systems; the building is both a business centre and the scale test of how we manufacture.',
      imageAlt: 'HM Commerce Center hotel and business centre',
    },
    contact: {
      title: 'Contact',
      lead: 'Three facilities, so the right number rather than one number. Use the form below for project enquiries, technical documentation and dealership applications.',
      formTitle: 'Write to us',
      fax: 'Fax',
    },
    quote: {
      title: 'Request a quote',
      lead: 'Once the dimensions, the chosen system and the delivery schedule are clear we prepare a firm proposal. If you already have project files, say so in the form and we will send you a way to share them.',
    },
    catalogues: {
      title: 'Catalogues',
      lead: 'Technical documentation for our own system series, and the catalogues of the hardware brands we represent. Turn the pages, enlarge any single page, and download our own documents as PDF.',
      ours: 'Has Metal publications',
      brands: 'Brand catalogues',
      others: 'Other catalogues',
    },
    brandWall: {
      title: 'Dealership',
      body: 'Write to us about hardware supply and dealership enquiries.',
    },
    cta: {
      body: 'Once the dimensions, the system and the delivery schedule are clear we put a firm proposal together. Write or call.',
    },
    navPanel: {
      commerce: 'The hotel and business centre we built',
      partners: 'The hardware brands we represent',
      catalogues: (n) => `${n} catalogues you can read page by page`,
    },
    docs: {
      title: 'Technical documentation',
      body: 'Section dimensions, technical drawings and hardware schedules are in the 2024 architectural systems catalogue. Read it page by page or download the PDF.',
      cta: 'Open the catalogue',
      ask: 'Or write to us →',
    },
  },

  meta: {
    home: {
      title: 'Has Metal | Architectural Aluminium Systems, Ankara',
      description:
        'Architectural aluminium since 1974. Door and window systems, curtain walling, profile and hardware supply. Ankara based, 46 references in seven cities.',
    },
    about: {
      title: 'Company | Has Metal since 1974',
      description:
        'Founded in 1974 by Halis Bekar. Fifty one years from iron fabrication to architectural aluminium, two facilities in Ankara and references in seven cities.',
    },
    systems: {
      title: 'System Series | HM 55, HM 55 T, C50, C60',
      description:
        'The aluminium systems Has Metal makes itself: the HM 55 and HM 55 T door and window series, the C50 curtain wall and the C60 system for wide openings.',
    },
    products: {
      title: 'Products | Standard profiles, hardware and seals',
      description:
        'Standard aluminium profiles, door and window hardware built to European standards, and matched seal groups. Supplied from stock in İvedik OSB, Ankara.',
    },
    services: {
      title: 'Services | Surface finishing and contracting',
      description:
        'Aluminium surface finishing by electrostatic powder coating and wood effect coating; construction and contracting work since 2013.',
    },
    projects: {
      title: 'Projects | 46 aluminium framing and facade jobs',
      description:
        'Regnum Sky Tower, Hilton Garden Inn, the METU research centre, Şişli Municipality and more. Forty six aluminium framing and facade jobs in seven cities.',
    },
    partners: {
      title: 'Partners | GU, SIEGENIA, GIESSE, KALE',
      description:
        'Has Metal is the dealer for door and window hardware from GU-Gretsch Unitas, SIEGENIA, GIESSE, ASSA ABLOY, DORMA, KALE and KAHE.',
    },
    catalogues: {
      title: 'Catalogues | Systems, profiles and hardware',
      description:
        'The Has Metal systems and profile catalogues, plus GU, SIEGENIA, GIESSE, ASSA ABLOY, KALE and KAHE hardware. Read page by page or download the PDF.',
    },
    commerce: {
      title: 'HM Commerce Center | Hotel and business centre',
      description:
        'A hotel and business centre in İvedik OSB with 50,710 m² of construction on a 15,243 m² site; a building Has Metal put up itself.',
    },
    contact: {
      title: 'Contact | Three facilities in Ankara',
      description:
        'Reach Has Metal: the Siteler head office, the İvedik OSB logistics and project unit, and HM Commerce Center. Addresses, phones and the enquiry form.',
    },
    quote: {
      title: 'Request a quote | Has Metal',
      description:
        'Ask for a quote on architectural aluminium systems, profiles and hardware. With the dimensions, system and schedule settled we prepare a firm proposal.',
    },
  },

  patterns: {
    entryTitle: (title) => `${title} | Has Metal`,
    projectTitle: (name) => `${name} | Has Metal reference project`,
    projectDescription: (name, where) =>
      `${name} ${where} is one of the reference projects where Has Metal aluminium framing and facade systems were installed.`,
    inCity: (city) => `in ${city}`,
    noCity: 'in Türkiye',
    catalogueTitle: (title, pages) => `${title} | ${pages} pages`,
  },

  content: {
    tagline: 'Architectural aluminium since 1974.',
    locations: {
      merkez: { label: 'Head office', name: 'Has Metal Aluminium, Siteler' },
      lojistik: { label: 'Logistics and projects', name: 'Has Metal Aluminium, İvedik' },
      'hm-commerce-center': {
        label: 'HM Commerce Center',
        name: 'HM Commerce Center Hotel and Business Centre',
      },
    },
    systems: {
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
    },
    products: {
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
    },
    services: {
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
    },
    partners: {
      'GU-Gretsch Unitas': 'Window and door hardware',
      SIEGENIA: 'Architectural hardware systems',
      GIESSE: 'Door and window accessories',
      'ASSA ABLOY': 'Entrance and access solutions',
      DORMA: 'Door closing and control systems',
      KALE: 'Locks and security hardware',
      KAHE: 'Aluminium framing accessories',
    },
    home: {
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
    },
    about: [
      'Founded in 1974 by Halis Bekar, the company began in 600 m² of covered space working in iron fabrication and its fittings, and arrived at today on a principle of constant development and renewal. Operating from 4,000 m² of covered space in Ankara Siteler, it set out to meet the needs of the sector and to offer quality products through the manufacture and sale of aluminium framing and accessories.',
      'Through agreements with significant manufacturers, the company took on distribution of products made to European standards and put both its own name and the names of its solution partners in front of the sector. A branch on 4,500 m² in Ankara İvedik OSB, opened for the logistics and project unit, widened the sales network and developed the product range. Aluminium framing and curtain wall systems have been supplied to business centres, shopping centres and housing projects at home and abroad.',
      'In 2013 the Has Metal board took the decision to step into construction and began a business and trade centre project on a 15,243 m² site in Ankara İvedik OSB, with 50,710 m² of construction area. After that first step the company turned towards housing and contracting projects and made its name on a number of them.',
      'The founding principle is to put customer satisfaction first and to deliver quality in both product and service. With a team that keeps growing and strengthening, we work at high performance and efficiency to hold our position in the sector. Ahead of us, we intend to keep standing out through a customer focused approach, through our projects and through our quality, and to keep offering the best solutions with a product range and a service capacity that widen year on year.',
    ],
    catalogues: {
      'has-metal-mimari-sistemler': {
        title: 'Has Metal Architectural Systems',
        summary:
          'Section dimensions, technical drawings and hardware schedules for the HM 55, HM 55 T, C50 and C60 series.',
      },
      'has-metal-standart-profiller': {
        title: 'Has Metal Standard Profiles',
        summary: 'Sections and dimensions of the standard aluminium profiles supplied from stock.',
      },
      gu: {
        title: 'GU-Gretsch Unitas Catalogue',
        summary:
          'Window and door hardware: espagnolette sets, hinge groups, sliding gear and automatic entrance systems.',
      },
      siegenia: {
        title: 'SIEGENIA Catalogue',
        summary:
          'Architectural hardware systems: turn and tilt sets, sliding sash gear, ventilation and smart locking solutions.',
      },
      giesse: {
        title: 'GIESSE Catalogue',
        summary:
          'Door and window accessories for aluminium framing: handles, hinges, keeps and facade fittings.',
      },
      'assa-abloy': {
        title: 'ASSA ABLOY Product Catalogue',
        summary:
          'Entrance and access solutions: door closers, panic hardware, automatic door systems and locking groups.',
      },
      kale: {
        title: 'Kale Technical Catalogue',
        summary:
          'Lock cases, barrel cylinders, steel door hardware and security accessories, with dimension tables and installation details.',
      },
      kahe: {
        title: 'KAHE Catalogue',
        summary:
          'Aluminium framing accessories and mechanism groups: handle sets, sliding systems, gaskets and sealing products.',
      },
    },
  },
}
