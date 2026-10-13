// Épicerie fine.
import { GROCERY, GROCERY_GROUPS } from '../data/epicerie.ts'
import { artFor } from '../lib/art.ts'
import { esc, money } from '../lib/dom.ts'
import { callBand, plateHead } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  return `${plateHead({ title: 'L\'épicerie fine', lead: 'Un coin d\'épicerie pour accompagner la viande: huile Kaïa, cornichons Maison Marc, moutarde d\'Orléans, bouillon artisanal Dohatsu.', art: artFor('bocal') })}
  ${GROCERY_GROUPS.map((g) => `<section class="section-tight wrap" aria-labelledby="g-${g.id}"><h2 id="g-${g.id}" data-split>${esc(g.title)}</h2><p class="lead" style="margin-bottom:1.2rem">${esc(g.text)}</p>
    <ul class="shelf">${GROCERY.filter((x) => x.group === g.id).map((x) => `<li class="slate" data-reveal><h3>${esc(x.name)}</h3>${x.maker ? `<span class="mature">${esc(x.maker)}</span>` : ''}<p class="desc">${esc(x.desc)}</p><div class="price">${money(x.price)} <small>${esc(x.format)}</small></div><div class="tags">${x.real ? '<span>référence réelle</span>' : '<span>exemple</span>'}${x.realPrice ? '<span>prix réel</span>' : ''}</div><span class="slice" aria-hidden="true"></span></li>`).join('')}</ul></section>`).join('')}
  <section class="section-tight wrap"><p class="note">Seul le prix du bouillon Dohatsu (9,90 € le litre) est publié par la maison. Tous les autres prix sont des exemples. Aucun logo de marque n'est reproduit.</p></section>
  ${callBand()}`
}
