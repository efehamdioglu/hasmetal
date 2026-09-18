import type { Lang } from './types.ts'

export const es: Lang = {
  ui: {
    nav: {
      about: 'Empresa',
      systems: 'Sistemas',
      products: 'Productos',
      services: 'Servicios',
      projects: 'Referencias',
      partners: 'Distribuciones',
      catalogues: 'Catálogos',
      contact: 'Contacto',
      quote: 'Solicitar presupuesto',
      menu: 'Menú principal',
      openMenu: 'Abrir el menú',
      closeMenu: 'Cerrar el menú',
      home: 'Has Metal, inicio',
      language: 'Idioma',
    },
    common: {
      homeCrumb: 'Inicio',
      breadcrumb: 'Ruta de navegación',
      view: 'Ver',
      explore: 'Explorar',
      all: 'Todos',
      allProjects: 'Todas las referencias',
      projectCount: (n) => (n === 1 ? '1 proyecto' : `${n} proyectos`),
      since: 'Desde 1974',
      scrollHint: 'Desplazar',
      locations: 'Sedes',
      navigation: 'Navegación',
      rights: 'Todos los derechos reservados.',
      strapline: 'Sistemas de aluminio para arquitectura',
      city: 'Ciudad',
      year: 'Año',
      scope: 'Alcance',
      system: 'Sistema',
    },
    catalogue: {
      open: 'Abrir el catálogo',
      prev: 'Página anterior',
      next: 'Página siguiente',
      first: 'Primera página',
      last: 'Última página',
      page: 'Página',
      pageCount: (n) => (n === 1 ? '1 página' : `${n} páginas`),
      of: (a, b) => `${a} / ${b}`,
      thumbnails: 'Páginas',
      hideThumbnails: 'Ocultar las páginas',
      zoom: 'Ampliar',
      close: 'Cerrar',
      download: 'Descargar el PDF',
      goToPage: 'Ir a la página',
      keyboardHint: 'Con las flechas del teclado se pasan las páginas.',
      cover: 'Portada',
    },
    sections: {
      about: 'Quiénes somos',
      history: 'Historia',
      specs: 'Datos técnicos',
      faq: 'Preguntas frecuentes',
      gallery: 'Galería',
      relatedProjects: 'Otras referencias',
      ctaTitle: 'Un presupuesto para su proyecto',
    },
    form: {
      name: 'Nombre y apellidos',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      company: 'Empresa',
      subject: 'Asunto',
      message: 'Su mensaje',
      submit: 'Enviar',
      sending: 'Enviando…',
      honeypot: 'Sitio web (dejar vacío)',
      workingHours: 'Horario',
    },
    notFound: {
      title: 'No hemos encontrado esa página.',
      body: 'Puede que el enlace haya cambiado. Siga por las referencias o escríbanos.',
      home: 'Inicio',
    },
  },

  pages: {
    home: {
      timelineTitle: 'De un taller a cuatro sedes.',
      heroAlt: 'Ayuntamiento de Şişli, fachada de aluminio y lamas de sombra',
      heroCaption: 'Ayuntamiento de Şişli, İstanbul',
      commerceAlt: 'HM Commerce Center, hotel y centro de negocios, İvedik OSB Ankara',
    },
    about: {
      title: 'Empresa',
      lead: 'Lo que empezó en 1974 en un taller de cerrajería son hoy dos plantas en Ankara, series de sistemas propias y referencias en siete ciudades.',
      story: 'La historia',
      timelineTitle: 'De un taller a cuatro sedes.',
      imageAlt: 'La planta de Has Metal en Siteler, Ankara',
    },
    systems: {
      title: 'Series de sistemas',
      lead: 'Series de puertas, ventanas y fachadas de fabricación propia. Versiones con y sin rotura de puente térmico, retícula de muro cortina y perfiles definidos para grandes huecos.',
    },
    products: {
      title: 'Productos',
      lead: 'Junto a las series, todo lo que sostiene una carpintería: el perfil, el herraje y la estanqueidad.',
    },
    services: {
      title: 'Servicios',
      lead: 'Con el perfil no termina: tratamos la superficie y, cuando hace falta, levantamos también el edificio.',
    },
    projects: {
      title: 'Referencias',
      lead: 'De la vivienda al hotel, del centro de investigación universitario al ayuntamiento. Carpintería y fachadas de aluminio en cuarenta y seis edificios, en siete ciudades.',
    },
    partners: {
      title: 'Distribuciones',
      lead: 'El herraje que decide cuánto dura una puerta o una ventana viene de fabricantes europeos consolidados. Ser distribuidor de estas marcas significa que los repuestos y el soporte técnico siguen estando años después.',
    },
    commerce: {
      title: 'HM Commerce Center',
      lead: 'Un hotel y centro de negocios sobre una parcela de 15.243 m² en İvedik OSB, con 50.710 m² construidos. La primera y mayor obra de la línea de construcción abierta en 2013.',
      body: 'Después de cuarenta años haciendo aluminio para los edificios de otros, construimos el nuestro. De la fachada a la carpintería, cada detalle está resuelto con nuestros propios sistemas; el edificio es a la vez un centro de negocios y la prueba a escala de cómo fabricamos.',
      imageAlt: 'HM Commerce Center, hotel y centro de negocios',
    },
    contact: {
      title: 'Contacto',
      lead: 'Tres sedes, así que el número correcto en lugar de un número único. Use el formulario para consultas de proyecto, documentación técnica y solicitudes de distribución.',
      formTitle: 'Escríbanos',
      fax: 'Fax',
    },
    quote: {
      title: 'Solicitar presupuesto',
      lead: 'En cuanto las medidas, el sistema elegido y el calendario están claros preparamos una oferta en firme. Si ya tiene documentación del proyecto, indíquelo en el formulario y le diremos cómo enviarla.',
    },
    catalogues: {
      title: 'Catálogos',
      lead: 'La documentación técnica de nuestras series y los catálogos de las marcas de herraje que representamos. Pase las páginas, amplíe una página, descargue nuestros catálogos en PDF.',
      ours: 'Publicaciones de Has Metal',
      brands: 'Catálogos de marcas',
      others: 'Otros catálogos',
    },
    brandWall: {
      title: 'Distribución',
      body: 'Escríbanos para el suministro de herraje y las solicitudes de distribución.',
    },
    cta: {
      body: 'En cuanto las medidas, el sistema y el calendario están claros preparamos una oferta en firme. Escriba o llame.',
    },
    navPanel: {
      commerce: 'El hotel y centro de negocios que construimos',
      partners: 'Las marcas de herraje que representamos',
      catalogues: (n) => `${n} catálogos para hojear página a página`,
    },
    docs: {
      title: 'Documentación técnica',
      body: 'Las secciones, los planos técnicos y las listas de herraje están en el catálogo de sistemas 2024. Puede leerlo página a página o descargarlo en PDF.',
      cta: 'Abrir el catálogo',
      ask: 'O escríbanos →',
    },
  },

  meta: {
    home: {
      title: 'Has Metal | Sistemas de aluminio para arquitectura, Ankara',
      description:
        'Aluminio arquitectónico desde 1974. Puertas y ventanas, muro cortina, perfiles y herrajes. Con sede en Ankara, 46 referencias en siete ciudades.',
    },
    about: {
      title: 'Empresa | Has Metal desde 1974',
      description:
        'Fundada en 1974 por Halis Bekar. Cincuenta y un años de la cerrajería al aluminio arquitectónico, dos plantas en Ankara y referencias en siete ciudades.',
    },
    systems: {
      title: 'Series | HM 55, HM 55 T, C50, C60',
      description:
        'Los sistemas de aluminio que fabrica Has Metal: las series de puertas y ventanas HM 55 y HM 55 T, el muro cortina C50 y el sistema C60 para grandes huecos.',
    },
    products: {
      title: 'Productos | Perfiles, herrajes y juntas',
      description:
        'Perfiles de aluminio estándar, herraje de puerta y ventana según norma europea y juntas a juego. Suministro desde el almacén de İvedik OSB, Ankara.',
    },
    services: {
      title: 'Servicios | Tratamiento de superficie y obra',
      description:
        'Tratamiento de superficie del aluminio mediante lacado en polvo y efecto madera; trabajos de construcción y contratación desde 2013.',
    },
    projects: {
      title: 'Referencias | 46 obras de carpintería y fachada',
      description:
        'Regnum Sky Tower, Hilton Garden Inn, el centro de investigación de la METU, el ayuntamiento de Şişli y más. Cuarenta y seis referencias en siete ciudades.',
    },
    partners: {
      title: 'Distribuciones | GU, SIEGENIA, GIESSE, KALE',
      description:
        'Has Metal distribuye el herraje de puerta y ventana de GU-Gretsch Unitas, SIEGENIA, GIESSE, ASSA ABLOY, DORMA, KALE y KAHE.',
    },
    catalogues: {
      title: 'Catálogos | Sistemas, perfiles y herrajes',
      description:
        'Los catálogos de sistemas de Has Metal y los de GU, SIEGENIA, GIESSE, ASSA ABLOY, KALE y KAHE. Para hojear en línea o descargar en PDF.',
    },
    commerce: {
      title: 'HM Commerce Center | Hotel y centro de negocios',
      description:
        'Hotel y centro de negocios en İvedik OSB, 50.710 m² construidos sobre una parcela de 15.243 m²; un edificio levantado por la propia Has Metal.',
    },
    contact: {
      title: 'Contacto | Tres sedes en Ankara',
      description:
        'Cómo llegar a Has Metal: sede de Siteler, unidad de logística y proyectos de İvedik OSB, HM Commerce Center. Direcciones, teléfonos y formulario.',
    },
    quote: {
      title: 'Solicitar presupuesto | Has Metal',
      description:
        'Pida presupuesto de sistemas de aluminio, perfiles y herrajes. Con las medidas, el sistema y el calendario definidos preparamos una oferta en firme.',
    },
  },

  patterns: {
    entryTitle: (title) => `${title} | Has Metal`,
    projectTitle: (name) => `${name} | Referencia de Has Metal`,
    projectDescription: (name, where) =>
      `${name} ${where} es una de las referencias en las que se montaron carpintería y sistemas de fachada de aluminio de Has Metal.`,
    inCity: (city) => `en ${city}`,
    noCity: 'en Türkiye',
    catalogueTitle: (title, pages) => `${title} | ${pages} páginas`,
  },

  content: {
    tagline: 'Aluminio arquitectónico desde 1974.',
    locations: {
      merkez: { label: 'Sede', name: 'Has Metal Aluminium, Siteler' },
      lojistik: { label: 'Logística y proyectos', name: 'Has Metal Aluminium, İvedik' },
      'hm-commerce-center': {
        label: 'HM Commerce Center',
        name: 'HM Commerce Center, hotel y centro de negocios',
      },
    },
    systems: {
      'hm-55': {
        title: 'Sistema de puertas y ventanas HM 55',
        summary: 'Serie sin rotura de puente térmico',
        intro:
          'La serie de puertas y ventanas de fabricación propia. Está dibujada para huecos que piden una sección estrecha y un funcionamiento limpio, desde particiones interiores hasta vanos sin carga de calefacción.',
      },
      'hm-55-t': {
        title: 'HM 55 T, puertas y ventanas con rotura térmica',
        summary: 'Serie con rotura de puente térmico',
        intro:
          'El miembro aislado de la familia HM 55. La barrera entre la cara interior y la exterior del perfil corta el puente térmico; es lo que necesitan los volúmenes calefactados y los proyectos con un objetivo energético definido.',
      },
      c50: {
        title: 'Sistema de fachada C50',
        summary: 'Muro cortina',
        intro:
          'Vidrios y paneles de relleno colgados de una retícula de montantes y travesaños portantes. Esa capa intermedia devuelve la carga a la estructura y deja leer la fachada como una superficie continua.',
      },
      c60: {
        title: 'Sistema de puertas y ventanas C60',
        summary: 'Serie para grandes huecos',
        intro:
          'La rama de puertas y ventanas de la familia C, definida para hojas de mayor dimensión y para los vidrios más gruesos que las acompañan.',
      },
    },
    products: {
      'standart-profiller': {
        title: 'Perfiles estándar',
        summary: 'Perfiles de aluminio desde almacén',
        intro:
          'Más allá de los sistemas arquitectónicos, suministramos desde almacén los perfiles de aluminio estándar que una obra requiere. La unidad logística de İvedik OSB existe para acortar el tiempo entre el pedido y la expedición.',
      },
      'aksesuar-ve-mekanizma': {
        title: 'Herrajes y mecanismos',
        summary: 'Herraje según norma europea',
        intro:
          'Las piezas que nadie ve deciden cuánto dura una puerta o una ventana. De las bisagras a los cilindros, de los cierrapuertas a las cremonas, nos abastecemos de los fabricantes europeos consolidados.',
      },
      'fitil-ve-conta': {
        title: 'Juntas y burletes',
        summary: 'La capa que decide la estanqueidad',
        intro:
          'La estanqueidad al aire y al agua de una carpintería se juega en gran medida en la elección de las juntas. Suministramos de una sola mano las gamas que corresponden a cada serie.',
      },
    },
    services: {
      'ahsap-kaplama-ve-elektrostatik-toz-boyama': {
        title: 'Efecto madera y lacado en polvo',
        summary: 'Línea de tratamiento de superficie',
        intro:
          'El tratamiento de superficie de los perfiles de aluminio se hace en casa. El lacado electrostático en polvo da los colores de la carta RAL, el efecto madera da un aspecto natural; la elección sigue el lenguaje del proyecto.',
      },
      'insaat-ve-taahhut': {
        title: 'Construcción y contratación',
        summary: 'Construyendo desde 2013',
        intro:
          'Una decisión del consejo, en 2013, nos llevó a la construcción. La línea empezó con nuestro propio centro de negocios y siguió con vivienda colectiva y contratas. Conocemos el aluminio también como quien lo monta, no solo como quien lo suministra.',
      },
    },
    partners: {
      'GU-Gretsch Unitas': 'Herraje de ventana y puerta',
      SIEGENIA: 'Sistemas de herraje arquitectónico',
      GIESSE: 'Accesorios de puerta y ventana',
      'ASSA ABLOY': 'Soluciones de acceso y entrada',
      DORMA: 'Cierrapuertas y sistemas de control',
      KALE: 'Cerraduras y herraje de seguridad',
      KAHE: 'Accesorios para carpintería de aluminio',
    },
    home: {
      hero: {
        eyebrow: 'Desde 1974',
        title: ['Cincuenta y un años', 'de aluminio construido.'],
        subtitle:
          'De Ankara a siete ciudades; de los sistemas de puertas y ventanas al muro cortina, el aluminio de cuarenta y seis proyectos.',
      },
      intro: {
        kicker: 'Has Metal',
        body: 'Empezamos en un taller de cerrajería de 600 metros cuadrados. Hoy hay dos plantas en Ankara, series de sistemas de fabricación propia, la distribución de los grandes fabricantes europeos de herraje y referencias en siete ciudades. Lo único que no ha cambiado entretanto es la insistencia en terminar un trabajo en el detalle correcto.',
      },
      timeline: [
        {
          title: 'Fundación',
          body: 'Halis Bekar empieza en cerrajería y sus accesorios, en 600 m² cubiertos.',
          metricUnit: 'm² cubiertos',
        },
        {
          title: 'El paso al aluminio',
          body: 'Fabricación y venta de carpintería y accesorios de aluminio en 4.000 m² en Ankara Siteler.',
          metricUnit: 'm² en Siteler',
        },
        {
          title: 'Unidad de logística y proyectos',
          body: 'Una delegación de 4.500 m² en Ankara İvedik OSB; la red de ventas y la gama se amplían.',
          metricUnit: 'm² en İvedik OSB',
        },
        {
          title: 'Entrada en la construcción',
          body: 'Un centro de negocios y comercio de 50.710 m² construidos sobre una parcela de 15.243 m² en İvedik OSB.',
          metricUnit: 'm² construidos',
        },
      ],
      projectsIntro: {
        kicker: 'Referencias',
        title: 'Cuarenta y seis edificios, siete ciudades.',
        body: 'De la vivienda al hotel, del centro de investigación al ayuntamiento. Recorra la lista y el edificio aparece al lado.',
      },
      commerce: {
        kicker: 'HM Commerce Center',
        title: 'El edificio que hicimos nosotros.',
        body: 'Un hotel y centro de negocios sobre una parcela de 15.243 m² en İvedik OSB, con 50.710 m² construidos. La prueba más clara de que el trabajo de aluminio no solo lo suministramos: lo llevamos de principio a fin.',
        statLabels: ['parcela', 'superficie construida'],
      },
    },
    about: [
      'Fundada en 1974 por Halis Bekar, la empresa arrancó en 600 m² cubiertos en el ramo de la cerrajería y sus accesorios, y ha llegado hasta hoy sobre un principio de desarrollo y renovación constantes. Operando desde 4.000 m² cubiertos en Ankara Siteler, se propuso cubrir las necesidades del sector y ofrecer productos de calidad mediante la fabricación y venta de carpintería y accesorios de aluminio.',
      'Mediante acuerdos con fabricantes importantes, la empresa asumió la distribución de productos fabricados según norma europea y dio a conocer en el sector tanto su propio nombre como el de sus socios. Una delegación de 4.500 m² en Ankara İvedik OSB, abierta para la logística y los proyectos, amplió la red de ventas y desarrolló la gama. Se han suministrado carpintería y sistemas de fachada de aluminio a centros de negocios, centros comerciales y promociones de vivienda, en Türkiye y en el extranjero.',
      'En 2013 el consejo de administración de Has Metal decidió dar el paso a la construcción y comenzó en Ankara İvedik OSB un centro de negocios y comercio de 50.710 m² construidos sobre una parcela de 15.243 m². Tras ese primer paso, la empresa se orientó a la vivienda colectiva y a las contratas, y se hizo un nombre en varias de ellas.',
      'El principio de la casa es poner por delante la satisfacción del cliente y entregar calidad, tanto en producto como en servicio. Con un equipo que crece y se refuerza, trabajamos con alto rendimiento y eficiencia para mantener nuestra posición en el sector. En adelante queremos seguir destacando con un enfoque centrado en el cliente, con nuestras obras y con nuestra calidad, y ofrecer las mejores soluciones con una gama y una capacidad que se amplían año tras año.',
    ],
    catalogues: {
      'has-metal-mimari-sistemler': {
        title: 'Catálogo de sistemas Has Metal',
        summary:
          'Secciones, planos técnicos y listas de herraje de las series HM 55, HM 55 T, C50 y C60.',
      },
      'has-metal-standart-profiller': {
        title: 'Perfiles estándar Has Metal',
        summary: 'Secciones y medidas de los perfiles de aluminio estándar servidos desde almacén.',
      },
      gu: {
        title: 'Catálogo GU-Gretsch Unitas',
        summary:
          'Herraje de ventana y puerta: cremonas, bisagras, herrajes correderos y sistemas de entrada automáticos.',
      },
      siegenia: {
        title: 'Catálogo SIEGENIA',
        summary:
          'Herraje arquitectónico: oscilobatiente, correderas, ventilación y soluciones de cierre inteligente.',
      },
      giesse: {
        title: 'Catálogo GIESSE',
        summary:
          'Accesorios de puerta y ventana para carpintería de aluminio: manillas, bisagras, cerraderos y piezas de fachada.',
      },
      'assa-abloy': {
        title: 'Catálogo de producto ASSA ABLOY',
        summary:
          'Soluciones de entrada y acceso: cierrapuertas, barras antipánico, puertas automáticas y grupos de cierre.',
      },
      kale: {
        title: 'Catálogo técnico Kale',
        summary:
          'Cajas de cerradura, cilindros, herraje de puerta de acero y accesorios de seguridad, con tablas de medidas y detalles de montaje.',
      },
      kahe: {
        title: 'Catálogo KAHE',
        summary:
          'Accesorios y mecanismos para carpintería de aluminio: manillas, sistemas correderos, juntas y productos de estanqueidad.',
      },
    },
  },
}
