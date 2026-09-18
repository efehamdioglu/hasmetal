# Has Metal Alüminyum, yeni web sitesi

hasmetal.com.tr'nin baştan tasarlanmış hâli, sekiz dilde. İçerik mevcut siteden
taşındı ve eski URL'lerin tamamı korundu; tasarım, hareket dili, içerik katmanı
ve SEO altyapısı sıfırdan kuruldu.

**Stack:** Next.js 16 (App Router, SSG) · React 19 · TypeScript · Tailwind v4 ·
motion · GSAP + ScrollTrigger · Lenis

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start -- -p 3001
```

## Komutlar

| Komut | Ne yapar |
|---|---|
| `npm run dev` | Geliştirme sunucusu (Turbopack) |
| `npm run build` | 598 sayfayı statik üretir (sekiz dil) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint, React Compiler kuralları dahil |
| `npm run qa` | Playwright ile 54 davranış, erişilebilirlik ve i18n kontrolü |
| `npm run check:emdash` | 593 sayfanın hiçbirinde em dash kalmadığını doğrular |
| `npm run perf` | Bundle boyutu + LCP/CLS ölçümü |
| `npm run shots` | Ekran görüntüleri, `scripts/_shots/` |
| `npm run verify:urls` | Eski 28 URL ve 121 yeni adres çözülüyor mu |
| `npm run content:refresh` | İçeriği canlı siteden yeniden çeker, `content/data.json` üretir |
| `node scripts/brand-logos.mjs` | Bayilik logolarını beyazdan mürekkep rengine çevirir |
| `node scripts/catalogues.mjs` | Katalog PDF'lerini indirir, her sayfayı webp'ye çevirir |

Son beş komut çalışan bir sunucu bekler; hepsi varsayılan olarak
`http://localhost:3001` adresine bakar, `BASE` ortam değişkeniyle değiştirilebilir.

## Sekiz dil

Eski sitede sekiz dil vardı ama hepsi gtranslate eklentisiyle, yani makine
çevirisi: kendi URL'leri yoktu, indekslenmiyorlardı ve kalitesi düşüktü. Yeni
sitede sekizi de gerçek çeviri, kendi adresi, kendi `hreflang` eşlemesi ve
statik olarak üretilmiş sayfalarıyla var.

| Dil | Kök | Örnek |
|---|---|---|
| Türkçe | `/` | `/sistemler/hm-55-t` |
| English | `/en` | `/en/systems/hm-55-t` |
| Deutsch | `/de` | `/de/products/gaskets-and-seals` |
| Français | `/fr` | `/fr/projects/regnum-sky-tower` |
| Italiano | `/it` | `/it/catalogues/siegenia` |
| Español | `/es` | `/es/about` |
| Русский | `/ru` | `/ru/contact` |
| 简体中文 | `/zh` | `/zh/quote` |

Türkçe kökte durur ve Türkçe yol adlarını kullanır, böylece eski sitenin
yayınladığı hiçbir URL değişmez. Diğer yedi dil kendi önekiyle yaşar ve aynı
yol adlarını paylaşır; rota ağacını yedi kez kopyalamak yerine tek bir
`app/(intl)/[locale]` ağacından servis edilmelerinin sebebi budur.

Her dil kendi kök layout'unu alır, dolayısıyla `<html lang>` her zaman doğru
(Çince için `zh-Hans`). Her sayfa dokuz `alternate` taşır: sekiz dil artı
Türkçeye işaret eden `x-default`. Dil menüsü bulunduğunuz sayfanın karşılığına
gider, çevrilmiş slug'lar dahil.

### Metinler nerede durur

`content/lang/<dil>.ts` her dil için tek dosyadır: arayüz sözcükleri, sayfa
metinleri, meta başlık ve açıklamalar, ve içerik kaplaması. Türkçe kaynaktır,
diğer yedisi aynı şeyi başka kelimelerle söyler.

Bu dosyalarda **hiçbir olgu yoktur**. Rakam, telefon, adres, slug ve görsel
anahtarı yalnızca `content/site.ts` içinde durur; diller bir olgu üzerinde
ayrışamaz, çünkü o olgunun tek bir kopyası vardır.

