// D'où vient la viande: carte, races, labels.
import { LABELS_EXPLAINED, ORIGINS } from '../data/origins.ts'
import { franceMap, artFor } from '../lib/art.ts'
import { $, $$, esc } from '../lib/dom.ts'
import { gsap } from '../lib/motion.ts'
import { reduceMotion } from '../lib/dom.ts'
import { callBand, photoStrip, plateHead } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  return `${plateHead({ title: 'D\'où vient la viande', lead: 'Des régions et des races, pas des noms inventés. Touchez un point sur la carte, ou choisissez dans la liste.', art: artFor('cote') })}
  <section class="section wrap cols-2 cols-5-7" style="align-items:start">
    <div class="map-wrap" data-map>${franceMap()}${ORIGINS.map((o, i) => `<button class="map-pt" type="button" style="left:${(o.x / 600) * 100}%;top:${(o.y / 640) * 100}%" data-o="${o.id}" aria-pressed="${i === 0}" aria-label="${esc(o.name)}">${i + 1}</button>`).join('')}</div>
    <div><ul class="origin-list">${ORIGINS.map((o, i) => `<li><button type="button" data-o="${o.id}" aria-pressed="${i === 0}"><span>${i + 1}. ${esc(o.name)}</span><span class="br">${esc(o.breed)}</span></button></li>`).join('')}</ul>
      <div class="origin-detail" data-detail aria-live="polite" style="margin-top:1.4rem"></div></div></section>
  ${photoStrip(['grosse-piece-planche', 'piece-legumes', 'tranchage-roti', 'assortiment-cru'], 'Les viandes en images')}
  <section class="section band-green" aria-labelledby="lab"><div class="wrap"><h2 id="lab" data-split>Les labels, expliqués</h2>
    <div class="values" style="margin-top:2rem">${LABELS_EXPLAINED.map((l) => `<div data-reveal><h3>${esc(l.code)}</h3><p class="mono note">${esc(l.title)}</p><p>${esc(l.text)}</p></div>`).join('')}</div></div></section>
  <section class="section wrap prose"><h2 data-split>Notre approche</h2><p>Nous achetons directement auprès d'éleveurs, en privilégiant les élevages responsables et les circuits courts. Nous ne publions pas de noms de fermes sans leur accord: seules les régions et les races sont indiquées.</p>
    <p class="quote-house" style="font-family:var(--f-display);font-size:1.5rem">« Nous avons une transparence totale sur tous les produits et sur notre savoir-faire. »</p><p class="note">Aymeric Hurault, dans Rennes Business Mag.</p></section>
  ${callBand()}`
}

export function init(root: HTMLElement) {
  const detail = $('[data-detail]', root)!
  const show = (id: string) => {
    const o = ORIGINS.find((x) => x.id === id)!
    $$('[data-o]', root).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.o === id)))
    detail.innerHTML = `<h3>${esc(o.name)}</h3><p>${esc(o.text)}</p>${o.label ? `<p class="mono note">${esc(o.label)}</p>` : ''}`
  }
  show(ORIGINS[0].id)
  $$('[data-o]', root).forEach((b) => b.addEventListener('click', () => show(b.dataset.o!)))
  if (!reduceMotion()) gsap.from($$('.map-pt', root), { scale: 1.8, opacity: 0, duration: 0.45, ease: 'power4.in', stagger: 0.14, scrollTrigger: { trigger: '[data-map]', start: 'top 75%', once: true } })
}
