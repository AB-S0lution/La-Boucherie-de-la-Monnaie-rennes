// La cave de maturation: récit, faits, races, cuisson d'une viande maturée, mur de vitrines.
import { COOK_MATURED, MATURATION, MATURATION_FACTS, VITRINE } from '../data/cave.ts'
import { photo, photoImg, speciesPhoto } from '../data/photos.ts'
import { PRODUCTS } from '../data/products.ts'
import { artFor, cote } from '../lib/art.ts'
import { esc, href, money } from '../lib/dom.ts'
import { callBand, plateHead, shelf } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  const mature = PRODUCTS.filter((p) => p.matureDays)
  return `${plateHead({ title: 'La cave de maturation', lead: 'Quatre, six ou huit semaines: le temps fait le travail. Aucune température ni hygrométrie n\'est affichée ici, le boucher vous explique tout au comptoir.', art: artFor('cave') })}
  <section class="section-tight wrap" aria-label="En images"><div class="photo-strip">${['persille-gros-plan', 'pieces-suspendues', 'piece-papier', 'saignant-tranche'].map((s, i) => `<figure class="photo-fig" data-reveal style="--i:${i}">${photoImg(photo(s))}<figcaption>Photo d'illustration</figcaption></figure>`).join('')}</div></section>
  <section class="section wrap" aria-labelledby="tl"><h2 id="tl" data-split>De J0 à J56</h2>
    <div class="cols-2" style="margin-top:2rem;align-items:start">
      <ol class="timeline">${MATURATION.map((m) => `<li data-reveal><span class="when">${esc(m.title)}${m.real ? '' : ' (étape pédagogique)'}</span><h3>${esc(m.breed)}, ${esc(m.cut.toLowerCase())}</h3><p>${esc(m.text)}</p></li>`).join('')}</ol>
      <div class="steak-wrap" data-reveal style="max-width:420px">${cote(1)}</div>
    </div></section>
  <section class="section band-green" aria-labelledby="faits"><div class="wrap"><h2 id="faits" data-split>Ce que fait la cave</h2>
    <div class="values" style="margin-top:2rem">${MATURATION_FACTS.map((f) => `<div data-reveal><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></div>`).join('')}</div></div></section>
  <section class="section wrap" aria-labelledby="races"><h2 id="races" data-split>Les pièces maturées</h2>
    <p class="lead" style="margin-bottom:2rem">Bavette de Normande, entrecôte de limousine, faux-filet de Minhota, entrecôte de Noire de Baltique. Prix en exemple.</p>
    ${shelf(mature)}</section>
  <section class="section wrap" aria-labelledby="mur"><h2 id="mur" data-split>Le mur de vitrines</h2>
    <p class="lead" style="margin-bottom:1.6rem">Une grille de vitrines pour montrer les pièces à la vue de tous. Les noms sont réels, la présentation est un exemple.</p>
    <ul class="list-plain vitrine-wall">${VITRINE.map((v) => { const p = PRODUCTS.find((x) => x.id === v.productId); return p ? `<li class="slate" style="min-height:0"><figure class="slate-photo">${photoImg({ ...speciesPhoto(p.species, p.id), alt: '' })}</figure><h3 style="font-size:1.05rem">${esc(p.name)}</h3><div class="price">${money(p.price)}</div></li>` : '' }).join('')}</ul></section>
  <section class="section wrap cols-2 cols-5-7" aria-labelledby="cuire" style="align-items:start"><div class="stack"><h2 id="cuire" data-split>Cuire une viande maturée</h2><p class="lead">Quatre gestes, pas un de plus.</p></div>
    <ol class="rows list-plain">${COOK_MATURED.map((c, i) => `<li data-reveal><span class="mono note">${i + 1}</span><h3>${esc(c.step)}</h3><p>${esc(c.text)}</p></li>`).join('')}</ol></section>
  <p class="wrap" style="padding-block:1rem 3rem"><a class="link-arrow" href="${href('carcasse/')}">Choisir mon morceau</a></p>
  ${callBand('Une pièce à maturer ? Parlez-en au boucher.')}`
}
