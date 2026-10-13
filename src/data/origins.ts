// Origines: RÉGIONS et RACES uniquement (PLAN.md §12). Aucun nom d'éleveur ni de ferme n'est inventé.
// Coordonnées (x, y) sur le schéma de carte original (viewBox 0 0 600 640), approximatives.

export interface Origin {
  id: string
  name: string
  breed: string
  label?: 'AOP' | 'IGP et Label Rouge'
  text: string
  x: number
  y: number
}

export const ORIGINS: Origin[] = [
  { id: 'bretagne', name: 'Bretagne', breed: 'Porc breton élevé sur paille, veau de lait', text: 'Du cochon élevé sur paille et du veau de lait breton, acheté directement auprès d\'éleveurs.', x: 118, y: 218 },
  { id: 'retiers', name: 'Retiers (Ille-et-Vilaine)', breed: 'Porc d\'une ferme éco-responsable', text: 'Du porc issu d\'une ferme éco-responsable de Retiers, à une quarantaine de kilomètres de Rennes.', x: 168, y: 238 },
  { id: 'normandie', name: 'Normandie', breed: 'Normande', text: 'La bavette de Normande est affinée quatre semaines dans nos caves.', x: 232, y: 130 },
  { id: 'limousin', name: 'Limousin', breed: 'Limousine', text: 'La limousine, maturée six semaines. Une viande tendre.', x: 292, y: 322, label: undefined },
  { id: 'landes', name: 'Landes', breed: 'Poularde fermière jaune', text: 'La poularde fermière jaune des Landes, pour les déjeuners de famille.', x: 168, y: 430 },
  { id: 'quercy', name: 'Quercy et Lot', breed: 'Agneau fermier du Quercy', label: 'IGP et Label Rouge', text: 'Agneau fermier du Quercy, IGP et Label Rouge. Une chair tendre, un goût fin.', x: 316, y: 420 },
  { id: 'bigorre', name: 'Bigorre', breed: 'Porc Noir de Bigorre', label: 'AOP', text: 'Le porc noir de Bigorre est élevé en plein air. Appellation d\'origine protégée.', x: 248, y: 508 },
  { id: 'paysbasque', name: 'Pays basque', breed: 'Bouillon Dohatsu', text: 'Le bouillon artisanal Dohatsu vient du Pays basque.', x: 156, y: 540 },
  { id: 'sudouest', name: 'Sud-Ouest', breed: 'Foie gras de canard', text: 'Le canard du foie gras maison vient du Sud-Ouest.', x: 224, y: 470 },
  { id: 'italie', name: 'Italie', breed: 'Lard de Colonnata', text: 'Le lard de Colonnata des makis de bœuf. Avant l\'ouverture, Aymeric a aussi pris le temps d\'aller voir des éleveurs en Italie.', x: 552, y: 478 },
]

export const BREEDS_MARQUEE = ['Noir de Bigorre', 'Limousine', 'Normande', 'Minhota', 'Blonde de Galice', 'Noire de Baltique', 'Salers × Angus', 'Agneau du Quercy', 'Porc breton sur paille']

export const LABELS_EXPLAINED = [
  { code: 'AOP', title: 'Appellation d\'origine protégée', text: 'Un produit dont toutes les étapes se déroulent dans une zone précise, avec un savoir-faire reconnu. Chez nous: le porc Noir de Bigorre.' },
  { code: 'IGP', title: 'Indication géographique protégée', text: 'Un lien avec un territoire, sur au moins une étape de production. Chez nous: l\'agneau fermier du Quercy.' },
  { code: 'Label Rouge', title: 'Label Rouge', text: 'Un signe officiel de qualité supérieure, sur le goût comme sur les conditions d\'élevage. Chez nous: l\'agneau fermier du Quercy.' },
]
