// FAQ: accordéon <details>, regroupé par thème.
import { FAQ } from '../data/content.ts'
import { artFor } from '../lib/art.ts'
import { esc } from '../lib/dom.ts'
import { callBand, plateHead } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

const GROUPS = [['commande', 'Commander'], ['produits', 'Les produits'], ['pratique', 'Pratique']] as const

export function render(_def: PageDef): string {
  return `${plateHead({ title: 'Questions fréquentes', lead: 'Commander, maturation, halal, horaires, accès: les réponses les plus demandées au comptoir.', art: artFor('balance') })}
  <section class="section-tight wrap">${GROUPS.map(([k, t]) => `<h2 style="margin:2.4rem 0 1rem" data-split>${t}</h2><div class="acc">${FAQ.filter((f) => f.group === k).map((f) => `<details><summary>${esc(f.q)}<span class="pm" aria-hidden="true"></span></summary><div class="answer"><p>${esc(f.a)}</p></div></details>`).join('')}</div>`).join('')}</section>
  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}</script>
  ${callBand('Une autre question ? Le boucher répond.')}`
}
