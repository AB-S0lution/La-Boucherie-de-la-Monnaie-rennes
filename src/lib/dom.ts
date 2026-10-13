// Aides DOM et typographie française (espaces insécables avant : ; ! ? et dans « »).

export const BASE = import.meta.env.BASE_URL // '/La-Boucherie-de-la-Monnaie-rennes/'
export const NBSP = ' '
export const NNBSP = ' '

/** Lien interne relatif à la base (ex: href('comptoir/') ) */
export const href = (path = '') => BASE + path.replace(/^\//, '')

/** Typographie française, appliquée sur du HTML ou du texte. Ne touche pas aux balises. */
export function typo(html: string): string {
  return html
    .replace(/(^|>)([^<]+)/g, (_m, pre: string, text: string) =>
      pre + text
        .replace(/&(#?\w+);/g, '&$1\uE000')
        .replace(/ +([?!;:»])/g, `${NBSP}$1`)
        .replace(/([A-Za-zÀ-ÿ0-9)»…])([?!;:])(?=\s|$)/g, `$1${NBSP}$2`)
        .replace(/« +/g, `«${NBSP}`)
        .replace(/(\d) (€|%|kg|g|h|cl|L|m)\b/g, `$1${NBSP}$2`)
        .replace(/\b(\d{1,2}) (heures?|semaines?|jours?|minutes?|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre|janvier|février)\b/g, `$1${NBSP}$2`)
        .replace(/\uE000/g, ';'),
    )
}

export const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel)
export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel))

export const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const isTouch = () => window.matchMedia('(hover: none)').matches

/** Format de prix: 79 → « 79 € », 9,9 → « 9,90 € » */
export const money = (n: number) => n.toLocaleString('fr-FR', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }) + `${NBSP}€`
