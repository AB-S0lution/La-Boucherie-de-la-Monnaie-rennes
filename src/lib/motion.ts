// Moteur de mouvement. GSAP + ScrollTrigger + SplitText (gratuits depuis 3.13), Lenis pour le défilement.
// Règles: transform / opacity / clip-path uniquement, repli complet sous prefers-reduced-motion, pas d'écouteur 'scroll' manuel.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'
import { $, $$, reduceMotion } from './dom.ts'

gsap.registerPlugin(ScrollTrigger, SplitText)
export { gsap, ScrollTrigger, SplitText }

let lenis: Lenis | null = null
export const getLenis = () => lenis

export function initSmoothScroll() {
  if (reduceMotion()) return
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: false })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis?.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
}

/** Apparition au défilement (IntersectionObserver), états initiaux posés par la classe js-motion */
export function initReveals(root: ParentNode = document) {
  initTicketPrint(root)
  const els = $$('[data-reveal]', root)
  if (!els.length) return
  if (reduceMotion() || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return }
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { (en.target as HTMLElement).classList.add('is-in'); io.unobserve(en.target) }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
  els.forEach((e) => io.observe(e))
}

/** Ticket d'horaires qui « s'imprime » (toutes les pages qui l'affichent: accueil, contact, samedi) */
function initTicketPrint(root: ParentNode) {
  const tickets = $$('.ticket[data-print]', root)
  if (!tickets.length) return
  const show = (tk: HTMLElement) => gsap.set(tk, { clipPath: 'none' })
  if (reduceMotion() || !('IntersectionObserver' in window)) { tickets.forEach(show); return }
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) {
      const tk = en.target as HTMLElement
      io.unobserve(tk)
      gsap.to(tk, { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'steps(14)', onComplete: () => show(tk) })
    }
  }, { rootMargin: '0px 0px -15% 0px', threshold: 0 })
  tickets.forEach((tk) => io.observe(tk))
}

/** Attraction magnétique des boutons principaux (souris uniquement, 6 px max) */
export function initMagnetic(root: ParentNode = document) {
  if (reduceMotion() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  $$('.btn:not(.btn-sm), [data-magnetic]', root).forEach((el) => {
    const qx = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
    const qy = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      qx(((e.clientX - r.left) / r.width - 0.5) * 12)
      qy(((e.clientY - r.top) / r.height - 0.5) * 8)
    })
    el.addEventListener('pointerleave', () => { qx(0); qy(0) })
  })
}

/** Texte découpé en lignes avec révélation par masque, comme un passage de couteau */
export function revealLines(el: HTMLElement, opts: { delay?: number; scrub?: boolean } = {}) {
  if (reduceMotion()) return null
  const split = SplitText.create(el, { type: 'lines', mask: 'lines', autoSplit: true, aria: 'auto',
    onSplit: (self) => gsap.from(self.lines, { yPercent: 110, duration: 0.95, ease: 'expo.out', stagger: 0.09, delay: opts.delay ?? 0 }) })
  return split
}

/** Titres de section: lignes en masque, déclenchées à l'entrée dans la fenêtre */
export function initHeadings(root: ParentNode = document) {
  if (reduceMotion()) return
  $$('[data-split]', root).forEach((el) => {
    SplitText.create(el, {
      type: 'lines', mask: 'lines', autoSplit: true, aria: 'auto',
      onSplit: (self) => gsap.from(self.lines, { yPercent: 105, duration: 0.9, ease: 'expo.out', stagger: 0.08,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true } }),
    })
  })
}

/** Barre d'en-tête qui se range au défilement vers le bas (ScrollTrigger, pas d'écouteur scroll) */
export function initHeaderHide() {
  const header = $('.site-header')
  if (!header || reduceMotion()) return
  ScrollTrigger.create({
    start: 'top -140', end: 'max',
    onUpdate: (self) => { header.classList.toggle('is-hidden', self.direction === 1 && self.scroll() > 240 && !document.body.classList.contains('menu-open')) },
  })
}

/** Rideau de lanières: fermeture avant navigation, ouverture à l'arrivée */
export function initCurtain(navigate: (url: string) => void) {
  const curtain = $('.curtain')
  const strips = $$('.curtain i')
  if (!curtain || reduceMotion()) {
    document.documentElement.classList.remove('curtain-in')
    return
  }
  const open = () => {
    gsap.set(strips, { scaleX: 1, transformOrigin: 'right center' })
    curtain.classList.add('is-on')
    gsap.to(strips, { scaleX: 0, duration: 0.42, ease: 'power3.inOut', stagger: { each: 0.03, from: 'start' },
      onComplete: () => { curtain.classList.remove('is-on'); sessionStorage.removeItem('curtain'); document.documentElement.classList.remove('curtain-in'); gsap.set(strips, { scaleX: 0, transformOrigin: 'left center' }) } })
  }
  if (document.documentElement.classList.contains('curtain-in')) open()

  window.addEventListener('pageshow', (e) => {
    if (e.persisted) { gsap.set(strips, { scaleX: 0 }); curtain.classList.remove('is-on'); document.documentElement.classList.remove('curtain-in') }
  })

  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest('a') as HTMLAnchorElement | null
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (a.target && a.target !== '_self') return
    if (a.hasAttribute('download') || a.origin !== location.origin) return
    if (a.protocol !== 'http:' && a.protocol !== 'https:') return
    if (a.pathname === location.pathname && a.hash) return
    if (a.pathname === location.pathname && !a.hash) { e.preventDefault(); return }
    e.preventDefault()
    sessionStorage.setItem('curtain', '1')
    gsap.set(strips, { transformOrigin: 'left center', scaleX: 0 })
    curtain.classList.add('is-on')
    gsap.to(strips, { scaleX: 1, duration: 0.28, ease: 'power3.inOut', stagger: { each: 0.026 }, onComplete: () => navigate(a.href) })
  })
}

/** Rafraîchit ScrollTrigger après chargement des polices */
export function refreshLater() {
  document.fonts?.ready.then(() => ScrollTrigger.refresh())
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })
}

export function killAll() {
  ScrollTrigger.getAll().forEach((t) => t.kill())
}
