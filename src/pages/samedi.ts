// Le samedi des Lices: marché, ouverture continue, apéro, voisins (composition 2023).
import { NEIGHBOURS, EVENTS } from '../data/content.ts'
import { PRODUCTS } from '../data/products.ts'
import { artFor } from '../lib/art.ts'
import { esc } from '../lib/dom.ts'
import { callBand, hoursTicket, plateHead, shelf, byIds } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  const apero = byIds(['saucisse-vigneronne', 'pate-en-croute', 'coppa-maison', 'rillettes-boeuf-espelette'])
  void PRODUCTS
  return `${plateHead({ title: 'Le samedi des Lices', lead: 'Le samedi, la boucherie reste ouverte de 9 h à 18 h 30 sans interruption, en plein jour de marché.', art: artFor('halles') })}
  <section class="section wrap cols-2" style="align-items:start"><div class="stack"><h2 data-split>Le samedi, ça se passe ici</h2>
    <p class="lead">Les halles de fonte de la place des Lices, les étals, les voisins: la rue de la Monnaie est à deux pas.</p>
    <p>Venez en fin de matinée pour la côte de bœuf du dimanche, ou en milieu d'après-midi pour l'apéro: la boutique ne ferme pas à midi le samedi.</p></div>${hoursTicket({ compact: true })}</section>
  <section class="section band-green" aria-labelledby="ap"><div class="wrap"><h2 id="ap" data-split>L'apéro-marché</h2><p class="lead" style="margin-bottom:2rem">Quatre idées du samedi. Prix en exemple.</p>${shelf(apero)}</div></section>
  <section class="section wrap" aria-labelledby="ev"><h2 id="ev" data-split>Rendez-vous de la maison</h2>
    <div class="rows list-plain" style="margin-top:1.6rem">${EVENTS.map((e) => `<div data-reveal style="display:grid;gap:.2rem"><span class="mono note">${esc(e.when)}${e.example ? '<span class="badge-ex">exemple</span>' : ''}</span><h3>${esc(e.title)}</h3><p>${esc(e.text)}</p></div>`).join('')}</div></section>
  <section class="section wrap" aria-labelledby="vo"><h2 id="vo" data-split>Les voisins</h2>
    <p class="note" style="margin-bottom:1rem">Composition de 2023, à vérifier avant publication: les boutiques ont pu changer.</p>
    <ul class="rows list-plain">${NEIGHBOURS.map((n) => `<li><strong>${esc(n.name)}</strong>, ${esc(n.what.toLowerCase())}. <span class="note">${esc(n.note)}</span></li>`).join('')}</ul></section>
  ${callBand()}`
}
