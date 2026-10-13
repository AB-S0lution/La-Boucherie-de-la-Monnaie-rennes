// DONNÉES D'EXEMPLE (sample data) - à remplacer par les données réelles de la boutique.
// Articles génériques de cuisine et de boucherie. Les recettes ne sont PAS attribuées au gérant. Dates fictives (2025-2026).

export type JournalCategory = 'recettes' | 'conseils' | 'saison' | 'la maison'

export interface Post {
  slug: string
  title: string
  excerpt: string
  category: JournalCategory
  date: string
  readMinutes: number
  /** variante de gravure pour la couverture (voir art.ts) */
  cover: 'cote' | 'carcasse' | 'agneau' | 'bellota' | 'foiegras' | 'maki' | 'bavette' | 'marche' | 'bocal' | 'balance'
  body: string[]
}

export const POSTS: Post[] = [
  {
    slug: 'cuire-cote-de-boeuf-maturee', title: 'Cuire une côte de bœuf maturée sans barbecue',
    excerpt: 'Une poêle, un four doux, un peu de patience. Le résultat vaut le barbecue.', category: 'recettes', date: '2026-09-18', readMinutes: 4, cover: 'cote',
    body: [
      'Une côte de bœuf maturée n\'a pas besoin de flammes pour être belle. Il lui faut une chaleur franche au début et une chaleur douce ensuite.',
      'Sortez la côte une heure avant de la cuire. Séchez-la, salez-la à peine. Dans une poêle épaisse très chaude, saisissez chaque face deux minutes, et le gras sur la tranche une minute de plus.',
      'Passez-la ensuite dans un four à 120 degrés pendant dix à quinze minutes, selon l\'épaisseur et la cuisson voulue. Une sonde donne 52 degrés à cœur pour un rosé.',
      'Laissez-la reposer autant de temps qu\'elle a cuit, sous une feuille d\'aluminium. Tranchez devant tout le monde, poivrez, et ajoutez une pointe de fleur de sel.',
    ],
  },
  {
    slug: 'pourquoi-des-carcasses-entieres', title: 'Pourquoi travailler des carcasses entières',
    excerpt: 'Une cohérence de qualité, du museau à la queue. Et une boucherie où il n\'y a rien à cacher.', category: 'la maison', date: '2026-08-04', readMinutes: 3, cover: 'carcasse',
    body: [
      'Nous travaillons sur des carcasses entières de bœuf, de cochon et d\'agneau. Cela veut dire que chaque pièce que vous achetez vient d\'un animal que nous avons vu arriver.',
      'C\'est une contrainte, bien sûr. Il faut savoir valoriser chaque morceau: les nobles et les autres, l\'entrecôte et la joue, la poitrine et le filet mignon.',
      'C\'est aussi la meilleure façon de garantir la même qualité d\'un jour à l\'autre. Une carcasse a une histoire; une pièce achetée seule n\'en a pas.',
    ],
  },
  {
    slug: 'paques-agneau-du-quercy', title: 'Pâques: l\'agneau du Quercy',
    excerpt: 'Gigot, carré ou épaule. Comment choisir, comment cuire, combien prendre.', category: 'saison', date: '2026-03-12', readMinutes: 5, cover: 'agneau',
    body: [
      'Chaque année à Pâques, nous proposons de l\'agneau fermier du Quercy, IGP et Label Rouge. Une chair tendre, un goût fin.',
      'Pour sept personnes, comptez un gigot de deux kilos avec l\'os. Sortez-le deux heures avant la cuisson et piquez-le d\'ail. Quarante à cinquante minutes à 200 degrés, puis un repos de vingt minutes.',
      'Le carré se fait plus vite: dix minutes de four à 220 degrés, une croûte d\'herbes si vous le souhaitez. L\'épaule, elle, aime les longues cuissons: sept heures à 120 degrés et elle se prend à la cuillère.',
      'Pensez à commander quelques jours à l\'avance, surtout pour le week-end de Pâques.',
    ],
  },
  {
    slug: 'la-rentree-du-bellota', title: 'La rentrée du Bellota',
    excerpt: 'Rosette, coppa, lomo et cecina. Comment les servir et les conserver.', category: 'saison', date: '2025-09-10', readMinutes: 3, cover: 'bellota',
    body: [
      'À la rentrée 2025, nous avons ajouté à notre vitrine de la charcuterie 100 % porc ibérique Bellota: rosette, coppa, lomo. Et une cecina, charcuterie de bœuf.',
      'Sortez-les du réfrigérateur trente minutes avant de les servir. Le gras doit être souple, presque brillant.',
      'Tranchez fin, à la demande. Une charcuterie de cette qualité se mange seule, avec du bon pain et un verre de vin.',
    ],
  },
  {
    slug: 'foie-gras-de-noel-quand-commander', title: 'Le foie gras de Noël: quand commander',
    excerpt: 'Un produit maison, des quantités limitées. Voici comment s\'y prendre.', category: 'saison', date: '2025-11-20', readMinutes: 3, cover: 'foiegras',
    body: [
      'Notre foie gras de canard du Sud-Ouest est fait maison. Certains clients l\'achètent chaque année pour Noël.',
      'Comme il se prépare à l\'avance, il vaut mieux le commander tôt. Passez nous voir, appelez-nous ou écrivez-nous en message privé sur Instagram. Les dates limites ci-contre sont des exemples; nous vous donnerons celles de l\'année.',
      'Il se sert frais, avec du pain grillé, du sel de Guérande et une pointe de poivre. Sortez-le du réfrigérateur un quart d\'heure avant.',
    ],
  },
  {
    slug: 'makis-de-boeuf-colonnata', title: 'Apéro: makis de bœuf au lard de Colonnata',
    excerpt: 'Roulés à la main, saisis en quelques minutes. Pour surprendre vos invités.', category: 'recettes', date: '2026-06-02', readMinutes: 3, cover: 'maki',
    body: [
      'Surprenez vos invités à l\'apéro et régalez-vous. Des tranches fines de bœuf, une lamelle de lard de Colonnata, un peu de moutarde, et on roule.',
      'Coupez chaque maki en tronçons de trois centimètres. Dorez-les dans une poêle chaude sur toutes les faces pendant deux à trois minutes.',
      'Servez-les tièdes, avec des cornichons croquants. On peut les préparer à l\'avance et les passer à la poêle au dernier moment.',
    ],
  },
  {
    slug: 'bavette-onglet-hampe', title: 'Bavette, onglet, hampe: les pièces du boucher',
    excerpt: 'Trois morceaux savoureux, trois cuissons. Le guide qu\'on donne au comptoir.', category: 'conseils', date: '2026-05-14', readMinutes: 4, cover: 'bavette',
    body: [
      'Ce sont des pièces que les bouchers aiment garder pour eux. Elles ont du goût, de la mâche, et se cuisent vite.',
      'La bavette se saisit à feu vif, deux minutes par face, et se tranche toujours dans le sens contraire des fibres. L\'onglet aime la saignante. La hampe, proche de l\'onglet, est un peu plus fibreuse et se cuit de la même façon.',
      'Servez-les avec une échalote ciselée, une noix de beurre noisette et de la moutarde d\'Orléans.',
    ],
  },
  {
    slug: 'le-samedi-des-lices', title: 'Le samedi des Lices',
    excerpt: 'Le marché, l\'apéro, et une boucherie ouverte de 9 h à 18 h 30 sans interruption.', category: 'la maison', date: '2026-04-25', readMinutes: 3, cover: 'marche',
    body: [
      'Le samedi, le marché des Lices remplit la place. Nous restons ouverts de 9 h à 18 h 30 sans fermer à midi.',
      'C\'est le jour des grandes tablées: commandez à l\'avance si vous avez un projet précis. Pour l\'apéro-marché, prenez de la terrine, du pâté en croûte, des cornichons et du pain.',
      'Et si vous cherchez une idée de plat chaud, notre rayon traiteur propose chaque samedi un plat spécial marché.',
    ],
  },
  {
    slug: 'bouillon-dohatsu', title: 'Bouillon Dohatsu: la pépite',
    excerpt: 'Un bouillon artisanal basque, à 9,90 € le litre. Comment l\'utiliser.', category: 'conseils', date: '2026-01-15', readMinutes: 2, cover: 'bocal',
    body: [
      'Dans le rayon épicerie, il y a un bouillon artisanal basque, le Dohatsu, à 9,90 € le litre. Il est profond, net, sans artifice.',
      'Pour un pot-au-feu, versez-le sur la viande et les légumes, et laissez mijoter. Pour une soupe d\'hiver, réchauffez-le et ajoutez des pâtes fines et un peu de joue effilochée.',
      'Vous pouvez aussi le boire chaud, tout simplement, dans une tasse.',
    ],
  },
  {
    slug: 'combien-de-viande-par-personne', title: 'Combien de viande par personne',
    excerpt: 'Des repères simples, selon la pièce, l\'os et l\'appétit des convives.', category: 'conseils', date: '2026-02-20', readMinutes: 3, cover: 'balance',
    body: [
      'Pour une pièce désossée, comptez 150 à 250 grammes par personne. Pour une pièce avec l\'os, comptez 350 à 450 grammes.',
      'Un rôti pour un repas de famille: 200 grammes par adulte, 120 grammes par enfant. Pour un barbecue avec plusieurs viandes, 300 grammes au total suffisent, car on picore.',
      'En cas de doute, dites-nous le nombre de convives et ce que vous cuisinez. Nous vous donnerons la quantité au gramme près.',
    ],
  },
]

export const JOURNAL_CATEGORIES: Array<JournalCategory | 'tous'> = ['tous', 'recettes', 'conseils', 'saison', 'la maison']

export const fmtDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
