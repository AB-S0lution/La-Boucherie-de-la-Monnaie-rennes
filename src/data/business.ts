// VÉRIFIÉ - voir PLAN.md §1. Faits réels de la maison. Ne rien inventer ici.
// Les horaires, l'adresse, le téléphone principal et les identifiants légaux sont exacts.

/** Téléphone principal (PLAN.md §13 n°1). L'autre numéro en circulation n'est jamais affiché. */
export const PHONE_PRIMARY = '02 99 22 04 96' // TODO confirmer l'origine du second numéro auprès de la maison
export const PHONE_TEL = '+33299220496'

/** E-mail vu uniquement dans un extrait Facebook (PLAN.md §13 n°3): non affiché tant que la maison ne confirme pas. */
export const EMAIL_PUBLIC: string | null = null // TODO confirmer boucheriedelamonnaie@gmail.com avant affichage

export interface DayHours {
  /** 0 = dimanche … 6 = samedi (Date.getDay) */
  dow: number
  label: string
  short: string
  /** Plages en minutes depuis minuit. Vide = fermé. */
  ranges: Array<[number, number]>
  note?: string
}

const h = (hh: number, mm = 0) => hh * 60 + mm

export const HOURS: DayHours[] = [
  { dow: 1, label: 'Lundi', short: 'Lun', ranges: [] },
  { dow: 2, label: 'Mardi', short: 'Mar', ranges: [[h(9, 30), h(14)], [h(15, 30), h(19, 30)]] },
  { dow: 3, label: 'Mercredi', short: 'Mer', ranges: [[h(9, 30), h(14)], [h(15, 30), h(19, 30)]] },
  { dow: 4, label: 'Jeudi', short: 'Jeu', ranges: [[h(9, 30), h(14)], [h(15, 30), h(19, 30)]] },
  { dow: 5, label: 'Vendredi', short: 'Ven', ranges: [[h(9, 30), h(14)], [h(15, 30), h(19, 30)]] },
  { dow: 6, label: 'Samedi', short: 'Sam', ranges: [[h(9), h(18, 30)]], note: 'Jour de marché, sans interruption' },
  { dow: 0, label: 'Dimanche', short: 'Dim', ranges: [] },
]

/** Exceptions (congés, jours fériés). Vide pour l'instant. */
export const HOURS_EXCEPTIONS: Array<{ date: string; label: string }> = [] // TODO fermetures 2026-27 à demander (été 2025: 2 au 25 août)

export const fmtTime = (m: number) => `${Math.floor(m / 60)}h${String(m % 60).padStart(2, '0')}`

export const BUSINESS = {
  name: 'La Boucherie de la Monnaie',
  legalName: 'BOUCHERIE DE LA MONNAIE',
  legalForm: 'SARL',
  capital: '10 000 €',
  siren: '921 407 201',
  siret: '921 407 201 00018',
  rcs: 'RCS Rennes',
  vat: 'FR05921407201',
  ape: '10.11Z',
  street: '10 rue de la Monnaie',
  postalCode: '35000',
  city: 'Rennes',
  geo: { lat: 48.112356, lng: -1.682726 },
  gerant: 'Aymeric Hurault',
  founded: '30 mars 2023',
  instagramHandle: '@boucheriedelamonnaie',
  instagramUrl: 'https://www.instagram.com/boucheriedelamonnaie/',
  instagramDm: 'https://ig.me/m/boucheriedelamonnaie',
  facebookUrl: 'https://www.facebook.com/boucheriedelamonnaie/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=La+Boucherie+de+la+Monnaie+10+rue+de+la+Monnaie+35000+Rennes',
  osmUrl: 'https://www.openstreetmap.org/?mlat=48.112356&mlon=-1.682726#map=18/48.112356/-1.682726',
  rating: '5/5 sur Google (plus de 60 avis)',
  tagline: 'Boucher, charcutier, traiteur',
  priceRange: '€€€',
} as const

export const ADDRESS_LINE = `${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`

export const ACCESS = [
  { mode: 'Métro', text: 'Station Sainte-Anne (lignes A et B), à environ 270 mètres.' },
  { mode: 'Bus', text: 'Arrêt « Monnaie » (La Navette) à environ 85 mètres. Arrêt « Les Lices » (C1, E4) à environ 270 mètres.' },
  { mode: 'Vélo', text: 'Stations Star Vélo toutes proches: Les Lices, Sainte-Anne, Mairie-Opéra.' },
  { mode: 'Voiture', text: 'Stationnement payant dans la rue. Pas de parking dédié.' },
] as const

/** Statut ouvert / fermé calculé sur l'heure de Paris. */
export function openStatus(now = new Date()): { open: boolean; label: string; dow: number } {
  const parts = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(now)
  const wd = parts.find((p) => p.type === 'weekday')?.value ?? ''
  const hh = Number(parts.find((p) => p.type === 'hour')?.value ?? 0) % 24
  const mm = Number(parts.find((p) => p.type === 'minute')?.value ?? 0)
  const map: Record<string, number> = { 'dim.': 0, 'lun.': 1, 'mar.': 2, 'mer.': 3, 'jeu.': 4, 'ven.': 5, 'sam.': 6 }
  const dow = map[wd.toLowerCase()] ?? now.getDay()
  const t = hh * 60 + mm
  const today = HOURS.find((d) => d.dow === dow)!
  const cur = today.ranges.find(([a, b]) => t >= a && t < b)
  if (cur) return { open: true, label: `Ouvert jusqu'à ${fmtTime(cur[1])}`, dow }
  const next = today.ranges.find(([a]) => t < a)
  if (next) return { open: false, label: `Fermé, ouvre à ${fmtTime(next[0])}`, dow }
  for (let i = 1; i <= 7; i++) {
    const d = HOURS.find((x) => x.dow === (dow + i) % 7)!
    if (d.ranges.length) return { open: false, label: `Fermé, ouvre ${i === 1 ? 'demain' : d.label.toLowerCase()} à ${fmtTime(d.ranges[0][0])}`, dow }
  }
  return { open: false, label: 'Fermé', dow }
}
