// Accueil: héros « La Frappe » + cinq chapitres (À la vue de tous, La carcasse entière, La cave, D'où vient la viande, Le comptoir).
import { BUSINESS, PHONE_PRIMARY, PHONE_TEL, ADDRESS_LINE } from '../data/business.ts'
import { PHOTOS, photo, photoImg } from '../data/photos.ts'
import { MATURATION_STEPS } from '../data/cave.ts'
import { ORIGINS, BREEDS_MARQUEE } from '../data/origins.ts'
import { POSTS } from '../data/journal.ts'
import { HOME_REVIEW_IDS } from '../data/reviews.ts'
import { PRODUCTS, PRICE_NOTE } from '../data/products.ts'
import { DISHES } from '../data/traiteur.ts'
import { billot, carcass, coinSeal, cote, franceMap, artFor, ICON } from '../lib/art.ts'
import { $, $$, esc, href, isTouch, money, reduceMotion } from '../lib/dom.ts'
import { gsap, ScrollTrigger } from '../lib/motion.ts'
import { hoursTicket, piquePrix, quoteCards, sealsRow } from '../components/common.ts'
import { postRow } from './journal.ts'
import { CUTS } from '../data/cuts.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  const sig = ['cote-boeuf-maturee', 'saucisse-vigneronne', 'cote-noir-bigorre', 'foie-gras-canard', 'pate-en-croute']
    .map((id) => PRODUCTS.find((p) => p.id === id)!)
  const bouchee = DISHES.find((d) => d.id === 'bouchees-reine')!
  const steps = MATURATION_STEPS
  return `
  <section class="hero" aria-label="Accueil">
    <div class="wrap hero-grid">
      <div>
        <h1 aria-label="Rien à cacher."><span class="line"><span>Rien</span></span> <span class="line"><span>à cacher.</span></span></h1>
        <p class="hero-sub" data-hero-fade>Boucher, charcutier, traiteur. Carcasses entières et viandes affinées dans nos caves, rue de la Monnaie.</p>
        <div class="hero-cta" data-hero-fade>
          <a class="btn" href="tel:${PHONE_TEL}">${ICON.phone}<span>Appeler</span></a>
          <a class="btn btn-ghost" href="${href('comptoir/')}">Voir le comptoir</a>
        </div>
      </div>
      <div class="hero-art">
        <div class="engr" data-engr>${cote()}</div>
        <div class="shock" data-shock></div>
        <div class="strike-die" data-die aria-hidden="true"></div>
        <div data-seal style="display:contents">${coinSeal('LA BOUCHERIE DE LA MONNAIE · RENNES · ', '2023', 'DEPUIS', '', 'hero-seal')}</div>
      </div>
    </div>
    <div class="hero-floor" aria-hidden="true"></div>
  </section>

  <section class="section wrap" aria-label="Repères">${sealsRow()}</section>

  <section class="photo-band" aria-label="En boutique">
    <div class="wrap photo-band-grid">
      <figure class="photo-fig photo-tall" data-reveal="mask">${photoImg(photo('boucher-au-travail'))}<figcaption>Photo d'illustration</figcaption></figure>
      <figure class="photo-fig" data-reveal="mask" style="--i:1">${photoImg(photo('vitrine-viandes'))}<figcaption>Photo d'illustration</figcaption></figure>
      <figure class="photo-fig" data-reveal="mask" style="--i:2">${photoImg(photo('persille-gros-plan'))}<figcaption>Photo d'illustration</figcaption></figure>
    </div>
  </section>

  <section class="chapter pin-stage" data-ch1 aria-labelledby="ch1">
    <div class="wrap pin-grid">
      <div class="pin-lines">
        <h2 id="ch1" data-split>À la vue de tous</h2>
        <p data-l>Un espace de travail ouvert sur la boutique.</p>
        <p data-l>Un billot par boucher, face au client.</p>
        <p data-l>« Nous n'avons rien à cacher. »</p>
        <p class="is-quote" data-l>Aymeric Hurault, dans Rennes Business Mag.</p>
      </div>
      <div class="steak-wrap" data-billot>${billot()}</div>
    </div>
  </section>

  <section class="chapter pin-stage" data-ch2 aria-labelledby="ch2" style="background:var(--bg-2)">
    <div class="wrap pin-grid">
      <div class="pin-lines">
        <h2 id="ch2" data-split>La carcasse entière</h2>
        <p class="lead" style="margin:0;opacity:1">Bœuf, cochon, agneau: nous travaillons des carcasses entières pour garder la même qualité d'une pièce à l'autre.</p>
        <p class="is-quote" data-count-line style="margin:0;opacity:1">Morceaux dessinés: <span class="mono" data-count>0</span> sur ${CUTS.filter((c) => c.carcass === 'boeuf').length}</p>
        <p style="margin:0;opacity:1"><a class="btn" href="${href('carcasse/')}">Choisir mon morceau ${ICON.arrow}</a></p>
      </div>
      <div class="steak-wrap scrub-carcass" style="max-width:640px" data-carc>${carcass('boeuf')}</div>
    </div>
  </section>

  <section class="chapter pin-stage band-green cave-stage" data-ch3 aria-labelledby="ch3">
    <div class="wrap pin-grid">
      <div>
        <h2 id="ch3" data-split>La cave de maturation</h2>
        <div class="counter" aria-hidden="true"><span data-day>0</span><span style="font-size:.28em;letter-spacing:0"> jours</span></div>
        <div class="cave-live">
          <div class="cave-steps" aria-live="polite">${steps.map((s, i) => `<article data-step="${i}"><h3>${esc(s.title)}${s.real ? '' : ' (exemple)'}</h3><p><strong>${esc(s.breed)}, ${esc(s.cut.toLowerCase())}.</strong> ${esc(s.text)}</p></article>`).join('')}</div>
          <div class="cave-rail" aria-hidden="true"><b data-rail></b></div>
          <div class="cave-ticks" aria-hidden="true"><span>J0</span><span>4 sem.</span><span>6 sem.</span><span>8 sem.</span></div>
        </div>
        <div class="static-cave" style="gap:1rem">${steps.map((s) => `<p><strong>${esc(s.title)}: ${esc(s.breed)}, ${esc(s.cut.toLowerCase())}.</strong> ${esc(s.text)}</p>`).join('')}</div>
        <p style="margin-top:1.6rem"><a class="link-arrow" href="${href('cave-de-maturation/')}">Tout sur la cave ${ICON.arrow}</a></p>
      </div>
      <div class="steak-wrap" data-steak>${cote(1)}</div>
    </div>
  </section>

  <section class="section chapter" aria-labelledby="ch4">
    <div class="wrap">
      <div class="chapter-head"><h2 id="ch4" data-split>D'où vient la viande</h2><p class="lead">Des régions et des races, pas des noms inventés. Touchez un point sur la carte.</p></div>
      <div class="cols-2 cols-5-7" style="margin-top:2.6rem;align-items:start">
        <div class="map-wrap" data-map>${franceMap()}${ORIGINS.map((o, i) => `<button class="map-pt" type="button" style="left:${(o.x / 600) * 100}%;top:${(o.y / 640) * 100}%" data-o="${o.id}" aria-pressed="${i === 0}" aria-label="${esc(o.name)}">${i + 1}</button>`).join('')}</div>
        <div>
          <ul class="origin-list">${ORIGINS.map((o, i) => `<li><button type="button" data-o="${o.id}" aria-pressed="${i === 0}"><span>${i + 1}. ${esc(o.name)}</span><span class="br">${esc(o.breed)}</span></button></li>`).join('')}</ul>
          <div class="origin-detail" data-detail aria-live="polite" style="margin-top:1.4rem"></div>
          <p><a class="link-arrow" href="${href('origines/')}">Races et labels ${ICON.arrow}</a></p>
        </div>
      </div>
    </div>
  </section>

  <div class="marquee" aria-label="Races et produits: ${BREEDS_MARQUEE.join(', ')}"><div class="marquee-track" aria-hidden="true">${BREEDS_MARQUEE.map((b) => `<span>${esc(b)}</span>`).join('')}${BREEDS_MARQUEE.map((b) => `<span class="marquee-dup">${esc(b)}</span>`).join('')}</div></div>

  <section class="section wrap" aria-labelledby="ch5">
    <div class="chapter-head"><h2 id="ch5" data-split>Le comptoir, la cuisine, l'épicerie</h2><p class="lead">Les signatures de la maison. ${PRICE_NOTE}</p></div>
    <ul class="shelf" style="margin-top:2.4rem">${sig.map((p) => piquePrix(p)).join('')}
      <li class="slate"><h3>${esc(bouchee.name)}</h3><p class="desc">${esc(bouchee.desc)}</p><div class="price">${money(bouchee.price)} <small>/ portion</small></div><div class="tags"><span>traiteur</span><span>fêtes</span><span>fait maison</span></div><span class="slice" aria-hidden="true"></span></li></ul>
    <div class="counter-top" aria-hidden="true"></div><div class="marble" aria-hidden="true"></div>
    <p style="margin-top:2rem"><a class="btn" href="${href('comptoir/')}">Voir tout le comptoir ${ICON.arrow}</a></p>
  </section>

  <section class="section wrap cols-2" style="align-items:center">
    <div class="stack"><h2 data-split>Le traiteur et l'épicerie fine</h2>
      <p class="lead">Chaque jour, un large choix d'entrées, de plats préparés et de desserts faits maison. Et un coin d'épicerie: huile Kaïa, cornichons Maison Marc, moutarde d'Orléans, bouillon Dohatsu à 9,90 € le litre.</p>
      <p><a class="link-arrow" href="${href('traiteur/')}">Le plat du jour ${ICON.arrow}</a> &nbsp; <a class="link-arrow" href="${href('epicerie/')}">L'épicerie ${ICON.arrow}</a></p></div>
    <div class="photo-pair" style="max-width:460px;justify-self:center;width:100%"><figure class="photo-fig" data-reveal>${photoImg(photo('plat-mijote'))}<figcaption>Photo d'illustration</figcaption></figure><div data-reveal style="--i:1">${artFor('bocal')}</div></div>
  </section>

  <section class="section band-green" aria-labelledby="avis">
    <div class="wrap">
      <div style="display:flex;justify-content:space-between;align-items:end;gap:1rem;flex-wrap:wrap;margin-bottom:2rem"><h2 id="avis" data-split>Ce que disent les clients</h2>
        <div class="quotes-nav"><button type="button" data-q-prev aria-label="Avis précédent">${ICON.arrow.replace('<svg', '<svg style="transform:rotate(180deg)"')}</button><button type="button" data-q-next aria-label="Avis suivant">${ICON.arrow}</button></div></div>
      <div class="quotes" data-quotes tabindex="0" aria-label="Avis Google, défilement horizontal">${quoteCards(HOME_REVIEW_IDS)}</div>
      <p class="note" style="margin-top:1rem">Extraits d'avis publics ${BUSINESS.rating}. Orthographe d'origine.</p>
    </div>
  </section>

  <section class="section wrap cols-2 cols-7-5" style="align-items:center">
    <div class="stack"><h2 data-split>Ce samedi au marché</h2>
      <p class="lead">Le samedi, les Lices s'animent et la boucherie reste ouverte de 9 h à 18 h 30 sans interruption. Passez prendre de quoi faire l'apéro-marché.</p>
      <p><a class="link-arrow" href="${href('samedi-marche/')}">Le samedi des Lices ${ICON.arrow}</a></p></div>
    <div class="photo-pair" style="max-width:460px;justify-self:center;width:100%"><figure class="photo-fig" data-reveal>${photoImg(photo('vitrine-comptoir'))}<figcaption>Photo d'illustration</figcaption></figure><div data-reveal style="--i:1">${artFor('halles')}</div></div>
  </section>

  <section class="section wrap" aria-labelledby="ph">
    <div style="display:flex;justify-content:space-between;align-items:end;gap:1rem;flex-wrap:wrap"><h2 id="ph" data-split>Le billot, la vitrine, l'assiette</h2><a class="link-arrow" href="${href('galerie/')}">Toute la galerie ${ICON.arrow}</a></div>
    <ul class="photo-grid" style="margin-top:1.8rem">${['decoupe-billot', 'pieces-suspendues', 'deux-steaks-ail', 'planche-charcuterie', 'saucisses-romarin', 'saignant-tranche', 'plat-mijote', 'couteaux-bois']
      .map((s, i) => `<li><figure class="photo-fig" data-reveal style="--i:${i % 4}">${photoImg(photo(s))}<figcaption>${esc(photo(s).alt)}</figcaption></figure></li>`).join('')}</ul>
    <p class="note" style="margin-top:1rem">Photos d'illustration Unsplash (${PHOTOS.length} au total), pas des photos de la boutique.</p>
  </section>

  <section class="section-tight wrap" aria-labelledby="jr">
    <div style="display:flex;justify-content:space-between;align-items:end;gap:1rem;flex-wrap:wrap"><h2 id="jr" data-split>Au journal</h2><a class="link-arrow" href="${href('journal/')}">Tous les articles ${ICON.arrow}</a></div>
    <ul class="post-list" style="margin-top:1.6rem">${POSTS.slice(0, 3).map(postRow).join('')}</ul>
  </section>

  <div class="tiles" aria-hidden="true"></div>

  <section class="section wrap cols-2" style="align-items:center" aria-labelledby="venir">
    <div>${hoursTicket({ compact: false })}</div>
    <div class="stack"><h2 id="venir" data-split>Passez nous voir</h2>
      <p class="lead">${ADDRESS_LINE}.<br>Métro Sainte-Anne, à environ 270 mètres.</p>
      <p><a class="big-tel" href="tel:${PHONE_TEL}">${PHONE_PRIMARY}</a></p>
      <div style="display:flex;flex-wrap:wrap;gap:.8rem"><a class="btn" href="tel:${PHONE_TEL}">${ICON.phone}<span>Appeler</span></a><a class="btn btn-ghost" href="${BUSINESS.mapsUrl}" target="_blank" rel="noopener">${ICON.pin}<span>Itinéraire</span></a></div></div>
  </section>`
}

