// Catalogue du comptoir: recherche + filtres (espèce, cuisson, occasion, maturation, coup de cœur du boucher).
import { PRODUCTS, SPECIES_LABEL, type Product, type Species } from '../data/products.ts'
import { shelf } from './common.ts'
import { $, $$, href, money, typo } from '../lib/dom.ts'

export function catalogueHTML(fixed?: Species): string {
  const species = fixed
    ? ''
    : `<div class="field" style="grid-column:1/-1"><span class="lab" id="lab-sp">Espèce</span><div class="chips" role="group" aria-labelledby="lab-sp">
        <button class="chip" type="button" data-sp="all" aria-pressed="true">Tout</button>
        ${(Object.keys(SPECIES_LABEL) as Species[]).map((s) => `<button class="chip" type="button" data-sp="${s}" aria-pressed="false">${SPECIES_LABEL[s]}</button>`).join('')}
      </div></div>`
  return `<div data-catalogue ${fixed ? `data-fixed="${fixed}"` : ''}>
    <div class="filters" role="search" aria-label="Filtrer le comptoir">
      ${species}
      <div class="field"><label for="q">Rechercher</label><input id="q" type="search" placeholder="Bavette, foie gras, agneau…" autocomplete="off" data-q></div>
      <div class="field"><label for="f-cuisson">Cuisson</label><select id="f-cuisson" data-cuisson><option value="">Toutes</option><option>poêle</option><option>four</option><option>barbecue</option><option>plancha</option><option>mijoté</option><option value="froid">sans cuisson</option></select></div>
      <div class="field"><label for="f-occ">Occasion</label><select id="f-occ" data-occ><option value="">Toutes</option><option value="semaine">En semaine</option><option value="dimanche">Dimanche</option><option value="barbecue">Barbecue</option><option value="apéro">Apéro</option><option value="fêtes">Fêtes</option></select></div>
      <div class="field"><label for="f-mat">Maturation</label><select id="f-mat" data-mat><option value="">Toutes</option><option value="any">Maturée</option><option value="28">4 semaines</option><option value="42">6 semaines</option><option value="56">8 semaines</option></select></div>
      <div class="field"><span class="lab" id="lab-cc">Sélection</span><div class="chips" role="group" aria-labelledby="lab-cc"><button class="chip" type="button" data-heart aria-pressed="false">Coup de cœur du boucher</button></div></div>
    </div>
    <p class="result-count" data-count role="status"></p>
    <p class="toast" data-toast role="status"></p>
    <div data-results></div>
  </div>`
}

export function initCatalogue(root: HTMLElement) {
  const q = $('[data-q]', root) as HTMLInputElement
  const cuisson = $('[data-cuisson]', root) as HTMLSelectElement
  const occ = $('[data-occ]', root) as HTMLSelectElement
  const mat = $('[data-mat]', root) as HTMLSelectElement
  const heart = $('[data-heart]', root) as HTMLButtonElement
  const out = $('[data-results]', root)!
  const count = $('[data-count]', root)!
  let sp: string = root.dataset.fixed ?? 'all'

  const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

  function run() {
    const term = norm(q.value.trim())
    const list: Product[] = PRODUCTS.filter((p) => {
      if (sp !== 'all' && p.species !== sp) return false
      if (term && !norm(p.name + ' ' + p.desc + ' ' + p.tags.join(' ') + ' ' + (p.breed ?? '')).includes(term)) return false
      if (cuisson.value && !p.cuissons.includes(cuisson.value as never)) return false
      if (occ.value && !p.occasions.includes(occ.value as never)) return false
      if (mat.value === 'any' && !(p.matureDays || p.tags.includes('maturé'))) return false
      if (mat.value && mat.value !== 'any' && p.matureDays !== Number(mat.value)) return false
      if (heart.getAttribute('aria-pressed') === 'true' && !p.tags.includes('coup de cœur')) return false
      return true
    })
    count.textContent = `${list.length} ${list.length > 1 ? 'pièces' : 'pièce'} au comptoir`
    out.innerHTML = typo(list.length
      ? shelf(list, true)
      : '<div class="empty"><p><strong>Aucune pièce ne correspond.</strong></p><p>Essayez un autre mot, ou retirez un filtre. Vous ne trouvez pas ce que vous cherchez ? Appelez-nous, le boucher vous répond.</p></div>')
  }

  root.addEventListener('input', run)
  root.addEventListener('change', run)
  root.addEventListener('click', (e) => {
    const t = e.target as Element
    const b = t.closest<HTMLElement>('[data-sp]')
    if (b) { sp = b.dataset.sp!; $$('[data-sp]', root).forEach((x) => x.setAttribute('aria-pressed', String(x === b))); run() }
    const add = t.closest<HTMLElement>('[data-add]')
    if (add) {
      const p = PRODUCTS.find((x) => x.id === add.dataset.add)!
      const kg = p.unit === 'kg' ? 0.5 : 1
      try {
        const cur = JSON.parse(localStorage.getItem('liste-comptoir') || '[]') as unknown[]
        cur.push({ id: p.id, name: p.name, kg, total: p.price * kg, guests: 2 })
        localStorage.setItem('liste-comptoir', JSON.stringify(cur))
      } catch { /* stockage indisponible */ }
      const toast = $('[data-toast]', root)!
      toast.innerHTML = typo(`${p.name} ajouté à votre liste (${p.unit === 'kg' ? '500 g' : '1 pièce'}, ${money(p.price * kg)}). <a href="${href('carcasse/')}#liste">Voir et ajuster ma liste</a>`)
    }
    if (t.closest('[data-heart]')) { heart.setAttribute('aria-pressed', String(heart.getAttribute('aria-pressed') !== 'true')); run() }
  })
  run()
}
