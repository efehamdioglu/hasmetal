import type { Lang } from './types.ts'

export const de: Lang = {
  ui: {
    nav: {
      about: 'Unternehmen',
      systems: 'Systeme',
      products: 'Produkte',
      services: 'Leistungen',
      projects: 'Referenzen',
      partners: 'Partner',
      catalogues: 'Kataloge',
      contact: 'Kontakt',
      quote: 'Angebot anfordern',
      menu: 'Hauptmenü',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      home: 'Has Metal, Startseite',
      language: 'Sprache',
    },
    common: {
      homeCrumb: 'Startseite',
      breadcrumb: 'Navigationspfad',
      view: 'Ansehen',
      explore: 'Entdecken',
      all: 'Alle',
      allProjects: 'Alle Referenzen',
      projectCount: (n) => (n === 1 ? '1 Projekt' : `${n} Projekte`),
      since: 'Seit 1974',
      scrollHint: 'Scrollen',
      locations: 'Standorte',
      navigation: 'Navigation',
      rights: 'Alle Rechte vorbehalten.',
      strapline: 'Architektonische Aluminiumsysteme',
      city: 'Stadt',
      year: 'Jahr',
      scope: 'Umfang',
      system: 'System',
    },
    catalogue: {
      open: 'Katalog öffnen',
      prev: 'Vorherige Seite',
      next: 'Nächste Seite',
      first: 'Erste Seite',
      last: 'Letzte Seite',
      page: 'Seite',
      pageCount: (n) => (n === 1 ? '1 Seite' : `${n} Seiten`),
      of: (a, b) => `${a} / ${b}`,
      thumbnails: 'Seiten',
      hideThumbnails: 'Seiten ausblenden',
      zoom: 'Vergrößern',
      close: 'Schließen',
      download: 'PDF herunterladen',
      goToPage: 'Zur Seite',
      keyboardHint: 'Mit den Pfeiltasten blättern Sie um.',
      cover: 'Titelseite',
    },
    sections: {
      about: 'Über uns',
      history: 'Geschichte',
      specs: 'Technische Daten',
      faq: 'Häufige Fragen',
      gallery: 'Galerie',
      relatedProjects: 'Weitere Referenzen',
      ctaTitle: 'Angebot für Ihr Projekt',
    },
    form: {
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      company: 'Firma',
      subject: 'Betreff',
      message: 'Ihre Nachricht',
      submit: 'Senden',
      sending: 'Wird gesendet…',
      honeypot: 'Website (bitte leer lassen)',
      workingHours: 'Öffnungszeiten',
    },
    notFound: {
      title: 'Diese Seite haben wir nicht gefunden.',
      body: 'Der Link hat sich vielleicht geändert. Gehen Sie zu den Referenzen weiter oder schreiben Sie uns.',
      home: 'Startseite',
    },
  },

  pages: {
    home: {
      timelineTitle: 'Von einer Werkstatt zu vier Standorten.',
      heroAlt: 'Rathaus Şişli, Aluminiumfassade mit Sonnenschutzlamellen',
      heroCaption: 'Rathaus Şişli, İstanbul',
      commerceAlt: 'HM Commerce Center, Hotel und Geschäftszentrum, İvedik OSB Ankara',
    },
    about: {
      title: 'Unternehmen',
      lead: 'Was 1974 in einer Schlosserei begann, sind heute zwei Werke in Ankara, eigene Systemserien und eine Referenzliste in sieben Städten.',
      story: 'Die Geschichte',
      timelineTitle: 'Von einer Werkstatt zu vier Standorten.',
      imageAlt: 'Das Has Metal Werk in Siteler, Ankara',
    },
    systems: {
      title: 'Architektonische Systemserien',
      lead: 'Tür-, Fenster- und Fassadenserien aus eigener Fertigung. Gedämmte und ungedämmte Aufbauten, ein Pfosten-Riegel-Raster und Profile für große Öffnungen.',
    },
    products: {
      title: 'Produkte',
      lead: 'Neben den Systemserien alles, was ein Element zusammenhält: Profil, Beschlag und Dichtung.',
    },
    services: {
      title: 'Leistungen',
      lead: 'Mit dem Profil ist es nicht getan: wir veredeln die Oberfläche und bauen, wo es gefragt ist, auch das Gebäude.',
    },
    projects: {
      title: 'Referenzen',
      lead: 'Vom Wohnbau bis zum Hotel, vom universitären Forschungszentrum bis zum Rathaus. Aluminiumelemente und Fassaden an sechsundvierzig Bauten in sieben Städten.',
    },
    partners: {
      title: 'Partner',
      lead: 'Die Beschläge, die über die Lebensdauer einer Tür oder eines Fensters entscheiden, kommen von etablierten europäischen Herstellern. Händler dieser Marken zu sein heißt, dass Ersatzteile und technische Unterstützung auch nach Jahren verfügbar bleiben.',
    },
    commerce: {
      title: 'HM Commerce Center',
      lead: 'Ein Hotel und Geschäftszentrum auf 15.243 m² Grundstück in İvedik OSB, mit 50.710 m² Bruttogeschossfläche. Das erste und größte Vorhaben unserer 2013 begonnenen Bausparte.',
      body: 'Nach vierzig Jahren Aluminium für die Bauten anderer haben wir unser eigenes gebaut. Von der Fassade bis zum Element ist jedes Detail mit unseren eigenen Systemen gelöst; das Haus ist Geschäftszentrum und Maßstabsprobe unserer Fertigung zugleich.',
      imageAlt: 'HM Commerce Center, Hotel und Geschäftszentrum',
    },
    contact: {
      title: 'Kontakt',
      lead: 'Drei Standorte, also die richtige Nummer statt einer einzigen. Nutzen Sie das Formular für Projektanfragen, technische Unterlagen und Händleranfragen.',
      formTitle: 'Schreiben Sie uns',
      fax: 'Fax',
    },
    quote: {
      title: 'Angebot anfordern',
      lead: 'Sobald Maße, Systemwahl und Liefertermin feststehen, erstellen wir ein verbindliches Angebot. Wenn Sie bereits Projektunterlagen haben, vermerken Sie das im Formular; wir nennen Ihnen einen Weg zur Übermittlung.',
    },
    catalogues: {
      title: 'Kataloge',
      lead: 'Technische Unterlagen unserer eigenen Systemserien und die Kataloge der Beschlagmarken, die wir vertreten. Blättern Sie Seite für Seite, vergrößern Sie einzelne Seiten, laden Sie unsere eigenen Kataloge als PDF herunter.',
      ours: 'Has Metal Publikationen',
      brands: 'Markenkataloge',
      others: 'Weitere Kataloge',
    },
    brandWall: {
      title: 'Händler werden',
      body: 'Schreiben Sie uns wegen Beschlaglieferung und Händleranfragen.',
    },
    cta: {
      body: 'Sobald Maße, System und Liefertermin feststehen, erstellen wir ein verbindliches Angebot. Schreiben Sie oder rufen Sie an.',
    },
    navPanel: {
      commerce: 'Das Hotel und Geschäftszentrum aus eigener Hand',
      partners: 'Die Beschlagmarken, die wir vertreten',
      catalogues: (n) => `${n} Kataloge, Seite für Seite lesbar`,
    },
    docs: {
      title: 'Technische Unterlagen',
      body: 'Profilschnitte, technische Zeichnungen und Beschlaglisten stehen im Systemkatalog 2024. Sie können ihn Seite für Seite lesen oder als PDF herunterladen.',
      cta: 'Katalog öffnen',
      ask: 'Oder schreiben Sie uns →',
    },
  },

  meta: {
    home: {
      title: 'Has Metal | Aluminiumsysteme für Architektur, Ankara',
      description:
        'Architektonisches Aluminium seit 1974. Tür- und Fenstersysteme, Pfosten-Riegel-Fassaden, Profile und Beschläge. Sitz in Ankara, 46 Referenzen in sieben Städten.',
    },
    about: {
      title: 'Unternehmen | Has Metal seit 1974',
      description:
        '1974 von Halis Bekar gegründet. Einundfünfzig Jahre von der Schlosserei zum architektonischen Aluminium, zwei Werke in Ankara, Referenzen in sieben Städten.',
    },
    systems: {
      title: 'Systemserien | HM 55, HM 55 T, C50, C60',
      description:
        'Die Aluminiumsysteme aus eigener Fertigung: die Tür- und Fensterserien HM 55 und HM 55 T, die Pfosten-Riegel-Fassade C50 und das System C60 für große Öffnungen.',
    },
    products: {
      title: 'Produkte | Profile, Beschläge und Dichtungen',
      description:
        'Standard-Aluminiumprofile, Tür- und Fensterbeschläge nach europäischer Norm sowie passende Dichtungsgruppen. Lieferung ab Lager in İvedik OSB, Ankara.',
    },
    services: {
      title: 'Leistungen | Oberflächen und Bauausführung',
      description:
        'Oberflächenveredelung von Aluminium durch Pulverbeschichtung und Holzdekorbeschichtung; Bau- und Generalunternehmerleistungen seit 2013.',
    },
    projects: {
      title: 'Referenzen | 46 Aluminium- und Fassadenprojekte',
      description:
        'Regnum Sky Tower, Hilton Garden Inn, das Forschungszentrum der METU, das Rathaus Şişli und mehr. Sechsundvierzig Referenzen in sieben Städten.',
    },
    partners: {
      title: 'Partner | GU, SIEGENIA, GIESSE, KALE',
      description:
        'Has Metal ist Händler für Tür- und Fensterbeschläge von GU-Gretsch Unitas, SIEGENIA, GIESSE, ASSA ABLOY, DORMA, KALE und KAHE.',
    },
    catalogues: {
      title: 'Kataloge | Systeme, Profile und Beschläge',
      description:
        'Die Systemkataloge von Has Metal sowie die Kataloge von GU, SIEGENIA, GIESSE, ASSA ABLOY, KALE und KAHE. Seite für Seite lesen oder als PDF laden.',
    },
    commerce: {
      title: 'HM Commerce Center | Hotel und Geschäftszentrum',
      description:
        'Hotel und Geschäftszentrum in İvedik OSB mit 50.710 m² Bruttogeschossfläche auf 15.243 m² Grundstück; ein Bau aus eigener Hand.',
    },
    contact: {
      title: 'Kontakt | Drei Standorte in Ankara',
      description:
        'So erreichen Sie Has Metal: Zentrale in Siteler, Logistik und Projektabteilung in İvedik OSB, HM Commerce Center. Adressen, Telefon und Anfrageformular.',
    },
    quote: {
      title: 'Angebot anfordern | Has Metal',
      description:
        'Fordern Sie ein Angebot für Aluminiumsysteme, Profile und Beschläge an. Stehen Maße, System und Termin fest, erstellen wir ein verbindliches Angebot.',
    },
  },

  patterns: {
    entryTitle: (title) => `${title} | Has Metal`,
    projectTitle: (name) => `${name} | Referenzprojekt von Has Metal`,
    projectDescription: (name, where) =>
      `${name} ${where} ist eines der Referenzprojekte, in denen Aluminiumelemente und Fassadensysteme von Has Metal eingebaut wurden.`,
    inCity: (city) => `in ${city}`,
    noCity: 'in der Türkei',
    catalogueTitle: (title, pages) => `${title} | ${pages} Seiten`,
  },

  content: {
    tagline: 'Architektonisches Aluminium seit 1974.',
    locations: {
      merkez: { label: 'Zentrale', name: 'Has Metal Aluminium, Siteler' },
      lojistik: { label: 'Logistik und Projekte', name: 'Has Metal Aluminium, İvedik' },
      'hm-commerce-center': {
        label: 'HM Commerce Center',
        name: 'HM Commerce Center, Hotel und Geschäftszentrum',
      },
    },
    systems: {
      'hm-55': {
        title: 'HM 55 Tür- und Fenstersystem',
        summary: 'Ungedämmte Tür- und Fensterserie',
        intro:
          'Die Tür- und Fensterserie aus eigener Fertigung. Sie ist für Öffnungen gezeichnet, die eine schmale Ansicht und einen sauberen Lauf verlangen, von Innentrennwänden bis zu Öffnungen ohne Heizlast.',
      },
      'hm-55-t': {
        title: 'HM 55 T Tür- und Fenstersystem, thermisch getrennt',
        summary: 'Serie mit thermischer Trennung',
        intro:
          'Das gedämmte Mitglied der HM 55 Familie. Die Barriere zwischen innerer und äußerer Profilschale unterbricht die Wärmebrücke; das brauchen beheizte Räume und Projekte mit festgelegtem Energieziel.',
      },
      c50: {
        title: 'C50 Fassadensystem',
        summary: 'Pfosten-Riegel-Fassade',
        intro:
          'Glas- und Füllelemente, die auf ein Raster aus tragenden Pfosten und Riegeln gehängt werden. Diese Zwischenschicht leitet die Last in die Tragstruktur und lässt die Fassade als eine durchgehende Fläche lesen.',
      },
      c60: {
        title: 'C60 Tür- und Fenstersystem',
        summary: 'Serie für große Öffnungen',
        intro:
          'Der Tür- und Fensterzweig der C Familie, ausgelegt für größere Flügelmaße und die dickeren Glasaufbauten, die damit einhergehen.',
      },
    },
    products: {
      'standart-profiller': {
        title: 'Standardprofile',
        summary: 'Aluminiumprofile ab Lager',
        intro:
          'Über die Systemserien hinaus liefern wir die Standard-Aluminiumprofile, die ein Projekt verlangt, ab Lager. Die Logistikeinheit in İvedik OSB besteht, um die Spanne zwischen Bestellung und Versand kurz zu halten.',
      },
      'aksesuar-ve-mekanizma': {
        title: 'Beschläge und Mechanismen',
        summary: 'Beschläge nach europäischer Norm',
        intro:
          'Die Teile, die niemand sieht, entscheiden über die Lebensdauer einer Tür oder eines Fensters. Von Bändern bis zu Schließzylindern, von Türschließern bis zum Getriebe beziehen wir Beschläge von etablierten europäischen Herstellern.',
      },
      'fitil-ve-conta': {
        title: 'Dichtungen',
        summary: 'Die Schicht, die über die Dichtheit entscheidet',
        intro:
          'Wie luft- und schlagregendicht ein Element ausfällt, entscheidet sich weitgehend an der Wahl der Dichtung. Die zu jeder Systemserie passenden Dichtungsgruppen liefern wir aus einer Hand.',
      },
    },
    services: {
      'ahsap-kaplama-ve-elektrostatik-toz-boyama': {
        title: 'Holzdekor- und Pulverbeschichtung',
        summary: 'Eigene Oberflächenlinie',
        intro:
          'Die Oberflächenveredelung der Aluminiumprofile erfolgt im eigenen Haus. Die elektrostatische Pulverbeschichtung liefert die Farben des RAL Katalogs, die Holzdekorbeschichtung eine natürliche Anmutung; welche gewählt wird, folgt der Sprache der Architektur.',
      },
      'insaat-ve-taahhut': {
        title: 'Bau und Generalunternehmung',
        summary: 'Bauen seit 2013',
        intro:
          'Ein Vorstandsbeschluss führte uns 2013 in den Bau. Die Sparte begann mit unserem eigenen Geschäfts- und Handelszentrum und ging mit Wohnungsbau- und Generalunternehmerprojekten weiter. Wir kennen Aluminium auch als die Seite, die es montiert, nicht nur als die, die es liefert.',
      },
    },
    partners: {
      'GU-Gretsch Unitas': 'Fenster- und Türbeschläge',
      SIEGENIA: 'Architektonische Beschlagsysteme',
      GIESSE: 'Tür- und Fensterzubehör',
      'ASSA ABLOY': 'Eingangs- und Zutrittslösungen',
      DORMA: 'Türschließ- und Steuerungstechnik',
      KALE: 'Schlösser und Sicherheitsbeschläge',
      KAHE: 'Zubehör für Aluminiumelemente',
    },
    home: {
      hero: {
        eyebrow: 'Seit 1974',
        title: ['Einundfünfzig Jahre', 'Aluminium im Bau.'],
        subtitle:
          'Von Ankara in sieben Städte; von Tür- und Fenstersystemen bis zur Pfosten-Riegel-Fassade, Aluminiumarbeiten an sechsundvierzig Projekten.',
      },
      intro: {
        kicker: 'Has Metal',
        body: 'Angefangen haben wir in einer Schlosserei mit 600 Quadratmetern. Heute gibt es zwei Werke in Ankara, Systemserien aus eigener Fertigung, Händlerverträge mit den etablierten Beschlagherstellern Europas und eine Referenzliste über sieben Städte. Das Einzige, was sich dazwischen nicht geändert hat, ist das Beharren darauf, dass eine Arbeit am richtigen Detail endet.',
      },
      timeline: [
        {
          title: 'Gründung',
          body: 'Halis Bekar beginnt mit Schlosserarbeiten und Zubehör auf 600 m² Hallenfläche.',
          metricUnit: 'm² Hallenfläche',
        },
        {
          title: 'Der Schritt zum Aluminium',
          body: 'Fertigung und Vertrieb von Aluminiumelementen und Zubehör auf 4.000 m² in Ankara Siteler.',
          metricUnit: 'm² in Siteler',
        },
        {
          title: 'Logistik und Projektabteilung',
          body: 'Eine Niederlassung auf 4.500 m² in Ankara İvedik OSB; Vertriebsnetz und Sortiment wachsen.',
          metricUnit: 'm² in İvedik OSB',
        },
        {
          title: 'Eintritt in den Bau',
          body: 'Ein Geschäfts- und Handelszentrum mit 50.710 m² Bruttogeschossfläche auf 15.243 m² Grundstück in İvedik OSB.',
          metricUnit: 'm² Baufläche',
        },
      ],
      projectsIntro: {
        kicker: 'Referenzen',
        title: 'Sechsundvierzig Bauten, sieben Städte.',
        body: 'Vom Wohnbau bis zum Hotel, vom Forschungszentrum bis zum Rathaus. Gehen Sie die Liste durch, und das Gebäude erscheint daneben.',
      },
      commerce: {
        kicker: 'HM Commerce Center',
        title: 'Das Haus aus eigener Hand.',
        body: 'Ein Hotel und Geschäftszentrum auf 15.243 m² Grundstück in İvedik OSB, mit 50.710 m² Bruttogeschossfläche. Der deutlichste Beleg dafür, dass wir die Aluminiumarbeit nicht nur liefern, sondern von Anfang bis Ende verantworten.',
        statLabels: ['Grundstück', 'Baufläche'],
      },
    },
    about: [
      '1974 von Halis Bekar gegründet, begann das Unternehmen auf 600 m² Hallenfläche mit Schlosserarbeiten und dem zugehörigen Zubehör und ist über den Grundsatz ständiger Weiterentwicklung und Erneuerung bis heute gewachsen. Von 4.000 m² Hallenfläche in Ankara Siteler aus setzte es sich zum Ziel, den Bedarf der Branche zu decken und über Fertigung und Vertrieb von Aluminiumelementen und Zubehör Qualität anzubieten.',
      'Über Vereinbarungen mit bedeutenden Herstellern übernahm das Unternehmen den Vertrieb von Produkten nach europäischer Norm und machte sowohl den eigenen Namen als auch die Namen seiner Partner in der Branche bekannt. Eine Niederlassung auf 4.500 m² in Ankara İvedik OSB, eröffnet für Logistik und Projektabwicklung, erweiterte das Vertriebsnetz und das Sortiment. Aluminiumelemente und Fassadensysteme wurden an Geschäftszentren, Einkaufszentren und Wohnbauprojekte im In- und Ausland geliefert.',
      '2013 beschloss der Vorstand von Has Metal den Schritt in den Bau und begann in Ankara İvedik OSB ein Geschäfts- und Handelszentrum auf einem Grundstück von 15.243 m² mit 50.710 m² Bruttogeschossfläche. Nach diesem ersten Schritt wandte sich das Unternehmen dem Wohnungsbau und Generalunternehmerprojekten zu und machte sich bei einigen davon einen Namen.',
      'Der Grundsatz des Hauses ist, die Zufriedenheit der Kunden voranzustellen und Qualität in Produkt und Leistung zu liefern. Mit einer Mannschaft, die wächst und stärker wird, arbeiten wir mit hoher Leistung und Effizienz, um unsere Stellung in der Branche zu halten. Auch künftig wollen wir mit einem kundenorientierten Ansatz, mit unseren Projekten und mit unserer Qualität hervortreten und mit einem Jahr für Jahr breiteren Sortiment und wachsender Leistungsfähigkeit die besten Lösungen anbieten.',
    ],
    catalogues: {
      'has-metal-mimari-sistemler': {
        title: 'Has Metal Systemkatalog',
        summary:
          'Profilschnitte, technische Zeichnungen und Beschlaglisten der Serien HM 55, HM 55 T, C50 und C60.',
      },
      'has-metal-standart-profiller': {
        title: 'Has Metal Standardprofile',
        summary: 'Schnitte und Maße der ab Lager gelieferten Standard-Aluminiumprofile.',
      },
      gu: {
        title: 'GU-Gretsch Unitas Katalog',
        summary:
          'Fenster- und Türbeschläge: Getriebe, Bandgruppen, Schiebebeschläge und automatische Eingangssysteme.',
      },
      siegenia: {
        title: 'SIEGENIA Katalog',
        summary:
          'Architektonische Beschlagsysteme: Dreh-Kipp-Garnituren, Schiebebeschläge, Lüftung und smarte Verriegelung.',
      },
      giesse: {
        title: 'GIESSE Katalog',
        summary:
          'Tür- und Fensterzubehör für Aluminiumelemente: Griffe, Bänder, Schließbleche und Fassadenteile.',
      },
      'assa-abloy': {
        title: 'ASSA ABLOY Produktkatalog',
        summary:
          'Eingangs- und Zutrittslösungen: Türschließer, Panikbeschläge, automatische Türsysteme und Schließgruppen.',
      },
      kale: {
        title: 'Kale Technischer Katalog',
        summary:
          'Schlosskästen, Profilzylinder, Stahltürbeschläge und Sicherheitszubehör, mit Maßtabellen und Montagedetails.',
      },
      kahe: {
        title: 'KAHE Katalog',
        summary:
          'Zubehör und Mechanismen für Aluminiumelemente: Griffgarnituren, Schiebesysteme, Dichtungen und Abdichtungsprodukte.',
      },
    },
  },
}
