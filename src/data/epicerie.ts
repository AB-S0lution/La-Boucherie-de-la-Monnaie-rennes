// Épicerie fine. Produits RÉELS (marqués real: true): huile Kaïa, cornichons Maison Marc, moutarde d'Orléans, bouillon Dohatsu à 9,90 €/L.
// Les autres références et TOUS les autres prix sont des exemples. Aucun logo ni étiquette de marque n'est reproduit.

export interface Grocery {
  id: string
  name: string
  maker?: string
  group: 'viande' | 'apéro' | 'bouillon'
  price: number
  format: string
  desc: string
  real: boolean
  /** prix réel publié */
  realPrice?: boolean
}

export const GROCERY: Grocery[] = [
  { id: 'dohatsu', name: 'Bouillon artisanal basque', maker: 'Dohatsu', group: 'bouillon', price: 9.9, format: 'le litre', desc: 'La pépite du rayon: un bouillon artisanal basque, profond et net.', real: true, realPrice: true },
  { id: 'kaia', name: 'Huile d\'olive extra vierge', maker: 'Kaïa', group: 'viande', price: 14.5, format: '50 cl', desc: 'Pour finir une viande ou assaisonner une salade. Prix exemple.', real: true },
  { id: 'marc', name: 'Cornichons français', maker: 'Maison Marc', group: 'apéro', price: 5.2, format: 'bocal', desc: 'Croquants et vinaigrés, parfaits avec la terrine. Prix exemple.', real: true },
  { id: 'orleans', name: 'Moutarde d\'Orléans', group: 'viande', price: 4.6, format: 'pot', desc: 'Une moutarde de caractère, pour la viande, la sauce, la vinaigrette. Prix exemple.', real: true },
  { id: 'sel', name: 'Fleur de sel', group: 'viande', price: 6.5, format: '250 g', desc: 'À poser en fin de cuisson. Exemple.', real: false },
  { id: 'poivre-sichuan', name: 'Poivre de Sichuan', group: 'viande', price: 5.9, format: '40 g', desc: 'Frais, citronné. Sur une entrecôte, c\'est parfait. Exemple.', real: false },
  { id: 'poivre-grains', name: 'Poivre noir en grains', group: 'viande', price: 4.8, format: '60 g', desc: 'À concasser au moment. Exemple.', real: false },
  { id: 'sauce-barbecue', name: 'Sauce barbecue fumée', group: 'viande', price: 5.5, format: '250 ml', desc: 'Fumée, pas trop sucrée. Exemple.', real: false },
  { id: 'echalotes', name: 'Échalotes confites', group: 'viande', price: 6.8, format: 'bocal', desc: 'Pour accompagner un onglet ou une bavette. Exemple.', real: false },
  { id: 'piment-espelette', name: 'Piment d\'Espelette', group: 'apéro', price: 7.2, format: '40 g', desc: 'Un peu de feu pour les rillettes. Exemple.', real: false },
  { id: 'crackers', name: 'Toasts de pain grillé', group: 'apéro', price: 3.9, format: 'sachet', desc: 'Fins et dorés, pour la terrine. Exemple.', real: false },
  { id: 'olives', name: 'Olives vertes', group: 'apéro', price: 5.1, format: 'bocal', desc: 'Piquées, charnues. Exemple.', real: false },
  { id: 'vin-rouge-cuisine', name: 'Vin rouge pour mijoter', group: 'bouillon', price: 8.5, format: '75 cl', desc: 'Pour le bourguignon ou la daube. Exemple générique, sans partenariat annoncé.', real: false },
  { id: 'fond-veau', name: 'Fond de veau', group: 'bouillon', price: 6.9, format: '50 cl', desc: 'Pour lier une sauce. Exemple.', real: false },
  { id: 'bouquet-garni', name: 'Bouquet garni', group: 'bouillon', price: 2.2, format: 'sachet', desc: 'Thym, laurier, persil. Exemple.', real: false },
]

export const GROCERY_GROUPS: Array<{ id: Grocery['group']; title: string; text: string }> = [
  { id: 'viande', title: 'Pour la viande', text: 'Ce qui fait la différence dans l\'assiette.' },
  { id: 'apéro', title: 'Pour l\'apéro', text: 'À poser à côté de la terrine et des rillettes.' },
  { id: 'bouillon', title: 'Pour le bouillon', text: 'De quoi mijoter longtemps et bien.' },
]
