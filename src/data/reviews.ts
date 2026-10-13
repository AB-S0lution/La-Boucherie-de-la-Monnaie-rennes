// Citations RÉELLES d'avis publics (PLAN.md §4), attribuées à la plateforme uniquement, jamais à un nom.
// Orthographe d'origine conservée. Aucun avis inventé. Les avis de proches du gérant sont exclus.

export interface Review {
  id: number
  text: string
  source: 'Avis Google' | 'Filière Noir de Bigorre AOP'
  date: string
  /** thème pour le filtrage */
  theme: 'conseil' | 'accueil' | 'qualité' | 'charcuterie' | 'fêtes' | 'boutique'
}

export const REVIEWS: Review[] = [
  { id: 1, text: 'Une des meilleures boucheries de la région, sans hésiter !', source: 'Avis Google', date: 'juillet 2026', theme: 'qualité' },
  { id: 2, text: 'L\'accueil d\'Aymeric fait toute la différence : toujours chaleureux, de bon conseil et d\'une grande gentillesse.', source: 'Avis Google', date: 'juin 2026', theme: 'accueil' },
  { id: 3, text: 'Nous achetons l\'ensemble de notre viande dans cette boucherie où la qualité est vraiment au rdv!', source: 'Avis Google', date: 'mai 2026', theme: 'qualité' },
  { id: 4, text: 'Conseils au top et accueil chaleureux, de vrais passionnés je recommande !', source: 'Avis Google', date: 'mai 2026', theme: 'conseil' },
  { id: 5, text: 'Une viande excellente, et une future mariée ravie de son repas!', source: 'Avis Google', date: 'janvier 2026', theme: 'fêtes' },
  { id: 6, text: 'Cette année encore, le foie gras d\'Aymeric est absolument exceptionnel, parfaitement relevé.', source: 'Avis Google', date: 'janvier 2026', theme: 'charcuterie' },
  { id: 7, text: 'Si vous voulez goûter les meilleures merguez de Rennes vous êtes à la bonne adresse.', source: 'Avis Google', date: 'décembre 2024', theme: 'charcuterie' },
  { id: 8, text: 'Les pâtés en croûte maison sont à tomber !', source: 'Avis Google', date: 'décembre 2024', theme: 'charcuterie' },
  { id: 9, text: 'De passage à rennes pour faire un barbecue … Mes convives étaient ravis de la qualités de la viande.', source: 'Avis Google', date: 'juillet 2024', theme: 'qualité' },
  { id: 10, text: 'Bravo de mettre en avant des viandes d\'exception à prix accessible.', source: 'Avis Google', date: 'juin 2024', theme: 'qualité' },
  { id: 11, text: 'Une cote de bœuf affinée 8 semaines pour fêter un anniversaire, quel régal.', source: 'Avis Google', date: 'octobre 2023', theme: 'fêtes' },
  { id: 12, text: 'Tres bon conseil du boucher pour la cuisson, la viande très bonne. Un peu chère mais c\'est de la viande de qualité.', source: 'Avis Google', date: 'novembre 2023', theme: 'conseil' },
  { id: 13, text: 'Un accueil chaleureux, une boucherie rutilante, une marchandise alléchante et sourcée.', source: 'Avis Google', date: 'juin 2023', theme: 'boutique' },
  { id: 14, text: 'Mention spéciale pour la coppa qui est vraiment INCROYABLE !', source: 'Avis Google', date: 'juillet 2023', theme: 'charcuterie' },
  { id: 15, text: 'Boucherie moderne, viande incroyable, traiteur plus que délicieux, personnel jeune et de très bon conseil.', source: 'Avis Google', date: 'juin 2023', theme: 'boutique' },
  { id: 16, text: 'Une adresse incontournable à Rennes. La viande est excellente', source: 'Avis Google', date: 'juin 2026', theme: 'qualité' },
  { id: 17, text: 'Nous avons dégusté des entrecôtes de la Noire De Baltique affinées 8 semaines en suivant les conseils de cuisson d\'Aymeric : un régal et des saveurs incomparables', source: 'Avis Google', date: 'juillet 2023', theme: 'conseil' },
  { id: 18, text: 'Les brochettes marinées sont exquise !', source: 'Avis Google', date: 'mai 2026', theme: 'charcuterie' },
  { id: 19, text: 'Accueil, professionnalisme, conseils, qualité des viandes proposées, voila une excellente boucherie à connaître dans le centre historique de Rennes.', source: 'Avis Google', date: 'juin 2023', theme: 'accueil' },
  { id: 20, text: 'Nous recommandons autant pour les repas familiaux que les barbecues entre amis ou les petits plaisirs du soir.', source: 'Avis Google', date: 'juillet 2023', theme: 'fêtes' },
  { id: 21, text: 'Magnifique boutique au cœur de Rennes. La boucherie de la monnaie vous servira aux petits oignons.', source: 'Filière Noir de Bigorre AOP', date: 'novembre 2023', theme: 'boutique' },
]

/** Les six citations de la page d'accueil */
export const HOME_REVIEW_IDS = [2, 17, 6, 4, 8, 1]

export interface Stat { value: string; label: string }
export const STATS: Stat[] = [
  { value: 'Depuis 2023', label: 'Ouverte le 30 mars 2023, première des Échoppes des Lices' },
  { value: '5/5', label: 'sur Google (plus de 60 avis)' },
  { value: '3 espèces', label: 'travaillées en carcasse entière: bœuf, cochon, agneau' },
  { value: '8 semaines', label: 'd\'affinage au maximum dans nos caves' },
  { value: '1 sur 2', label: 'des boucheries de Rennes présentes au guide Le Fooding' },
]
