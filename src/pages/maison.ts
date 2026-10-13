// La maison: histoire, valeurs, équipe (rôles), presse, chronologie du lieu.
import { BUSINESS } from '../data/business.ts'
import { photo, photoImg } from '../data/photos.ts'
import { PRESS, TEAM, TIMELINE } from '../data/content.ts'
import { STATS } from '../data/reviews.ts'
import { artFor, coinSeal } from '../lib/art.ts'
import { esc, href } from '../lib/dom.ts'
import { callBand, plateHead, sealsRow } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

export function render(_def: PageDef): string {
  return `${plateHead({ title: 'La maison', lead: 'Une boutique ouverte sur la rue de la Monnaie, au pied de l\'ancien Hôtel des Monnaies. Boucher, charcutier, traiteur, sans rien cacher.', art: artFor('facade') })}
  <section class="section wrap cols-2 cols-5-7" style="align-items:start">
    <div class="stack"><h2 data-split>Rien à cacher</h2>
      <div style="max-width:200px">${coinSeal('LA BOUCHERIE DE LA MONNAIE · RENNES · ', '2023', 'DEPUIS', '', 'maison-seal')}</div></div>
    <div class="prose">
      <p>La boutique a ouvert le ${BUSINESS.founded}, première des Échoppes des Lices à voir le jour. Son gérant, ${BUSINESS.gerant}, est Rennais. Il a d'abord étudié le commerce international, puis appris le métier dans de grandes maisons parisiennes, avant d'ouvrir la sienne à 27 ans.</p>
      <p>Ici, les bouchers travaillent à la vue de tous, chacun à son billot, face aux clients. Les carcasses entières arrivent en boutique, les viandes mûrissent dans nos caves de maturation, et la cuisine prépare chaque jour des plats faits maison.</p>
      <p class="quote-house" style="font-family:var(--f-display);font-size:1.5rem;max-width:30ch">« Nous n'avons rien à cacher. »</p>
      <p class="note">Aymeric Hurault, dans Rennes Business Mag.</p>
    </div>
  </section>
  <section class="section-tight wrap" aria-label="Le métier en images"><div class="photo-strip">${['decoupe-billot', 'pieces-suspendues', 'couperet', 'vitrine-verre'].map((s, i) => `<figure class="photo-fig" data-reveal style="--i:${i}">${photoImg(photo(s))}<figcaption>Photo d'illustration</figcaption></figure>`).join('')}</div></section>
  <section class="section-tight wrap" aria-label="Chiffres">
    <dl class="values" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">${STATS.map((s) => `<div data-reveal><dt class="mono note">${esc(s.label)}</dt><dd style="margin:0;font-family:var(--f-display);font-size:2.4rem">${esc(s.value)}</dd></div>`).join('')}</dl>
  </section>
  <section class="section wrap" aria-labelledby="val"><h2 id="val" data-split>Trois manières de travailler</h2>
    <div class="values" style="margin-top:2rem">
      <div data-reveal><h3>La carcasse entière</h3><p>Bœuf, cochon, agneau: nous travaillons l'animal entier pour garder la même qualité d'un morceau à l'autre, et pour proposer des pièces que l'on ne trouve pas partout.</p></div>
      <div data-reveal><h3>La maturation</h3><p>Quatre, six ou huit semaines en cave, selon la race et la pièce. Le temps fait le travail, le boucher le surveille.</p></div>
      <div data-reveal><h3>La cuisine maison</h3><p>Terrines, pâté en croûte, foie gras, bouchées à la reine, plats du jour: tout est préparé sur place.</p></div>
      <div data-reveal><h3>La transparence</h3><p>Vous voyez le travail, vous posez vos questions, le boucher vous répond. Les races et les régions d'origine sont indiquées.</p></div>
    </div></section>
  <section class="section wrap" aria-labelledby="eq"><h2 id="eq" data-split>L'équipe</h2>
    <div class="values" style="margin-top:2rem">${TEAM.map((t) => `<div data-reveal><h3>${esc(t.name ?? t.role)}</h3>${t.name ? `<p class="mono note">${esc(t.role)}</p>` : ''}<p>${esc(t.text)}</p></div>`).join('')}</div>
    <p class="note" style="margin-top:1rem">Les portraits arriveront avec les photos de la maison. <!-- TODO photos équipe, avec accord des personnes --></p></section>
  <section class="section band-green" aria-labelledby="presse"><div class="wrap"><h2 id="presse" data-split>Dans la presse</h2>
    <div class="quotes" style="margin-top:2rem;overflow:visible;flex-wrap:wrap">${PRESS.map((p) => `<figure class="quote" data-reveal><blockquote>« ${esc(p.quote)} »</blockquote><figcaption>${esc(p.outlet)}, ${esc(p.date)}. <a href="${p.url}" target="_blank" rel="noopener">Lire l'article</a></figcaption></figure>`).join('')}</div></div></section>
  <section class="section wrap cols-2 cols-5-7" style="align-items:start"><div class="stack"><h2 data-split>Le lieu, du XVe siècle à aujourd'hui</h2><p class="lead">Là où l'on frappait la monnaie, on découpe aujourd'hui la côte de bœuf.</p></div>
    <ol class="timeline">${TIMELINE.map((t) => `<li data-reveal><span class="when">${esc(t.date)}</span><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></li>`).join('')}</ol></section>
  <section class="section-tight wrap">${sealsRow()}</section>
  <p class="wrap note" style="padding-bottom:2rem"><a class="link-arrow" href="${href('origines/')}">D'où vient la viande</a></p>
  ${callBand()}`
}
