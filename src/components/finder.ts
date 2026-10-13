// Signature: « La Carcasse entière ». Choisir un morceau sur le schéma, lire le conseil du boucher,
// peser (ticket de balance en direct), puis « frapper » le morceau dans la liste pour le comptoir.
// La liste n'est PAS un panier: elle produit un appel, un texte à copier ou un message Instagram. Pas de paiement.
import { CUTS, CARCASS_LABEL, METHOD_LABEL, type CarcassKey, type Cut, type Method } from '../data/cuts.ts'
import { BUSINESS, EMAIL_PUBLIC, PHONE_PRIMARY, PHONE_TEL } from '../data/business.ts'
import { carcass, coinSeal, ICON } from '../lib/art.ts'
import { $, $$, esc, money, reduceMotion, typo } from '../lib/dom.ts'
import { gsap } from '../lib/motion.ts'

const METHOD_ICON: Record<Method, string> = { poêle: ICON.pan, four: ICON.four, barbecue: ICON.feu, mijoté: ICON.pot }
const KEY = 'liste-comptoir'

interface Item { id: string; name: string; kg: number; total: number; guests: number }

export function finderHTML(initial: CarcassKey = 'boeuf', withList = true): string {
  const tabs = (Object.keys(CARCASS_LABEL) as CarcassKey[]).map((k) => `<button class="chip" role="tab" type="button" data-tab="${k}" aria-selected="${k === initial}" tabindex="${k === initial ? 0 : -1}">${CARCASS_LABEL[k]}</button>`).join('')
  const carcasses = (Object.keys(CARCASS_LABEL) as CarcassKey[]).map((k) => `<div data-carcass="${k}" ${k === initial ? '' : 'hidden'}>${carcass(k)}</div>`).join('')
  const lists = (Object.keys(CARCASS_LABEL) as CarcassKey[]).map((k) => `<ul class="cut-list" data-cuts="${k}" ${k === initial ? '' : 'hidden'} aria-label="Morceaux de ${CARCASS_LABEL[k].toLowerCase()}">${CUTS.filter((c) => c.carcass === k).map((c) => `<li><button class="chip" type="button" data-cut="${c.id}" aria-pressed="false">${esc(c.name)}</button></li>`).join('')}</ul>`).join('')
  return `<div class="finder" data-finder data-initial="${initial}">
    <div>
      <div class="tabs" role="tablist" aria-label="Choisir un animal">${tabs}</div>
      <div class="carcass-stage"><span class="carcass-label" data-label>${CARCASS_LABEL[initial]}</span>${carcasses}</div>
      <p class="note" style="margin-top:.6rem">Schéma indicatif. Touchez un morceau, ou choisissez-le dans la liste ci-dessous.</p>
      ${lists}
    </div>
    <aside class="advice" data-advice aria-live="polite" aria-label="Conseil du boucher"></aside>
    ${withList ? `<div class="my-list full" data-mylist style="grid-column:1/-1"></div>` : ''}
  </div>`
}

const load = (): Item[] => { try { return JSON.parse(localStorage.getItem(KEY) || '[]') as Item[] } catch { return [] } }
const save = (v: Item[]) => { try { localStorage.setItem(KEY, JSON.stringify(v)) } catch { /* stockage indisponible */ } }

const kgFmt = (kg: number) => kg.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' kg'