## Mimari

```
app/
  (tr)/                  Türkçe kök layout ve 16 rota
  (intl)/[locale]/       diğer yedi dilin ortak kök layout ve rotaları
  actions.ts             teklif ve iletişim formu (Server Action)
  sitemap.ts robots.ts   sekiz dili birden listeler
components/
  pages/                 sayfa gövdeleri, sekiz dil için tek kaynak
  scenes/                hero, zaman çizelgesi, referans indeksi
  motion/                Reveal, LineRise, Counter, Marquee, Lenis
  shell/                 nav, footer, kök kabuk
  ui/                    Img, PageHero, CtaBand, form, JSON-LD
content/
  data.json              üretilmiş: 46 proje, görsel kayıtları, kurumsal metin
  site.ts                olgular: rakam, telefon, adres, slug
  lang/<dil>.ts          sekiz dilin tüm metinleri
  locale.ts              olguları ve kelimeleri birleştiren erişimciler
  i18n.ts                rotalar, slug eşlemeleri, dil erişimcileri
  redirects.ts           eski 28 URL'nin haritası
lib/
  seo.ts schema.ts       metadata üreticisi ve JSON-LD kurucuları
  fonts.ts motion.ts
scripts/                 içerik zinciri ve doğrulama araçları
```

### İçerik katmanı

`content/locale.ts` içindeki erişimciler (`systemsFor`, `homeFor`,
`locationsFor` ve diğerleri) olgu kaydını alır ve o dilin kelimelerini üzerine
koyar. Sekiz dilin hepsi aynı olgu kümesini paylaşır.

`content/data.json` üretilmiş dosyadır, elle düzenlenmez. Kaynağı eski sitenin
kendi markup'ıdır: referans ızgarasındaki 46 proje, kartların ilan ettiği gerçek
piksel ölçüleriyle birlikte, ve kurumsal sayfadaki dört paragraf.

## SEO

Eski sitede olmayan, şimdi olan şeyler:

- Her sayfada tek `<h1>` ve anlamlı başlık hiyerarşisi
- Sayfa başına başlık, açıklama, canonical, OG ve Twitter kartı
- JSON-LD: `Organization`, üç ayrı `LocalBusiness` (Siteler, İvedik OSB,
  HM Commerce Center; her biri kendi telefonuyla), `BreadcrumbList`,
  sistem sayfalarında `Product`, her referans projesi için `CreativeWork`,
  listelerde `ItemList`
- `sitemap.xml` 592 URL listeler, her sayfa sekiz dilde; `hreflang` ve
  `x-default` eşlemeleri her sayfada
- Eski 28 URL'nin tamamı 301 ile karşılanıyor; beş çift kopya sayfa tek kanonik
  adrese toplandı: `mimari-sistem-serileri-2` ve `mimari-sistem-serileri`,
  `hm-commerce-center-2` ve `hm-commerce-center`, `conta-fitil-grubu` ve
  `fitil-ve-conta`, `aksesuarlar` ve `aksesuar-ve-mekanizma`, `insaat-taahhut`
  ve `insaat-ve-taahhut`
- WordPress'ten kalan `hello-world` yazısı 410 döner
- Eski sayfadaki 91 adet `http://` görsel ortadan kalktı: her görsel yerelde,
  webp'ye çevrilmiş, gerçek ölçüleri ve blur placeholder'ı ile
- Her görselde gerçek alt metin
- **46 ayrı proje sayfası**, bugün hiç görünmedikleri uzun kuyruk aramaları için

`npm run verify:urls` her URL'nin 200 ya da doğru 301 döndürdüğünü doğrular.

## Tasarım

Aydınlık bir mimarlık monografısı: kâğıt zemin, editoryal serif display,
çok boşluk, tek vurgu rengi. UNICO Alüminyum sitesi karanlık ve sinematikti;
bu kurgu kasıtlı olarak onun karşıtı, böylece iki kardeş marka birbirinin
kopyası gibi görünmüyor.

