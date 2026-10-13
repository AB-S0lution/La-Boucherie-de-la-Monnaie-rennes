// En-tête, menu plein écran, pied de page, barre d'appel mobile, rideau. HTML + initialisation.
import { BUSINESS, HOURS, PHONE_PRIMARY, PHONE_TEL, ADDRESS_LINE, fmtTime } from '../data/business.ts'
import { coinSeal, globalDefs, ICON } from '../lib/art.ts'
import { href, $, $$ } from '../lib/dom.ts'
import { getLenis } from '../lib/motion.ts'

const NAV_MAIN = [
  ['comptoir/', 'Comptoir'], ['carcasse/', 'La carcasse'], ['cave-de-maturation/', 'La cave'],
  ['charcuterie/', 'Charcuterie'], ['traiteur/', 'Traiteur'], ['contact/', 'Contact'],
] as const

const MENU: Array<{ title: string; items: Array<[string, string]>; small?: boolean }> = [
  { title: 'La boutique', items: [['', 'Accueil'], ['la-maison/', 'La maison'], ['comptoir/', 'Le comptoir'], ['carcasse/', 'La carcasse entière'], ['cave-de-maturation/', 'La cave de maturation'], ['charcuterie/', 'Charcuterie maison'], ['traiteur/', 'Traiteur'], ['epicerie/', 'L\'épicerie fine']] },
  { title: 'Découvrir', items: [['origines/', 'D\'où vient la viande'], ['journal/', 'Le journal'], ['samedi-marche/', 'Le samedi des Lices'], ['galerie/', 'Galerie'], ['comptoir/boeuf/', 'Bœuf'], ['comptoir/cochon/', 'Cochon'], ['comptoir/veau-agneau/', 'Veau et agneau'], ['comptoir/volailles/', 'Volailles']] },
  { title: 'Pratique', small: true, items: [['contact/', 'Contact et accès'], ['faq/', 'Questions fréquentes'], ['recrutement/', 'Nous rejoindre'], ['mentions-legales/', 'Mentions légales'], ['confidentialite/', 'Confidentialité']] },
]

export function shellTop(path: string): string {
  const cur = (p: string) => (p === path ? ' aria-current="page"' : '')
  const navMain = NAV_MAIN.map(([p, l]) => `<a href="${href(p)}"${path.startsWith(p) && p ? ' aria-current="page"' : ''}>${l}</a>`).join('')
  let i = 0
  const menu = MENU.map((g) => `<div class="${g.small ? 'menu-small' : ''}"><h2>${g.title}</h2><ul>${g.items.map(([p, l]) => `<li style="--i:${i++}"><a href="${href(p)}"${cur(p)}>${l}</a></li>`).join('')}</ul></div>`).join('')
  return `${globalDefs()}
  <a class="skip" href="#main">Aller au contenu</a>
  <header class="site-header" role="banner">
    <div class="wrap">
      <a class="brand" href="${href('')}" aria-label="La Boucherie de la Monnaie, accueil">
        ${coinSeal('LA BOUCHERIE DE LA MONNAIE · RENNES', '2023', '', '', 'hdr-seal')}
        <span class="brand-name">La Boucherie de la Monnaie</span>
        <!-- TODO logo officiel: fichier à fournir par la maison. Pastille ci-dessus = sceau original, pas le logo. -->
      </a>
      <nav class="nav-main" aria-label="Navigation principale">${navMain}</nav>
      <div class="head-actions">
        <a class="btn head-call" href="tel:${PHONE_TEL}">${ICON.phone}<span>Appeler</span></a>
        <button class="icon-btn theme-toggle" type="button" aria-pressed="false" aria-label="Basculer entre Comptoir (clair) et Cave (sombre)"><span class="lbl">Comptoir</span></button>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu"><i></i><span>Menu</span></button>
      </div>
    </div>
  </header>
  <div class="menu" id="menu" data-open="false" role="dialog" aria-modal="false" aria-label="Menu du site">
    <div class="menu-grid">${menu}</div>
    <div class="menu-foot"><a class="btn" href="tel:${PHONE_TEL}">${ICON.phone}<span>${PHONE_PRIMARY}</span></a><a class="link-arrow" href="${href('contact/')}">Itinéraire et horaires ${ICON.arrow}</a></div>
  </div>
  <div class="rail" aria-hidden="true"><b></b></div>`
}

