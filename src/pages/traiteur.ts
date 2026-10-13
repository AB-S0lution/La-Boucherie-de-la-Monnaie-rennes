// Traiteur: rotation de la semaine, plats, fêtes, menu à imprimer.
import { DISHES, WEEK_ROTATION, type Dish } from '../data/traiteur.ts'
import { photo, photoImg } from '../data/photos.ts'
import { FETES } from '../data/cave.ts'
import { BUSINESS } from '../data/business.ts'
import { artFor } from '../lib/art.ts'
import { esc, money } from '../lib/dom.ts'
import { callBand, plateHead } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

const name = (id: string) => DISHES.find((d) => d.id === id)?.name ?? id
const dish = (d: Dish) => `<article class="dish" data-reveal><h3>${esc(d.name)}${d.cited ? '' : '<span class="badge-ex">exemple</span>'}</h3><span class="p">${money(d.price)}</span><p>${esc(d.desc)}</p></article>`

export function render(_def: PageDef): string {
  const group = (k: Dish['kind'], t: string) => `<div><h3 class="mono note" style="margin-bottom:.4rem">${t}</h3>${DISHES.filter((d) => d.kind === k).map(dish).join('')}</div>`
  return `${plateHead({ title: 'Traiteur', lead: 'Chaque jour, un large choix d\'entrées, de plats préparés et de desserts faits maison. La carte change: voici une semaine type, en exemple.', art: artFor('balance') })}
  <section class="section wrap" aria-labelledby="sem"><h2 id="sem" data-split>La semaine du traiteur</h2><p class="note" style="margin-bottom:1.4rem">Rotation d'exemple. Appelez pour connaître le plat du jour.</p>
    <div class="week">${WEEK_ROTATION.map((r) => `<div class="week-day" data-reveal><h3>${r.day}</h3>${r.special ? `<span class="badge-ex" style="margin:0 0 .6rem">${esc(r.special)}</span>` : ''}<dl><dt>Entrée</dt><dd>${esc(name(r.entree))}</dd><dt>Plat</dt><dd>${esc(name(r.plat))}</dd><dt>Dessert</dt><dd>${esc(name(r.dessert))}</dd></dl></div>`).join('')}</div></section>
  <section class="section-tight wrap" aria-label="La cuisine en images"><div class="photo-strip">${['plat-mijote', 'bol-mijote', 'tranchage-roti', 'roti-tranche'].map((s, i) => `<figure class="photo-fig" data-reveal style="--i:${i}">${photoImg(photo(s))}<figcaption>Photo d'illustration</figcaption></figure>`).join('')}</div></section>
  <section class="section wrap" aria-labelledby="carte"><h2 id="carte" data-split>La carte</h2>
    <div class="dish-grid" style="margin-top:2rem">${group('entrée', 'Entrées')}${group('plat', 'Plats')}${group('dessert', 'Desserts')}${group('sandwich', 'Sandwichs du midi')}</div>
    <p class="note" style="margin-top:1rem">Les plats cités par la presse ou les clients sont réels, les prix et la rotation sont des exemples.</p></section>
  <section class="section band-green" aria-labelledby="fetes"><div class="wrap"><h2 id="fetes" data-split>Le calendrier des fêtes</h2>
    <div style="margin-top:2rem">${FETES.map((f) => `<div class="fete" data-reveal><h3>${esc(f.name)}</h3><p>${esc(f.text)}</p><span class="ex">${esc(f.period)}${f.example ? '<span class="badge-ex">date en exemple</span>' : ''}<br>Commander avant: ${esc(f.orderBy)}</span></div>`).join('')}</div></div></section>
  <section class="section wrap" aria-labelledby="print"><h2 id="print" data-split>Le menu à imprimer</h2><p class="lead" style="margin-bottom:1.2rem">Une version noir et blanc de la semaine, pour le frigo.</p>
    <button class="btn no-print" type="button" onclick="window.print()">Imprimer le menu</button>
    <div class="print-only"><h1>${BUSINESS.name}, menu de la semaine (exemple)</h1>${WEEK_ROTATION.map((r) => `<p><strong>${r.day}</strong>: ${esc(name(r.entree))}, ${esc(name(r.plat))}, ${esc(name(r.dessert))}</p>`).join('')}<p>${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}. Tél. 02 99 22 04 96.</p></div></section>
  ${callBand('Une réception ? Parlons de votre menu.')}`
}
