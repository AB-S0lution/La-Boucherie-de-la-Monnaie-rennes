// Photos d'illustration Unsplash (licence Unsplash), pas des photos du commerce.
// Données d'exemple: à remplacer par les vraies photos de la boutique quand elles seront disponibles.
import type { Species } from './products.ts'
import type { Post } from './journal.ts'

export interface Photo {
  slug: string
  /** chemin servi, préfixé par la base Vite */
  src: string
  alt: string
  credit: string
  url: string
  width: number
  height: number
}

const BASE = import.meta.env.BASE_URL
const p = (slug: string, id: string, alt: string, width: number, height: number): Photo => ({
  slug, src: `${BASE}photos/${slug}.jpg`, alt, credit: 'Unsplash', url: `https://images.unsplash.com/photo-${id}`, width, height,
})

export const PHOTOS: Photo[] = [
  p('vitrine-viandes', '1625643269470-5d3e7b69fa34', "Viandes rouges alignées dans une vitrine réfrigérée", 1100, 734),
  p('vitrine-comptoir', '1597417321971-45e034f7a993', "Pièces de viande présentées au comptoir", 1400, 741),
  p('vitrine-verre', '1584873069262-427e437b8eb4', "Vitrine vitrée garnie de morceaux de bœuf et de porc", 1100, 792),
  p('plateau-inox', '1606677661991-446cea8ee182', "Morceaux crus sur un plateau en inox", 1100, 1650),
  p('piece-papier', '1632154023554-c2975e9be348', "Pièce de bœuf posée sur du papier de boucherie", 900, 1350),
  p('tranches-crues', '1602470521007-20293bd1fd31', "Tranches de viande crue sur une planche en bois", 1400, 959),
  p('pieces-suspendues', '1740586222627-48338edac67d', "Pièces de viande suspendues en chambre froide", 1100, 733),
  p('boucher-au-travail', '1700478934617-75d2d4f01a04', "Mains d'un boucher qui pare une pièce de viande", 1100, 1650),
  p('tranches-couteau', '1592686092916-672fa9e86866', "Viande tranchée à côté d'un couteau", 1400, 933),
  p('decoupe-billot', '1560166444-441876015a70', "Découpe d'une pièce de viande sur le billot", 1400, 825),
  p('steak-ail-poivre', '1690983325551-b922137727be', "Steak cru avec ail, poivre et couteau", 1100, 739),
  p('assortiment-cru', '1690983323238-0b91789e1b5a', "Assortiment de viandes crues sur une table", 1100, 748),
  p('viande-planche', '1603048297172-c92544798d5a', "Pièce de viande crue sur une planche en bois", 1400, 933),
  p('deux-steaks-ail', '1690983330536-3b0089d07cf9', "Deux steaks sur une planche avec de l'ail", 1100, 733),
  p('steaks-herbes', '1690983323540-d6e889c4b107', "Steaks crus aux herbes et aux épices", 1100, 733),
  p('persille-gros-plan', '1602470521006-59ab77068b0d', "Gros plan sur le persillé d'une viande crue", 1400, 934),
  p('piece-legumes', '1666013942642-b7b54ecafd7d', "Pièce de viande crue avec légumes et sauce", 1100, 733),
  p('planche-charcuterie', '1678572823447-45fc146df43c', "Grande planche de charcuterie sur une table en bois", 1100, 734),
  p('charcuterie-pain', '1616631124348-c63521eb484c', "Charcuterie tranchée, légumes et pain sur une planche", 1400, 933),
  p('viande-sechee', '1529241160658-a8a2a0d86620', "Pièces de charcuterie suspendues au séchage", 1100, 733),
  p('charcuterie-vin', '1627922206324-e9ab1667bd23', "Bouteille de vin et planche d'apéritif", 900, 1600),
  p('tranchage-roti', '1529692236671-f1f6cf9683ba', "Rôti que l'on tranche sur une planche", 1400, 933),
  p('roti-tranche', '1558030006-450675393462', "Rôti cuit et tranché", 1400, 788),
  p('roti-planche', '1580476262843-d5e9b687d4d4', "Viande grillée sur une planche en bois", 1100, 734),
  p('saignant-tranche', '1529694157872-4e0c0f3b238b', "Pièce saignante tranchée sur une planche", 1400, 933),
  p('grosse-piece-planche', '1735190093468-e59af2d86382', "Grosse pièce de viande sur une planche à découper", 1100, 1650),
  p('saucisses-romarin', '1607623814075-e51df1bdc82f', "Saucisses crues, viandes et romarin sur une planche", 1400, 933),
  p('saucisses-planche', '1695089028198-80245e2f5d06', "Quatre saucisses sur une planche en bois", 1400, 933),
  p('saucisses-moutarde', '1552913903-2cffa1962dc7', "Deux saucisses grillées et de la moutarde", 1400, 933),
  p('plat-mijote', '1596797038530-2c107229654b', "Plat mijoté dans une cocotte noire", 1100, 1467),
  p('bol-mijote', '1445979323117-80453f573b71', "Viande en sauce dans un bol", 1400, 930),
  p('couteaux-bois', '1704895291242-1e6f3e761c6b', "Couteaux à manche en bois posés sur une table", 1400, 1867),
  p('couperet', '1548691597-8c8944ff28b2', "Couperet de boucher en noir et blanc", 1400, 935),
  p('couteau-planche', '1611605377578-594f5bcf3e97', "Couteau à manche en bois sur une planche", 900, 1350),
]

export const photo = (slug: string): Photo => PHOTOS.find((x) => x.slug === slug) ?? PHOTOS[0]

/** photo d'illustration par espèce (cartes du comptoir) */
export const SPECIES_PHOTOS: Record<Species, string[]> = {
  boeuf: ['persille-gros-plan', 'deux-steaks-ail', 'steak-ail-poivre', 'viande-planche', 'saignant-tranche', 'piece-papier'],
  cochon: ['tranchage-roti', 'saucisses-romarin', 'roti-tranche', 'saucisses-planche'],
  'veau-agneau': ['tranches-crues', 'steaks-herbes', 'piece-legumes', 'grosse-piece-planche'],
  volailles: ['roti-planche', 'assortiment-cru', 'tranches-couteau'],
  charcuterie: ['planche-charcuterie', 'charcuterie-pain', 'viande-sechee', 'saucisses-moutarde'],
}

/** photo pour la couverture d'un article */
export const POST_PHOTOS: Record<Post['cover'], string> = {
  cote: 'deux-steaks-ail', carcasse: 'pieces-suspendues', agneau: 'steaks-herbes', bellota: 'viande-sechee', foiegras: 'charcuterie-pain',
  maki: 'tranches-couteau', bavette: 'saignant-tranche', marche: 'vitrine-comptoir', bocal: 'plat-mijote', balance: 'vitrine-verre',
}

const hash = (s: string) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7)
export const speciesPhoto = (species: Species, id: string): Photo => {
  const list = SPECIES_PHOTOS[species]
  return photo(list[hash(id) % list.length])
}

/** balise <img> prête à l'emploi (paresseuse, dimensions fixées) */
export const photoImg = (ph: Photo, cls = 'photo', eager = false): string =>
  `<img class="${cls}" src="${ph.src}" alt="${ph.alt.replace(/"/g, '&quot;')}" width="${ph.width}" height="${ph.height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`
