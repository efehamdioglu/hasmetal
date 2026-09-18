import type { Lang } from './types.ts'

export const zh: Lang = {
  ui: {
    nav: {
      about: '公司',
      systems: '系统',
      products: '产品',
      services: '服务',
      projects: '工程案例',
      partners: '合作品牌',
      catalogues: '样本',
      contact: '联系',
      quote: '获取报价',
      menu: '主菜单',
      openMenu: '打开菜单',
      closeMenu: '关闭菜单',
      home: 'Has Metal 首页',
      language: '语言',
    },
    common: {
      homeCrumb: '首页',
      breadcrumb: '导航路径',
      view: '查看',
      explore: '浏览',
      all: '全部',
      allProjects: '全部案例',
      projectCount: (n) => `${n} 个工程`,
      since: '始于 1974 年',
      scrollHint: '向下滚动',
      locations: '厂址',
      navigation: '导航',
      rights: '版权所有。',
      strapline: '建筑铝系统',
      city: '城市',
      year: '年份',
      scope: '工程范围',
      system: '系统',
    },
    catalogue: {
      open: '打开样本',
      prev: '上一页',
      next: '下一页',
      first: '第一页',
      last: '最后一页',
      page: '第',
      pageCount: (n) => `${n} 页`,
      of: (a, b) => `${a} / ${b}`,
      thumbnails: '页面',
      hideThumbnails: '隐藏页面',
      zoom: '放大',
      close: '关闭',
      download: '下载 PDF',
      goToPage: '跳转到该页',
      keyboardHint: '可用键盘方向键翻页。',
      cover: '封面',
    },
    sections: {
      about: '关于我们',
      history: '发展历程',
      specs: '技术参数',
      faq: '常见问题',
      gallery: '图库',
      relatedProjects: '其他案例',
      ctaTitle: '为您的项目报价',
    },
    form: {
      name: '姓名',
      email: '电子邮箱',
      phone: '电话',
      company: '公司',
      subject: '主题',
      message: '您的留言',
      submit: '发送',
      sending: '发送中…',
      honeypot: '网站（请留空）',
      workingHours: '营业时间',
    },
    notFound: {
      title: '没有找到该页面。',
      body: '链接可能已经更改。您可以从工程案例继续浏览，或者与我们联系。',
      home: '首页',
    },
  },

  pages: {
    home: {
      timelineTitle: '从一间作坊到四处厂区。',
      heroAlt: '希什利区政府办公楼，铝合金幕墙与遮阳格栅',
      heroCaption: '希什利区政府，伊斯坦布尔',
      commerceAlt: 'HM Commerce Center 酒店与商务中心，安卡拉 İvedik OSB',
    },
    about: {
      title: '公司',
      lead: '1974 年从一间铁艺作坊起步，如今是安卡拉的两处厂区、自有系统系列，以及遍及七座城市的工程案例。',
      story: '历程',
      timelineTitle: '从一间作坊到四处厂区。',
      imageAlt: 'Has Metal 安卡拉 Siteler 厂区',
    },
    systems: {
      title: '建筑系统系列',
      lead: '自主生产的门窗与幕墙系列。隔热与非隔热两类构造、幕墙立柱横梁网格，以及为大洞口设定的型材断面。',
    },
    products: {
      title: '产品',
      lead: '除了系统系列，还有支撑一扇门窗的一切：型材、五金与密封。',
    },
    services: {
      title: '服务',
      lead: '做出型材并不算完：我们处理表面，需要时连建筑一起建。',
    },
    projects: {
      title: '工程案例',
      lead: '从住宅到酒店，从大学研究中心到区政府办公楼。四十六栋建筑的铝门窗与幕墙工程，分布在七座城市。',
    },
    partners: {
      title: '合作品牌',
      lead: '决定一扇门窗寿命的五金，来自欧洲成熟的制造商。成为这些品牌的代理意味着若干年后备件与技术支持依然找得到。',
    },
    commerce: {
      title: 'HM Commerce Center',
      lead: '位于 İvedik OSB、用地 15,243 平方米、建筑面积 50,710 平方米的酒店与商务中心。2013 年进入建筑板块后的第一个也是最大的项目。',
      body: '为别人的建筑做了四十年铝，我们建起了自己的。从幕墙到门窗，每个节点都用自有系统解决；这栋楼既是商务中心，也是我们生产水平的规模检验。',
      imageAlt: 'HM Commerce Center 酒店与商务中心',
    },
    contact: {
      title: '联系',
      lead: '三处厂区，所以给出的是对口号码，而不是一个总机。项目询价、技术资料与代理申请都可以通过下面的表单。',
      formTitle: '给我们留言',
      fax: '传真',
    },
    quote: {
      title: '获取报价',
      lead: '尺寸、所选系统与交付时间确定后，我们会给出正式报价。如果您已有项目图纸，请在表单中说明，我们会告知传送方式。',
    },
    catalogues: {
      title: '样本',
      lead: '我们自有系统系列的技术资料，以及所代理五金品牌的产品样本。可以逐页翻阅、放大单页，自有样本还可下载 PDF。',
      ours: 'Has Metal 出版物',
      brands: '品牌样本',
      others: '其他样本',
    },
    brandWall: {
      title: '成为代理',
      body: '五金供货与代理申请请与我们联系。',
    },
    cta: {
      body: '尺寸、系统与交付时间确定后，我们会给出正式报价。写信或来电均可。',
    },
    navPanel: {
      commerce: '我们自己建造的酒店与商务中心',
      partners: '我们代理的五金品牌',
      catalogues: (n) => `${n} 本样本，可逐页翻阅`,
    },
    docs: {
      title: '技术资料',
      body: '型材断面、技术图纸与五金清单都在 2024 版系统样本中。可以逐页阅读，也可以下载 PDF。',
      cta: '打开样本',
      ask: '或者与我们联系 →',
    },
  },

  meta: {
    home: {
      title: 'Has Metal | 建筑铝系统，安卡拉',
      description:
        '自 1974 年从事建筑铝业。门窗系统、玻璃幕墙、标准型材与五金供应。总部位于安卡拉，七座城市 46 个工程案例。',
    },
    about: {
      title: '公司 | Has Metal 始于 1974 年',
      description:
        '1974 年由 Halis Bekar 创立。五十一年从铁艺走到建筑铝业，安卡拉两处厂区，七座城市的工程案例。',
    },
    systems: {
      title: '系统系列 | HM 55、HM 55 T、C50、C60',
      description:
        'Has Metal 自主生产的铝系统：HM 55 与 HM 55 T 门窗系列、C50 玻璃幕墙，以及用于大洞口的 C60 系统。',
    },
    products: {
      title: '产品 | 标准型材、五金与密封件',
      description:
        '标准铝型材、符合欧洲标准的门窗五金，以及与各系统系列配套的密封件。由安卡拉 İvedik OSB 仓库现货供应。',
    },
    services: {
      title: '服务 | 表面处理与工程承包',
      description: '铝型材静电粉末喷涂与木纹转印表面处理；自 2013 年起承接建筑与工程承包业务。',
    },
    projects: {
      title: '工程案例 | 46 个门窗与幕墙工程',
      description:
        'Regnum Sky Tower、Hilton Garden Inn、中东技术大学研究中心、希什利区政府等。七座城市四十六个工程案例。',
    },
    partners: {
      title: '合作品牌 | GU、SIEGENIA、GIESSE、KALE',
      description:
        'Has Metal 代理 GU-Gretsch Unitas、SIEGENIA、GIESSE、ASSA ABLOY、DORMA、KALE 与 KAHE 的门窗五金。',
    },
    catalogues: {
      title: '样本 | 系统、型材与五金',
      description:
        'Has Metal 系统与型材样本，以及 GU、SIEGENIA、GIESSE、ASSA ABLOY、KALE、KAHE 的五金样本。可在线翻阅或下载 PDF。',
    },
    commerce: {
      title: 'HM Commerce Center | 酒店与商务中心',
      description:
        '位于 İvedik OSB 的酒店与商务中心，用地 15,243 平方米，建筑面积 50,710 平方米；由 Has Metal 自行建造。',
    },
    contact: {
      title: '联系 | 安卡拉三处厂区',
      description:
        '联系 Has Metal：Siteler 总部、İvedik OSB 物流与项目部、HM Commerce Center。地址、电话与项目询价表单。',
    },
    quote: {
      title: '获取报价 | Has Metal',
      description:
        '铝系统、型材与五金需求均可询价。尺寸、所选系统与交付时间确定后，我们会给出正式报价。',
    },
  },

  patterns: {
    entryTitle: (title) => `${title} | Has Metal`,
    projectTitle: (name) => `${name} | Has Metal 工程案例`,
    projectDescription: (name, where) =>
      `${name}${where}是采用 Has Metal 铝门窗与幕墙系统的工程案例之一。`,
    inCity: (city) => `（${city}）`,
    noCity: '（土耳其）',
    catalogueTitle: (title, pages) => `${title} | ${pages} 页`,
  },

  content: {
    tagline: '自 1974 年从事建筑铝业。',
    locations: {
      merkez: { label: '总部', name: 'Has Metal Aluminium，Siteler' },
      lojistik: { label: '物流与项目部', name: 'Has Metal Aluminium，İvedik' },
      'hm-commerce-center': {
        label: 'HM Commerce Center',
        name: 'HM Commerce Center 酒店与商务中心',
      },
    },
    systems: {
      'hm-55': {
        title: 'HM 55 门窗系统',
        summary: '非隔热门窗系列',
        intro:
          'Has Metal 自主生产的门窗系列。它为需要纤细断面与顺畅启闭的洞口而设计，从室内隔断到没有采暖负荷的开口皆可。',
      },
      'hm-55-t': {
        title: 'HM 55 T 隔热门窗系统',
        summary: '隔热断桥门窗系列',
        intro:
          'HM 55 家族中的隔热成员。型材内外壳之间的隔热条切断了冷桥，这正是采暖空间与设有能耗指标的项目所需要的。',
      },
      c50: {
        title: 'C50 幕墙系统',
        summary: '玻璃幕墙系列',
        intro:
          '玻璃与填充板挂装在承重立柱与横梁构成的网格上。这层中间结构把荷载传回主体结构，使幕墙读作一个连续不断的表面。',
      },
      c60: {
        title: 'C60 门窗系统',
        summary: '适用于大洞口的门窗系列',
        intro: 'C 家族的门窗分支，为更大的开启扇尺寸以及随之而来的更厚玻璃配置而设定。',
      },
    },
    products: {
      'standart-profiller': {
        title: '标准型材',
        summary: '现货供应的铝型材',
        intro:
          '除建筑系统之外，工程所需的标准铝型材我们从库存供应。İvedik OSB 的物流单元正是为了缩短下单到发货之间的时间而设立。',
      },
      'aksesuar-ve-mekanizma': {
        title: '五金与机构件',
        summary: '符合欧洲标准的五金',
        intro:
          '看不见的零件决定了一扇门窗能用多久。从合页到锁芯，从闭门器到传动机构，我们的五金来自欧洲成熟的制造商。',
      },
      'fitil-ve-conta': {
        title: '胶条与密封件',
        summary: '决定气密水密的一层',
        intro:
          '一扇门窗的气密性与水密性，很大程度上取决于胶条与密封件的选择。与各系统系列配套的密封件组，由我们一手供应。',
      },
    },
    services: {
      'ahsap-kaplama-ve-elektrostatik-toz-boyama': {
        title: '木纹转印与静电粉末喷涂',
        summary: '自有表面处理线',
        intro:
          '铝型材的表面处理在我们自己的车间完成。静电粉末喷涂提供 RAL 色卡的颜色，木纹转印带来自然的外观；选哪一种，取决于建筑设计的语言。',
      },
      'insaat-ve-taahhut': {
        title: '建筑与工程承包',
        summary: '自 2013 年起建造',
        intro:
          '2013 年的一项董事会决议让我们进入建筑领域。这条线从自有商务中心开始，随后延伸到住宅与承包项目。我们了解铝，不只是作为供货方，也作为安装方。',
      },
    },
    partners: {
      'GU-Gretsch Unitas': '门窗五金',
      SIEGENIA: '建筑五金系统',
      GIESSE: '门窗配件',
      'ASSA ABLOY': '出入口与门禁方案',
      DORMA: '闭门与控制系统',
      KALE: '锁具与安防五金',
      KAHE: '铝门窗配件',
    },
    home: {
      hero: {
        eyebrow: '始于 1974 年',
        title: ['建筑铝业', '五十一年。'],
        subtitle: '从安卡拉到七座城市；从门窗系统到玻璃幕墙，四十六个工程的铝制作。',
      },
      intro: {
        kicker: 'Has Metal',
        body: '我们从一间 600 平方米的铁艺作坊起步。今天有安卡拉的两处厂区、自主生产的系统系列、欧洲成熟五金制造商的代理权，以及遍及七座城市的工程案例。这期间唯一没有变过的，是对一项工程要收在正确的节点上的那份坚持。',
      },
      timeline: [
        {
          title: '创立',
          body: 'Halis Bekar 在 600 平方米厂房内从铁艺制作与配件做起。',
          metricUnit: '平方米厂房',
        },
        {
          title: '转向铝业',
          body: '在安卡拉 Siteler 的 4,000 平方米厂房内生产并销售铝门窗与配件。',
          metricUnit: '平方米，Siteler',
        },
        {
          title: '物流与项目单元',
          body: '在安卡拉 İvedik OSB 设立 4,500 平方米分部；销售网络与产品线同时扩大。',
          metricUnit: '平方米，İvedik OSB',
        },
        {
          title: '进入建筑领域',
          body: '在 İvedik OSB 的 15,243 平方米用地上，启动建筑面积 50,710 平方米的商务与贸易中心项目。',
          metricUnit: '平方米建筑面积',
        },
      ],
      projectsIntro: {
        kicker: '工程案例',
        title: '四十六栋建筑，七座城市。',
        body: '从住宅到酒店，从研究中心到区政府。沿着名单看下去，建筑就出现在旁边。',
      },
      commerce: {
        kicker: 'HM Commerce Center',
        title: '我们自己建的那栋楼。',
        body: '位于 İvedik OSB、用地 15,243 平方米、建筑面积 50,710 平方米的酒店与商务中心。这是最直接的证明：铝制工程我们不只供货，而是从头做到尾。',
        statLabels: ['用地面积', '建筑面积'],
      },
    },
    about: [
      '本公司由 Halis Bekar 于 1974 年创立，从 600 平方米厂房内的铁艺制作与配件业务起步，凭着不断发展与更新的原则走到今天。在安卡拉 Siteler 的 4,000 平方米厂房内运营，公司以满足行业需求、通过铝门窗及配件的生产与销售提供优质产品为目标。',
      '通过与行业内重要制造商签订协议，公司承担了按欧洲标准生产的产品的经销，使自身与合作伙伴的名字在行业内为人所知。为物流与项目部门在安卡拉 İvedik OSB 开设的 4,500 平方米分部，扩大了销售网络并丰富了产品线。公司已向国内外多个商务中心、购物中心与住宅项目供应铝门窗与幕墙系统。',
      '2013 年，Has Metal 董事会决定踏入建筑行业，在安卡拉 İvedik OSB 的 15,243 平方米用地上启动了一个建筑面积 50,710 平方米的商务与贸易中心项目。迈出这第一步之后，公司转向住宅与承包项目，并在其中若干项目上赢得了声誉。',
      '公司的基本原则是把客户满意放在首位，在产品与服务上都交付质量。依靠不断成长与壮大的团队，我们以高绩效和高效率工作，以保持在行业中的地位。今后我们也将继续以客户为中心的做法、以我们的工程和我们的质量脱颖而出，并以日益扩大的产品线和不断增长的服务能力，为各位客户提供最好的解决方案。',
    ],
    catalogues: {
      'has-metal-mimari-sistemler': {
        title: 'Has Metal 系统样本',
        summary: 'HM 55、HM 55 T、C50 与 C60 系列的型材断面、技术图纸与五金清单。',
      },
      'has-metal-standart-profiller': {
        title: 'Has Metal 标准型材',
        summary: '现货供应的标准铝型材断面与尺寸。',
      },
      gu: {
        title: 'GU-Gretsch Unitas 样本',
        summary: '门窗五金：传动机构、合页组、推拉五金与自动出入口系统。',
      },
      siegenia: {
        title: 'SIEGENIA 样本',
        summary: '建筑五金系统：内开内倒组件、推拉五金、通风与智能锁闭方案。',
      },
      giesse: {
        title: 'GIESSE 样本',
        summary: '铝门窗配件：执手、合页、锁座与幕墙配件。',
      },
      'assa-abloy': {
        title: 'ASSA ABLOY 产品样本',
        summary: '出入口与门禁方案：闭门器、逃生推杠、自动门系统与锁闭组件。',
      },
      kale: {
        title: 'Kale 技术样本',
        summary: '锁体、锁芯、钢门五金与安防配件，附尺寸表与安装节点。',
      },
      kahe: {
        title: 'KAHE 样本',
        summary: '铝门窗配件与机构件：执手组件、推拉系统、胶条与密封产品。',
      },
    },
  },
}
