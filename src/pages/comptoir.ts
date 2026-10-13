// Le comptoir: catalogue filtrable + coups de cœur.
import { artFor } from '../lib/art.ts'
import { $ } from '../lib/dom.ts'
import { callBand, photoStrip, plateHead } from '../components/common.ts'
import { catalogueHTML, initCatalogue } from '../components/catalogue.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  return `${plateHead({ title: 'Le comptoir', lead: 'Bœuf, cochon, veau, agneau, volaille et charcuterie. Filtrez par cuisson, occasion ou maturation. Les prix sont des exemples.', art: artFor('cote') })}
  ${photoStrip(['vitrine-viandes', 'persille-gros-plan', 'saucisses-romarin', 'planche-charcuterie'], 'Le comptoir en images')}
  <section class="section-tight"><div class="wrap">${catalogueHTML()}</div></section>
  ${callBand('Une pièce en tête ? Le boucher vous la prépare.')}`
}

export function init(root: HTMLElement) {
  const el = $('[data-catalogue]', root)
  if (el) initCatalogue(el)
}