export function shellBottom(): string {
  const hours = HOURS.map((d) => `<li class="mono" style="display:flex;justify-content:space-between;gap:1rem"><span>${d.short}</span><span>${d.ranges.length ? d.ranges.map(([a, b]) => `${fmtTime(a)} à ${fmtTime(b)}`).join(', ') : 'Fermé'}</span></li>`).join('')
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <p class="footer-brand">La Boucherie<br>de la Monnaie</p>
          <p>${BUSINESS.tagline}.<br>${ADDRESS_LINE}</p>
          <p><a class="btn" href="tel:${PHONE_TEL}">${ICON.phone}<span>${PHONE_PRIMARY}</span></a></p>
        </div>
        <div><h2>Horaires</h2><ul>${hours}</ul></div>
        <div><h2>Le site</h2><ul>
          <li><a href="${href('comptoir/')}">Le comptoir</a></li><li><a href="${href('carcasse/')}">La carcasse entière</a></li><li><a href="${href('cave-de-maturation/')}">La cave de maturation</a></li>
          <li><a href="${href('traiteur/')}">Traiteur</a></li><li><a href="${href('journal/')}">Le journal</a></li><li><a href="${href('faq/')}">Questions fréquentes</a></li><li><a href="${href('recrutement/')}">Nous rejoindre</a></li></ul></div>
        <div><h2>Nous suivre</h2><ul>
          <li><a href="${BUSINESS.instagramUrl}" rel="noopener" target="_blank">Instagram ${BUSINESS.instagramHandle}</a></li>
          <li><a href="${BUSINESS.facebookUrl}" rel="noopener" target="_blank">Facebook</a></li>
          <li><a href="${BUSINESS.mapsUrl}" rel="noopener" target="_blank">Itinéraire (Google Maps)</a></li></ul>
          <p class="note" style="margin-top:1rem;color:#cfd9d3">Métro Sainte-Anne, à environ 270 mètres.</p></div>
      </div>
      <div class="footer-legal">
        <span>${BUSINESS.legalForm} ${BUSINESS.legalName}</span><a href="${href('mentions-legales/')}">Mentions légales</a><a href="${href('confidentialite/')}">Confidentialité</a>
        <span>Site de démonstration non officiel: les prix, articles, plats et visuels sont des exemples.</span>
      </div>
    </div>
    <div class="footer-floor" aria-hidden="true"></div>
  </footer>
  <nav class="callbar" aria-label="Contact rapide"><a href="tel:${PHONE_TEL}">${ICON.phone}<span>Appeler la boucherie</span></a><a href="${BUSINESS.mapsUrl}" rel="noopener" target="_blank">${ICON.pin}<span>Itinéraire</span></a></nav>
  <div class="curtain" aria-hidden="true">${'<i></i>'.repeat(11)}</div>`
}

/** Initialise menu, thème et état de navigation */
export function initShell() {
  const btn = $('.menu-btn') as HTMLButtonElement
  const menu = $('#menu')!
  const setMenu = (open: boolean) => {
    menu.dataset.open = String(open)
    btn.setAttribute('aria-expanded', String(open))
    document.body.classList.toggle('menu-open', open)
    const l = getLenis()
    if (open) l?.stop(); else l?.start()
  }
  btn.addEventListener('click', () => setMenu(menu.dataset.open !== 'true'))
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.dataset.open === 'true') { setMenu(false); btn.focus() } })
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)))

  const tbtn = $('.theme-toggle') as HTMLButtonElement
  const root = document.documentElement
  const label = () => {
    const dark = root.dataset.theme === 'dark'
    tbtn.setAttribute('aria-pressed', String(dark))
    ;($('.lbl', tbtn) as HTMLElement).textContent = dark ? 'Cave' : 'Comptoir'
  }
  label()
  tbtn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
    root.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch { /* stockage indisponible */ }
    label()
  })
}