- **Renk:** `--paper #F7F5F2`, `--ink #111111`, tek vurgu `--carmine #A6192E`
  (logodan alındı). Referans indeksi bandı sitedeki tek ters kontrastlı yüzey.
  Açık ve koyu zeminler `--text-strong`, `--text-muted`, `--rule` gibi ton
  token'ları üzerinden çalışır; bileşen hangi zeminde olduğunu bilmek zorunda değil.
- **Tipografi:** iki aile, Instrument Serif (display) ve Inter Tight (gövde ve
  etiketler). İkisi de `latin-ext` taşır, yani ş ğ ı İ doğru çizilir. Sitede
  hiçbir yerde monospace kullanılmıyor; etiketler ve rakamlar karakterini
  büyük harften, harf aralığından ve tabular rakamlardan alır.
- **Hareket:** süreler 0,4 / 0,8 / 1,2 s, easing `cubic-bezier(0.16, 1, 0.3, 1)`,
  stagger 0,06 s. Açılışta oynayan her şey CSS ile yapılır, JS beklemez; bu LCP
  için belirleyici. `prefers-reduced-motion` global anahtar.

### Navigasyon

Üst menüde bir sekmenin üzerine gelindiğinde ya da klavyeyle odaklanıldığında
o bölümün alt sayfaları hemen altında açılır: sistem serileri, ürün grupları,
hizmetler, ve Kurumsal altında HM Commerce Center ile Bayiliklerimiz. Menü
verisi sunucuda `content/nav.ts` içinde kurulur ve düz veri olarak geçilir,
böylece içerik modülleri istemci paketine hiç girmez.

### Bayilik markaları

Eski sitedeki `/aksesuarlar` sayfası bir marka logosu duvarıydı ve altı marka
taşıyordu: KAHE, G-U, GIESSE, ASSA ABLOY, KALE, SIEGENIA. Bayilik listesi ise
başka bir sayfada beş marka sayıyordu. Yeni sitede ikisinin birleşimi var.

Logo dosyaları koyu zemin için çizilmiş, yani saf beyaz + alfa. Doğrudan
kullanıldığında kâğıt zeminde görünmez oluyorlardı; `scripts/brand-logos.mjs`
her birinin alfa kanalını alıp mürekkep rengine boyar. Marka şekline
dokunulmaz, yalnızca rengi değişir.

### Kataloglar

Eski sitede sekiz gerçek katalog vardı ama hepsi bir WordPress flipbook
eklentisinin arkasındaydı: `/aksesuarlar` altında altı marka kataloğu,
`/mimari-sistem-serileri-2` ve `/standart-profiller` altında da Has Metal'in
kendi iki kataloğu. Toplam 1.305 sayfa, 176 MB PDF, hiçbiri arama motorunda
görünmüyor ve ilk sayfayı görmek için 40 MB indirmek gerekiyor.

`scripts/catalogues.mjs` her PDF'i indirip her sayfayı webp'ye çeviriyor
(1200 px, ortalama 62 kB). Okuyucu `components/scenes/catalogue-viewer.tsx`:
iki sayfalık açılım, sırtın etrafında dönen gerçek sayfa çevirme, klavye
okları, sayfa küçük resimleri, tek sayfayı büyütme. Tarayıcıya PDF motoru
inmiyor, ilk açılışta yalnızca görünen iki sayfa yükleniyor.

Sistem sayfalarındaki "teknik doküman" bloğu artık doğrudan 2024 mimari
sistemler kataloğuna bağlanıyor. **Bu, daha önce "eksik" diye not düştüğüm
teknik veri sorununu çözüyor:** kesit ölçüleri ve profil ağırlıkları bu
kataloğun içinde, uydurmaya gerek yok.

Kendi kataloglarımız PDF olarak da indirilebiliyor. Marka katalogları
indirilemiyor, çünkü o dosyalar üreticilerin; sayfa olarak gösteriliyorlar.

### Referans indeksi

Sitenin merkez parçası. 46 proje adı büyük tipografiyle alt alta; imleç ya da
klavye odağı hangi satırdaysa o yapının fotoğrafı yandaki sabit çerçevede
çapraz geçişle belirir. Referanslar sayfasında şehir çipleriyle filtrelenir.

