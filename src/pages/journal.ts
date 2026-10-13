import { POSTS, JOURNAL_CATEGORIES, fmtDate, type Post } from '../data/journal.ts'
import { artFor, ICON } from '../lib/art.ts'
import { photo, photoImg, POST_PHOTOS } from '../data/photos.ts'
import { $$, esc, href, typo } from '../lib/dom.ts'
import { callBand, plateHead } from '../components/common.ts'
import type { PageDef } from '../pages.ts'

export const postRow = (p: Post) => `<li data-cat="${p.category}"><a class="post-row" href="${href(`journal/${p.slug}/`)}">
  <div class="thumb thumb-photo">${photoImg({ ...photo(POST_PHOTOS[p.cover]), alt: '' })}</div>
  <div><div class="meta">${fmtDate(p.date)} · ${p.category} · ${p.readMinutes} min</div><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p></div>
  <span class="go">${ICON.arrow}</span></a></li>`

export function render(def: PageDef): string {
  if (def.key === 'article') return renderArticle(def)
  return `${plateHead({ title: 'Le journal', lead: 'Recettes, conseils de cuisson et saisons. De la cuisine générale, dans le ton de la maison.', art: artFor('balance') })}
  <section class="section-tight"><div class="wrap">
    <div class="chips" role="group" aria-label="Filtrer par rubrique" style="margin-bottom:1.6rem">${JOURNAL_CATEGORIES.map((c, i) => `<button class="chip" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c === 'tous' ? 'Tous' : c.charAt(0).toUpperCase() + c.slice(1)}</button>`).join('')}</div>
    <ul class="post-list" data-posts>${POSTS.map(postRow).join('')}</ul>
    <p class="note" style="margin-top:1.2rem">Articles d'exemple: recettes et conseils généraux, non attribués à la maison.</p>
  </div></section>
  ${callBand()}`
}

function renderArticle(def: PageDef): string {
  const p = POSTS.find((x) => x.slug === def.slug)!
  const idx = POSTS.indexOf(p)
  const next = POSTS[(idx + 1) % POSTS.length]
  return `<article>
    <section class="wrap plate">
      <div><nav class="crumbs" aria-label="Fil d'Ariane"><a href="${href('')}">Accueil</a> / <a href="${href('journal/')}">Le journal</a></nav>
        <h1 data-split>${esc(p.title)}</h1><p class="lead">${esc(p.excerpt)}</p>
        <p class="mono note">${fmtDate(p.date)} · ${p.category} · ${p.readMinutes} min de lecture</p></div>
      <figure class="article-cover photo-fig" data-reveal>${photoImg(photo(POST_PHOTOS[p.cover]), 'photo', true)}<figcaption>Photo d'illustration</figcaption></figure>
    </section>
    <div class="milled" aria-hidden="true"></div>
    <section class="section-tight"><div class="wrap"><div class="article-body">${p.body.map((t) => `<p>${esc(t)}</p>`).join('')}
      <p class="note">Contenu d'exemple, rédigé pour la démonstration.</p></div>
      <p style="margin-top:2.4rem"><a class="link-arrow" href="${href(`journal/${next.slug}/`)}">Article suivant: ${esc(next.title)} ${ICON.arrow}</a></p>
    </div></section>
  </article>${callBand()}`
}

export function init(root: HTMLElement, def: PageDef) {
  if (def.key !== 'journal') return
  const btns = $$<HTMLElement>('[data-filter]', root)
  btns.forEach((b) => b.addEventListener('click', () => {
    btns.forEach((x) => x.setAttribute('aria-pressed', String(x === b)))
    $$('[data-posts] > li', root).forEach((li) => { li.hidden = b.dataset.filter !== 'tous' && li.dataset.cat !== b.dataset.filter })
  }))
  void typo
}