export function init(root: HTMLElement) {
  const reduce = reduceMotion()
  initOrigins(root, reduce)
  initQuotes(root)
  if (reduce) { $('[data-ch3]', root)?.classList.add('no-pin'); return }

  // Fil: images à dessiner (trait)
  $$('.draw', root).forEach((p) => p.setAttribute('pathLength', '1'))

  // ---- Héros: « La Frappe »
  const seal = $('[data-seal] svg', root) as SVGElement
  const die = $('[data-die]', root)!
  const shock = $('[data-shock]', root)!
  const lines = $$('.hero h1 .line > span', root)
  const fades = $$('[data-hero-fade]', root)
  gsap.set(seal, { opacity: 0 })
  gsap.set(lines, { yPercent: 115 })
  gsap.set(fades, { opacity: 0, y: 16 })
  gsap.set($('[data-engr]', root)!, { opacity: 0, scale: 0.94 })
  gsap.set(die, { opacity: 1, y: -560 })
  const tl = gsap.timeline({ delay: 0.15, defaults: { ease: 'expo.out' } })
  tl.to($('[data-engr]', root)!, { opacity: 1, scale: 1, duration: 1.1 }, 0)
    .to(die, { y: 0, duration: 0.38, ease: 'power4.in' }, 0.15)
    .set(seal, { opacity: 1, scale: 1.25, transformOrigin: '50% 50%' }, 0.53)
    .fromTo(shock, { scale: 0.7, opacity: 0.8 }, { scale: 2.3, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.53)
    .to(seal, { scale: 1, duration: 0.2, ease: 'power4.in' }, 0.53)
    .to(seal, { y: 2, duration: 0.07, ease: 'power1.out' }, 0.73)
    .to(seal, { y: 0, duration: 0.18, ease: 'power2.out' }, 0.8)
    .to(die, { y: -620, opacity: 0, duration: 0.55, ease: 'power3.out' }, 0.62)
    .to(lines, { yPercent: 0, duration: 1, stagger: 0.12 }, 0.75)
    .to(fades, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 1.25)

  // Inclinaison de la gravure (souris uniquement)
  if (!isTouch()) {
    const engr = $('[data-engr]', root)!
    const rx = gsap.quickTo(engr, 'rotationX', { duration: 0.7, ease: 'power3.out' })
    const ry = gsap.quickTo(engr, 'rotationY', { duration: 0.7, ease: 'power3.out' })
    gsap.set(engr, { transformPerspective: 900 })
    $('.hero', root)!.addEventListener('pointermove', (e) => {
      const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
      ry(((e.clientX - r.left) / r.width - 0.5) * 5)
      rx(-((e.clientY - r.top) / r.height - 0.5) * 4)
    })
  }

  // ---- Chapitre 1: couteaux qui se dessinent
  const ch1 = $('[data-ch1]', root)!
  const knives = $$('.knife .draw', ch1)
  gsap.set(knives, { strokeDasharray: 1, strokeDashoffset: 1 })
  const l1 = $$('[data-l]', ch1)
  const mm = gsap.matchMedia()
  mm.add('(min-width: 900px)', () => {
    const t = gsap.timeline({ scrollTrigger: { trigger: ch1, start: 'top top', end: '+=150%', pin: true, scrub: 0.8, anticipatePin: 1 } })
    knives.forEach((k, i) => t.to(k, { strokeDashoffset: 0, duration: 0.5 }, i * 0.25))
    l1.forEach((l, i) => t.to(l, { opacity: 1, duration: 0.3 }, i * 0.6))
    t.to({}, { duration: 0.4 })
  })
  mm.add('(max-width: 899px)', () => {
    gsap.to(knives, { strokeDashoffset: 0, duration: 1.1, stagger: 0.25, ease: 'power2.inOut', scrollTrigger: { trigger: ch1, start: 'top 70%', once: true } })
    gsap.to(l1, { opacity: 1, duration: 0.6, stagger: 0.25, scrollTrigger: { trigger: ch1, start: 'top 70%', once: true } })
  })

  // ---- Chapitre 2: la carcasse se dessine, les morceaux se remplissent un à un
  const ch2 = $('[data-ch2]', root)!
  const regs = $$<SVGPolygonElement>('.reg', ch2)
  const bodyLine = $('.body-line', ch2) as SVGPathElement
  bodyLine.setAttribute('pathLength', '1')
  regs.forEach((r) => r.setAttribute('pathLength', '1'))
  gsap.set(bodyLine, { strokeDasharray: 1, strokeDashoffset: 1 })
  gsap.set(regs, { strokeDasharray: 1, strokeDashoffset: 1, fill: 'rgba(155,36,48,0)' })
  const counter = $('[data-count]', ch2)!
  const pinOpts = (end: string) => ({ trigger: ch2, start: 'top top', end, pin: true, scrub: 0.8, anticipatePin: 1 })
  const buildCarcass = (end: string) => {
    const t = gsap.timeline({ scrollTrigger: pinOpts(end) })
    t.to(bodyLine, { strokeDashoffset: 0, duration: 0.6 })
    regs.forEach((r, i) => {
      t.to(r, { strokeDashoffset: 0, duration: 0.25 }, 0.5 + i * 0.12)
       .to(r, { fill: 'rgba(155,36,48,0.88)', duration: 0.2 }, 0.62 + i * 0.12)
       .call(() => { counter.textContent = String(i + 1) }, [], 0.62 + i * 0.12)
    })
    t.to({}, { duration: 0.4 })
  }
  mm.add('(min-width: 900px)', () => buildCarcass('+=220%'))
  mm.add('(max-width: 899px)', () => buildCarcass('+=170%'))

  // ---- Chapitre 3: la cave, de J0 à J56 (couleur de la viande, croûte, compteur)
  const ch3 = $('[data-ch3]', root)!
  const steak = $('[data-steak] .meat', ch3) as SVGPathElement
  const crust = steak.cloneNode() as SVGPathElement
  crust.removeAttribute('filter'); crust.setAttribute('fill', 'none'); crust.setAttribute('stroke', '#2b1712'); crust.setAttribute('stroke-width', '10'); crust.setAttribute('class', 'crust'); crust.setAttribute('opacity', '0')
  steak.after(crust)
  const steps = $$('[data-step]', ch3)
  const days = MATURATION_STEPS.map((s) => s.day)
  const colors = MATURATION_STEPS.map((s) => s.color)
  const dayEl = $('[data-day]', ch3)!
  const rail = $('[data-rail]', ch3)!
  const obj = { d: 0 }
  gsap.set(steak, { attr: { fill: colors[0] } })
  const caveTL = (end: string) => {
    const t = gsap.timeline({ scrollTrigger: { trigger: ch3, start: 'top top', end, pin: true, scrub: 0.9, anticipatePin: 1 }, defaults: { ease: 'none' } })
    const seg = 1 / (steps.length - 1)
    t.to(rail, { scaleX: 1, duration: 1 }, 0)
    t.to(obj, { d: days[days.length - 1], duration: 1, onUpdate: () => { dayEl.textContent = String(Math.round(obj.d)) } }, 0)
    t.to(crust, { opacity: 1, duration: 1 }, 0)
    for (let i = 1; i < steps.length; i++) {
      t.to(steak, { attr: { fill: colors[i] }, duration: seg }, (i - 1) * seg)
      t.to(steps[i - 1], { opacity: 0, duration: 0.08 }, i * seg - 0.08)
      t.to(steps[i], { opacity: 1, duration: 0.08 }, i * seg - 0.04)
    }
    t.to({}, { duration: 0.15 })
  }
  mm.add('(min-width: 900px)', () => caveTL('+=300%'))
  mm.add('(max-width: 899px)', () => caveTL('+=220%'))

  // Ticket qui s'imprime: géré globalement dans initReveals (lib/motion.ts)
  ScrollTrigger.refresh()
}

function initOrigins(root: HTMLElement, reduce: boolean) {
  const detail = $('[data-detail]', root)!
  const show = (id: string) => {
    const o = ORIGINS.find((x) => x.id === id)!
    $$('[data-o]', root).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.o === id)))
    detail.innerHTML = `<h3>${esc(o.name)}</h3><p>${esc(o.text)}</p>${o.label ? `<p class="mono note">${esc(o.label)}</p>` : ''}`
  }
  show(ORIGINS[0].id)
  $$('[data-o]', root).forEach((b) => b.addEventListener('click', () => show(b.dataset.o!)))
  if (!reduce) {
    gsap.from($$('.map-pt', root), { scale: 1.8, opacity: 0, duration: 0.45, ease: 'power4.in', stagger: 0.14, scrollTrigger: { trigger: '[data-map]', start: 'top 70%', once: true } })
  }
}

function initQuotes(root: HTMLElement) {
  const box = $('[data-quotes]', root)!
  const step = () => (box.firstElementChild as HTMLElement).getBoundingClientRect().width + 19
  $('[data-q-prev]', root)?.addEventListener('click', () => box.scrollBy({ left: -step(), behavior: reduceMotion() ? 'auto' : 'smooth' }))
  $('[data-q-next]', root)?.addEventListener('click', () => box.scrollBy({ left: step(), behavior: reduceMotion() ? 'auto' : 'smooth' }))
}
