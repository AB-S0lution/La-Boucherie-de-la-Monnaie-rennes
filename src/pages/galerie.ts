// Galerie: gravures originales + emplacements photo, avec boîte de dialogue (lightbox).
import { GALLERY } from '../data/content.ts'
import { PHOTOS, photoImg } from '../data/photos.ts'
import { artFor } from '../lib/art.ts'
import { $, $$, esc } from '../lib/dom.ts'
import { callBand, plateHead } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  return `${plateHead({ title: 'Galerie', lead: 'Gravures originales de la boutique et emplacements réservés aux photos de la maison.', art: artFor('billot') })}
  <section class="section-tight" aria-labelledby="g-photos"><div class="wrap">
    <h2 id="g-photos" data-split>En photos</h2>
    <p class="lead">${PHOTOS.length} photos d'illustration (Unsplash, licence Unsplash) en attendant les photos de la maison.</p>
    <div class="masonry photo-masonry" style="margin-top:1.6rem">${PHOTOS.map((p, i) => `<figure class="photo-fig" data-reveal style="--i:${i % 3}"><a href="${p.src}" target="_blank" rel="noopener">${photoImg(p)}</a><figcaption>${esc(p.alt)} · <span class="mono">Unsplash</span></figcaption></figure>`).join('')}</div>
  </div></section>
  <section class="section-tight" aria-labelledby="g-gravures"><div class="wrap"><h2 id="g-gravures" data-split>Les gravures</h2><div class="masonry" style="margin-top:1.6rem">${GALLERY.map((g) => `<figure data-reveal><button type="button" data-g="${g.id}" aria-label="Agrandir: ${esc(g.title)}">${artFor(g.art, g.ratio)}<figcaption>${esc(g.title)}</figcaption></button></figure>`).join('')}</div></div></section>
  <dialog class="lightbox" aria-label="Agrandissement"><div class="lightbox-in"><div data-lb-art></div><h2 data-lb-title style="font-size:1.6rem"></h2><p data-lb-note></p><form method="dialog"><button class="btn">Fermer</button></form></div></dialog>
  ${callBand()}`
}

export function init(root: HTMLElement) {
  const dlg = $('dialog', root) as HTMLDialogElement
  $$('[data-g]', root).forEach((b) => b.addEventListener('click', () => {
    const g = GALLERY.find((x) => x.id === b.dataset.g)!
    $('[data-lb-art]', dlg)!.innerHTML = artFor(g.art, g.ratio)
    $('[data-lb-title]', dlg)!.textContent = g.title
    $('[data-lb-note]', dlg)!.textContent = g.note
    dlg.showModal()
  }))
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close() })
}
