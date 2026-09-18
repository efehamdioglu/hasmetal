/**
 * 410 Gone for the WordPress demo post the old site left published.
 *
 * A page component cannot set this status, and a rewrite to one answers 200,
 * which tells a crawler the address is still a real page. This is a dead end
 * by design, so it carries its own small document rather than the site shell.
 */
const BODY = `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Bu sayfa kaldırıldı | Has Metal</title>
<style>
  :root { color-scheme: light }
  body {
    margin: 0; min-height: 100svh; display: grid; place-content: center;
    gap: 1.25rem; padding: 2rem; background: #f7f5f2; color: #111111;
    font: 400 1rem/1.6 "Inter Tight", ui-sans-serif, system-ui, sans-serif;
  }
  p.label {
    margin: 0; font-size: .6875rem; font-weight: 500; letter-spacing: .2em;
    text-transform: uppercase; color: #8a8681;
  }
  h1 { margin: 0; font: 400 clamp(1.75rem, 5vw, 3rem)/1.1 Georgia, serif; max-width: 18ch }
  p.body { margin: 0; max-width: 42ch; color: #55534f }
  a {
    justify-self: start; margin-top: .5rem; padding: .875rem 1.75rem;
    border: 1px solid #111111; color: #111111; text-decoration: none;
    font-size: .6875rem; font-weight: 500; letter-spacing: .2em; text-transform: uppercase;
  }
  a:hover { background: #111111; color: #f7f5f2 }
  span { color: #a6192e }
</style>
</head>
<body>
  <p class="label">410</p>
  <h1>Bu sayfa kaldırıldı.</h1>
  <p class="body">Eski sitede kalan bir deneme yazısıydı, kalıcı olarak yayından alındı. Aradığınız içerik için ana sayfadan devam edebilirsiniz.</p>
  <a href="/">Ana sayfa <span>&rarr;</span></a>
</body>
</html>`

export function GET() {
  return new Response(BODY, {
    status: 410,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=0, s-maxage=86400',
      'x-robots-tag': 'noindex, nofollow',
    },
  })
}
