// Maturation, mur de vitrines, fêtes. Mélange de faits réels (marqués) et d'exemples pédagogiques (marqués).
// AUCUNE température ni hygrométrie de cave n'est publiée (PLAN.md §12).

export interface MatureStop {
  day: number
  title: string
  breed: string
  cut: string
  real: boolean
  text: string
  /** couleur de la viande à ce stade (rampe fonctionnelle de la maturation) */
  color: string
  crust: number
}

export const MATURATION: MatureStop[] = [
  { day: 0, title: 'Jour 0', breed: 'Pièce fraîche', cut: 'Arrivée à la boucherie', real: false, text: 'La carcasse entre en boucherie. La viande est rouge vif, humide, encore ferme. Exemple pédagogique.', color: '#B3262E', crust: 0 },
  { day: 14, title: 'Jour 14', breed: 'Étape pédagogique', cut: 'Début de l\'affinage', real: false, text: 'La viande commence à perdre de l\'eau et se détend. Les arômes se précisent. Exemple pédagogique, pas un engagement de la maison.', color: '#9B2430', crust: 0.15 },
  { day: 28, title: '4 semaines', breed: 'Normande', cut: 'Bavette', real: true, text: 'La bavette de Normande est « affinée 4 semaines » dans nos caves de maturation.', color: '#8A2129', crust: 0.35 },
  { day: 42, title: '6 semaines', breed: 'Limousine', cut: 'Entrecôte', real: true, text: 'La limousine est maturée 6 semaines. La chair est tendre, le goût plus profond.', color: '#7E1F27', crust: 0.55 },
  { day: 56, title: '8 semaines', breed: 'Minhota', cut: 'Faux-filet', real: true, text: 'Le faux-filet de Minhota est « affiné 8 semaines dans nos caves de maturation ».', color: '#661C24', crust: 0.8 },
  { day: 56, title: '8 semaines', breed: 'Noire de Baltique', cut: 'Entrecôte', real: true, text: 'Les entrecôtes de Noire de Baltique sont affinées 8 semaines, selon un avis Google de juillet 2023.', color: '#4A1A1F', crust: 1 },
]

/** Étapes du récit pinné (J0, J28, J42, J56) */
export const MATURATION_STEPS = [MATURATION[0], MATURATION[2], MATURATION[3], MATURATION[4]]

export const MATURATION_FACTS = [
  { title: 'La texture', text: 'Avec le temps, les fibres se détendent. La viande devient plus tendre sans devenir molle.' },
  { title: 'Le goût', text: 'L\'eau s\'évapore, les saveurs se concentrent. Le goût devient plus prononcé, parfois noisetté.' },
  { title: 'Le poids', text: 'La pièce perd du poids en séchant, et une croûte se forme en surface. Le boucher la pare avant de vous la vendre.' },
  { title: 'Le temps', text: 'Quatre, six, huit semaines. Chaque race et chaque pièce a son rythme.' },
]

export const COOK_MATURED = [
  { step: 'Sortez la pièce', text: 'Une heure avant la cuisson, pour qu\'elle revienne à température ambiante.' },
  { step: 'Saisissez fort', text: 'Une poêle ou une plancha très chaude, sans matière grasse en excès. Deux à trois minutes par face selon l\'épaisseur.' },
  { step: 'Finissez doucement', text: 'Quelques minutes au four ou sur le côté du barbecue. Pas besoin de sortir le barbecue ou la plancha pour apprécier une viande maturée.' },
  { step: 'Laissez reposer', text: 'Autant de temps que la cuisson. Le jus se répartit et la tendreté revient.' },
]

export interface VitrineSlot { productId: string; label: string }
/** Mur de vitrines (24 emplacements) : un par pièce, avec le texte du pique-prix */
export const VITRINE: VitrineSlot[] = [
  'cote-boeuf-maturee', 'entrecote-noire-baltique', 'entrecote-limousine', 'faux-filet-minhota',
  'bavette-normande', 'cote-basse', 'filet-boeuf-barde', 'tournedos-barde-bigorre',
  'onglet', 'rumsteck', 'entrecote-blonde-galice', 'cote-salers-angus',
  'cote-premiere-breton', 'cote-noir-bigorre', 'saucisse-vigneronne', 'merguez-menthe',
  'gigot-quercy', 'carre-quercy', 'escalope-veau-lait', 'poularde-landes',
  'pate-en-croute', 'coppa-maison', 'rillettes-boeuf-espelette', 'foie-gras-canard',
].map((productId) => ({ productId, label: '' }))

export interface Fete {
  id: string
  name: string
  period: string
  products: string[]
  text: string
  real: boolean
  /** « exemple » : la date de commande est fictive */
  example: boolean
  orderBy: string
}

export const FETES: Fete[] = [
  { id: 'paques', name: 'Pâques', period: 'Mars - avril', products: ['Agneau fermier du Quercy IGP, Label Rouge'], text: 'Gigot, carré, épaule. Une chair tendre, un goût fin. La maison le propose chaque année à Pâques.', real: true, example: true, orderBy: 'Date de commande à demander' },
  { id: 'peres', name: 'Fête des pères', period: 'Juin', products: ['Côte de bœuf maturée', 'Entrecôte Noire de Baltique'], text: 'Une belle pièce maturée pour la tablée. Réservez votre côte.', real: false, example: true, orderBy: 'Exemple: une semaine avant' },
  { id: 'barbecue', name: 'Saison du barbecue', period: 'Mai - septembre', products: ['Brochettes marinées', 'Merguez à la menthe', 'Saucisse vigneronne', 'Côte de bœuf'], text: 'Brochettes, saucisses et côtes pour les tablées d\'été. Pensez à nous dire le nombre de convives.', real: true, example: false, orderBy: 'Sur place ou au téléphone' },
  { id: 'rentree', name: 'La rentrée Bellota', period: 'Septembre', products: ['Rosette, coppa, lomo 100 % Bellota', 'Cecina'], text: 'En septembre 2025, la maison a lancé une gamme de charcuterie 100 % porc Bellota ibérique et de cecina.', real: true, example: false, orderBy: 'À la boutique' },
  { id: 'noel', name: 'Noël', period: 'Décembre', products: ['Foie gras de canard maison', 'Chapon', 'Filet de bœuf bardé'], text: 'Le foie gras maison fait partie des fêtes de beaucoup de clients, chaque année.', real: true, example: true, orderBy: 'Exemple: avant le 15 décembre' },
  { id: 'nouvelan', name: 'Nouvel An', period: 'Fin décembre', products: ['Pâté en croûte maison', 'Bouchées à la reine'], text: 'Pâté en croûte pour l\'apéro, bouchées à la reine pour le plat. Du fait maison.', real: true, example: true, orderBy: 'Exemple: avant le 27 décembre' },
]
