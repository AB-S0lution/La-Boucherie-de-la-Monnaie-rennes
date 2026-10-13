// Recrutement: conditions réelles d'octobre 2026. TODO masquer cette page quand le poste est pourvu.
import { BUSINESS, PHONE_PRIMARY, PHONE_TEL } from '../data/business.ts'
import { artFor, ICON } from '../lib/art.ts'
import { callBand, plateHead } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  return `${plateHead({ title: 'Nous rejoindre', lead: 'La boucherie recrute un boucher ou une bouchère en CDI, dans une petite équipe au centre de Rennes.', art: artFor('couteaux') })}
  <section class="section wrap cols-2 cols-5-7" style="align-items:start"><div class="stack"><h2 data-split>Le poste</h2><p class="note">Offre d'octobre 2026. <!-- TODO masquer cette page quand le poste est pourvu --></p></div>
    <dl class="contact-cards"><div><dt class="k">Contrat</dt><dd style="margin:0">CDI</dd></div><div><dt class="k">Durée du travail</dt><dd style="margin:0">39 heures par semaine</dd></div><div><dt class="k">Repos</dt><dd style="margin:0">Dimanche, lundi, et une après-midi dans la semaine</dd></div><div><dt class="k">Équipe</dt><dd style="margin:0">Une petite équipe, chacun à son billot, à la vue de tous</dd></div><div><dt class="k">Candidature</dt><dd style="margin:0">À la boutique, ${BUSINESS.street}, ou en message privé sur Instagram</dd></div></dl></section>
  <section class="section-tight wrap prose"><h2 data-split>Ce que nous cherchons</h2><p>Quelqu'un qui aime la viande, le travail bien fait et le contact avec les clients. Savoir désosser, parer, conseiller une cuisson. L'envie d'apprendre la maturation et la charcuterie maison.</p>
    <p class="note">Salaire et avantages: à discuter avec la maison. Aucune rémunération n'est annoncée ici.</p>
    <p style="margin-top:1.4rem;display:flex;flex-wrap:wrap;gap:.8rem"><a class="btn" href="tel:${PHONE_TEL}">${ICON.phone}<span>${PHONE_PRIMARY}</span></a><a class="btn btn-ghost" href="${BUSINESS.instagramDm}" target="_blank" rel="noopener">Message privé Instagram</a></p></section>
  ${callBand('Un billot vous attend.')}`
}
