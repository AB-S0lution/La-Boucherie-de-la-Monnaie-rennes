// Gravures originales en SVG (taille-douce). Aucune photo, aucun logo de la maison.
// Règle visuelle: seule la viande est en couleur, tout le reste est au trait.

const ID = { hatch: 'hach', marbling: 'marbrure', tile: 'carreau' }

/** <defs> globaux, injectés une seule fois dans le body */
export function globalDefs(): string {
  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
  <pattern id="${ID.hatch}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(32)"><line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" stroke-width="0.7" opacity="0.38"/></pattern>
  <pattern id="hach2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-38)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="0.6" opacity="0.3"/></pattern>
  <filter id="${ID.marbling}" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.03 0.075" numOctaves="3" seed="7" result="n"/>
    <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.94  0 0 0 0 0.89  0 0 0 0 0.84  0 0 0 11 -5.6" result="fat"/>
    <feComposite in="fat" in2="SourceAlpha" operator="in" result="fatc"/>
    <feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="fatc"/></feMerge>
  </filter>
</defs></svg>`
}

const wrap = (vb: string, inner: string, cls = '', label = '') =>
  `<svg class="art ${cls}" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" ${label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"'}>${inner}</svg>`

/** Motif de carreau de ciment (80 × 80) en data-URI, pour fonds CSS */
export function tileDataUri(dark = false): string {
  const bg = dark ? '#0E2E28' : '#E8DFCF'
  const a = dark ? '#173F37' : '#B9B2A6'
  const b = dark ? '#7E3A2E' : '#B5654A'
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' fill='${bg}'/>
  <g fill='none' stroke='${a}' stroke-width='1.4'><rect x='1' y='1' width='78' height='78'/></g>
  <g fill='${a}'><path d='M40 8 C48 20 48 28 40 40 C32 28 32 20 40 8Z'/><path d='M72 40 C60 48 52 48 40 40 C52 32 60 32 72 40Z'/><path d='M40 72 C32 60 32 52 40 40 C48 52 48 60 40 72Z'/><path d='M8 40 C20 32 28 32 40 40 C28 48 20 48 8 40Z'/></g>
  <circle cx='40' cy='40' r='5' fill='${b}'/>
  <g fill='${b}'><circle cx='8' cy='8' r='4'/><circle cx='72' cy='8' r='4'/><circle cx='8' cy='72' r='4'/><circle cx='72' cy='72' r='4'/></g>
  <g fill='none' stroke='${b}' stroke-width='1.2'><path d='M40 20 L50 40 L40 60 L30 40Z' opacity='0.6'/></g></svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/** Marbre noir à veines ocre (bande décorative statique) */
export function marbleDataUri(): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='120'><filter id='m' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.006 0.03' numOctaves='4' seed='11'/><feColorMatrix type='matrix' values='0 0 0 0 0.71  0 0 0 0 0.54  0 0 0 0 0.35  14 0 0 0 -6.6'/></filter><rect width='600' height='120' fill='#15191C'/><rect width='600' height='120' filter='url(#m)' opacity='0.8'/></svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/** Rosace de guillochage (courbes paramétriques) */
export function guilloche(r = 90, n = 7, turns = 24): string {
  let d = ''
  for (let k = 0; k < turns; k++) {
    const phase = (k / turns) * Math.PI * 2
    let path = ''
    for (let i = 0; i <= 160; i++) {
      const t = (i / 160) * Math.PI * 2
      const rr = r * (0.62 + 0.3 * Math.cos(n * t + phase))
      const x = 100 + rr * Math.cos(t)
      const y = 100 + rr * Math.sin(t)
      path += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1)
    }
    d += `<path d="${path}Z"/>`
  }
  return d
}

/** Médaillon frappé: bord moleté, légende circulaire, rosace */
export function coinSeal(legend: string, centre: string, sub = '', cls = '', id = 's' + Math.random().toString(36).slice(2, 7)): string {
  const text = (legend + '   ').repeat(1)
  return wrap('0 0 200 200', `
  <defs><path id="${id}" d="M100 100 m-72 0 a72 72 0 1 1 144 0 a72 72 0 1 1 -144 0"/></defs>
  <circle cx="100" cy="100" r="97" class="seal-edge" fill="none" stroke-width="5" stroke-dasharray="1.6 2.2"/>
  <circle cx="100" cy="100" r="92" class="seal-face"/>
  <circle cx="100" cy="100" r="89" fill="none" class="seal-line" stroke-width="1"/>
  <circle cx="100" cy="100" r="55" fill="none" class="seal-line" stroke-width="1"/>
  <g class="seal-guil" fill="none" stroke-width="0.35" opacity="0.5">${guilloche(52, 9, 8)}</g>
  <text class="seal-legend" font-size="11.5" letter-spacing="3.2"><textPath href="#${id}" startOffset="0" textLength="440" lengthAdjust="spacing">${text}</textPath></text>
  <text x="100" y="${sub ? 104 : 112}" text-anchor="middle" class="seal-centre" font-size="${centre.length > 5 ? 24 : 34}">${centre}</text>
  ${sub ? `<text x="100" y="124" text-anchor="middle" class="seal-sub" font-size="9" letter-spacing="1.6">${sub}</text>` : ''}`, 'seal ' + cls)
}

/** Lierre gravé (trait) */
export function ivy(len = 7): string {
  let g = ''
  for (let i = 0; i < len; i++) {
    const y = 20 + i * 26
    const dx = i % 2 ? 16 : -16
    g += `<path d="M40 ${y} q${dx} -4 ${dx * 1.5} 8 q-${dx * 0.6} 12 -${dx * 1.5} 10 q-4 -8 0 -18z" fill="currentColor" opacity="0.18"/><path d="M40 ${y} q${dx} -4 ${dx * 1.5} 8 q-${dx * 0.6} 12 -${dx * 1.5} 10"/>`
  }
  return wrap('0 0 80 ' + (len * 26 + 30), `<g fill="none" stroke="currentColor" stroke-width="1.2"><path d="M40 0 C36 40 44 80 38 ${len * 26 + 20}" class="draw"/>${g}</g>`, 'ivy')
}

/** Côte de bœuf gravée, viande en couleur */
export function cote(variant = 0): string {
  const flip = variant % 2 ? 'scale(-1,1) translate(-400,0)' : ''
  return wrap('0 0 400 320', `<g transform="${flip}">
  <path class="meat" d="M70 190 C60 120 120 62 210 60 C300 58 352 110 346 188 C342 250 290 280 210 282 C130 284 78 252 70 190Z" fill="#9B2430" filter="url(#${ID.marbling})" stroke="currentColor" stroke-width="2"/>
  <path d="M82 190 C78 130 130 78 212 76 C290 74 336 120 332 186" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <path class="draw" d="M260 62 C300 40 350 30 372 46 C388 58 376 78 352 82" fill="none" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="365" cy="58" rx="22" ry="14" transform="rotate(-18 365 58)" fill="#F4EEE0" stroke="currentColor" stroke-width="2"/>
  <path d="M90 210 C140 232 200 240 300 228" fill="none" stroke="#EFE3D6" stroke-width="2.4" opacity="0.8" stroke-linecap="round"/>
  <g fill="none" stroke="currentColor" stroke-width="0.9" opacity="0.65"><path d="M96 140 q30 -18 60 -6"/><path d="M110 168 q50 -20 100 -4"/><path d="M180 120 q40 -14 90 2"/><path d="M200 220 q40 10 80 -6"/><path d="M120 110 q18 -14 38 -14"/></g>
  <path d="M60 205 C58 262 120 300 210 300 C300 300 352 262 350 204" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5" stroke-dasharray="2 5"/>
  </g>`, 'cote')
}

/** Billot rond (bois de bout) et trois couteaux dessinés au trait */
export function billot(): string {
  let rings = ''
  for (let i = 1; i <= 7; i++) rings += `<ellipse cx="200" cy="150" rx="${20 + i * 21}" ry="${8 + i * 7.4}" fill="none" stroke="currentColor" stroke-width="${i % 3 ? 0.7 : 1.1}" opacity="0.65"/>`
  return wrap('0 0 400 340', `
  <path d="M52 150 L52 262 C52 290 128 310 200 310 C272 310 348 290 348 262 L348 150Z" fill="url(#${ID.hatch})" stroke="currentColor" stroke-width="2.2" color="currentColor"/>
  <path d="M60 262 C80 286 140 300 200 300 C260 300 320 286 340 262" fill="none" stroke="currentColor" stroke-width="1"/>
  <ellipse cx="200" cy="150" rx="148" ry="62" fill="var(--wood, #C9A57A)" stroke="currentColor" stroke-width="2.2"/>
  ${rings}
  <path d="M170 140 L200 150 L240 140" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.7"/>
  <g class="knife" fill="none" stroke="currentColor" stroke-width="2"><path class="draw" d="M90 118 L190 60 L196 70 L108 130 Z"/><path class="draw" d="M96 126 L74 148 L66 142 L90 120"/></g>
  <g class="knife" fill="none" stroke="currentColor" stroke-width="2"><path class="draw" d="M300 112 L228 44 L222 54 L286 124Z"/><path class="draw" d="M298 118 L318 142 L326 136 L304 112"/></g>
  <g class="knife" fill="none" stroke="currentColor" stroke-width="2"><path class="draw" d="M200 138 L200 40 L212 36 L212 138Z"/><path class="draw" d="M200 138 L198 168 L214 168 L212 138"/></g>`, 'billot')
}

/** Carcasses: silhouette et régions du schéma (viewBox 800 × 420) */
export const BODY = 'M70 196 C66 176 78 150 100 136 C110 118 126 108 140 110 C164 104 186 98 214 96 C300 88 420 96 520 100 C600 102 660 104 694 124 C716 138 724 168 720 206 C716 250 706 286 694 312 C688 340 690 372 696 404 L666 404 C664 380 658 356 648 336 C600 348 520 352 440 350 C360 350 290 346 222 332 C216 356 214 382 214 404 L180 404 C180 380 178 356 172 330 C162 300 156 270 152 246 C146 232 136 226 122 226 C106 228 92 222 80 214 C72 208 70 202 70 196Z'

type Reg = { id: string; pts: number[] }
export const REGIONS: Record<'boeuf' | 'cochon' | 'agneau', Reg[]> = {
  boeuf: [
    { id: 'joue', pts: [80, 90, 192, 90, 180, 240, 80, 280] },
    { id: 'paleron', pts: [192, 90, 286, 90, 276, 204, 182, 240] },
    { id: 'macreuse', pts: [286, 90, 366, 90, 356, 194, 276, 204] },
    { id: 'cote', pts: [366, 90, 432, 90, 426, 194, 356, 194] },
    { id: 'entrecote', pts: [432, 90, 496, 90, 492, 194, 426, 194] },
    { id: 'fauxfilet', pts: [496, 90, 560, 90, 556, 190, 492, 194] },
    { id: 'rumsteck', pts: [560, 90, 740, 90, 742, 224, 556, 190] },
    { id: 'filet', pts: [440, 194, 556, 190, 552, 232, 444, 236] },
    { id: 'onglet', pts: [380, 232, 444, 236, 440, 290, 384, 284] },
    { id: 'bavette', pts: [444, 236, 534, 268, 524, 348, 440, 338] },
    { id: 'platcotes', pts: [196, 240, 380, 232, 384, 330, 216, 312] },
    { id: 'gite', pts: [552, 228, 604, 228, 614, 348, 526, 348] },
    { id: 'tende', pts: [604, 224, 742, 224, 742, 348, 614, 348] },
    { id: 'jarret', pts: [150, 296, 218, 296, 214, 410, 150, 410] },
  ],
  cochon: [
    { id: 'joue', pts: [80, 90, 190, 90, 178, 230, 80, 280] },
    { id: 'echine', pts: [190, 90, 300, 90, 292, 196, 182, 200] },
    { id: 'palette', pts: [182, 200, 292, 196, 300, 300, 200, 310] },
    { id: 'cotepremiere', pts: [300, 90, 404, 90, 398, 190, 292, 196] },
    { id: 'longe', pts: [404, 90, 536, 90, 530, 190, 398, 190] },
    { id: 'filetmignon', pts: [404, 190, 530, 190, 526, 232, 408, 236] },
    { id: 'travers', pts: [300, 196, 398, 190, 404, 236, 300, 240] },
    { id: 'poitrine', pts: [300, 240, 526, 232, 536, 290, 304, 300] },
    { id: 'ventreche', pts: [304, 300, 536, 290, 556, 350, 310, 350] },
    { id: 'jambon', pts: [536, 90, 742, 90, 742, 360, 556, 350, 526, 232] },
    { id: 'jarret', pts: [150, 296, 218, 296, 214, 410, 150, 410] },
  ],
  agneau: [
    { id: 'collier', pts: [80, 90, 190, 90, 180, 240, 80, 280] },
    { id: 'epaule', pts: [190, 90, 300, 90, 296, 242, 182, 240] },
    { id: 'carre', pts: [300, 90, 432, 90, 428, 170, 296, 176] },
    { id: 'cotelettes', pts: [296, 176, 428, 170, 430, 242, 296, 242] },
    { id: 'selle', pts: [432, 90, 560, 90, 556, 170, 428, 170] },
    { id: 'filet', pts: [428, 170, 556, 170, 552, 236, 430, 242] },
    { id: 'gigot', pts: [560, 90, 742, 90, 742, 290, 590, 290, 556, 170] },
    { id: 'souris', pts: [590, 290, 742, 290, 742, 360, 600, 350] },
    { id: 'poitrine', pts: [296, 242, 552, 236, 590, 290, 600, 350, 306, 350] },
    { id: 'jarret', pts: [150, 296, 218, 296, 214, 410, 150, 410] },
  ],
}

export function carcass(species: 'boeuf' | 'cochon' | 'agneau'): string {
  const regs = REGIONS[species]
  const polys = regs.map((r) => {
    const pts = r.pts.reduce((a, v, i) => a + (i % 2 ? ',' : ' ') + v, '').trim()
    return `<polygon class="reg" data-region="${r.id}" points="${pts}"/>`
  }).join('')
  const lamb = species === 'agneau' ? 'translate(60 40) scale(0.9)' : ''
  return wrap('0 0 800 440', `
  <defs><clipPath id="cp-${species}"><path d="${BODY}"/></clipPath></defs>
  <g transform="${lamb}">
  <path d="${BODY}" fill="url(#${ID.hatch})" color="currentColor" opacity="0.8"/>
  <g clip-path="url(#cp-${species})">${polys}</g>
  <path class="body-line" d="${BODY}" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <path d="M132 112 C138 96 154 92 162 102 C154 110 144 114 132 112Z" stroke-width="1.6" fill="url(#${ID.hatch})"/>
    ${species === 'boeuf' ? '<path d="M146 106 C150 90 162 82 176 84" stroke-width="2.2"/>' : ''}
    <path d="M74 190 C78 187 83 188 86 192" stroke-width="1.2" opacity="0.8"/>
    <path d="M96 210 C104 214 114 214 122 210" stroke-width="0.9" opacity="0.6"/>
    <path d="M718 150 C736 184 738 240 732 294" stroke-width="2"/>
    <path d="M732 294 C724 302 724 314 730 322 M732 294 C740 302 742 314 736 322" stroke-width="1.6"/>
    <path d="M180 394 L214 394 M666 394 L696 394" stroke-width="2.4"/>
    <path d="M232 300 C300 324 380 330 440 330 C520 330 590 324 640 312" stroke-width="0.8" opacity="0.45" stroke-dasharray="3 5"/>
    <circle cx="104" cy="154" r="2.6" fill="currentColor" stroke="none"/>
  </g>
  </g>`, 'carcass carcass-' + species)
}

/** Façade de l'Hôtel des Monnaies (gravure d'après le style classique du XVIIIe siècle) */
export function facade(): string {
  let win = ''
  for (let r = 0; r < 3; r++) for (let c = 0; c < 7; c++) {
    const x = 50 + c * 50, y = 112 + r * 66
    win += `<rect x="${x}" y="${y}" width="26" height="42" fill="url(#${ID.hatch})" stroke="currentColor" stroke-width="1.4"/><path d="M${x} ${y} q13 -14 26 0" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="${x + 13}" y1="${y}" x2="${x + 13}" y2="${y + 42}" stroke="currentColor" stroke-width="0.8"/>`
  }
  return wrap('0 0 400 360', `
  <path d="M20 340 L20 100 L200 36 L380 100 L380 340Z" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <path d="M20 100 L200 36 L380 100" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M140 100 L200 76 L260 100" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <g class="mansard" fill="url(#hach2)" color="currentColor"><path d="M20 100 L60 56 L340 56 L380 100Z" stroke="currentColor" stroke-width="1.6"/></g>
  ${win}
  <rect x="165" y="276" width="70" height="64" fill="url(#${ID.hatch})" stroke="currentColor" stroke-width="2"/>
  <path d="M165 276 q35 -34 70 0" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="12" y1="340" x2="388" y2="340" stroke="currentColor" stroke-width="2.4"/>`, 'facade')
}

export function halles(): string {
  let arches = ''
  for (let i = 0; i < 5; i++) arches += `<path d="M${40 + i * 64} 250 L${40 + i * 64} 150 q32 -66 64 0 L${104 + i * 64} 250" fill="none" stroke="currentColor" stroke-width="1.6"/>`
  return wrap('0 0 400 300', `<path d="M20 250 L20 140 L200 40 L380 140 L380 250Z" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <path d="M20 140 L380 140" stroke="currentColor" stroke-width="1.2"/>${arches}
  <g stroke="currentColor" stroke-width="0.9" opacity="0.7"><path d="M200 40 L200 140"/><path d="M110 90 L110 140"/><path d="M290 90 L290 140"/></g>
  <line x1="10" y1="250" x2="390" y2="250" stroke="currentColor" stroke-width="2.4"/>`, 'halles')
}

export function pate(): string {
  return wrap('0 0 400 260', `<rect x="40" y="60" width="320" height="150" rx="0" fill="#E3C98F" stroke="currentColor" stroke-width="2.4"/>
  <rect x="62" y="82" width="276" height="106" fill="#B3262E" filter="url(#${ID.marbling})" stroke="currentColor" stroke-width="1.6"/>
  <rect x="62" y="84" width="276" height="22" fill="#E8D9A8" opacity="0.55"/>
  <circle cx="130" cy="150" r="14" fill="#EFE3D6" stroke="currentColor" stroke-width="1.2"/><circle cx="215" cy="140" r="10" fill="#7E1F27"/><circle cx="280" cy="156" r="14" fill="#EFE3D6" stroke="currentColor" stroke-width="1.2"/>
  <path d="M40 60 q160 -34 320 0" fill="none" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1" opacity="0.7" fill="none"><path d="M70 60 q-4 -16 4 -24"/><path d="M200 50 q0 -18 8 -26"/><path d="M320 60 q6 -16 -2 -26"/></g>`, 'pate')
}

export function saucisse(): string {
  return wrap('0 0 400 260', `<path class="meat" d="M60 150 C60 70 190 50 250 90 C320 134 330 200 250 214 C190 224 170 180 214 150 C250 124 300 150 290 180" fill="none" stroke="#9B2430" stroke-width="30" stroke-linecap="round"/>
  <path d="M60 150 C60 70 190 50 250 90 C320 134 330 200 250 214 C190 224 170 180 214 150 C250 124 300 150 290 180" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="1 9" opacity="0.8" transform="translate(0 -12)"/>
  <path d="M60 150 C60 70 190 50 250 90 C320 134 330 200 250 214 C190 224 170 180 214 150 C250 124 300 150 290 180" fill="none" stroke="#EFE3D6" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 11" transform="translate(0 -3)" opacity="0.7"/>`, 'saucisse')
}

export function bocal(): string {
  const jar = (x: number, h: number, lid: string) => `<g><rect x="${x}" y="${150 - h}" width="64" height="${h + 60}" fill="url(#${ID.hatch})" color="currentColor" stroke="currentColor" stroke-width="2"/><rect x="${x - 4}" y="${140 - h}" width="72" height="14" fill="${lid}" stroke="currentColor" stroke-width="2"/><rect x="${x + 12}" y="${176 - h}" width="40" height="${h - 30}" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 4"/></g>`
  return wrap('0 0 400 260', `${jar(60, 90, '#F4EEE0')}${jar(170, 70, '#F4EEE0')}${jar(280, 100, '#F4EEE0')}<line x1="30" y1="212" x2="370" y2="212" stroke="currentColor" stroke-width="2.4"/>`, 'bocal')
}

export function balance(): string {
  return wrap('0 0 400 260', `<path d="M70 220 L330 220 L310 150 L90 150Z" fill="url(#${ID.hatch})" color="currentColor" stroke="currentColor" stroke-width="2.4"/>
  <rect x="120" y="60" width="160" height="80" fill="#F4EEE0" stroke="currentColor" stroke-width="2.4"/>
  <text x="200" y="112" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="34" fill="currentColor">0,812</text>
  <path d="M120 150 L120 140 M280 150 L280 140" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="200" cy="40" rx="64" ry="12" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M136 40 L120 60 M264 40 L280 60" stroke="currentColor" stroke-width="1.4"/>`, 'balance')
}

export function couteaux(): string {
  const k = (x: number, a: number, len: number) => `<g transform="rotate(${a} ${x} 220)"><path class="draw" d="M${x - 14} 220 L${x - 14} ${220 - len} Q${x + 12} ${220 - len + 40} ${x + 14} 220Z" fill="none" stroke="currentColor" stroke-width="2"/><rect x="${x - 14}" y="220" width="28" height="56" fill="url(#${ID.hatch})" color="currentColor" stroke="currentColor" stroke-width="2"/></g>`
  return wrap('0 0 400 300', `${k(110, -16, 170)}${k(200, 0, 190)}${k(290, 16, 150)}`, 'couteaux')
}

export function agneau(): string {
  return wrap('0 0 400 300', `<path class="meat" d="M70 220 C70 120 130 62 210 62 C290 62 340 110 330 170 C322 210 270 240 210 236 L120 276 C94 286 62 268 70 220Z" fill="#B3262E" filter="url(#${ID.marbling})" stroke="currentColor" stroke-width="2.4"/>
  <rect x="86" y="262" width="62" height="16" transform="rotate(-24 86 262)" fill="#F4EEE0" stroke="currentColor" stroke-width="2"/>
  <path d="M130 130 C170 100 230 100 270 130" fill="none" stroke="currentColor" stroke-width="1" opacity="0.7"/>`, 'agneau')
}

export function foiegras(): string {
  return wrap('0 0 400 260', `<path d="M70 150 C70 90 160 70 230 90 C300 106 330 150 300 190 C260 232 120 234 84 190 C74 178 70 164 70 150Z" fill="#E9C48E" stroke="currentColor" stroke-width="2.4"/>
  <path d="M110 140 C150 118 220 116 270 146" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <path d="M96 176 C150 198 230 202 292 172" fill="none" stroke="#B3262E" stroke-width="1.6" opacity="0.5"/>
  <rect x="300" y="150" width="60" height="50" fill="#E3C98F" stroke="currentColor" stroke-width="2" transform="rotate(8 330 175)"/>`, 'foiegras')
}

export function maki(): string {
  const m = (x: number, y: number) => `<g><circle cx="${x}" cy="${y}" r="34" fill="#9B2430" stroke="currentColor" stroke-width="2.2"/><circle cx="${x}" cy="${y}" r="22" fill="none" stroke="#EFE3D6" stroke-width="3"/><circle cx="${x}" cy="${y}" r="10" fill="#B3262E" stroke="currentColor" stroke-width="1.4"/></g>`
  return wrap('0 0 400 260', `${m(110, 120)}${m(220, 90)}${m(300, 170)}${m(180, 190)}`, 'maki')
}

/** Mur de vitrines: portes vitrées à cadre noir, avec pièces et plantes retombantes */
export function vitrine(cols = 4): string {
  let s = ''
  const w = 400 / cols
  for (let i = 0; i < cols; i++) {
    const x = i * w + 6
    s += `<rect x="${x}" y="40" width="${w - 12}" height="210" fill="#0E1A17" fill-opacity="0.35" stroke="currentColor" stroke-width="3"/>
    <rect x="${x + 6}" y="48" width="${w - 24}" height="194" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
    <line x1="${x + 6}" y1="108" x2="${x + w - 18}" y2="108" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>
    <line x1="${x + 6}" y1="178" x2="${x + w - 18}" y2="178" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>
    <rect x="${x + 16}" y="${74 + (i % 2) * 6}" width="${w - 44}" height="26" fill="#8A2129" filter="url(#${ID.marbling})"/>
    <rect x="${x + 12}" y="${140 + (i % 3) * 4}" width="${w - 36}" height="30" fill="#7E1F27" filter="url(#${ID.marbling})"/>
    <rect x="${x + 20}" y="${208}" width="${w - 52}" height="28" fill="#9B2430" filter="url(#${ID.marbling})"/>
    <rect x="${x + 14}" y="${112}" width="26" height="12" fill="#14181A" stroke="currentColor" stroke-width="1"/>
    <path d="M${x + 10} 40 q${6} 38 -2 70 M${x + w * 0.5} 40 q-8 30 2 54" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.7" class="plant"/>`
  }
  return wrap('0 0 400 270', s, 'vitrine')
}

export function cave(): string {
  return wrap('0 0 400 400', `${vitrine(2).replace(/^<svg[^>]*>/, '<g transform="translate(0 40) scale(1 1.3)">').replace(/<\/svg>$/, '</g>')}`, 'cave')
}

/** France simplifiée + Italie, schéma d'origine (viewBox 600 × 640) */
export function franceMap(): string {
  return wrap('0 0 600 640', `
  <path class="map-fr" d="M350 20 L430 52 L472 100 L518 150 L512 204 L484 262 L496 330 L512 392 L506 452 L440 478 L390 494 L332 500 L300 540 L204 562 L130 546 L108 474 L128 384 L110 302 L88 252 L40 236 L28 202 L70 172 L132 182 L182 150 L190 102 L232 90 L284 62Z" fill="url(#${ID.hatch})" color="currentColor" stroke="currentColor" stroke-width="2.2"/>
  <path class="map-it" d="M528 380 L600 402 L612 470 L584 540 L566 610 L548 560 L536 500 L520 440Z" fill="url(#hach2)" color="currentColor" stroke="currentColor" stroke-width="1.6"/>
  <path d="M130 546 L204 562" stroke="currentColor" stroke-width="3"/>
  <g fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.5"><path d="M200 330 C260 300 320 320 380 300"/><path d="M180 400 C260 380 330 420 440 400"/><path d="M240 180 C300 200 360 190 430 210"/></g>`, 'map')
}

/** Carreaux de ciment: bande décorative pour fonds (utilise la variable CSS --tile) */
export function photoSlot(ratio: string): string {
  const [w, h] = ratio === '3:2' ? [300, 200] : ratio === '1:1' ? [240, 240] : [240, 300]
  return '<!-- TODO photo boutique: fournie par la maison -->' + wrap(`0 0 ${w} ${h}`, `<rect x="3" y="3" width="${w - 6}" height="${h - 6}" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 6" opacity="0.6"/><g fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.6"><circle cx="${w / 2}" cy="${h / 2 - 8}" r="22"/><path d="M${w / 2 - 30} ${h / 2 + 34} h60"/></g>`, 'photo-slot')
}

export type ArtKind = 'cote' | 'billot' | 'vitrine' | 'cave' | 'carcasse' | 'facade' | 'halles' | 'pate' | 'saucisse' | 'bocal' | 'balance' | 'couteaux' | 'agneau' | 'foiegras' | 'maki' | 'photo' | 'bavette' | 'marche' | 'bellota'

export function artFor(kind: string, ratio = '3:2', variant = 0): string {
  switch (kind) {
    case 'cote': case 'bavette': return cote(variant)
    case 'billot': return billot()
    case 'vitrine': return vitrine(4)
    case 'cave': return cave()
    case 'carcasse': return carcass('boeuf')
    case 'facade': return facade()
    case 'halles': case 'marche': return halles()
    case 'pate': return pate()
    case 'saucisse': case 'bellota': return saucisse()
    case 'bocal': return bocal()
    case 'balance': return balance()
    case 'couteaux': return couteaux()
    case 'agneau': return agneau()
    case 'foiegras': return foiegras()
    case 'maki': return maki()
    default: return photoSlot(ratio)
  }
}

/** Petites icônes utilitaires (géométrie simple, trait constant) */
export const ICON = {
  phone: '<svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  plus: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  pan: '<svg viewBox="0 0 32 32" width="1.6em" height="1.6em" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><ellipse cx="14" cy="18" rx="9" ry="5"/><path d="M23 17l7-3"/></svg>',
  four: '<svg viewBox="0 0 32 32" width="1.6em" height="1.6em" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="4" y="6" width="24" height="20"/><rect x="8" y="12" width="16" height="10"/><path d="M8 9h2M13 9h2"/></svg>',
  feu: '<svg viewBox="0 0 32 32" width="1.6em" height="1.6em" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M16 4c1 5 7 7 7 13a7 7 0 0 1-14 0c0-3 2-4 3-7 1 2 2 2 2 3 1-3 1-6 2-9z"/></svg>',
  pot: '<svg viewBox="0 0 32 32" width="1.6em" height="1.6em" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M5 12h22v8a6 6 0 0 1-6 6H11a6 6 0 0 1-6-6zM3 12h26M12 7c0-2 2-2 2-4M18 7c0-2 2-2 2-4"/></svg>',
} as const
