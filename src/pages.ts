// Liste des pages (routes). Utilisée par main.ts (navigation, titres) et par scripts/gen-pages.ts (fichiers HTML).
// Fichier pur: aucun accès à import.meta.env ni au DOM, pour pouvoir être lu par Node.
import { POSTS } from './data/journal.ts'

export interface PageDef {
  /** chemin relatif à la base, avec / final ('' = accueil) */
  path: string
  /** module de page à charger */
  key: string
  title: string
  description: string
  /** pour les articles */
  slug?: string
}

const T = (s: string) => s

export const PAGES: PageDef[] = [
  { path: '', key: 'home', title: 'Boucher, charcutier, traiteur à Rennes', description: 'La Boucherie de la Monnaie, 10 rue de la Monnaie à Rennes: carcasses entières, viandes maturées dans nos caves, charcuterie et plats faits maison. Appelez le 02 99 22 04 96.' },
  { path: 'la-maison/', key: 'maison', title: 'La maison', description: 'L\'histoire de la boutique d\'Aymeric Hurault, ouverte le 30 mars 2023 au pied de l\'ancien Hôtel des Monnaies, à Rennes. Rien à cacher.' },
  { path: 'comptoir/', key: 'comptoir', title: 'Le comptoir', description: 'Bœuf, cochon, veau, agneau, volailles et charcuterie: le comptoir de la boucherie, avec filtres par cuisson, occasion et maturation. Prix indicatifs.' },
  { path: 'comptoir/boeuf/', key: 'espece', title: 'Bœuf', description: 'Côte de bœuf maturée, entrecôte, bavette, onglet, joue: le bœuf de la Boucherie de la Monnaie, affiné jusqu\'à 8 semaines.' },
  { path: 'comptoir/cochon/', key: 'espece', title: 'Cochon', description: 'Cochon breton élevé sur paille, Noir de Bigorre AOP, saucisse vigneronne et merguez à la menthe.' },
  { path: 'comptoir/veau-agneau/', key: 'espece', title: 'Veau et agneau', description: 'Veau de lait breton et agneau fermier du Quercy IGP Label Rouge: gigot, carré, souris, escalope.' },
  { path: 'comptoir/volailles/', key: 'espece', title: 'Volailles', description: 'Poularde fermière jaune des Landes, poulet fermier, brochettes marinées: les volailles du comptoir.' },
  { path: 'carcasse/', key: 'carcasse', title: 'La carcasse entière', description: 'Choisissez un morceau sur la carcasse, découvrez le conseil du boucher et préparez votre liste pour le comptoir.' },
  { path: 'cave-de-maturation/', key: 'cave', title: 'La cave de maturation', description: 'Bavette de Normande 4 semaines, limousine 6 semaines, Minhota et Noire de Baltique 8 semaines: la maturation en cave, expliquée.' },
  { path: 'charcuterie/', key: 'charcuterie', title: 'Charcuterie maison', description: 'Saucisse vigneronne, terrines, pâté en croûte, foie gras, coppa, rillettes de bœuf et Bellota: la charcuterie de la maison.' },
  { path: 'traiteur/', key: 'traiteur', title: 'Traiteur', description: 'Entrées, plats et desserts faits maison chaque jour: bouchées à la reine, bourguignon, blanquette, couscous. Menu à imprimer.' },
  { path: 'epicerie/', key: 'epicerie', title: 'L\'épicerie fine', description: 'Huile Kaïa, cornichons Maison Marc, moutarde d\'Orléans et bouillon Dohatsu à 9,90 € le litre.' },
  { path: 'origines/', key: 'origines', title: 'D\'où vient la viande', description: 'Races, régions et labels (AOP, IGP, Label Rouge): d\'où viennent les viandes de la Boucherie de la Monnaie.' },
  { path: 'journal/', key: 'journal', title: 'Le journal', description: 'Recettes, conseils de cuisson et saisons: le journal de la Boucherie de la Monnaie.' },
  ...POSTS.map((p): PageDef => ({ path: `journal/${p.slug}/`, key: 'article', slug: p.slug, title: p.title, description: p.excerpt })),
  { path: 'samedi-marche/', key: 'samedi', title: 'Le samedi des Lices', description: 'Le samedi, la boucherie reste ouverte de 9 h à 18 h 30 sans interruption, au cœur du marché des Lices.' },
  { path: 'galerie/', key: 'galerie', title: 'Galerie', description: 'Gravures originales de la boutique, du billot et des pièces de la maison, avec emplacements pour les photos.' },
  { path: 'faq/', key: 'faq', title: 'Questions fréquentes', description: 'Commander, sous vide, halal, maturation, horaires, accès: les réponses de la Boucherie de la Monnaie.' },
  { path: 'contact/', key: 'contact', title: 'Contact et accès', description: 'Appelez le 02 99 22 04 96 ou passez au 10 rue de la Monnaie à Rennes. Horaires, métro Sainte-Anne, itinéraire.' },
  { path: 'recrutement/', key: 'recrutement', title: 'Nous rejoindre', description: 'La boucherie recrute un boucher H/F en CDI, 39 heures, dans une petite équipe au centre de Rennes.' },
  { path: 'mentions-legales/', key: 'legal', title: 'Mentions légales', description: 'Mentions légales de la Boucherie de la Monnaie, SARL, Rennes.' },
  { path: 'confidentialite/', key: 'confidentialite', title: 'Confidentialité', description: 'Ce site n\'utilise ni cookie ni traceur.' },
]

export const SITE_NAME = T('La Boucherie de la Monnaie')
export const pageTitle = (p: PageDef) => (p.path === '' ? `${SITE_NAME}, ${p.title}` : `${p.title} | ${SITE_NAME}, Rennes`)
