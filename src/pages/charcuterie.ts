// Charcuterie maison: saucisse vigneronne, pâté en croûte, planche apéro (maquette), catalogue.
import { PRODUCTS } from '../data/products.ts'
import { photo, photoImg } from '../data/photos.ts'
import { artFor } from '../lib/art.ts'
import { $, $$, esc, money } from '../lib/dom.ts'
import { callBand, plateHead, shelf } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

const PLANCHE = ['pate-en-croute', 'coppa-maison', 'rillettes-boeuf-espelette', 'saucisse-vigneronne', 'foie-gras-canard']

export function render(_def: PageDef): string {
  const charc = PRODUCTS.filter((p) => p.species === 'charcuterie' || p.id === 'saucisse-vigneronne' || p.id === 'merguez-menthe')
  const planche = PLANCHE.map((id) => PRODUCTS.find((p) => p.id === id)).filter((p): p is NonNullable<typeof p> => !!p)
  return `${plateHead({ title: 'Charcuterie maison', lead: 'Terrines, pâté en croûte, foie gras, coppa, rillettes de bœuf. La saucisse vigneronne et la merguez à la menthe sont faites ici.', art: artFor('pate') })}
  <section class="section-tight wrap" aria-label="En images"><div class="photo-strip">${['planche-charcuterie', 'viande-sechee', 'charcuterie-pain', 'saucisses-planche'].map((s, i) => `<figure class="photo-fig" data-reveal style="--i:${i}">${photoImg(photo(s))}<figcaption>Photo d'illustration</figcaption></figure>`).join('')}</div></section>
  <section class="section wrap cols-2" style="align-items:center"><div class="stack"><h2 data-split>La saucisse vigneronne</h2>
    <p class="lead">Porc, miel, vin rouge et échalotes. Une saucisse de caractère, pour la plancha ou le four.</p>
    <p>Elle se cuit doucement, sans la piquer, avec un fond de vin ou une cuillère de moutarde d'Orléans. Un classique du barbecue de la maison.</p></div>
    <div data-reveal style="max-width:440px;justify-self:center">${artFor('saucisse')}</div></section>
  <section class="section band-green" aria-labelledby="pc"><div class="wrap cols-2" style="align-items:center"><div data-reveal style="max-width:440px">${artFor('pate')}</div>
    <div class="stack"><h2 id="pc" data-split>Le pâté en croûte</h2><p class="lead">Croûte dorée, gelée limpide, farce fine. Une coupe nette, comme on le voit chez les bonnes maisons.</p>
    <p>Il se commande pour les fêtes et se sert frais, avec des cornichons français et une salade verte.</p></div></div></section>
  <section class="section wrap" aria-labelledby="pl"><h2 id="pl" data-split>Composer une planche apéro</h2>
    <p class="lead" style="margin-bottom:1.6rem">Maquette pour imaginer la planche. Pas de paiement: la composition se commande par téléphone.</p>
    <div class="finder" data-planche><div class="field"><label for="conv">Convives</label><input id="conv" type="number" min="2" max="20" value="6" inputmode="numeric" data-conv></div>
      <ul class="list-plain rows" data-planche-list>${planche.map((p) => `<li style="display:flex;justify-content:space-between;gap:1rem"><label><input type="checkbox" checked data-pid="${p.id}"> ${esc(p.name)}</label><span class="mono">${money(p.price)}</span></li>`).join('')}</ul>
      <p class="mono" data-planche-out role="status"></p></div></section>
  <section class="section wrap" aria-labelledby="tout"><h2 id="tout" data-split>Toute la charcuterie</h2><div style="margin-top:2rem">${shelf(charc)}</div></section>
  ${callBand('Une planche pour samedi ? On vous la prépare.')}`
}

export function init(root: HTMLElement) {
  const box = $('[data-planche]', root)!
  const out = $('[data-planche-out]', box)!
  const run = () => {
    const n = Number(($('[data-conv]', box) as HTMLInputElement).value) || 2
    const ids = $$<HTMLInputElement>('[data-pid]', box).filter((c) => c.checked).map((c) => c.dataset.pid!)
    const g = Math.round(n * 90 / 10) * 10
    out.textContent = `${ids.length} produits, environ ${g} g de charcuterie pour ${n} convives.`
  }
  box.addEventListener('input', run)
  run()
}
