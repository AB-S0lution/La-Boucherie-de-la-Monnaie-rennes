// Épicerie fine.
import { GROCERY, GROCERY_GROUPS } from '../data/epicerie.ts'
import { artFor } from '../lib/art.ts'
import { esc, money } from '../lib/dom.ts'
import { callBand, photoStrip, plateHead } from '../components/common.ts'
import { photo, photoImg } from '../data/photos.ts'

const GROUP_PHOTOS: Record<string, string[]> = { viande: ['huile-verseuse', 'huile-carafe', 'steak-ail-poivre'], 'apéro': ['bocal-ail', 'bocal-conserve', 'charcuterie-pain'], bouillon: ['bol-mijote', 'plat-mijote'] }
const itemPhoto = (group: string, i: number) => { const l = GROUP_PHOTOS[group] ?? ['bocal-conserve']; return photo(l[i % l.length]) }
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  return `${plateHead({ title: 'L\'épicerie fine', lead: 'Un coin d\'épicerie pour accompagner la viande: huile Kaïa, cornichons Maison Marc, moutarde d\'Orléans, bouillon artisanal Dohatsu.', art: artFor('bocal') })}
  ${photoStrip(['huile-verseuse', 'bocal-ail', 'bocal-conserve', 'huile-carafe'], 'L\'épicerie en images')}
  ${GROCERY_GROUPS.map((g) => `<section class="section-tight wrap" aria-labelledby="g-${g.id}"><h2 id="g-${g.id}" data-split>${esc(g.title)}</h2><p class="lead" style="margin-bottom:1.2rem">${esc(g.text)}</p>
    <ul class="shelf">${GROCERY.filter((x) => x.group === g.id).map((x, i) => `<li class="slate" data-reveal><figure class="slate-photo">${photoImg(itemPhoto(g.id, i))}<figcaption>Photo d'illustration</figcaption></figure><h3>${esc(x.name)}</h3>${x.maker ? `<span class="mature">${esc(x.maker)}</span>` : ''}<p class="desc">${esc(x.desc)}</p><div class="price">${money(x.price)} <small>${esc(x.format)}</small></div><div class="tags">${x.real ? '<span>référence réelle</span>' : '<span>exemple</span>'}${x.realPrice ? '<span>prix réel</span>' : ''}</div><span class="slice" aria-hidden="true"></span></li>`).join('')}</ul></section>`).join('')}
  <section class="section-tight wrap"><p class="note">Seul le prix du bouillon Dohatsu (9,90 € le litre) est publié par la maison. Tous les autres prix sont des exemples. Aucun logo de marque n'est reproduit.</p></section>
  ${callBand()}`
}