Çerçeve kasıtlı olarak tam kadraj değil, kontrollü boyutta: müşterinin
fotoğrafları 700 px ile 2560 px arasında değişiyor ve bu kurgu en küçüğünü bile
keskin tutuyor.

## Performans

Yerel üretim sunucusunda ölçüldü (`npm run perf`):

| Sayfa | LCP | CLS |
|---|---|---|
| Ana sayfa, masaüstü | 464 ms | 0 |
| Ana sayfa, mobil | 708 ms | 0 |
| Referans indeksi, masaüstü | 372 ms | 0 |
| Proje sayfası, mobil | 1040 ms | 0 |
| Sistem sayfası, masaüstü | 1268 ms | 0 |
| Ana sayfa EN, mobil | 332 ms | 0 |

Hedef LCP < 1500 ms, CLS < 0,05. WebGL bu projeye hiç girmedi; paket buna göre
küçük kaldı.

## Formlar

Teklif ve iletişim formları `app/actions.ts` içindeki tek Server Action'a düşer.
Doğrulama sunucuda yapılır, gizli bir honeypot alanı botları sessizce yutar.

Teslimat takılabilir: `LEAD_WEBHOOK_URL` tanımlıysa talep oraya POST edilir,
tanımlı değilse sunucu günlüğüne yazılır ve kullanıcıya demo modunda olduğu
söylenir. Canlıya çıkarken bu değişkeni gerçek bir gelen kutusuna bağlamak
yeterli.

## Açık işler

Bunlar bizim değil, müşterinin elinde:

1. **Uf ve yalıtım değerleri.** 2024 kataloğu kesit ölçülerini ve profil
   ağırlıklarını veriyor, bu yüzden sistem sayfaları artık doğrudan kataloğa
   bağlanıyor. Ama ısı geçirgenlik (Uf/Uw) değerleri katalogda da yok. Test
   raporu gelirse sistem sayfalarına tablo olarak eklenir; gelene kadar
   uydurulmuyor, çünkü alüminyum sektöründe yanlış bir Uf değeri ciddi bir
   güven sorunudur.
2. **Proje bilgileri.** Eski sitede her proje için yalnızca ad ve şehir var.
   Yıl, kapsam ve kullanılan sistem `content/site.ts` içindeki `projectDetails`
   kaydına eklendiği anda proje sayfalarında görünür, ek kod gerekmez.
3. **HM SARAY'ın şehri** eski sitede boş; müşteriden teyit alınmalı.
4. **Hero ve öne çıkan projeler için orijinal fotoğraflar.** Mevcut görseller
   700 px ile 2560 px arasında, medyan yaklaşık 1200x800. Tasarım buna göre
   kuruldu ama yüksek çözünürlüklü kareler gelirse belirgin biçimde güçlenir.
5. **Vektör logolar.** Has Metal logosu elimizde 478x440 PNG; SVG gelirse nav ve
   footer keskinleşir. Bayilik markalarının logoları da eski siteden alınan
   düşük çözünürlüklü dosyalar: markaların kendi basın kitlerinden SVG almak
   hem daha keskin hem de marka kullanımı açısından daha doğru olur.
6. **Çeviri düzeltmesi.** Almanca, Fransızca, İtalyanca, İspanyolca, Rusça ve
   Çince metinleri ben yazdım ve şirkette kimse kontrol edemeyecek. Pazarlama
   dili için sorun değil ama en azından Almanca ve Rusça için bir anadil
   düzeltmeni tavsiye ederim; teknik bir terim yanlış oturursa fark edilmesi zor.
7. **Google Business Profile.** Üç tesis için üç ayrı `LocalBusiness` kaydı
   hazır; profillerin doğrulanması yerel aramada karşılığını doğrudan verir.

## Deploy

Vercel CLI kurulu ama bu makinede giriş yapılmamış. En temiz yol repoyu Vercel
panelinden import etmek; alan adı ve önizleme adresleri oradan yönetilir.
Tek gereken ortam değişkenleri:

| Değişken | Ne için | Zorunlu mu |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical ve OG adresleri | hayır, varsayılan `https://hasmetal.com.tr` |
| `LEAD_WEBHOOK_URL` | form taleplerinin gideceği adres | canlıda evet |
