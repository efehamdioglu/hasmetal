import type { Lang } from './types.ts'

export const fr: Lang = {
  ui: {
    nav: {
      about: 'Entreprise',
      systems: 'Systèmes',
      products: 'Produits',
      services: 'Services',
      projects: 'Références',
      partners: 'Partenaires',
      catalogues: 'Catalogues',
      contact: 'Contact',
      quote: 'Demander un devis',
      menu: 'Menu principal',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      home: 'Has Metal, accueil',
      language: 'Langue',
    },
    common: {
      homeCrumb: 'Accueil',
      breadcrumb: 'Fil d’Ariane',
      view: 'Voir',
      explore: 'Explorer',
      all: 'Tous',
      allProjects: 'Toutes les références',
      projectCount: (n) => (n === 1 ? '1 projet' : `${n} projets`),
      since: 'Depuis 1974',
      scrollHint: 'Faire défiler',
      locations: 'Sites',
      navigation: 'Navigation',
      rights: 'Tous droits réservés.',
      strapline: 'Systèmes en aluminium pour l’architecture',
      city: 'Ville',
      year: 'Année',
      scope: 'Périmètre',
      system: 'Système',
    },
    catalogue: {
      open: 'Ouvrir le catalogue',
      prev: 'Page précédente',
      next: 'Page suivante',
      first: 'Première page',
      last: 'Dernière page',
      page: 'Page',
      pageCount: (n) => (n === 1 ? '1 page' : `${n} pages`),
      of: (a, b) => `${a} / ${b}`,
      thumbnails: 'Pages',
      hideThumbnails: 'Masquer les pages',
      zoom: 'Agrandir',
      close: 'Fermer',
      download: 'Télécharger le PDF',
      goToPage: 'Aller à la page',
      keyboardHint: 'Les flèches du clavier tournent les pages.',
      cover: 'Couverture',
    },
    sections: {
      about: 'À propos',
      history: 'Histoire',
      specs: 'Données techniques',
      faq: 'Questions fréquentes',
      gallery: 'Galerie',
      relatedProjects: 'Autres références',
      ctaTitle: 'Un devis pour votre projet',
    },
    form: {
      name: 'Nom et prénom',
      email: 'E-mail',
      phone: 'Téléphone',
      company: 'Société',
      subject: 'Objet',
      message: 'Votre message',
      submit: 'Envoyer',
      sending: 'Envoi…',
      honeypot: 'Site web (laisser vide)',
      workingHours: 'Horaires',
    },
    notFound: {
      title: 'Cette page reste introuvable.',
      body: 'Le lien a peut-être changé. Poursuivez par les références ou écrivez-nous.',
      home: 'Accueil',
    },
  },

  pages: {
    home: {
      timelineTitle: 'D’un atelier à quatre sites.',
      heroAlt: 'Mairie de Şişli, façade en aluminium et brise-soleil',
      heroCaption: 'Mairie de Şişli, İstanbul',
      commerceAlt: 'HM Commerce Center, hôtel et centre d’affaires, İvedik OSB Ankara',
    },
    about: {
      title: 'Entreprise',
      lead: 'Ce qui a commencé en 1974 dans un atelier de serrurerie, ce sont aujourd’hui deux sites à Ankara, nos propres séries et des références dans sept villes.',
      story: 'L’histoire',
      timelineTitle: 'D’un atelier à quatre sites.',
      imageAlt: 'Le site Has Metal de Siteler, Ankara',
    },
    systems: {
      title: 'Séries de systèmes',
      lead: 'Séries de portes, de fenêtres et de façades de notre propre fabrication. Versions isolées et non isolées, trame de mur-rideau et profils définis pour les grandes ouvertures.',
    },
    products: {
      title: 'Produits',
      lead: 'À côté des séries, tout ce qui tient une menuiserie debout : le profil, la quincaillerie et l’étanchéité.',
    },
    services: {
      title: 'Services',
      lead: 'Le profil ne suffit pas : nous traitons la surface et, quand il le faut, nous construisons aussi le bâtiment.',
    },
    projects: {
      title: 'Références',
      lead: 'Du logement à l’hôtel, du centre de recherche universitaire à la mairie. Menuiseries et façades en aluminium sur quarante-six bâtiments, dans sept villes.',
    },
    partners: {
      title: 'Partenaires',
      lead: 'La quincaillerie qui décide de la durée de vie d’une porte ou d’une fenêtre vient de fabricants européens établis. Être distributeur de ces marques, c’est garantir que les pièces et l’assistance technique existent encore des années plus tard.',
    },
    commerce: {
      title: 'HM Commerce Center',
      lead: 'Un hôtel et centre d’affaires sur un terrain de 15 243 m² à İvedik OSB, avec 50 710 m² de surface construite. Le premier et le plus grand chantier de la branche construction ouverte en 2013.',
      body: 'Après quarante ans d’aluminium pour les bâtiments des autres, nous avons construit le nôtre. De la façade à la menuiserie, chaque détail est résolu avec nos propres systèmes ; l’immeuble est à la fois un centre d’affaires et la mise à l’échelle de notre fabrication.',
      imageAlt: 'HM Commerce Center, hôtel et centre d’affaires',
    },
    contact: {
      title: 'Contact',
      lead: 'Trois sites, donc le bon numéro plutôt qu’un numéro unique. Utilisez le formulaire pour une consultation, une documentation technique ou une demande de distribution.',
      formTitle: 'Écrivez-nous',
      fax: 'Fax',
    },
    quote: {
      title: 'Demander un devis',
      lead: 'Dès que les dimensions, le système retenu et le calendrier sont fixés, nous préparons une offre ferme. Si vous avez déjà un dossier, signalez-le dans le formulaire et nous vous indiquerons comment nous le transmettre.',
    },
    catalogues: {
      title: 'Catalogues',
      lead: 'La documentation technique de nos propres séries et les catalogues des marques de quincaillerie que nous représentons. Tournez les pages, agrandissez une page, téléchargez nos propres catalogues en PDF.',
      ours: 'Publications Has Metal',
      brands: 'Catalogues des marques',
      others: 'Autres catalogues',
    },
    brandWall: {
      title: 'Distribution',
      body: 'Écrivez-nous pour la fourniture de quincaillerie et les demandes de distribution.',
    },
    cta: {
      body: 'Dès que les dimensions, le système et le calendrier sont fixés, nous préparons une offre ferme. Écrivez ou appelez.',
    },
    navPanel: {
      commerce: 'L’hôtel et centre d’affaires que nous avons construit',
      partners: 'Les marques de quincaillerie que nous représentons',
      catalogues: (n) => `${n} catalogues à feuilleter page par page`,
    },
    docs: {
      title: 'Documentation technique',
      body: 'Sections, dessins techniques et listes de quincaillerie figurent dans le catalogue des systèmes 2024. Vous pouvez le lire page par page ou le télécharger en PDF.',
      cta: 'Ouvrir le catalogue',
      ask: 'Ou écrivez-nous →',
    },
  },

  meta: {
    home: {
      title: 'Has Metal | Systèmes aluminium pour l’architecture, Ankara',
      description:
        'Aluminium architectural depuis 1974. Portes et fenêtres, murs-rideaux, profils et quincaillerie. Basés à Ankara, 46 références dans sept villes.',
    },
    about: {
      title: 'Entreprise | Has Metal depuis 1974',
      description:
        'Fondée en 1974 par Halis Bekar. Cinquante et un ans de la serrurerie à l’aluminium architectural, deux sites à Ankara, des références dans sept villes.',
    },
    systems: {
      title: 'Séries | HM 55, HM 55 T, C50, C60',
      description:
        'Les systèmes aluminium que Has Metal fabrique : les séries de portes et fenêtres HM 55 et HM 55 T, le mur-rideau C50 et le système C60 pour grandes ouvertures.',
    },
    products: {
      title: 'Produits | Profils, quincaillerie et joints',
      description:
        'Profils aluminium standard, quincaillerie de porte et de fenêtre aux normes européennes et joints assortis. Livrés depuis le stock d’İvedik OSB, Ankara.',
    },
    services: {
      title: 'Services | Traitement de surface et construction',
      description:
        'Traitement de surface de l’aluminium par thermolaquage et décor bois ; travaux de construction et d’entreprise générale depuis 2013.',
    },
    projects: {
      title: 'Références | 46 chantiers menuiserie et façade',
      description:
        'Regnum Sky Tower, Hilton Garden Inn, le centre de recherche de la METU, la mairie de Şişli et d’autres. Quarante-six références dans sept villes.',
    },
    partners: {
      title: 'Partenaires | GU, SIEGENIA, GIESSE, KALE',
      description:
        'Has Metal distribue la quincaillerie de porte et de fenêtre de GU-Gretsch Unitas, SIEGENIA, GIESSE, ASSA ABLOY, DORMA, KALE et KAHE.',
    },
    catalogues: {
      title: 'Catalogues | Systèmes, profils et quincaillerie',
      description:
        'Les catalogues de systèmes Has Metal ainsi que ceux de GU, SIEGENIA, GIESSE, ASSA ABLOY, KALE et KAHE. À feuilleter en ligne ou à télécharger en PDF.',
    },
    commerce: {
      title: 'HM Commerce Center | Hôtel et centre d’affaires',
      description:
        'Hôtel et centre d’affaires à İvedik OSB, 50 710 m² construits sur un terrain de 15 243 m² ; un bâtiment que Has Metal a réalisé lui-même.',
    },
    contact: {
      title: 'Contact | Trois sites à Ankara',
      description:
        'Joindre Has Metal : siège de Siteler, unité logistique et projets d’İvedik OSB, HM Commerce Center. Adresses, téléphones et formulaire de demande.',
    },
    quote: {
      title: 'Demander un devis | Has Metal',
      description:
        'Demandez un devis pour des systèmes aluminium, des profils et de la quincaillerie. Dimensions, système et calendrier fixés, nous chiffrons fermement.',
    },
  },

  patterns: {
    entryTitle: (title) => `${title} | Has Metal`,
    projectTitle: (name) => `${name} | Référence Has Metal`,
    projectDescription: (name, where) =>
      `${name} ${where} fait partie des références où les menuiseries et les systèmes de façade en aluminium Has Metal ont été mis en œuvre.`,
    inCity: (city) => `à ${city}`,
    noCity: 'en Türkiye',
    catalogueTitle: (title, pages) => `${title} | ${pages} pages`,
  },

  content: {
    tagline: 'Aluminium architectural depuis 1974.',
    locations: {
      merkez: { label: 'Siège', name: 'Has Metal Aluminium, Siteler' },
      lojistik: { label: 'Logistique et projets', name: 'Has Metal Aluminium, İvedik' },
      'hm-commerce-center': {
        label: 'HM Commerce Center',
        name: 'HM Commerce Center, hôtel et centre d’affaires',
      },
    },
    systems: {
      'hm-55': {
        title: 'Système de portes et fenêtres HM 55',
        summary: 'Série non isolée',
        intro:
          'La série de portes et fenêtres que nous fabriquons nous-mêmes. Elle est dessinée pour les ouvertures qui demandent une vue étroite et un fonctionnement net, des cloisons intérieures aux baies sans charge de chauffage.',
      },
      'hm-55-t': {
        title: 'HM 55 T, portes et fenêtres à rupture thermique',
        summary: 'Série à rupture de pont thermique',
        intro:
          'Le membre isolé de la famille HM 55. La barrière entre la coque intérieure et la coque extérieure du profil coupe le pont thermique ; c’est ce qu’exigent les volumes chauffés et les projets à objectif énergétique défini.',
      },
      c50: {
        title: 'Système de façade C50',
        summary: 'Mur-rideau',
        intro:
          'Des vitrages et des panneaux de remplissage accrochés à une trame de montants et de traverses porteurs. Cette couche intermédiaire ramène la charge vers la structure et laisse lire la façade comme une surface continue.',
      },
      c60: {
        title: 'Système de portes et fenêtres C60',
        summary: 'Série pour grandes ouvertures',
        intro:
          'La branche portes et fenêtres de la famille C, définie pour des dimensions d’ouvrant plus grandes et les vitrages plus épais qui vont avec.',
      },
    },
    products: {
      'standart-profiller': {
        title: 'Profils standard',
        summary: 'Profils aluminium sur stock',
        intro:
          'Au-delà des systèmes architecturaux, nous fournissons sur stock les profils aluminium standard qu’un chantier réclame. L’unité logistique d’İvedik OSB existe pour raccourcir le délai entre la commande et l’expédition.',
      },
      'aksesuar-ve-mekanizma': {
        title: 'Quincaillerie et mécanismes',
        summary: 'Quincaillerie aux normes européennes',
        intro:
          'Les pièces que personne ne voit décident de la durée de vie d’une porte ou d’une fenêtre. Des paumelles aux cylindres, des ferme-portes aux crémones, nous nous fournissons chez les fabricants européens établis.',
      },
      'fitil-ve-conta': {
        title: 'Joints et garnitures',
        summary: 'La couche qui décide de l’étanchéité',
        intro:
          'L’étanchéité à l’air et à l’eau d’une menuiserie se joue en grande partie sur le choix des joints. Nous fournissons d’une seule main les gammes de joints assorties à chaque série.',
      },
    },
    services: {
      'ahsap-kaplama-ve-elektrostatik-toz-boyama': {
        title: 'Décor bois et thermolaquage',
        summary: 'Ligne de traitement de surface',
        intro:
          'Le traitement de surface des profils aluminium se fait en interne. Le thermolaquage donne les teintes du nuancier RAL, le décor bois donne un aspect naturel ; le choix suit le langage du projet architectural.',
      },
      'insaat-ve-taahhut': {
        title: 'Construction et entreprise générale',
        summary: 'Bâtisseurs depuis 2013',
        intro:
          'Une décision du conseil, en 2013, nous a fait entrer dans la construction. La branche a commencé par notre propre centre d’affaires et s’est poursuivie par des programmes de logements et des marchés d’entreprise générale. Nous connaissons l’aluminium comme la partie qui le pose, pas seulement comme celle qui le livre.',
      },
    },
    partners: {
      'GU-Gretsch Unitas': 'Quincaillerie de fenêtre et de porte',
      SIEGENIA: 'Systèmes de quincaillerie architecturale',
      GIESSE: 'Accessoires de porte et de fenêtre',
      'ASSA ABLOY': 'Solutions d’entrée et de contrôle d’accès',
      DORMA: 'Ferme-portes et systèmes de commande',
      KALE: 'Serrures et quincaillerie de sécurité',
      KAHE: 'Accessoires pour menuiserie aluminium',
    },
    home: {
      hero: {
        eyebrow: 'Depuis 1974',
        title: ['Cinquante et un ans', 'd’aluminium bâti.'],
        subtitle:
          'D’Ankara à sept villes ; des systèmes de portes et fenêtres aux murs-rideaux, l’aluminium de quarante-six projets.',
      },
      intro: {
        kicker: 'Has Metal',
        body: 'Nous avons commencé dans un atelier de serrurerie de 600 mètres carrés. Aujourd’hui il y a deux sites à Ankara, des séries que nous fabriquons nous-mêmes, la distribution des grands fabricants européens de quincaillerie et des références dans sept villes. La seule chose qui n’a pas changé entre-temps, c’est l’insistance à finir un ouvrage sur le bon détail.',
      },
      timeline: [
        {
          title: 'Fondation',
          body: 'Halis Bekar démarre en serrurerie et accessoires, sur 600 m² couverts.',
          metricUnit: 'm² couverts',
        },
        {
          title: 'Le passage à l’aluminium',
          body: 'Fabrication et vente de menuiseries et d’accessoires aluminium sur 4 000 m² à Ankara Siteler.',
          metricUnit: 'm² à Siteler',
        },
        {
          title: 'Unité logistique et projets',
          body: 'Une agence de 4 500 m² à Ankara İvedik OSB ; le réseau de vente et la gamme s’élargissent.',
          metricUnit: 'm² à İvedik OSB',
        },
        {
          title: 'Entrée dans la construction',
          body: 'Un centre d’affaires de 50 710 m² construits sur un terrain de 15 243 m² à İvedik OSB.',
          metricUnit: 'm² construits',
        },
      ],
      projectsIntro: {
        kicker: 'Références',
        title: 'Quarante-six bâtiments, sept villes.',
        body: 'Du logement à l’hôtel, du centre de recherche à la mairie. Parcourez la liste, le bâtiment apparaît à côté.',
      },
      commerce: {
        kicker: 'HM Commerce Center',
        title: 'Le bâtiment que nous avons fait.',
        body: 'Un hôtel et centre d’affaires sur un terrain de 15 243 m² à İvedik OSB, avec 50 710 m² construits. La preuve la plus nette que nous ne nous contentons pas de fournir l’aluminium : nous le portons de bout en bout.',
        statLabels: ['terrain', 'surface construite'],
      },
    },
    about: [
      'Fondée en 1974 par Halis Bekar, la société a démarré sur 600 m² couverts dans la serrurerie et ses accessoires, et est arrivée jusqu’ici sur un principe de développement et de renouvellement constants. Depuis 4 000 m² couverts à Ankara Siteler, elle s’est donné pour but de répondre aux besoins du secteur et d’offrir des produits de qualité par la fabrication et la vente de menuiseries et d’accessoires en aluminium.',
      'Par des accords avec des fabricants importants, la société a pris la distribution de produits fabriqués aux normes européennes et a fait connaître dans le secteur son propre nom comme celui de ses partenaires. Une agence de 4 500 m² à Ankara İvedik OSB, ouverte pour la logistique et les projets, a élargi le réseau de vente et développé la gamme. Des menuiseries et des systèmes de façade en aluminium ont été livrés à des centres d’affaires, des centres commerciaux et des programmes de logements, en Türkiye et à l’étranger.',
      'En 2013, le conseil d’administration de Has Metal a décidé d’entrer dans la construction et a lancé à Ankara İvedik OSB un centre d’affaires et de commerce de 50 710 m² construits sur un terrain de 15 243 m². Après ce premier pas, la société s’est tournée vers le logement et les marchés d’entreprise générale, et s’est fait un nom sur plusieurs d’entre eux.',
      'Le principe fondateur de la maison est de placer la satisfaction du client au premier plan et de livrer de la qualité, en produit comme en service. Avec une équipe qui grandit et se renforce, nous travaillons avec exigence et efficacité pour tenir notre place dans le secteur. Nous entendons continuer à nous distinguer par une approche centrée sur le client, par nos chantiers et par notre qualité, et à offrir les meilleures solutions avec une gamme et une capacité qui s’élargissent d’année en année.',
    ],
    catalogues: {
      'has-metal-mimari-sistemler': {
        title: 'Catalogue des systèmes Has Metal',
        summary:
          'Sections, dessins techniques et listes de quincaillerie des séries HM 55, HM 55 T, C50 et C60.',
      },
      'has-metal-standart-profiller': {
        title: 'Profils standard Has Metal',
        summary: 'Sections et dimensions des profils aluminium standard livrés depuis le stock.',
      },
      gu: {
        title: 'Catalogue GU-Gretsch Unitas',
        summary:
          'Quincaillerie de fenêtre et de porte : crémones, paumelles, ferrures coulissantes et systèmes d’entrée automatiques.',
      },
      siegenia: {
        title: 'Catalogue SIEGENIA',
        summary:
          'Quincaillerie architecturale : ferrures oscillo-battantes, coulissants, ventilation et verrouillage connecté.',
      },
      giesse: {
        title: 'Catalogue GIESSE',
        summary:
          'Accessoires de porte et de fenêtre pour menuiserie aluminium : poignées, paumelles, gâches et pièces de façade.',
      },
      'assa-abloy': {
        title: 'Catalogue produits ASSA ABLOY',
        summary:
          'Solutions d’entrée et d’accès : ferme-portes, barres anti-panique, portes automatiques et groupes de verrouillage.',
      },
      kale: {
        title: 'Catalogue technique Kale',
        summary:
          'Coffres de serrure, cylindres, quincaillerie de porte acier et accessoires de sécurité, avec tableaux de cotes et détails de pose.',
      },
      kahe: {
        title: 'Catalogue KAHE',
        summary:
          'Accessoires et mécanismes pour menuiserie aluminium : poignées, systèmes coulissants, joints et produits d’étanchéité.',
      },
    },
  },
}
