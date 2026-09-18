import type { Lang } from './types.ts'

/** The source language. Every other file in this folder restates it. */
export const tr: Lang = {
  ui: {
    nav: {
      about: 'Kurumsal',
      systems: 'Sistemler',
      products: 'Ürünler',
      services: 'Hizmetler',
      projects: 'Referanslar',
      partners: 'Bayiliklerimiz',
      catalogues: 'Kataloglar',
      contact: 'İletişim',
      quote: 'Teklif Al',
      menu: 'Ana menü',
      openMenu: 'Menüyü aç',
      closeMenu: 'Menüyü kapat',
      home: 'Has Metal, ana sayfa',
      language: 'Dil',
    },
    common: {
      homeCrumb: 'Ana sayfa',
      breadcrumb: 'Sayfa yolu',
      view: 'Görüntüle',
      explore: 'Keşfet',
      all: 'Tümü',
      allProjects: 'Tüm referanslar',
      projectCount: (n) => `${n} proje`,
      since: '1974’ten beri',
      scrollHint: 'Kaydır',
      locations: 'Lokasyonlar',
      navigation: 'Navigasyon',
      rights: 'Tüm hakları saklıdır.',
      strapline: 'Mimari Alüminyum Sistemler',
      city: 'Şehir',
      year: 'Yıl',
      scope: 'Kapsam',
      system: 'Sistem',
    },
    catalogue: {
      open: 'Kataloğu aç',
      prev: 'Önceki sayfa',
      next: 'Sonraki sayfa',
      first: 'İlk sayfa',
      last: 'Son sayfa',
      page: 'Sayfa',
      pageCount: (n) => `${n} sayfa`,
      of: (a, b) => `${a} / ${b}`,
      thumbnails: 'Sayfalar',
      hideThumbnails: 'Sayfaları gizle',
      zoom: 'Büyüt',
      close: 'Kapat',
      download: 'PDF indir',
      goToPage: 'Sayfaya git',
      keyboardHint: 'Ok tuşlarıyla sayfa çevirebilirsiniz.',
      cover: 'Kapak',
    },
    sections: {
      about: 'Hakkımızda',
      history: 'Tarihçe',
      specs: 'Teknik özellikler',
      faq: 'Sık sorulanlar',
      gallery: 'Galeri',
      relatedProjects: 'Diğer referanslar',
      ctaTitle: 'Projeniz için teklif alın',
    },
    form: {
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      company: 'Firma',
      subject: 'Konu',
      message: 'Mesajınız',
      submit: 'Gönder',
      sending: 'Gönderiliyor…',
      honeypot: 'Web Sitesi (boş bırakın)',
      workingHours: 'Çalışma saatleri',
    },
    notFound: {
      title: 'Aradığınız sayfa bulunamadı.',
      body: 'Bağlantı değişmiş olabilir. Referanslardan devam edebilir ya da bize ulaşabilirsiniz.',
      home: 'Ana sayfa',
    },
  },

  pages: {
    home: {
      timelineTitle: 'Bir atölyeden dört tesise.',
      heroAlt: 'Şişli Belediyesi hizmet binası, alüminyum cephe ve güneş kırıcı uygulaması',
      heroCaption: 'Şişli Belediyesi, İstanbul',
      commerceAlt: 'HM Commerce Center otel ve iş merkezi, İvedik OSB Ankara',
    },
    about: {
      title: 'Kurumsal',
      lead: '1974’te bir demir doğrama atölyesinde başlayan iş, bugün Ankara’da iki tesis, kendi sistem serileri ve yedi şehre yayılmış bir referans listesi.',
      story: 'Hikâye',
      timelineTitle: 'Bir atölyeden dört tesise.',
      imageAlt: 'Has Metal Siteler tesisi',
    },
    systems: {
      title: 'Mimari Sistem Serileri',
      lead: 'Kendi ürettiğimiz kapı, pencere ve cephe serileri. Yalıtımlı ve yalıtımsız kurgular, giydirme cephe ızgarası ve geniş açıklıklar için tanımlanmış kesitler.',
    },
    products: {
      title: 'Ürünler',
      lead: 'Sistem serilerinin yanında, bir doğramayı ayakta tutan her şey: profil, donanım ve sızdırmazlık.',
    },
    services: {
      title: 'Hizmetler',
      lead: 'Profili üretmekle bitmiyor: yüzeyini işliyoruz, gerektiğinde yapıyı da biz kuruyoruz.',
    },
    projects: {
      title: 'Referanslar',
      lead: 'Konuttan otele, üniversite araştırma merkezinden belediye hizmet binasına. Yedi şehirde, kırk altı yapıda alüminyum doğrama ve cephe işi.',
    },
    partners: {
      title: 'Bayiliklerimiz',
      lead: 'Kapı ve pencerenin ömrünü belirleyen donanımı, Avrupa’nın yerleşik üreticilerinden tedarik ediyoruz. Bu markaların bayisi olmak, yedek parçanın ve teknik desteğin yıllar sonra da bulunabilmesi demek.',
    },
    commerce: {
      title: 'HM Commerce Center',
      lead: 'İvedik OSB’de 15.243 m² arazi üzerinde, 50.710 m² inşaat alanına sahip otel ve iş merkezi. 2013’te alınan kararla girdiğimiz inşaat hattının ilk ve en büyük işi.',
      body: 'Alüminyumu kırk yıl boyunca başkalarının yapıları için ürettikten sonra kendi yapımızı yaptık. Cephesinden doğramasına kadar her detayı kendi sistemlerimizle çözdüğümüz bu bina, hem bir iş merkezi hem de üretim kalitemizin ölçeğe vurulmuş hâli.',
      imageAlt: 'HM Commerce Center otel ve iş merkezi',
    },
    contact: {
      title: 'İletişim',
      lead: 'Üç tesis, tek numara yerine doğru numara. Proje teklifi, teknik doküman ve bayilik başvuruları için aşağıdaki formu kullanabilirsiniz.',
      formTitle: 'Bize yazın',
      fax: 'Faks',
    },
    quote: {
      title: 'Teklif alın',
      lead: 'Projenizin ölçüleri, sistem tercihi ve teslim takvimi belli olduğunda net bir çalışma hazırlıyoruz. Elinizde proje dosyası varsa formda belirtin, dönüşte paylaşım yolunu iletelim.',
    },
    catalogues: {
      title: 'Kataloglar',
      lead: 'Kendi sistem serilerimizin teknik dokümanları ve temsil ettiğimiz donanım markalarının katalogları. Sayfa sayfa çevirebilir, tek sayfayı büyütebilir, kendi kataloglarımızı PDF olarak indirebilirsiniz.',
      ours: 'Has Metal yayınları',
      brands: 'Marka katalogları',
      others: 'Diğer kataloglar',
    },
    brandWall: {
      title: 'Bayilik',
      body: 'Donanım tedariği ve bayilik başvuruları için bize yazın.',
    },
    cta: {
      body: 'Projenizin ölçüleri, sistem tercihi ve teslim takvimi belli olduğunda net bir çalışma hazırlıyoruz. Yazın ya da arayın.',
    },
    navPanel: {
      commerce: 'Kendi yaptığımız otel ve iş merkezi',
      partners: 'Temsil ettiğimiz donanım markaları',
      catalogues: (n) => `${n} katalog, sayfa sayfa okunabilir`,
    },
    docs: {
      title: 'Teknik doküman',
      body: 'Kesit ölçüleri, teknik çizimler ve aksesuar listeleri 2024 mimari sistemler kataloğunda. Sayfa sayfa okuyabilir ya da PDF olarak indirebilirsiniz.',
      cta: 'Kataloğu aç',
      ask: 'Ya da bize yazın →',
    },
  },

  meta: {
    home: {
      title: 'Has Metal | Mimari Alüminyum Sistemler, Ankara',
      description:
        '1974’ten bu yana mimari alüminyum. Kapı ve pencere sistemleri, giydirme cephe, standart profil ve donanım tedariği. Ankara merkezli, yedi şehirde 46 referans.',
    },
    about: {
      title: 'Kurumsal | 1974’ten bu yana Has Metal',
      description:
        '1974’te Halis Bekar kurdu. Demir doğramadan mimari alüminyuma uzanan 51 yıl, Ankara’da iki tesis ve yedi şehre yayılan bir referans listesi.',
    },
    systems: {
      title: 'Mimari Sistem Serileri | HM 55, HM 55 T, C50, C60',
      description:
        'Has Metal’in kendi ürettiği mimari alüminyum sistemleri: HM 55 ve HM 55 T kapı-pencere serileri, C50 giydirme cephe ve C60 kapı-pencere sistemi.',
    },
    products: {
      title: 'Ürünler | Standart profil, aksesuar ve conta',
      description:
        'Standart alüminyum profiller, Avrupa normlarında kapı-pencere donanımı ve sistem serilerine uygun fitil-conta grupları. İvedik OSB’den stoktan tedarik.',
    },
    services: {
      title: 'Hizmetler | Yüzey işlem ve inşaat taahhüt',
      description:
        'Elektrostatik toz boyama ve ahşap kaplama ile alüminyum yüzey işlemi; 2013’ten bu yana inşaat ve taahhüt işleri.',
    },
    projects: {
      title: 'Referanslar | 46 doğrama ve cephe projesi',
      description:
        'Regnum Sky Tower, Hilton Garden Inn, ODTÜ Araştırma Merkezi, Şişli Belediyesi ve daha fazlası. Yedi şehirde 46 alüminyum doğrama ve cephe projesi.',
    },
    partners: {
      title: 'Bayiliklerimiz | GU, SIEGENIA, GIESSE, KALE',
      description:
        'Has Metal; GU-Gretsch Unitas, SIEGENIA, GIESSE, ASSA ABLOY, DORMA, KALE ve KAHE markalarının kapı-pencere donanımı bayiliğini yürütür.',
    },
    catalogues: {
      title: 'Kataloglar | Mimari sistemler, profil ve donanım',
      description:
        'Has Metal mimari sistemler ve standart profil katalogları ile GU, SIEGENIA, GIESSE, ASSA ABLOY, KALE ve KAHE donanım katalogları. Sayfa sayfa okuyun.',
    },
    commerce: {
      title: 'HM Commerce Center | Otel ve iş merkezi',
      description:
        'İvedik OSB’de 15.243 m² arazi üzerinde 50.710 m² inşaat alanına sahip otel ve iş merkezi; Has Metal’in kendi yaptığı yapı.',
    },
    contact: {
      title: 'İletişim | Üç tesis, Ankara',
      description:
        'Has Metal’e ulaşın: Siteler merkez, İvedik OSB lojistik ve proje birimi, HM Commerce Center. Adres, telefon ve proje teklif formu.',
    },
    quote: {
      title: 'Teklif Alın | Has Metal',
      description:
        'Mimari alüminyum sistem, profil ve donanım ihtiyacınız için teklif alın. Ölçü, sistem tercihi ve takvim belli olduğunda net bir çalışma hazırlıyoruz.',
    },
  },

  patterns: {
    entryTitle: (title) => `${title} | Has Metal`,
    projectTitle: (name) => `${name} | Has Metal referans projesi`,
    projectDescription: (name, where) =>
      `${name}, ${where} Has Metal alüminyum doğrama ve cephe sistemlerinin uygulandığı referans projelerden biri.`,
    inCity: (city) => `${city}’da`,
    noCity: 'Türkiye’de',
    catalogueTitle: (title, pages) => `${title} | ${pages} sayfa`,
  },

  content: {
    tagline: '1974’ten bu yana mimari alüminyum.',
    locations: {
      merkez: { label: 'Merkez', name: 'Has Metal Alüminyum Siteler' },
      lojistik: { label: 'Lojistik ve Proje', name: 'Has Metal Alüminyum İvedik' },
      'hm-commerce-center': {
        label: 'HM Commerce Center',
        name: 'HM Commerce Center Otel ve İş Merkezi',
      },
    },
    systems: {
      'hm-55': {
        title: 'HM 55 Kapı ve Pencere Sistemi',
        summary: 'Yalıtımsız kapı ve pencere serisi',
        intro:
          'Has Metal’in kendi üretimi kapı ve pencere serisi. İç mekân bölmelerinden ısıtma yükü olmayan açıklıklara kadar, ince kesit ve düzgün işleyiş arayan uygulamalar için kurgulanmıştır.',
      },
      'hm-55-t': {
        title: 'HM 55 T Yalıtımlı Kapı ve Pencere Sistemi',
        summary: 'Isı bariyerli kapı ve pencere serisi',
        intro:
          'HM 55 ailesinin ısı yalıtımlı üyesi. Profilin iç ve dış kabuğu arasındaki bariyer ısı köprüsünü keser; ısıtılan hacimlerde ve enerji performansı tanımlı projelerde kullanılır.',
      },
      c50: {
        title: 'C50 Cephe Sistemi',
        summary: 'Giydirme cephe serisi',
        intro:
          'Taşıyıcı dikme ve kayıt ızgarası üzerine cam ve dolgu panellerin giydirildiği cephe sistemi. Yükü yapıya aktaran bu ara katman, cephenin kesintisiz bir yüzey olarak okunmasını sağlar.',
      },
      c60: {
        title: 'C60 Kapı ve Pencere Sistemi',
        summary: 'Geniş açıklıklar için kapı ve pencere serisi',
        intro:
          'C ailesinin kapı ve pencere kolu. Daha büyük kanat ölçülerinin ve kalın cam kombinasyonlarının gerektiği açıklıklar için tanımlanmıştır.',
      },
    },
    products: {
      'standart-profiller': {
        title: 'Standart Profiller',
        summary: 'Stoktan alüminyum profil tedariği',
        intro:
          'Mimari sistemlerin dışında, projelerin gerektirdiği standart alüminyum profilleri stoktan tedarik ediyoruz. İvedik OSB’deki lojistik birimi, sipariş ile sevkiyat arasındaki süreyi kısa tutmak için kuruldu.',
      },
      'aksesuar-ve-mekanizma': {
        title: 'Aksesuar ve Mekanizma',
        summary: 'Avrupa normlarında donanım',
        intro:
          'Kapı ve pencerenin ömrünü belirleyen, görünmeyen parçalar. Menteşeden kilit göbeğine, kapı kapatıcıdan ispanyolet mekanizmasına kadar donanımı Avrupa’nın yerleşik üreticilerinden tedarik ediyoruz.',
      },
      'fitil-ve-conta': {
        title: 'Fitil ve Conta Grubu',
        summary: 'Sızdırmazlığın belirleyici katmanı',
        intro:
          'Bir doğramanın hava ve su geçirmezliği, büyük ölçüde fitil ve conta seçimiyle belirlenir. Sistem serilerine uygun conta gruplarını tek elden sağlıyoruz.',
      },
    },
    services: {
      'ahsap-kaplama-ve-elektrostatik-toz-boyama': {
        title: 'Ahşap Kaplama ve Elektrostatik Toz Boyama',
        summary: 'Yüzey işlem hattı',
        intro:
          'Alüminyum profillerin yüzey işlemini kendi bünyemizde yapıyoruz. Elektrostatik toz boya ile RAL kataloğundaki renkler, ahşap desen kaplama ile doğal görünüm elde edilir; ikisi de mimari projenin diline göre seçilir.',
      },
      'insaat-ve-taahhut': {
        title: 'İnşaat ve Taahhüt',
        summary: '2013’ten bu yana yapı üreten taraf',
        intro:
          '2013’te alınan kararla inşaat sektörüne girdik. Kendi iş ve ticaret merkezimizle başlayan bu hat, toplu konut ve taahhüt projeleriyle sürdü. Alüminyumu yalnızca tedarik eden değil, uygulayan taraf olarak da tanıyoruz.',
      },
    },
    partners: {
      'GU-Gretsch Unitas': 'Pencere ve kapı donanımı',
      SIEGENIA: 'Mimari donanım sistemleri',
      GIESSE: 'Kapı ve pencere aksesuarları',
      'ASSA ABLOY': 'Giriş ve erişim çözümleri',
      DORMA: 'Kapı kapatma ve kontrol sistemleri',
      KALE: 'Kilit ve güvenlik donanımı',
      KAHE: 'Alüminyum doğrama aksesuarları',
    },
    home: {
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
      timeline: [
        {
          title: 'Kuruluş',
          body: 'Halis Bekar, demir doğrama ve aksamları alanında 600 m² kapalı alanda işe başladı.',
          metricUnit: 'm² kapalı alan',
        },
        {
          title: 'Alüminyuma geçiş',
          body: 'Ankara Siteler’de 4.000 m² kapalı alanda alüminyum doğrama ve aksesuarları üretimi ile satışı.',
          metricUnit: 'm² Siteler',
        },
        {
          title: 'Lojistik ve proje birimi',
          body: 'Ankara İvedik OSB’de 4.500 m² alanda şube; satış ağı ve ürün gamı genişledi.',
          metricUnit: 'm² İvedik OSB',
        },
        {
          title: 'İnşaat sektörüne giriş',
          body: 'İvedik OSB’de 15.243 m² arazide, 50.710 m² inşaat alanlı iş ve ticaret merkezi projesi başladı.',
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
        statLabels: ['arazi', 'inşaat alanı'],
      },
    },
    about: [
      '1974 yılında Halis Bekar tarafından kurulan firmamız, 600 m² kapalı alanda demir doğrama ve aksamları alanında başladığı yolculuğunda kendini sürekli geliştirme ve yenileme ilkesiyle bugünlere gelmiştir. Ankara Siteler’de 4.000 m² kapalı alanda faaliyet göstererek, alüminyum doğrama ve aksesuarları alanında üretim ve satışlar yaparak sektörün ihtiyaçlarını karşılamayı ve kaliteli ürünler sunmayı hedeflemiştir.',
      'Firmamız, sektördeki önemli firmalarla yaptığı anlaşmalarla Avrupa normlarında üretilen ürünlerin distribütörlüğünü yaparak hem firmamızın hem de çözüm ortaklarımızın isimlerini sektöre duyurdu. Ankara İvedik OSB’de 4.500 m² alanda lojistik ve proje birimi adına şube açarak satış ağını genişletmiş ve ürün gamını geliştirmiştir. Yurt içi ve yurt dışında birçok iş merkezi, alışveriş merkezi ve toplu konut projesine alüminyum doğrama ve cephe giydirme sistemleri tedarik etmiştir.',
      '2013 yılında Has Metal Yönetim Kurulu, inşaat sektörüne adım atma kararı alarak Ankara İvedik OSB’de 15.243 m² arazide, 50.710 m² inşaat alanına sahip bir iş ve ticaret merkezi projesine başlamıştır. İlk adımını inşaat sektörüne atmasının ardından toplu konut ve taahhüt projelerine yönelmiş ve birçok başarılı projede adından söz ettirmiştir.',
      'Firmamızın temel ilkesi, müşteri memnuniyetini ön planda tutarak kaliteli ürün ve hizmet sunmaktır. Sürekli gelişen ve güçlenen kadromuzla, sektördeki liderliğimizi sürdürmek için yüksek performans ve verimlilik ile çalışmaktayız. Gelecekte de müşteri odaklı yaklaşımımızla, projelerimizle ve kalitemizle öne çıkmaya, her geçen gün genişleyen ürün yelpazemiz ve artan hizmet kapasitemizle siz değerli müşterilerimize en iyi çözümleri sunmaya devam etmeyi planlamaktayız.',
    ],
    catalogues: {
      'has-metal-mimari-sistemler': {
        title: 'Has Metal Mimari Sistemler',
        summary:
          'HM 55, HM 55 T, C50 ve C60 serilerinin kesit ölçüleri, teknik çizimleri ve aksesuar listeleri.',
      },
      'has-metal-standart-profiller': {
        title: 'Has Metal Standart Profiller',
        summary: 'Stoktan tedarik edilen standart alüminyum profillerin kesitleri ve ölçüleri.',
      },
      gu: {
        title: 'GU-Gretsch Unitas Kataloğu',
        summary:
          'Pencere ve kapı donanımı: ispanyolet takımları, menteşe grupları, sürme mekanizmaları ve otomatik giriş sistemleri.',
      },
      siegenia: {
        title: 'SIEGENIA Kataloğu',
        summary:
          'Mimari donanım sistemleri: çevirmeli ve vasistas takımları, sürme kanat mekanizmaları, havalandırma ve akıllı kilit çözümleri.',
      },
      giesse: {
        title: 'GIESSE Kataloğu',
        summary:
          'Alüminyum doğrama için kapı ve pencere aksesuarları: kollar, menteşeler, kilit karşılıkları ve cephe aksesuarları.',
      },
      'assa-abloy': {
        title: 'ASSA ABLOY Ürün Kataloğu',
        summary:
          'Giriş ve erişim çözümleri: kapı kapatıcılar, panik bariyerleri, otomatik kapı sistemleri ve kilit grupları.',
      },
      kale: {
        title: 'Kale Teknik Katalog',
        summary:
          'Kilit gövdeleri, barel silindirler, çelik kapı donanımı ve güvenlik aksesuarları; ölçü tabloları ve montaj detaylarıyla.',
      },
      kahe: {
        title: 'KAHE Kataloğu',
        summary:
          'Alüminyum doğrama aksesuarları ve mekanizma grupları: kol takımları, sürme sistemleri, conta ve sızdırmazlık ürünleri.',
      },
    },
  },
}
