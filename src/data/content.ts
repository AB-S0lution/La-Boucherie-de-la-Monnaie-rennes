// FAQ, galerie, événements, équipe (rôles), presse, chronologie, voisins.
// Faits réels marqués real. Le reste est de l'exemple (sample data) à remplacer.

export interface Faq { q: string; a: string; group: 'commande' | 'produits' | 'pratique' }

export const FAQ: Faq[] = [
  { q: 'Comment commander ?', a: 'En boutique, par téléphone au 02 99 22 04 96, ou par message privé sur Instagram (@boucheriedelamonnaie). Dites-nous la pièce, le nombre de convives et le jour: nous préparons le reste.', group: 'commande' },
  { q: 'Faites-vous du sous vide ou du prêt à congeler ?', a: 'Oui. Nous pouvons mettre vos produits sous vide ou les préparer prêts à congeler. Demandez-le au comptoir au moment de la commande.', group: 'commande' },
  { q: 'Livrez-vous à domicile ?', a: 'Renseignez-vous au comptoir: nous n\'annonçons pas de service de livraison sur ce site.', group: 'commande' }, // TODO confirmer avec la maison
  { q: 'Vendez-vous de la viande halal ?', a: 'Non. Nous travaillons notamment le porc: la charcuterie maison et plusieurs pièces de la boutique en sont issues.', group: 'produits' },
  { q: 'Qu\'est-ce qu\'une viande maturée ?', a: 'C\'est une viande qui a vieilli plusieurs semaines en cave. Elle perd de l\'eau, ses fibres se détendent et son goût devient plus profond. Nos affinages vont de 4 à 8 semaines.', group: 'produits' },
  { q: 'Combien de viande prévoir par personne ?', a: '150 à 250 grammes pour une pièce désossée, 350 à 450 grammes avec l\'os. Dites-nous le nombre de convives et nous ajustons.', group: 'produits' },
  { q: 'D\'où viennent vos viandes ?', a: 'D\'élevages responsables et de circuits courts: Bretagne, Quercy, Landes, Bigorre et d\'autres régions. Notre page « D\'où vient la viande » détaille les races et les labels.', group: 'produits' },
  { q: 'Faites-vous du foie gras maison ?', a: 'Oui, il est fait maison, à commander avant les fêtes de fin d\'année. Demandez la date limite au comptoir.', group: 'produits' },
  { q: 'Avez-vous un service traiteur pour les événements ?', a: 'Nous préparons chaque jour des entrées, des plats et des desserts faits maison. Pour une réception, appelez-nous: nous en parlerons ensemble.', group: 'commande' },
  { q: 'Quels sont vos horaires du samedi ?', a: 'De 9 h à 18 h 30 sans interruption. C\'est le jour du marché des Lices.', group: 'pratique' },
  { q: 'Êtes-vous ouverts le lundi ?', a: 'Non, nous sommes fermés le lundi et le dimanche.', group: 'pratique' },
  { q: 'Comment payer ?', a: 'Cartes bancaires et paiement sans contact, selon les informations disponibles. À confirmer avec la maison.', group: 'pratique' }, // TODO PLAN §13 n°8
  { q: 'Comment venir ? Où se garer ?', a: 'La station de métro Sainte-Anne est à environ 270 mètres. Le stationnement est payant dans la rue de la Monnaie; il n\'y a pas de parking dédié.', group: 'pratique' },
  { q: 'Fermez-vous pendant l\'été ?', a: 'Oui, chaque été, et nous l\'annonçons sur Instagram. En 2025, la boutique a fermé du 2 au 25 août. Les dates 2026-2027 sont à demander.', group: 'pratique' },
]

