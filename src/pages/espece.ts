// Pages par espèce: bœuf, cochon, veau et agneau, volailles. Catalogue fixé + carcasse pré-sélectionnée.
import { SPECIES_LABEL, type Species } from '../data/products.ts'
import type { CarcassKey } from '../data/cuts.ts'
import { artFor } from '../lib/art.ts'
import { $, href } from '../lib/dom.ts'
import { callBand, plateHead } from '../components/common.ts'
import { catalogueHTML, initCatalogue } from '../components/catalogue.ts'
import { finderHTML, initFinder } from '../components/finder.ts'
import type { PageDef } from '../pages.ts'

interface Meta { species: Species; art: string; lead: string; carcass?: CarcassKey; hint: string }
const META: Record<string, Meta> = {
  'comptoir/boeuf/': { species: 'boeuf', art: 'cote', carcass: 'boeuf', lead: 'Côte de bœuf maturée, entrecôte, bavette, onglet, joue. Des races choisies, des affinages de 4 à 8 semaines.', hint: 'Touchez un morceau du bœuf pour lire le conseil du boucher.' },
  'comptoir/cochon/': { species: 'cochon', art: 'saucisse', carcass: 'cochon', lead: 'Du cochon breton élevé sur paille, du Noir de Bigorre AOP, la saucisse vigneronne et la merguez à la menthe faites maison.', hint: 'Les morceaux du cochon, un par un.' },
  'comptoir/veau-agneau/': { species: 'veau-agneau', art: 'agneau', carcass: 'agneau', lead: 'Veau de lait breton, agneau fermier du Quercy IGP et Label Rouge: gigot, carré, souris, escalope.', hint: 'Les morceaux de l\'agneau.' },
  'comptoir/volailles/': { species: 'volailles', art: 'bocal', lead: 'Poularde fermière jaune des Landes, poulet fermier, brochettes marinées: pour le déjeuner du dimanche comme pour la semaine.', hint: '' },
}

export function render(def: PageDef): string {
  const m = META[def.path]
  return `${plateHead({ title: def.title, lead: m.lead, art: artFor(m.art), crumbs: [['comptoir/', 'Le comptoir']], current: def.title })}
  <section class="section-tight"><div class="wrap">${catalogueHTML(m.species)}</div></section>
  ${m.carcass ? `<section class="section wrap" aria-label="Morceaux"><h2 data-split>Sur la carcasse</h2><p class="lead" style="margin-bottom:2rem">${m.hint}</p>${finderHTML(m.carcass, false)}<p style="margin-top:1.4rem"><a class="link-arrow" href="${href('carcasse/')}">Préparer ma liste</a></p></section>` : ''}
  <section class="section-tight wrap"><p class="note">${SPECIES_LABEL[m.species]}: prix indicatifs. Le boucher confirme au comptoir.</p></section>
  ${callBand()}`
}

export function init(root: HTMLElement) {
  const el = $('[data-catalogue]', root)
  if (el) initCatalogue(el)
  const f = $('[data-finder]', root)
  if (f) initFinder(f)
}
