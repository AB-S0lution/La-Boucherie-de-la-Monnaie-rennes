// Mentions légales (données de la SARL, PLAN.md §1).
import { ADDRESS_LINE, BUSINESS, PHONE_PRIMARY } from '../data/business.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  return `<section class="section wrap prose"><h1 data-split>Mentions légales</h1>
  <h2>Éditeur</h2><p>${BUSINESS.legalForm} ${BUSINESS.legalName}, capital de ${BUSINESS.capital}. ${ADDRESS_LINE}. SIREN ${BUSINESS.siren}, SIRET ${BUSINESS.siret}, ${BUSINESS.rcs}. TVA ${BUSINESS.vat}. Code APE ${BUSINESS.ape}. Téléphone ${PHONE_PRIMARY}.</p>
  <h2>Directeur de la publication</h2><p>${BUSINESS.gerant}, gérant. <!-- TODO confirmer le directeur de la publication --></p>
  <h2>Site de démonstration</h2><p>Ce site est une démonstration non officielle. Les prix, plats, articles, photos et listes de produits sont des exemples. Il ne permet aucune commande ni aucun paiement.</p>
  <h2>Hébergement</h2><p>GitHub Pages (GitHub, Inc.). <!-- TODO remplacer par l'hébergeur définitif --></p>
  <h2>Propriété intellectuelle</h2><p>Les gravures et illustrations sont des créations originales pour ce site. Le logo officiel de la maison n'est pas reproduit.</p>
  <h2>Avis cités</h2><p>Les extraits d'avis sont issus d'avis publics de la plateforme Google et cités avec leur source.</p></section>`
}