export interface GalleryItem {
  id: string
  title: string
  art: 'billot' | 'vitrine' | 'cave' | 'carcasse' | 'facade' | 'halles' | 'pate' | 'saucisse' | 'cote' | 'bocal' | 'balance' | 'couteaux' | 'agneau' | 'foiegras' | 'maki' | 'photo'
  ratio: '4:5' | '3:2' | '1:1'
  note: string
}

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Le billot', art: 'billot', ratio: '4:5', note: 'Gravure originale. Le billot rond en bois, au centre de la boutique.' },
  { id: 'g2', title: 'Le mur de vitrines', art: 'vitrine', ratio: '3:2', note: 'Gravure originale: les cabinets vitrés où la viande mature à la vue de tous.' },
  { id: 'g3', title: 'La cave de maturation', art: 'cave', ratio: '1:1', note: 'Gravure originale.' },
  { id: 'g4', title: 'La carcasse entière', art: 'carcasse', ratio: '3:2', note: 'Schéma indicatif d\'un bœuf.' },
  { id: 'g5', title: 'L\'Hôtel des Monnaies', art: 'facade', ratio: '4:5', note: 'Gravure d\'après le style de l\'édifice du XVIIIe siècle.' },
  { id: 'g6', title: 'Les Halles Martenot', art: 'halles', ratio: '3:2', note: 'Les halles de fonte de la place des Lices.' },
  { id: 'g7', title: 'Pâté en croûte, en coupe', art: 'pate', ratio: '1:1', note: 'Gravure originale d\'une coupe de pâté en croûte.' },
  { id: 'g8', title: 'Saucisse vigneronne', art: 'saucisse', ratio: '3:2', note: 'Porc, miel, vin rouge, échalotes.' },
  { id: 'g9', title: 'Côte de bœuf maturée', art: 'cote', ratio: '4:5', note: 'Gravure originale.' },
  { id: 'g10', title: 'Bocaux de l\'épicerie', art: 'bocal', ratio: '1:1', note: 'Bocaux dessinés sans étiquette ni marque.' },
  { id: 'g11', title: 'La balance', art: 'balance', ratio: '3:2', note: 'Le ticket de balance, au gramme près.' },
  { id: 'g12', title: 'Les couteaux', art: 'couteaux', ratio: '4:5', note: 'Trois couteaux du boucher.' },
  { id: 'g13', title: 'Épaule d\'agneau', art: 'agneau', ratio: '1:1', note: 'Gravure originale.' },
  { id: 'g14', title: 'Foie gras maison', art: 'foiegras', ratio: '3:2', note: 'Un lobe, du pain grillé et du sel.' },
  { id: 'g15', title: 'Makis de bœuf', art: 'maki', ratio: '1:1', note: 'Pour l\'apéro.' },
  { id: 'g16', title: 'Photo de la boutique', art: 'photo', ratio: '4:5', note: 'Emplacement réservé: photo fournie par la maison.' },
  { id: 'g17', title: 'Photo du comptoir', art: 'photo', ratio: '3:2', note: 'Emplacement réservé: photo fournie par la maison.' },
  { id: 'g18', title: 'Photo de l\'équipe au travail', art: 'photo', ratio: '3:2', note: 'Emplacement réservé: photo fournie par la maison.' },
  { id: 'g19', title: 'Le billot, autre vue', art: 'billot', ratio: '3:2', note: 'Variante.' },
  { id: 'g20', title: 'Côte de bœuf, vue de dessus', art: 'cote', ratio: '3:2', note: 'Variante.' },
  { id: 'g21', title: 'Photo des plats du traiteur', art: 'photo', ratio: '1:1', note: 'Emplacement réservé: photo fournie par la maison.' },
  { id: 'g22', title: 'Photo de la devanture', art: 'photo', ratio: '4:5', note: 'Emplacement réservé: photo fournie par la maison.' },
]

export interface EventItem { id: string; title: string; when: string; text: string; real: boolean; example: boolean }
export const EVENTS: EventItem[] = [
  { id: 'e1', title: 'Concours de la côte de bœuf', when: 'Juillet 2023', text: 'La maison a offert une côte de bœuf à gagner sur Instagram.', real: true, example: false },
  { id: 'e2', title: 'Deuxième concours de la côte de bœuf', when: '2024', text: 'Une côte de bœuf à gagner pour trois personnes, sur Instagram.', real: true, example: false },
  { id: 'e3', title: 'Agneau fermier du Quercy', when: 'Pâques', text: 'Gigot, carré, épaule. Proposé à Pâques 2023 et 2024.', real: true, example: false },
  { id: 'e4', title: 'Fermeture estivale', when: '2 au 25 août 2025', text: 'Réouverture le mardi 26 août à 9 h 30. Produits sous vide ou prêts à congeler sur commande.', real: true, example: false },
  { id: 'e5', title: 'Rentrée Bellota', when: 'Septembre 2025', text: 'Rosette, coppa, lomo 100 % Bellota et cecina arrivent en boutique.', real: true, example: false },
  { id: 'e6', title: 'Coup de cœur du samedi', when: 'Chaque samedi (exemple)', text: 'Une pièce choisie par le boucher, avec ses conseils de cuisson.', real: false, example: true },
  { id: 'e7', title: 'Précommandes de Noël', when: 'Novembre (exemple)', text: 'Foie gras, pâté en croûte, rôtis de fête: ouverture des précommandes.', real: false, example: true },
  { id: 'e8', title: 'Conseil cuisson du mois', when: 'Chaque mois (exemple)', text: 'Une fiche pratique, imprimable, pour cuire une pièce à la perfection.', real: false, example: true },
]

