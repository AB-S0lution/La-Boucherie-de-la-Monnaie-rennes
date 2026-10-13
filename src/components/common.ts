// Composants partagés: ticket d'horaires, pastilles, citations, pique-prix, en-tête de planche, bandeau d'appel.
import { BUSINESS, HOURS, PHONE_PRIMARY, PHONE_TEL, ADDRESS_LINE, fmtTime, openStatus } from '../data/business.ts'
import { photo, photoImg, speciesPhoto } from '../data/photos.ts'
import { PRODUCTS, PRICE_NOTE, unitLabel, type Product } from '../data/products.ts'
import { REVIEWS } from '../data/reviews.ts'
import { coinSeal, ICON } from '../lib/art.ts'
import { href, esc, money } from '../lib/dom.ts'

/** Ticket de balance: horaires, statut ouvert/fermé (heure de Paris) */
export function hoursTicket(opts: { compact?: boolean } = {}): string {
  const st = openStatus()
  const rows = HOURS.map((d) => {
    const val = d.ranges.length ? d.ranges.map(([a, b]) => `${fmtTime(a)} à ${fmtTime(b)}`).join('<br>') : 'Fermé'
    return `<div class="row${d.dow === st.dow ? ' today' : ''}"><span>${d.label}${d.dow === 6 ? '<span class="market-mark">Jour de marché</span>' : ''}</span><span class="r">${val}</span></div>`
  }).join('')
  return `<div class="ticket" data-print>
    <h3>La Boucherie de la Monnaie<br>${BUSINESS.street}</h3>
    ${rows}
    <p class="status" data-open="${st.open}" role="status">${st.label}</p>
    ${opts.compact ? '' : `<div class="total"><a href="tel:${PHONE_TEL}">${PHONE_PRIMARY}</a></div><p class="ticket-note">${ADDRESS_LINE}. Heures de Paris.</p>`}
  </div>`
}

export function sealsRow(): string {
  const items = [
    { l: '5/5 SUR GOOGLE · PLUS DE 60 AVIS · ', c: '5/5', s: 'GOOGLE', t: 'Une note parfaite sur plus de 60 avis Google.' },
    { l: 'SÉLECTIONNÉE PAR LE FOODING · ', c: 'Fooding', s: 'RENNES', t: 'Une des deux boucheries de Rennes que Le Fooding recommande.' },
    { l: 'DEPUIS 2023 · RUE DE LA MONNAIE · ', c: '2023', s: 'DEPUIS', t: 'Ouverte le 30 mars 2023, première des Échoppes des Lices.' },
    { l: 'CARCASSES ENTIÈRES · SANS RIEN CACHER · ', c: 'Entières', s: 'CARCASSES', t: 'Bœuf, cochon et agneau travaillés en carcasse entière.' },
  ]
  return `<div class="seals">${items.map((i) => `<div class="seal-item" data-reveal>${coinSeal(i.l, i.c, i.s, 'seal-light')}<p>${i.t}</p></div>`).join('')}</div>`
}

export function quoteCards(ids: number[]): string {
  const list = ids.map((id) => REVIEWS.find((r) => r.id === id)!).filter(Boolean)
  return list.map((r) => `<figure class="quote" data-reveal><blockquote>« ${esc(r.text)} »</blockquote><figcaption>${r.source}, ${r.date}</figcaption></figure>`).join('')
}

export function piquePrix(p: Product, withAdd = false): string {
  const tags = [...(p.matureDays ? [] : []), ...p.tags.slice(0, 3)].map((t) => `<span>${esc(t)}</span>`).join('')
  return `<li class="slate" data-id="${p.id}">
    <figure class="slate-photo">${photoImg(speciesPhoto(p.species, p.id))}<figcaption>Photo d'illustration</figcaption></figure>
    <h3>${esc(p.name)}</h3>
    ${p.matureDays ? `<span class="mature">Affiné ${p.matureDays === 28 ? '4' : p.matureDays === 42 ? '6' : '8'} semaines</span>` : ''}
    <p class="desc">${esc(p.desc)}</p>
    <div class="price">${money(p.price)} <small>${unitLabel(p.unit)}</small></div>
    <div class="tags">${tags}</div>
    ${withAdd ? `<button class="add-btn" type="button" data-add="${p.id}">${ICON.plus}<span>Ajouter à ma liste</span></button>` : ''}
    <span class="slice" aria-hidden="true"></span>
  </li>`
}

export function shelf(products: Product[], withAdd = false): string {
  return `<ul class="shelf">${products.map((p) => piquePrix(p, withAdd)).join('')}</ul><div class="counter-top" aria-hidden="true"></div><div class="marble" aria-hidden="true"></div><p class="note" style="margin-top:.8rem">${PRICE_NOTE}</p>`
}

export const byIds = (ids: string[]) => ids.map((id) => PRODUCTS.find((p) => p.id === id)!).filter(Boolean)

/** En-tête de planche (page intérieure): titre Gloock + gravure, grille 7/5 */
export function plateHead(opts: { title: string; lead: string; art: string; crumbs?: Array<[string, string]>; current?: string }): string {
  const crumbs = opts.crumbs?.length
    ? `<nav class="crumbs" aria-label="Fil d'Ariane"><a href="${href('')}">Accueil</a>${opts.crumbs.map(([p, l]) => ` / <a href="${href(p)}">${l}</a>`).join('')}${opts.current ? ` / <span>${opts.current}</span>` : ''}</nav>`
    : ''
  return `<section class="wrap plate">
    <div>${crumbs}<h1 data-split>${opts.title}</h1><p class="lead">${opts.lead}</p></div>
    <div class="plate-art" data-reveal>${opts.art}</div>
  </section>
  <div class="milled" aria-hidden="true"></div>`
}

/** Bandeau d'appel de fin de page */
export function callBand(text = 'Une question, une commande, une envie de côte de bœuf ?'): string {
  return `<section class="band-green section-tight" aria-label="Contact">
    <div class="wrap" style="display:grid;gap:1.4rem;justify-items:start">
      <h2 data-split style="max-width:18ch">${text}</h2>
      <p style="color:var(--muted)">Appelez-nous, passez au comptoir ou écrivez-nous en message privé sur Instagram. Le boucher vous conseille.</p>
      <div style="display:flex;flex-wrap:wrap;gap:.8rem"><a class="btn" href="tel:${PHONE_TEL}">${ICON.phone}<span>Appeler le ${PHONE_PRIMARY}</span></a><a class="btn btn-ghost" href="${href('contact/')}">Horaires et accès</a></div>
    </div>
  </section>`
}

/** Bandeau de photos d'illustration (2 colonnes sur téléphone, 4 au-delà de 900 px) */
export function photoStrip(slugs: string[], label = 'En images'): string {
  return `<section class="section-tight wrap" aria-label="${label}"><div class="photo-strip">${slugs.map((s, i) => `<figure class="photo-fig" data-reveal style="--i:${i}">${photoImg(photo(s))}<figcaption>Photo d'illustration</figcaption></figure>`).join('')}</div></section>`
}

/** Bande photo fine (pages FAQ, légales): une ou deux images panoramiques */
export function photoBand(slugs: string[], label = 'Ambiance'): string {
  return `<section class="wrap photo-slim" aria-label="${label}">${slugs.map((s, i) => `<figure class="photo-fig" data-reveal="mask" style="--i:${i}">${photoImg(photo(s))}<figcaption>Photo d'illustration</figcaption></figure>`).join('')}</section>`
}
