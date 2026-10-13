// Point d'entrée: rend l'enveloppe (en-tête, pied de page) et le module de la page courante, puis initialise le mouvement.
import '@fontsource/gloock'
import '@fontsource-variable/instrument-sans'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './style.css'
import { PAGES, type PageDef } from './pages.ts'
import { BASE, typo, $, reduceMotion } from './lib/dom.ts'
import { marbleDataUri, tileDataUri } from './lib/art.ts'
import { initCurtain, initHeaderHide, initHeadings, initMagnetic, initReveals, initSmoothScroll, refreshLater } from './lib/motion.ts'
import { initShell, shellBottom, shellTop } from './components/shell.ts'

interface PageModule { render(def: PageDef): string; init?(root: HTMLElement, def: PageDef): void }
const modules = import.meta.glob<PageModule>('./pages/*.ts')

const fileFor = (key: string) => (key === 'article' ? 'journal' : key)

function currentPath(): string {
  let p = location.pathname
  if (p.startsWith(BASE)) p = p.slice(BASE.length)
  else p = p.replace(/^\//, '')
  if (p && !p.endsWith('/')) p = p.replace(/index\.html$/, '')
  if (p && !p.endsWith('/')) p += '/'
  return p
}

async function boot() {
  const root = document.documentElement
  root.style.setProperty('--tile', `url("${tileDataUri(false)}")`)
  root.style.setProperty('--tile-dark', `url("${tileDataUri(true)}")`)
  root.style.setProperty('--marble', `url("${marbleDataUri()}")`)

  const path = currentPath()
  const def = PAGES.find((p) => p.path === path) ?? PAGES[0]
  const app = $('#app')!
  const loader = modules[`./pages/${fileFor(def.key)}.ts`]
  let body = ''
  let mod: PageModule | null = null
  if (loader) { mod = await loader(); body = mod.render(def) }
  else body = `<section class="wrap section"><h1>${def.title}</h1></section>`

  app.innerHTML = typo(`${shellTop(def.path)}<main id="main" tabindex="-1" data-page="${def.key}">${body}</main>${shellBottom()}`)
  initShell()
  const main = $('#main')!
  mod?.init?.(main, def)

  try {
    initSmoothScroll()
    initReveals(main)
    initHeadings(main)
    initMagnetic()
    initHeaderHide()
    initCurtain((url) => { location.href = url })
    refreshLater()
    if (location.hash) requestAnimationFrame(() => $(location.hash)?.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }))
  } catch (err) {
    console.error(err)
    document.documentElement.classList.remove('js-motion')
    document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-in'))
  }
}

boot().catch((err) => { console.error(err); document.documentElement.classList.remove('js-motion', 'curtain-in') })
