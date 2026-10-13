// Contact: téléphone, accès, horaires, demande de commande à copier ou à envoyer en message privé Instagram.
import { ACCESS, ADDRESS_LINE, BUSINESS, PHONE_PRIMARY, PHONE_TEL } from '../data/business.ts'
import { artFor, ICON } from '../lib/art.ts'
import { $, esc, typo } from '../lib/dom.ts'
import { hoursTicket, plateHead } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  return `${plateHead({ title: 'Contact et accès', lead: 'Le plus simple: un coup de téléphone. Sinon, passez au comptoir ou écrivez-nous en message privé sur Instagram.', art: artFor('facade') })}
  <section class="section wrap cols-2" style="align-items:start">
    <div><p><a class="big-tel" href="tel:${PHONE_TEL}">${PHONE_PRIMARY}</a></p>
      <div class="contact-cards"><div><span class="k">Adresse</span><span>${ADDRESS_LINE}</span></div>
        <div><span class="k">Instagram</span><a href="${BUSINESS.instagramUrl}" target="_blank" rel="noopener">${BUSINESS.instagramHandle}</a></div>
        <div><span class="k">Facebook</span><a href="${BUSINESS.facebookUrl}" target="_blank" rel="noopener">La Boucherie de la Monnaie</a></div>
        ${ACCESS.map((a) => `<div><span class="k">${a.mode}</span><span>${esc(a.text)}</span></div>`).join('')}</div>
      <div style="display:flex;flex-wrap:wrap;gap:.8rem;margin-top:1.4rem"><a class="btn" href="tel:${PHONE_TEL}">${ICON.phone}<span>Appeler</span></a><a class="btn btn-ghost" href="${BUSINESS.mapsUrl}" target="_blank" rel="noopener">${ICON.pin}<span>Google Maps</span></a><a class="btn btn-ghost" href="${BUSINESS.osmUrl}" target="_blank" rel="noopener">OpenStreetMap</a></div></div>
    ${hoursTicket()}
  </section>
  <section class="section band-green" aria-labelledby="dem"><div class="wrap cols-2" style="align-items:start"><div class="stack"><h2 id="dem" data-split>Préparer ma demande</h2><p class="lead">Ce formulaire n'envoie rien: il écrit votre demande, que vous copiez ou envoyez en message privé. Le boucher confirme la disponibilité et le prix.</p></div>
    <form class="form-grid" data-req novalidate>
      <div class="field"><label for="r-nom">Prénom</label><input id="r-nom" name="nom" type="text" autocomplete="given-name"></div>
      <div class="field"><label for="r-jour">Jour souhaité</label><select id="r-jour" name="jour"><option>mardi</option><option>mercredi</option><option>jeudi</option><option>vendredi</option><option>samedi</option></select></div>
      <div class="field"><label for="r-conv">Nombre de convives</label><input id="r-conv" name="conv" type="number" min="1" max="40" value="4" inputmode="numeric"></div>
      <div class="field full"><label for="r-msg">Ma demande</label><textarea id="r-msg" name="msg" rows="4" placeholder="Une côte de bœuf maturée de 1,2 kg, sous vide."></textarea></div>
      <div class="full" style="display:flex;flex-wrap:wrap;gap:.8rem"><button class="btn" type="button" data-copy>Copier le texte</button><a class="btn btn-ghost" data-dm href="${BUSINESS.instagramDm}" target="_blank" rel="noopener">Message privé Instagram</a></div>
      <p class="toast full" data-toast role="status"></p>
    </form></div></section>`
}

export function init(root: HTMLElement) {
  const f = $('[data-req]', root) as HTMLFormElement
  const text = () => {
    const d = new FormData(f)
    return `Bonjour, c'est ${String(d.get('nom') || '').trim() || 'un client'}. Pour ${d.get('jour')}, pour ${d.get('conv')} personnes: ${String(d.get('msg') || '').trim() || 'pouvez-vous me conseiller ?'} Merci !`
  }
  $('[data-copy]', f)!.addEventListener('click', async () => {
    const toast = $('[data-toast]', f)!
    try { await navigator.clipboard.writeText(text()); toast.textContent = typo('Texte copié. Collez-le dans un message privé ou lisez-le au téléphone.') }
    catch { toast.textContent = typo(text()) }
  })
}
