# Has Metal Alüminyum, yeni web sitesi

hasmetal.com.tr'nin baştan tasarlanmış hâli, Türkçe ve İngilizce. İçerik mevcut
siteden taşındı ve eski URL'lerin tamamı korundu; tasarım, hareket dili, içerik
katmanı ve SEO altyapısı sıfırdan kuruldu.

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
| `npm run build` | 136 sayfayı statik üretir (TR + EN) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint, React Compiler kuralları dahil |
| `npm run qa` | Playwright ile 31 davranış ve erişilebilirlik kontrolü |
| `npm run check:emdash` | 131 sayfanın hiçbirinde em dash kalmadığını doğrular |
| `npm run perf` | Bundle boyutu + LCP/CLS ölçümü |
| `npm run shots` | Ekran görüntüleri, `scripts/_shots/` |
| `npm run verify:urls` | Eski sitenin 28 URL'si ve yeni adresler çözülüyor mu |
| `npm run content:refresh` | İçeriği canlı siteden yeniden çeker, `content/data.json` üretir |
| `node scripts/brand-logos.mjs` | Bayilik logolarını beyazdan mürekkep rengine çevirir |

Son beş komut çalışan bir sunucu bekler; hepsi varsayılan olarak
`http://localhost:3001` adresine bakar, `BASE` ortam değişkeniyle değiştirilebilir.

## İki dil

Türkçe kökte durur, böylece eski URL'lerin hiçbiri değişmez. İngilizce `/en`
altında kendi yol adlarıyla yaşar:

| Türkçe | İngilizce |
|---|---|
| `/` | `/en` |
| `/kurumsal` | `/en/about` |
| `/sistemler/hm-55-t` | `/en/systems/hm-55-t` |
| `/urunler/fitil-ve-conta` | `/en/products/gaskets-and-seals` |
| `/hizmetler/insaat-ve-taahhut` | `/en/services/construction-and-contracting` |
| `/referanslar/regnum-sky-tower` | `/en/projects/regnum-sky-tower` |
| `/bayiliklerimiz` | `/en/partners` |
| `/iletisim` | `/en/contact` |
| `/teklif` | `/en/quote` |

İki dilin de kendi kök layout'u var, bu yüzden `<html lang>` her zaman doğru.
`content/i18n.ts` slug eşlemelerini, rota kurucularını, arayüz sözlüğünü ve
`counterpartPath` ile dil değiştirme bağlantısının doğru karşılığa gitmesini tutar.
Sayfa gövdeleri `components/pages/` altında tek yerde durur; rota dosyaları
yalnızca `locale` geçen ince sarmalayıcılardır.

Çeviri elle yapıldı. Eski sitedeki gtranslate eklentisi makine çevirisiydi ve
indekslenmiyordu; bu kurgu `hreflang` ile eşlenmiş, indekslenen gerçek bir
İngilizce sürüm üretir.

## Mimari

```
app/
  (tr)/                  Türkçe kök layout ve 16 rota
  (en)/en/               İngilizce kök layout ve 15 rota
  actions.ts             teklif ve iletişim formu (Server Action)
  sitemap.ts robots.ts   iki dili birden listeler
components/
  pages/                 sayfa gövdeleri, iki dil için tek kaynak
  scenes/                hero, zaman çizelgesi, referans indeksi
  motion/                Reveal, LineRise, Counter, Marquee, Lenis
  shell/                 nav, footer, kök kabuk
  ui/                    Img, PageHero, CtaBand, form, JSON-LD
content/
  data.json              üretilmiş: 46 proje, görsel kayıtları, kurumsal metin
  site.ts                elle yazılan Türkçe katman
  en/site.ts             İngilizce kaplama, yalnızca kelimeler
  locale.ts              ikisini birleştiren erişimciler
  i18n.ts                rotalar, slug eşlemeleri, arayüz sözlüğü
  redirects.ts           eski 28 URL'nin haritası
lib/
  seo.ts schema.ts       metadata üreticisi ve JSON-LD kurucuları
  fonts.ts motion.ts
scripts/                 içerik zinciri ve doğrulama araçları
```

### İçerik katmanı

Türkçe kaynak, İngilizce kaplama. `content/locale.ts` içindeki erişimciler
(`systemsFor`, `homeFor`, `locationsFor` ve diğerleri) Türkçe kaydı alır ve
yalnızca kelimeleri değiştirir. Rakam, telefon, adres ve slug tek kopya hâlinde
durur; iki dil bir olgu üzerinde ayrışamaz.

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
- `sitemap.xml` ve `robots.txt`, TR/EN çiftleri `hreflang` ve `x-default` ile
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

1. **Ürün teknik dokümanları.** HM 55, HM 55 T, C50 ve C60 sayfalarında spec
   tablosu yok, çünkü eski sitede de yoktu. Uydurma bir Uf değeri alüminyum
   sektöründe ciddi bir güven sorunudur; sayfalar bunun yerine "teknik doküman
   isteyin" bloğuyla dürüstçe çalışıyor. Katalog PDF'leri gelince
   `content/site.ts` içindeki `specsPending` bloğu gerçek tabloyla değiştirilir.
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
6. **Google Business Profile.** Üç tesis için üç ayrı `LocalBusiness` kaydı
   hazır; profillerin doğrulanması yerel aramada karşılığını doğrudan verir.

## Deploy

Vercel CLI kurulu ama bu makinede giriş yapılmamış. En temiz yol repoyu Vercel
panelinden import etmek; alan adı ve önizleme adresleri oradan yönetilir.
Tek gereken ortam değişkenleri:

| Değişken | Ne için | Zorunlu mu |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical ve OG adresleri | hayır, varsayılan `https://hasmetal.com.tr` |
| `LEAD_WEBHOOK_URL` | form taleplerinin gideceği adres | canlıda evet |