export interface TeamRole { name?: string; role: string; text: string }
export const TEAM: TeamRole[] = [
  { name: 'Aymeric Hurault', role: 'Gérant et boucher', text: 'Rennais, formé en commerce international puis dans de grandes maisons parisiennes. Il a ouvert la boutique à 27 ans.' },
  { role: 'Boucher·ère', text: 'Chacun travaille à son propre billot, à la vue de tous.' },
  { role: 'Cuisinier·ère', text: 'En cuisine chaque jour: entrées, plats préparés et desserts faits maison.' },
  { role: 'Apprenti·e', text: 'On apprend le métier de boucher en cave et au comptoir.' },
]

export interface PressItem { outlet: string; title: string; quote: string; url: string; date: string }
export const PRESS: PressItem[] = [
  { outlet: 'Ouest-France', title: 'Une boucherie haut de gamme vient d\'ouvrir au cœur de Rennes', quote: 'J\'avais envie de concret et de faire plaisir avec des produits d\'exception.', url: 'https://www.ouest-france.fr/bretagne/rennes-35000/une-boucherie-haut-de-gamme-vient-douvrir-au-cur-de-rennes-d1cde4f2-e5ae-11ed-8ec6-f106ec4803b5', date: 'Avril 2023' },
  { outlet: 'Rennes Business Mag', title: 'Le boucher de la rue de la Monnaie', quote: 'Nous n\'avons rien à cacher. Nous avons une transparence totale sur tous les produits et sur notre savoir-faire.', url: 'https://rennesbusinessmag.fr/le-boucher-de-la-rue-de-la-monnaie/', date: 'Avril 2023' },
  { outlet: 'Rennes Infos Autrement', title: 'Le boucher de la rue de la Monnaie', quote: 'Je voulais savoir si désosser une cuisse de bœuf à 6 heures du matin était du domaine du possible !', url: 'https://www.rennes-infos-autrement.fr/le-boucher-de-la-rue-de-la-monnaie/', date: 'Avril 2023' },
  { outlet: 'Le Fooding', title: 'Boucherie de la Monnaie', quote: 'Le quartier des Lices se bonifie jusqu\'à l\'os\u00A0!', url: 'https://lefooding.com/commerces/boucherie-de-la-monnaie', date: 'Mars 2024, mis à jour en août 2026' },
]

export interface TimelineItem { date: string; title: string; text: string }
export const TIMELINE: TimelineItem[] = [
  { date: 'XVe siècle', title: 'Une monnaie à Rennes', text: 'Un atelier monétaire s\'installe sur le site à partir du milieu du XVe siècle.' },
  { date: '1728-1732', title: 'L\'Hôtel des Monnaies', text: 'Reconstruit après l\'incendie de 1720, l\'édifice frappe la monnaie jusqu\'en 1774.' },
  { date: 'XIXe et XXe siècles', title: 'Hôtel de France, puis banque', text: 'Les lieux ont abrité la poste aux chevaux, l\'Hôtel de France, puis la Banque Populaire de l\'Ouest jusqu\'en 2014.' },
  { date: '2 mars 2023', title: 'Mama Shelter', text: 'L\'ancien Hôtel des Monnaies devient un hôtel de 119 chambres.' },
  { date: '30 mars 2023', title: 'La boutique ouvre', text: 'Première des Échoppes des Lices à ouvrir, au pied du bâtiment.' },
]

export interface Neighbour { name: string; what: string; note: string }
/** Voisins : composition de 2023, avec réserve (PLAN.md §6) */
export const NEIGHBOURS: Neighbour[] = [
  { name: 'Bourbon d\'Arsel', what: 'Torréfacteur', note: 'Rue de la Monnaie' },
  { name: 'Les Italiens du Coin', what: 'Épicerie et traiteur italiens', note: 'Rue de la Monnaie' },
  { name: 'Le Cellier des Lices', what: 'Cave à vins', note: 'Rue de la Monnaie' },
  { name: 'Breizh Café', what: 'Crêperie', note: 'Place de la Trinité' },
]
