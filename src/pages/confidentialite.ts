// Confidentialité: aucun cookie, aucun traceur.
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  return `<section class="section wrap prose"><h1 data-split>Confidentialité</h1>
  <p>Ce site n'utilise ni cookie, ni outil de mesure d'audience, ni traceur publicitaire. Il ne collecte aucune donnée personnelle.</p>
  <h2>Stockage local</h2><p>Votre navigateur peut conserver deux préférences sur votre appareil seulement: le thème choisi (Comptoir ou Cave) et la liste de morceaux préparée pour le comptoir. Rien n'est envoyé à un serveur.</p>
  <h2>Formulaire de demande</h2><p>Le formulaire de la page contact n'envoie rien: il compose un texte que vous copiez ou envoyez vous-même, par exemple en message privé sur Instagram, soumis aux règles de ce service.</p>
  <h2>Liens externes</h2><p>Les liens vers Google Maps, OpenStreetMap, Instagram et Facebook ouvrent des services tiers, avec leurs propres règles.</p></section>`
}
