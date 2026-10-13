// La carcasse entière: l'interaction signature, pleine page.
import { artFor } from '../lib/art.ts'
import { $ } from '../lib/dom.ts'
import { callBand, photoBand, plateHead } from '../components/common.ts'
import { finderHTML, initFinder } from '../components/finder.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  return `${plateHead({ title: 'La carcasse entière', lead: 'Choisissez un morceau sur la carcasse. Le boucher vous dit comment le cuire, combien en prévoir, et prépare votre liste pour le comptoir.', art: artFor('carcasse') })}
  <section class="section-tight"><div class="wrap">${finderHTML('boeuf', true)}
    <p class="note" style="margin-top:1.4rem" id="liste">La liste reste sur votre appareil. Elle ne déclenche aucun paiement: vous appelez, vous copiez le texte ou vous écrivez en message privé.</p></div></section>
  ${photoBand(['decoupe-billot', 'pieces-suspendues'], 'Au billot')}
  ${callBand('Votre liste est prête ? Appelez le comptoir.')}`
}

export function init(root: HTMLElement) {
  const f = $('[data-finder]', root)
  if (f) initFinder(f)
}