export function initFinder(root: HTMLElement) {
  const state = { carcass: root.dataset.initial as CarcassKey, cut: null as Cut | null, guests: 4, kg: 0 }
  const advice = $('[data-advice]', root)!
  const listBox = $('[data-mylist]', root)
  const label = $('[data-label]', root)!
  let items = load()

  const polys = (k: CarcassKey) => $$<SVGPolygonElement>('.reg', $(`[data-carcass="${k}"]`, root)!)

  function showCarcass(k: CarcassKey) {
    state.carcass = k
    $$('[data-tab]', root).forEach((b) => { const on = b.dataset.tab === k; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1 })
    $$('[data-carcass]', root).forEach((d) => { d.hidden = d.dataset.carcass !== k })
    $$('[data-cuts]', root).forEach((d) => { d.hidden = d.dataset.cuts !== k })
    label.textContent = CARCASS_LABEL[k]
    const first = CUTS.find((c) => c.carcass === k && c.id === (state.cut?.carcass === k ? state.cut.id : ''))
    select(first ?? CUTS.find((c) => c.carcass === k)!, false)
  }

  function select(cut: Cut, animate = true) {
    state.cut = cut
    state.guests = Math.max(1, state.guests)
    state.kg = Math.round((state.guests * cut.gramsPerPerson) / 50) * 0.05
    polys(cut.carcass).forEach((p) => {
      const on = p.dataset.region === cut.region
      p.classList.toggle('is-on', on)
      if (on && animate && !reduceMotion()) gsap.fromTo(p, { fillOpacity: 0 }, { fillOpacity: 1, duration: 0.55, ease: 'power2.out' })
    })
    $$('[data-cut]', root).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.cut === cut.id)))
    renderAdvice(animate)
  }

  function renderAdvice(animate: boolean) {
    const c = state.cut!
    const total = state.kg * c.pricePerKg
    const methods = c.methods.map((m) => `<span class="method">${METHOD_ICON[m]}${METHOD_LABEL[m]}</span>`).join('')
    advice.innerHTML = typo(`
      <h3>${esc(c.name)}</h3>
      <div class="methods">${methods}</div>
      <p class="quote-house">${esc(c.advice)}</p>
      <dl>
        <dt>Épaisseur</dt><dd>${esc(c.thickness)}</dd>
        <dt>Repos</dt><dd>${esc(c.rest)}</dd>
        <dt>Par personne</dt><dd>${c.gramsPerPerson} g (${c.gramsPerPerson >= 300 ? 'avec l\'os' : 'désossé'})</dd>
        <dt>Avec</dt><dd>${esc(c.pairing)}</dd>
      </dl>
      <div class="scale-row">
        <div class="field"><label for="guests">Combien de convives ?</label><input id="guests" type="number" inputmode="numeric" min="1" max="30" value="${state.guests}" data-guests></div>
        <div class="field"><label for="kgr">Poids</label><input id="kgr" type="range" min="0.1" max="4" step="0.05" value="${state.kg}" data-kg><div class="hint">Glissez pour ajuster au gramme près.</div></div>
      </div>
      <div class="ticket" style="max-width:none" aria-label="Ticket de balance">
        <h3>Ticket de balance</h3>
        <div class="row"><span>Poids</span><span class="r" data-t-kg>${kgFmt(state.kg)}</span></div>
        <div class="row"><span>Prix au kilo</span><span class="r">${money(c.pricePerKg)}</span></div>
        <div class="row"><span>Convives</span><span class="r" data-t-guests>${state.guests}</span></div>
        <div class="row total red"><span>Total indicatif</span><span class="r" data-t-total>${money(total)}</span></div>
        <p class="ticket-note">Prix indicatifs, demandez au comptoir.</p>
      </div>
      <button class="btn" type="button" data-add-cut>${ICON.plus}<span>Ajouter à ma liste</span></button>`)
    if (animate && !reduceMotion()) gsap.fromTo(advice.children, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'expo.out', stagger: 0.05, clearProps: 'transform,opacity' })
  }

  function updateTicket() {
    const c = state.cut!
    ;($('[data-t-kg]', advice) as HTMLElement).textContent = kgFmt(state.kg)
    ;($('[data-t-guests]', advice) as HTMLElement).textContent = String(state.guests)
    ;($('[data-t-total]', advice) as HTMLElement).textContent = money(state.kg * c.pricePerKg)
  }

  function renderList(stampIt = false) {
    if (!listBox) return
    const sum = items.reduce((a, i) => a + i.total, 0)
    const text = buildText(items)
    listBox.innerHTML = typo(`
      <h3>Ma liste pour le comptoir</h3>
      ${items.length ? `<ol>${items.map((i, n) => `<li><span>${esc(i.name)}, ${kgFmt(i.kg)} (${i.guests} pers.)</span><span>${money(i.total)} <button type="button" data-rm="${n}" aria-label="Retirer ${esc(i.name)}">retirer</button></span></li>`).join('')}</ol>
      <div class="mono" style="display:flex;justify-content:space-between"><span>Total indicatif</span><strong>${money(sum)}</strong></div>` : '<p class="note">Rien pour l\'instant. Ajoutez un morceau avec le bouton « Ajouter à ma liste ». Ce n\'est pas un panier: vous nous appelez ou nous écrivez, nous préparons.</p>'}
      <div class="list-actions">
        <a class="btn" href="tel:${PHONE_TEL}">${ICON.phone}<span>Appeler le ${PHONE_PRIMARY}</span></a>
        <button class="btn btn-ghost" type="button" data-copy ${items.length ? '' : 'disabled'}>Copier ma liste</button>
        <a class="btn btn-ghost" href="${BUSINESS.instagramDm}" target="_blank" rel="noopener">Écrire sur Instagram</a>
        ${EMAIL_PUBLIC ? `<a class="btn btn-ghost" href="mailto:${EMAIL_PUBLIC}?subject=${encodeURIComponent('Ma liste pour le comptoir')}&body=${encodeURIComponent(text)}">Envoyer par e-mail</a>` : ''}
      </div>
      <p class="toast" data-toast role="status"></p>
      <div class="stamp" data-stamp>${coinSeal('PESÉ · FRAPPÉ · LA MONNAIE · ', 'Retenu', 'PESÉ', 'seal-light')}</div>`)
    if (stampIt && !reduceMotion()) {
      const st = $('[data-stamp]', listBox)!
      gsap.timeline()
        .set(st, { opacity: 1, scale: 1.25, y: -10 })
        .to(st, { scale: 1, y: 2, duration: 0.14, ease: 'power4.in' })
        .to(st, { y: 0, duration: 0.12, ease: 'power2.out' })
        .to(st, { opacity: 0, duration: 0.5, delay: 0.7 })
    }
  }

  function buildText(list: Item[]) {
    if (!list.length) return ''
    return `Bonjour, je souhaiterais préparer cette commande pour le comptoir de La Boucherie de la Monnaie :\n` +
      list.map((i) => `- ${i.name}, ${kgFmt(i.kg)} pour ${i.guests} personnes (environ ${money(i.total)}, prix indicatif)`).join('\n') +
      `\nMerci de me dire ce qui est possible et pour quel jour.`
  }

  // Interactions
  root.addEventListener('click', (e) => {
    const t = e.target as Element
    const tab = t.closest<HTMLElement>('[data-tab]')
    if (tab) { showCarcass(tab.dataset.tab as CarcassKey); return }
    const cutBtn = t.closest<HTMLElement>('[data-cut]')
    if (cutBtn) { select(CUTS.find((c) => c.id === cutBtn.dataset.cut)!); return }
    const reg = t.closest<SVGElement>('.reg')
    if (reg) { const c = CUTS.find((x) => x.carcass === state.carcass && x.region === reg.getAttribute('data-region')); if (c) select(c); return }
    if (t.closest('[data-add-cut]')) {
      const c = state.cut!
      items = [...items, { id: c.id, name: c.name, kg: state.kg, total: state.kg * c.pricePerKg, guests: state.guests }]
      save(items); renderList(true)
      return
    }
    const rm = t.closest<HTMLElement>('[data-rm]')
    if (rm) { items = items.filter((_, i) => i !== Number(rm.dataset.rm)); save(items); renderList(); return }
    if (t.closest('[data-copy]')) {
      const text = buildText(items)
      const toast = $('[data-toast]', root)!
      const done = () => { toast.textContent = 'Liste copiée. Collez-la dans un message ou lisez-la au comptoir.' }
      if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done, () => { toast.textContent = 'Copie impossible. Sélectionnez le texte de la liste.' })
      else toast.textContent = 'Copie impossible sur ce navigateur. Sélectionnez le texte de la liste.'
    }
  })
  root.addEventListener('input', (e) => {
    const el = e.target as HTMLInputElement
    if (el.matches('[data-guests]')) {
      state.guests = Math.min(30, Math.max(1, Number(el.value) || 1))
      state.kg = Math.round((state.guests * state.cut!.gramsPerPerson) / 50) * 0.05
      ;($('[data-kg]', advice) as HTMLInputElement).value = String(state.kg)
      updateTicket()
    } else if (el.matches('[data-kg]')) { state.kg = Number(el.value); updateTicket() }
  })
  // survol des zones du schéma
  root.addEventListener('pointerover', (e) => { const r = (e.target as Element).closest('.reg'); $$('.reg.is-hover', root).forEach((x) => x.classList.remove('is-hover')); if (r) r.classList.add('is-hover') })
  root.addEventListener('pointerleave', () => $$('.reg.is-hover', root).forEach((x) => x.classList.remove('is-hover')))
  // flèches sur les onglets
  root.addEventListener('keydown', (e) => {
    const tab = (e.target as Element).closest<HTMLElement>('[data-tab]')
    if (!tab || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) return
    const tabs = $$<HTMLElement>('[data-tab]', root); const i = tabs.indexOf(tab)
    const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length]
    n.focus(); showCarcass(n.dataset.tab as CarcassKey)
  })

  // Entrée clavier / lecteur d'écran sur le schéma: le schéma est décoratif (aria-hidden), la liste de boutons fait foi.
  showCarcass(state.carcass)
  renderList()
}
