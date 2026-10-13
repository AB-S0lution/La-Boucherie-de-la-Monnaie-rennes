// Génère un fichier HTML par route (index.html + <chemin>/index.html) à partir de src/pages.ts.
// Lancé automatiquement avant `vite build` / `vite dev` (voir vite.config.ts). Node >= 22 (strip-types).
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PAGES, pageTitle, type PageDef } from '../src/pages.ts'
import { BUSINESS, HOURS, PHONE_TEL } from '../src/data/business.ts'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
export const BASE = '/La-Boucherie-de-la-Monnaie-rennes/'
const SITE = 'https://ab-s0lution.github.io' + BASE

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const hh = (m: number) => `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ButcherShop',
  name: BUSINESS.name,
  url: SITE,
  telephone: PHONE_TEL.replace('+33', '+33 ').replace(/(\d)(\d{2})(\d{2})(\d{2})(\d{2})$/, '$1 $2 $3 $4 $5'),
  priceRange: BUSINESS.priceRange,
  address: { '@type': 'PostalAddress', streetAddress: BUSINESS.street, postalCode: BUSINESS.postalCode, addressLocality: BUSINESS.city, addressCountry: 'FR' },
  geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
  openingHoursSpecification: HOURS.flatMap((d) => d.ranges.map(([a, b]) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: days[d.dow], opens: hh(a), closes: hh(b) }))),
  sameAs: [BUSINESS.instagramUrl, BUSINESS.facebookUrl],
}

const attr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function page(p: PageDef): string {
  const title = attr(pageTitle(p))
  const desc = attr(p.description)
  const url = SITE + p.path
  const ld = p.path === '' || p.path === 'contact/' ? `\n    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>${title}</title>
    <meta name="description" content="${desc}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:site_name" content="${attr(BUSINESS.name)}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${url}" />
    <meta name="twitter:card" content="summary" />
    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F4EFE6" />
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0E2E28" />
    <link rel="icon" type="image/svg+xml" href="${BASE}favicon.svg" />
    <script>
      (function () {
        var d = document.documentElement;
        try { var t = localStorage.getItem('theme'); if (t) d.dataset.theme = t; else if (matchMedia('(prefers-color-scheme: dark)').matches) d.dataset.theme = 'dark'; } catch (e) {}
        if (!matchMedia('(prefers-reduced-motion: reduce)').matches) d.classList.add('js-motion');
        try { if (sessionStorage.getItem('curtain') && !matchMedia('(prefers-reduced-motion: reduce)').matches) d.classList.add('curtain-in'); } catch (e) {}
      })();
    </script>${ld}
  </head>
  <body data-page="${p.key}">
    <div id="app"></div>
    <noscript><main style="padding:2rem;max-width:40rem;margin:auto;font-family:Georgia,serif"><h1>${attr(BUSINESS.name)}</h1><p>${attr(BUSINESS.tagline)}. ${attr(BUSINESS.street)}, ${BUSINESS.postalCode} ${BUSINESS.city}.</p><p>Téléphone: <a href="tel:${PHONE_TEL}">02 99 22 04 96</a></p><p>Ce site utilise JavaScript pour afficher son contenu.</p></main></noscript>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`
}

export function generate() {
  for (const p of PAGES) {
    const dir = join(root, p.path)
    if (p.path) mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), page(p))
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) generate()
