// DONNÉES D'EXEMPLE (sample data) - à remplacer par les données réelles de la boutique.
// Plats construits à partir des plats RÉELS cités par la presse et les clients (PLAN.md §3). Prix et rotation fictifs.

export type CourseKind = 'entrée' | 'plat' | 'dessert' | 'sandwich'

export interface Dish {
  id: string
  name: string
  kind: CourseKind
  price: number
  desc: string
  /** vrai plat cité par la presse ou par un client */
  cited: boolean
  tags: string[]
}

export const DISHES: Dish[] = [
  { id: 'bouchees-reine', name: 'Bouchées à la reine au ris de veau', kind: 'plat', price: 14, desc: 'Au feuilletage croustillant, sauce onctueuse, ris de veau poêlé.', cited: true, tags: ['fêtes', 'fait maison'] },
  { id: 'souris-agneau', name: 'Souris d\'agneau du Quercy, basse température', kind: 'plat', price: 16, desc: 'Cuite longuement, elle se détache à la cuillère. Jus au thym.', cited: true, tags: ['fait maison', 'IGP'] },
  { id: 'bourguignon-portion', name: 'Bœuf bourguignon', kind: 'plat', price: 11, desc: 'Mijoté au vin rouge avec lardons et petits oignons.', cited: true, tags: ['fait maison', 'mijoté'] },
  { id: 'blanquette-portion', name: 'Blanquette de veau', kind: 'plat', price: 12.5, desc: 'Sauce crémeuse, champignons, riz pilaf à part.', cited: true, tags: ['fait maison'] },
  { id: 'couscous', name: 'Couscous', kind: 'plat', price: 12, desc: 'Semoule, légumes, merguez maison et viande. Tout est prêt à réchauffer.', cited: true, tags: ['fait maison', 'merguez'] },
  { id: 'joue-porc-confite', name: 'Joue de porc confite', kind: 'plat', price: 11.5, desc: 'Confite lentement, fondante, servie avec sa sauce.', cited: true, tags: ['fait maison', 'breton'] },
  { id: 'lasagnes', name: 'Lasagnes', kind: 'plat', price: 9.5, desc: 'Bolognaise maison, béchamel, gratin doré.', cited: true, tags: ['fait maison'] },
  { id: 'ratatouille', name: 'Ratatouille', kind: 'plat', price: 6.5, desc: 'Légumes du moment, mijotée à l\'huile d\'olive.', cited: true, tags: ['végétarien', 'de saison'] },
  { id: 'nouilles-poulet', name: 'Nouilles sautées au poulet', kind: 'plat', price: 10, desc: 'Style wok, poulet laqué et poivrons. Plat de rotation (exemple).', cited: false, tags: ['rotation'] },
  { id: 'quiche', name: 'Quiche du jour', kind: 'entrée', price: 7, desc: 'Lorraine ou saisonnière, pâte brisée maison.', cited: true, tags: ['fait maison'] },
  { id: 'salade-melon', name: 'Salade melon, tomate, pastèque', kind: 'entrée', price: 7.5, desc: 'Fraîche, sucrée-salée, avec une pointe de menthe. En été.', cited: true, tags: ['de saison', 'végétarien'] },
  { id: 'terrine-portion', name: 'Terrine de campagne et cornichons', kind: 'entrée', price: 7, desc: 'Une belle tranche de terrine maison, cornichons français.', cited: false, tags: ['fait maison'] },
  { id: 'pate-croute-portion', name: 'Pâté en croûte', kind: 'entrée', price: 8.5, desc: 'Une part de pâté en croûte maison, salade verte.', cited: true, tags: ['fait maison'] },
  { id: 'brochettes-portion', name: 'Brochettes marinées', kind: 'plat', price: 9, desc: 'Deux brochettes marinées, prêtes à griller ou à réchauffer.', cited: true, tags: ['fait maison', 'barbecue'] },
  { id: 'riz-lait', name: 'Riz au lait', kind: 'dessert', price: 4, desc: 'Crémeux, vanille, caramel au beurre salé. Dessert générique (exemple).', cited: false, tags: ['fait maison'] },
  { id: 'tarte-moment', name: 'Tarte du moment', kind: 'dessert', price: 4.5, desc: 'Selon la saison et l\'inspiration de la cuisine. Exemple.', cited: false, tags: ['fait maison', 'de saison'] },
  { id: 'sandwich-jambon', name: 'Sandwich du midi, jambon et beurre', kind: 'sandwich', price: 7.5, desc: 'Pain frais, jambon cuit à l\'os, beurre demi-sel.', cited: true, tags: ['midi'] },
  { id: 'sandwich-terrine', name: 'Sandwich terrine et cornichons', kind: 'sandwich', price: 8, desc: 'Terrine de campagne maison, cornichons français, moutarde d\'Orléans.', cited: false, tags: ['midi'] },
  { id: 'sandwich-rillettes', name: 'Sandwich rillettes de bœuf', kind: 'sandwich', price: 9.5, desc: 'Rillettes au piment d\'Espelette, salade croquante.', cited: false, tags: ['midi'] },
]

export interface RotationDay { day: string; entree: string; plat: string; dessert: string; special?: string }
/** Rotation de la semaine (exemple) */
export const WEEK_ROTATION: RotationDay[] = [
  { day: 'Mardi', entree: 'quiche', plat: 'bourguignon-portion', dessert: 'riz-lait' },
  { day: 'Mercredi', entree: 'terrine-portion', plat: 'lasagnes', dessert: 'tarte-moment' },
  { day: 'Jeudi', entree: 'salade-melon', plat: 'joue-porc-confite', dessert: 'riz-lait' },
  { day: 'Vendredi', entree: 'pate-croute-portion', plat: 'blanquette-portion', dessert: 'tarte-moment' },
  { day: 'Samedi', entree: 'quiche', plat: 'couscous', dessert: 'tarte-moment', special: 'Spécial marché' },
]
