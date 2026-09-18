import type { Lang } from './types.ts'

export const it: Lang = {
  ui: {
    nav: {
      about: 'Azienda',
      systems: 'Sistemi',
      products: 'Prodotti',
      services: 'Servizi',
      projects: 'Referenze',
      partners: 'Partner',
      catalogues: 'Cataloghi',
      contact: 'Contatti',
      quote: 'Richiedi un preventivo',
      menu: 'Menu principale',
      openMenu: 'Apri il menu',
      closeMenu: 'Chiudi il menu',
      home: 'Has Metal, home',
      language: 'Lingua',
    },
    common: {
      homeCrumb: 'Home',
      breadcrumb: 'Percorso',
      view: 'Vedi',
      explore: 'Esplora',
      all: 'Tutti',
      allProjects: 'Tutte le referenze',
      projectCount: (n) => (n === 1 ? '1 progetto' : `${n} progetti`),
      since: 'Dal 1974',
      scrollHint: 'Scorri',
      locations: 'Sedi',
      navigation: 'Navigazione',
      rights: 'Tutti i diritti riservati.',
      strapline: 'Sistemi in alluminio per l’architettura',
      city: 'Città',
      year: 'Anno',
      scope: 'Ambito',
      system: 'Sistema',
    },
    catalogue: {
      open: 'Apri il catalogo',
      prev: 'Pagina precedente',
      next: 'Pagina successiva',
      first: 'Prima pagina',
      last: 'Ultima pagina',
      page: 'Pagina',
      pageCount: (n) => (n === 1 ? '1 pagina' : `${n} pagine`),
      of: (a, b) => `${a} / ${b}`,
      thumbnails: 'Pagine',
      hideThumbnails: 'Nascondi le pagine',
      zoom: 'Ingrandisci',
      close: 'Chiudi',
      download: 'Scarica il PDF',
      goToPage: 'Vai alla pagina',
      keyboardHint: 'Con le frecce della tastiera si girano le pagine.',
      cover: 'Copertina',
    },
    sections: {
      about: 'Chi siamo',
      history: 'Storia',
      specs: 'Dati tecnici',
      faq: 'Domande frequenti',
      gallery: 'Galleria',
      relatedProjects: 'Altre referenze',
      ctaTitle: 'Un preventivo per il vostro progetto',
    },
    form: {
      name: 'Nome e cognome',
      email: 'E-mail',
      phone: 'Telefono',
      company: 'Azienda',
      subject: 'Oggetto',
      message: 'Il vostro messaggio',
      submit: 'Invia',
      sending: 'Invio…',
      honeypot: 'Sito web (lasciare vuoto)',
      workingHours: 'Orari',
    },
    notFound: {
      title: 'Questa pagina non si trova.',
      body: 'Il collegamento potrebbe essere cambiato. Proseguite dalle referenze oppure scriveteci.',
      home: 'Home',
    },
  },

  pages: {
    home: {
      timelineTitle: 'Da un’officina a quattro sedi.',
      heroAlt: 'Municipio di Şişli, facciata in alluminio e frangisole',
      heroCaption: 'Municipio di Şişli, İstanbul',
      commerceAlt: 'HM Commerce Center, hotel e centro direzionale, İvedik OSB Ankara',
    },
    about: {
      title: 'Azienda',
      lead: 'Quello che nel 1974 è cominciato in un’officina di carpenteria oggi sono due stabilimenti ad Ankara, serie di sistemi nostre e referenze in sette città.',
      story: 'La storia',
      timelineTitle: 'Da un’officina a quattro sedi.',
      imageAlt: 'Lo stabilimento Has Metal di Siteler, Ankara',
    },
    systems: {
      title: 'Serie di sistemi',
      lead: 'Serie di porte, finestre e facciate di nostra produzione. Versioni isolate e non isolate, reticolo per facciata continua e profili definiti per grandi luci.',
    },
    products: {
      title: 'Prodotti',
      lead: 'Accanto alle serie, tutto ciò che tiene in piedi un serramento: profilo, ferramenta e tenuta.',
    },
    services: {
      title: 'Servizi',
      lead: 'Il profilo non basta: trattiamo la superficie e, dove serve, costruiamo anche l’edificio.',
    },
    projects: {
      title: 'Referenze',
      lead: 'Dal residenziale all’hotel, dal centro di ricerca universitario al municipio. Serramenti e facciate in alluminio su quarantasei edifici, in sette città.',
    },
    partners: {
      title: 'Partner',
      lead: 'La ferramenta che decide quanto dura una porta o una finestra viene da produttori europei affermati. Essere loro rivenditori significa che ricambi e assistenza tecnica ci sono anche anni dopo.',
    },
    commerce: {
      title: 'HM Commerce Center',
      lead: 'Un hotel e centro direzionale su un lotto di 15.243 m² a İvedik OSB, con 50.710 m² di superficie costruita. Il primo e più grande cantiere del ramo costruzioni aperto nel 2013.',
      body: 'Dopo quarant’anni di alluminio per gli edifici degli altri, abbiamo costruito il nostro. Dalla facciata al serramento ogni dettaglio è risolto con i nostri sistemi; l’edificio è insieme un centro direzionale e la prova di scala della nostra produzione.',
      imageAlt: 'HM Commerce Center, hotel e centro direzionale',
    },
    contact: {
      title: 'Contatti',
      lead: 'Tre sedi, quindi il numero giusto invece di un numero solo. Usate il modulo per richieste di progetto, documentazione tecnica e candidature da rivenditore.',
      formTitle: 'Scriveteci',
      fax: 'Fax',
    },
    quote: {
      title: 'Richiedi un preventivo',
      lead: 'Quando misure, sistema scelto e tempi di consegna sono definiti prepariamo un’offerta vincolante. Se avete già gli elaborati, segnalatelo nel modulo e vi indicheremo come inviarli.',
    },
    catalogues: {
      title: 'Cataloghi',
      lead: 'La documentazione tecnica delle nostre serie e i cataloghi dei marchi di ferramenta che rappresentiamo. Girate le pagine, ingrandite la singola pagina, scaricate i nostri cataloghi in PDF.',
      ours: 'Pubblicazioni Has Metal',
      brands: 'Cataloghi dei marchi',
      others: 'Altri cataloghi',
    },
    brandWall: {
      title: 'Rivendita',
      body: 'Scriveteci per la fornitura di ferramenta e le richieste di rivendita.',
    },
    cta: {
      body: 'Quando misure, sistema e tempi sono definiti prepariamo un’offerta vincolante. Scrivete o chiamate.',
    },
    navPanel: {
      commerce: 'L’hotel e centro direzionale che abbiamo costruito',
      partners: 'I marchi di ferramenta che rappresentiamo',
      catalogues: (n) => `${n} cataloghi da sfogliare pagina per pagina`,
    },
    docs: {
      title: 'Documentazione tecnica',
      body: 'Sezioni, disegni tecnici ed elenchi di ferramenta sono nel catalogo sistemi 2024. Potete leggerlo pagina per pagina oppure scaricarlo in PDF.',
      cta: 'Apri il catalogo',
      ask: 'Oppure scriveteci →',
    },
  },

  meta: {
    home: {
      title: 'Has Metal | Sistemi in alluminio per l’architettura, Ankara',
      description:
        'Alluminio per l’architettura dal 1974. Porte e finestre, facciate continue, profili e ferramenta. Sede ad Ankara, 46 referenze in sette città.',
    },
    about: {
      title: 'Azienda | Has Metal dal 1974',
      description:
        'Fondata nel 1974 da Halis Bekar. Cinquantun anni dalla carpenteria all’alluminio per l’architettura, due stabilimenti ad Ankara, referenze in sette città.',
    },
    systems: {
      title: 'Serie | HM 55, HM 55 T, C50, C60',
      description:
        'I sistemi in alluminio che Has Metal produce: le serie per porte e finestre HM 55 e HM 55 T, la facciata continua C50 e il sistema C60 per grandi luci.',
    },
    products: {
      title: 'Prodotti | Profili, ferramenta e guarnizioni',
      description:
        'Profili in alluminio standard, ferramenta per porte e finestre a norma europea e guarnizioni abbinate. Forniti da magazzino a İvedik OSB, Ankara.',
    },
    services: {
      title: 'Servizi | Trattamento superficiale e costruzioni',
      description:
        'Trattamento superficiale dell’alluminio con verniciatura a polvere ed effetto legno; lavori di costruzione e appalto dal 2013.',
    },
    projects: {
      title: 'Referenze | 46 cantieri di serramenti e facciate',
      description:
        'Regnum Sky Tower, Hilton Garden Inn, il centro ricerche della METU, il municipio di Şişli e altri. Quarantasei referenze in sette città.',
    },
    partners: {
      title: 'Partner | GU, SIEGENIA, GIESSE, KALE',
      description:
        'Has Metal è rivenditore della ferramenta per porte e finestre di GU-Gretsch Unitas, SIEGENIA, GIESSE, ASSA ABLOY, DORMA, KALE e KAHE.',
    },
    catalogues: {
      title: 'Cataloghi | Sistemi, profili e ferramenta',
      description:
        'I cataloghi dei sistemi Has Metal e quelli di GU, SIEGENIA, GIESSE, ASSA ABLOY, KALE e KAHE. Da sfogliare online o da scaricare in PDF.',
    },
    commerce: {
      title: 'HM Commerce Center | Hotel e centro direzionale',
      description:
        'Hotel e centro direzionale a İvedik OSB, 50.710 m² costruiti su un lotto di 15.243 m²; un edificio realizzato da Has Metal stessa.',
    },
    contact: {
      title: 'Contatti | Tre sedi ad Ankara',
      description:
        'Come raggiungere Has Metal: sede di Siteler, unità logistica e progetti di İvedik OSB, HM Commerce Center. Indirizzi, telefoni e modulo di richiesta.',
    },
    quote: {
      title: 'Richiedi un preventivo | Has Metal',
      description:
        'Chiedete un preventivo per sistemi in alluminio, profili e ferramenta. Definiti misure, sistema e tempi, prepariamo un’offerta vincolante.',
    },
  },

  patterns: {
    entryTitle: (title) => `${title} | Has Metal`,
    projectTitle: (name) => `${name} | Referenza Has Metal`,
    projectDescription: (name, where) =>
      `${name} ${where} è una delle referenze in cui sono stati montati serramenti e sistemi di facciata in alluminio Has Metal.`,
    inCity: (city) => `a ${city}`,
    noCity: 'in Türkiye',
    catalogueTitle: (title, pages) => `${title} | ${pages} pagine`,
  },

  content: {
    tagline: 'Alluminio per l’architettura dal 1974.',
    locations: {
      merkez: { label: 'Sede', name: 'Has Metal Aluminium, Siteler' },
      lojistik: { label: 'Logistica e progetti', name: 'Has Metal Aluminium, İvedik' },
      'hm-commerce-center': {
        label: 'HM Commerce Center',
        name: 'HM Commerce Center, hotel e centro direzionale',
      },
    },
    systems: {
      'hm-55': {
        title: 'Sistema per porte e finestre HM 55',
        summary: 'Serie non isolata',
        intro:
          'La serie per porte e finestre di nostra produzione. È disegnata per le aperture che chiedono una sezione sottile e un funzionamento pulito, dalle partizioni interne alle luci senza carico di riscaldamento.',
      },
      'hm-55-t': {
        title: 'HM 55 T, porte e finestre a taglio termico',
        summary: 'Serie a taglio termico',
        intro:
          'Il membro isolato della famiglia HM 55. La barriera fra il guscio interno e quello esterno del profilo interrompe il ponte termico: è ciò che serve agli ambienti riscaldati e ai progetti con un obiettivo energetico definito.',
      },
      c50: {
        title: 'Sistema di facciata C50',
        summary: 'Facciata continua',
        intro:
          'Vetri e pannelli di tamponamento appesi a un reticolo di montanti e traversi portanti. Questo strato intermedio riporta il carico alla struttura e lascia leggere la facciata come una superficie continua.',
      },
      c60: {
        title: 'Sistema per porte e finestre C60',
        summary: 'Serie per grandi luci',
        intro:
          'Il ramo porte e finestre della famiglia C, definito per ante di dimensioni maggiori e per i pacchetti vetro più spessi che ne conseguono.',
      },
    },
    products: {
      'standart-profiller': {
        title: 'Profili standard',
        summary: 'Profili in alluminio da magazzino',
        intro:
          'Oltre ai sistemi architettonici forniamo da magazzino i profili in alluminio standard che un cantiere richiede. L’unità logistica di İvedik OSB esiste per tenere breve il tempo fra ordine e spedizione.',
      },
      'aksesuar-ve-mekanizma': {
        title: 'Ferramenta e meccanismi',
        summary: 'Ferramenta a norma europea',
        intro:
          'I pezzi che nessuno vede decidono quanto dura una porta o una finestra. Dalle cerniere ai cilindri, dai chiudiporta alle cremonesi, ci riforniamo dai produttori europei affermati.',
      },
      'fitil-ve-conta': {
        title: 'Guarnizioni',
        summary: 'Lo strato che decide la tenuta',
        intro:
          'La tenuta all’aria e all’acqua di un serramento si gioca in gran parte sulla scelta delle guarnizioni. Forniamo da un’unica fonte le gamme abbinate a ciascuna serie.',
      },
    },
    services: {
      'ahsap-kaplama-ve-elektrostatik-toz-boyama': {
        title: 'Effetto legno e verniciatura a polvere',
        summary: 'Linea di trattamento superficiale',
        intro:
          'Il trattamento superficiale dei profili in alluminio avviene in casa. La verniciatura elettrostatica a polvere dà i colori della cartella RAL, l’effetto legno dà un aspetto naturale; la scelta segue il linguaggio del progetto.',
      },
      'insaat-ve-taahhut': {
        title: 'Costruzioni e appalti',
        summary: 'Costruiamo dal 2013',
        intro:
          'Una decisione del consiglio, nel 2013, ci ha portati nelle costruzioni. Il ramo è partito dal nostro centro direzionale ed è proseguito con edilizia residenziale e appalti. Conosciamo l’alluminio anche come chi lo posa, non solo come chi lo fornisce.',
      },
    },
    partners: {
      'GU-Gretsch Unitas': 'Ferramenta per finestre e porte',
      SIEGENIA: 'Sistemi di ferramenta architettonica',
      GIESSE: 'Accessori per porte e finestre',
      'ASSA ABLOY': 'Soluzioni di ingresso e controllo accessi',
      DORMA: 'Chiudiporta e sistemi di comando',
      KALE: 'Serrature e ferramenta di sicurezza',
      KAHE: 'Accessori per serramenti in alluminio',
    },
    home: {
      hero: {
        eyebrow: 'Dal 1974',
        title: ['Cinquantun anni', 'di alluminio costruito.'],
        subtitle:
          'Da Ankara a sette città; dai sistemi per porte e finestre alle facciate continue, l’alluminio di quarantasei progetti.',
      },
      intro: {
        kicker: 'Has Metal',
        body: 'Abbiamo cominciato in un’officina di carpenteria di 600 metri quadrati. Oggi ci sono due stabilimenti ad Ankara, serie di sistemi di nostra produzione, la rivendita dei grandi produttori europei di ferramenta e referenze in sette città. L’unica cosa che nel frattempo non è cambiata è l’insistenza a chiudere un lavoro sul dettaglio giusto.',
      },
      timeline: [
        {
          title: 'Fondazione',
          body: 'Halis Bekar avvia l’attività nella carpenteria e nei suoi accessori, su 600 m² coperti.',
          metricUnit: 'm² coperti',
        },
        {
          title: 'Il passaggio all’alluminio',
          body: 'Produzione e vendita di serramenti e accessori in alluminio su 4.000 m² ad Ankara Siteler.',
          metricUnit: 'm² a Siteler',
        },
        {
          title: 'Unità logistica e progetti',
          body: 'Una filiale di 4.500 m² ad Ankara İvedik OSB; rete di vendita e gamma si allargano.',
          metricUnit: 'm² a İvedik OSB',
        },
        {
          title: 'Ingresso nelle costruzioni',
          body: 'Un centro direzionale e commerciale di 50.710 m² costruiti su un lotto di 15.243 m² a İvedik OSB.',
          metricUnit: 'm² costruiti',
        },
      ],
      projectsIntro: {
        kicker: 'Referenze',
        title: 'Quarantasei edifici, sette città.',
        body: 'Dal residenziale all’hotel, dal centro di ricerca al municipio. Scorrete l’elenco e l’edificio compare accanto.',
      },
      commerce: {
        kicker: 'HM Commerce Center',
        title: 'L’edificio che abbiamo fatto noi.',
        body: 'Un hotel e centro direzionale su un lotto di 15.243 m² a İvedik OSB, con 50.710 m² costruiti. La prova più chiara che l’alluminio non ci limitiamo a fornirlo: lo portiamo dall’inizio alla fine.',
        statLabels: ['lotto', 'superficie costruita'],
      },
    },
    about: [
      'Fondata nel 1974 da Halis Bekar, l’azienda è partita da 600 m² coperti nella carpenteria e nei relativi accessori, ed è arrivata a oggi su un principio di sviluppo e rinnovamento costanti. Operando da 4.000 m² coperti ad Ankara Siteler, si è data l’obiettivo di coprire il fabbisogno del settore e di offrire prodotti di qualità attraverso la produzione e la vendita di serramenti e accessori in alluminio.',
      'Con accordi stretti con produttori importanti, l’azienda ha assunto la distribuzione di prodotti realizzati a norma europea e ha fatto conoscere al settore sia il proprio nome sia quello dei suoi partner. Una filiale di 4.500 m² ad Ankara İvedik OSB, aperta per la logistica e i progetti, ha allargato la rete di vendita e sviluppato la gamma. Serramenti e sistemi di facciata in alluminio sono stati forniti a centri direzionali, centri commerciali e programmi residenziali, in Türkiye e all’estero.',
      'Nel 2013 il consiglio di amministrazione di Has Metal ha deciso di entrare nelle costruzioni e ha avviato ad Ankara İvedik OSB un centro direzionale e commerciale di 50.710 m² costruiti su un lotto di 15.243 m². Dopo quel primo passo l’azienda si è rivolta all’edilizia residenziale e agli appalti, facendosi un nome su diversi di essi.',
      'Il principio di fondo della casa è mettere davanti la soddisfazione del cliente e offrire qualità, nel prodotto come nel servizio. Con una squadra che cresce e si rafforza, lavoriamo con prestazioni ed efficienza elevate per tenere la nostra posizione nel settore. Anche in futuro intendiamo distinguerci con un approccio centrato sul cliente, con i nostri cantieri e con la nostra qualità, e offrire le soluzioni migliori con una gamma e una capacità che si allargano di anno in anno.',
    ],
    catalogues: {
      'has-metal-mimari-sistemler': {
        title: 'Catalogo sistemi Has Metal',
        summary:
          'Sezioni, disegni tecnici ed elenchi di ferramenta delle serie HM 55, HM 55 T, C50 e C60.',
      },
      'has-metal-standart-profiller': {
        title: 'Profili standard Has Metal',
        summary: 'Sezioni e misure dei profili in alluminio standard forniti da magazzino.',
      },
      gu: {
        title: 'Catalogo GU-Gretsch Unitas',
        summary:
          'Ferramenta per finestre e porte: cremonesi, cerniere, scorrevoli e sistemi di ingresso automatici.',
      },
      siegenia: {
        title: 'Catalogo SIEGENIA',
        summary:
          'Ferramenta architettonica: anta-ribalta, scorrevoli, ventilazione e chiusure intelligenti.',
      },
      giesse: {
        title: 'Catalogo GIESSE',
        summary:
          'Accessori per porte e finestre in alluminio: maniglie, cerniere, incontri e componenti di facciata.',
      },
      'assa-abloy': {
        title: 'Catalogo prodotti ASSA ABLOY',
        summary:
          'Soluzioni di ingresso e accesso: chiudiporta, maniglioni antipanico, porte automatiche e gruppi di chiusura.',
      },
      kale: {
        title: 'Catalogo tecnico Kale',
        summary:
          'Casse serratura, cilindri, ferramenta per porte in acciaio e accessori di sicurezza, con tabelle di misura e dettagli di posa.',
      },
      kahe: {
        title: 'Catalogo KAHE',
        summary:
          'Accessori e meccanismi per serramenti in alluminio: maniglie, sistemi scorrevoli, guarnizioni e prodotti di tenuta.',
      },
    },
  },
}
