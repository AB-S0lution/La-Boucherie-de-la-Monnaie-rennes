// DONNÉES D'EXEMPLE (sample data) - à remplacer par les données réelles de la boutique.
// Conseils de découpe et de cuisson: savoir-faire général de boucherie, rédigé dans le ton de la maison.
// Les prix au kilo viennent des produits fictifs (products.ts) ou sont des exemples. Le schéma des morceaux est indicatif.

export type CarcassKey = 'boeuf' | 'cochon' | 'agneau'
export type Method = 'poêle' | 'four' | 'barbecue' | 'mijoté'

export interface Cut {
  id: string
  carcass: CarcassKey
  /** identifiant de la zone dans le schéma SVG (src/lib/carcass-art.ts) */
  region: string
  name: string
  /** Prix indicatif fictif au kilo */
  pricePerKg: number
  methods: Method[]
  thickness: string
  rest: string
  /** grammes par personne */
  gramsPerPerson: number
  advice: string
  pairing: string
  /** id du produit lié dans products.ts */
  productId?: string
}

const c = (
  id: string, carcass: CarcassKey, region: string, name: string, pricePerKg: number, methods: Method[],
  thickness: string, rest: string, gramsPerPerson: number, advice: string, pairing: string, productId?: string,
): Cut => ({ id, carcass, region, name, pricePerKg, methods, thickness, rest, gramsPerPerson, advice, pairing, productId })

export const CUTS: Cut[] = [
  // Bœuf (14)
  c('b-joue', 'boeuf', 'joue', 'Joue', 20, ['mijoté'], 'Morceaux de 4 à 5 cm', 'Repos dans la sauce', 200, 'Elle demande du temps, pas de technique. Vin rouge, carottes, trois heures de feu doux.', 'Moutarde d\'Orléans', 'joue-boeuf'),
  c('b-paleron', 'boeuf', 'paleron', 'Paleron', 24, ['mijoté'], 'Rôti entier ou tranches de 3 cm', 'Dix minutes hors du feu', 200, 'Il fond. Pot-au-feu, daube ou simple cuisson à l\'étouffée.', 'Cornichons Maison Marc', 'paleron'),
  c('b-macreuse', 'boeuf', 'macreuse', 'Macreuse', 28, ['poêle', 'mijoté'], 'Biftecks de 2 cm', 'Cinq minutes', 180, 'Un bifteck tendre si on la tranche fin, un bouilli de caractère sinon. Dites-nous votre idée.', 'Huile d\'olive Kaïa', 'macreuse'),
  c('b-cote', 'boeuf', 'cote', 'Côte de bœuf', 79, ['barbecue', 'four', 'poêle'], '4 à 5 cm, avec l\'os', 'Dix à quinze minutes sous une feuille d\'alu', 350, 'Pas besoin de sortir le barbecue ou la plancha pour apprécier une viande maturée: une poêle bien chaude, puis le four doux.', 'Fleur de sel et poivre en grains', 'cote-boeuf-maturee'),
  c('b-entrecote', 'boeuf', 'entrecote', 'Entrecôte', 64, ['poêle', 'barbecue'], '2,5 à 3 cm', 'Cinq minutes', 250, 'Sortez-la une heure avant. Poêle fumante, deux minutes par face, beurre mousseux à la fin.', 'Poivre de Sichuan', 'entrecote-limousine'),
  c('b-fauxfilet', 'boeuf', 'fauxfilet', 'Faux-filet', 94, ['poêle', 'barbecue'], '3 cm', 'Cinq à huit minutes', 250, 'Un gras fin sur le bord: gardez-le, il parfume tout. Saisir fort, finir doucement.', 'Huile d\'olive Kaïa', 'faux-filet-minhota'),
  c('b-filet', 'boeuf', 'filet', 'Filet', 86, ['poêle', 'four'], 'Tournedos de 4 cm ou rôti entier', 'Dix minutes', 200, 'La pièce la plus tendre, donc la plus discrète. Nous la bardons pour qu\'elle reste fondante.', 'Jus corsé au vin rouge', 'filet-boeuf-barde'),
  c('b-rumsteck', 'boeuf', 'rumsteck', 'Rumsteck', 48, ['poêle', 'barbecue', 'four'], '2 à 3 cm', 'Cinq minutes', 220, 'Une viande franche et maigre. Ne la poussez pas au-delà de rosé.', 'Moutarde d\'Orléans', 'rumsteck'),
  c('b-onglet', 'boeuf', 'onglet', 'Onglet', 36, ['poêle', 'barbecue'], 'Pièce entière ou 2 cm', 'Trois minutes', 200, 'Bien saignant, avec une échalote ciselée. Le morceau préféré de beaucoup de bouchers.', 'Cornichons Maison Marc', 'onglet'),
  c('b-bavette', 'boeuf', 'bavette', 'Bavette', 38, ['poêle', 'barbecue'], '2 cm', 'Trois minutes', 200, 'Saisir très chaud, trancher dans le sens contraire des fibres. Simple et efficace.', 'Échalotes et beurre noisette', 'bavette-normande'),
  c('b-platcotes', 'boeuf', 'platcotes', 'Plat de côtes', 18, ['mijoté', 'four'], 'Morceaux de 5 cm', 'Dans le bouillon', 250, 'Pour le pot-au-feu ou la cuisson basse. Prévoir de l\'os, donc un peu plus par personne.', 'Bouillon Dohatsu', 'plat-de-cotes'),
  c('b-gite', 'boeuf', 'gite', 'Gîte à la noix', 30, ['four', 'poêle'], 'Rôti ficelé ou biftecks de 2 cm', 'Dix minutes', 200, 'Une bonne affaire pour un rôti de famille. Ficelé à la demande.', 'Moutarde d\'Orléans', 'gite-noix'),
  c('b-tende', 'boeuf', 'tende', 'Tende de tranche', 32, ['four', 'poêle'], 'Rôti de 1 kg', 'Dix minutes', 180, 'Maigre et régulière. Pensez à la barde si vous visez un rôti plus tendre.', 'Huile d\'olive Kaïa'),
  c('b-jarret', 'boeuf', 'jarret', 'Jarret', 18, ['mijoté'], 'Rondelles de 4 cm', 'Dans la sauce', 250, 'Pour l\'osso-buco ou le pot-au-feu. Longue cuisson, grand goût.', 'Bouillon Dohatsu'),

  // Cochon (11)
  c('p-joue', 'cochon', 'joue', 'Joue de porc', 18, ['mijoté'], 'Entière', 'Dans la sauce', 180, 'À confire doucement. Confite au vin blanc, elle se mange à la cuillère.', 'Moutarde d\'Orléans'),
  c('p-echine', 'cochon', 'echine', 'Échine', 17, ['four', 'barbecue', 'mijoté'], 'Rôti de 1 kg ou tranches de 2 cm', 'Dix minutes', 200, 'Persillée, elle pardonne tout. Au four pendant une heure et demie, ou en brochettes.', 'Cornichons Maison Marc', 'echine'),
  c('p-palette', 'cochon', 'palette', 'Palette', 15, ['mijoté', 'four'], 'Rôti ou en dés', 'Dans la sauce', 200, 'La pièce économique des plats mijotés. Lentilles, choucroute, curry.', 'Moutarde d\'Orléans'),
  c('p-cote-premiere', 'cochon', 'cotepremiere', 'Côte première', 24, ['poêle', 'four', 'barbecue'], '3 cm', 'Cinq minutes', 250, 'Parce que c\'est bon, le cochon bien élevé. Colorée à la poêle, finie au four.', 'Fleur de sel', 'cote-premiere-breton'),
  c('p-filet-mignon', 'cochon', 'filetmignon', 'Filet mignon', 28, ['four', 'poêle'], 'Entier', 'Dix minutes', 180, 'Cuisson courte et douce. Un trait de moutarde dans le jus de cuisson.', 'Moutarde d\'Orléans', 'filet-mignon'),
  c('p-longe', 'cochon', 'longe', 'Longe', 19, ['four'], 'Rôti de 1 à 1,5 kg', 'Quinze minutes', 200, 'Le rôti de porc par excellence. Nous la ficelons selon votre nombre de convives.', 'Huile d\'olive Kaïa', 'roti-porc'),
  c('p-poitrine', 'cochon', 'poitrine', 'Poitrine', 16, ['four', 'mijoté'], 'Pièce entière', 'Quinze minutes', 250, 'Cuisson lente puis grill final pour la croûte.', 'Cornichons Maison Marc', 'poitrine'),
  c('p-ventreche', 'cochon', 'ventreche', 'Ventrèche', 39, ['poêle', 'four'], 'Tranches fines', 'Aucun', 40, 'Quelques tranches suffisent pour barder ou parfumer. Noir de Bigorre AOP.', 'Huile d\'olive Kaïa', 'ventreche-noir-bigorre'),
  c('p-jambon', 'cochon', 'jambon', 'Jambon frais', 20, ['four'], 'Rôti de 1,5 à 2 kg', 'Vingt minutes', 200, 'Pour une grande tablée. À rôtir avec de l\'ail et du thym.', 'Moutarde d\'Orléans'),
  c('p-jarret', 'cochon', 'jarret', 'Jarret', 14, ['mijoté', 'four'], 'Entier', 'Dans la sauce', 350, 'Frais ou demi-sel, avec des lentilles. La cuisine d\'hiver.', 'Bouillon Dohatsu', 'jarret'),
  c('p-travers', 'cochon', 'travers', 'Travers', 13, ['barbecue', 'four'], 'Plaque entière', 'Cinq minutes', 350, 'Deux heures au four couvert, puis laqué sur le barbecue.', 'Moutarde d\'Orléans'),

  // Agneau (10)
  c('a-collier', 'agneau', 'collier', 'Collier', 24, ['mijoté'], 'Morceaux de 4 cm', 'Dans la sauce', 250, 'Le navarin du printemps commence ici.', 'Huile d\'olive Kaïa', 'navarin-agneau'),
  c('a-epaule', 'agneau', 'epaule', 'Épaule', 28, ['four', 'mijoté'], 'Entière, avec ou sans os', 'Quinze minutes', 250, 'À confire pendant sept heures à 120 degrés, ou à rôtir plus vite en tranches. Tendre dans tous les cas.', 'Huile d\'olive Kaïa', 'epaule-quercy'),
  c('a-carre', 'agneau', 'carre', 'Carré', 62, ['four', 'poêle'], 'Carré de 8 côtes', 'Dix minutes', 200, 'Le carré de Pâques, paré par nos soins. Croûte d\'herbes si vous aimez.', 'Moutarde d\'Orléans', 'carre-quercy'),
  c('a-cotelettes', 'agneau', 'cotelettes', 'Côtelettes', 56, ['barbecue', 'poêle'], '2 cm', 'Deux minutes', 250, 'Quatre à cinq minutes de chaque côté, sans plus. Elles attendent à peine.', 'Fleur de sel', 'cotelettes-agneau'),
  c('a-selle', 'agneau', 'selle', 'Selle', 60, ['four'], 'Pièce entière', 'Quinze minutes', 220, 'Le rôti noble. Désossée et ficelée, elle se tranche comme du beurre.', 'Huile d\'olive Kaïa'),
  c('a-filet', 'agneau', 'filet', 'Filet', 70, ['poêle'], 'Pièce entière', 'Cinq minutes', 160, 'Quelques minutes à la poêle, rosé à cœur, et c\'est fini.', 'Fleur de sel'),
  c('a-gigot', 'agneau', 'gigot', 'Gigot', 38, ['four'], 'Entier, avec l\'os', 'Vingt minutes', 300, 'Agneau fermier du Quercy IGP et Label Rouge: une chair tendre, un goût fin. Quarante minutes au four pour sept personnes, selon la taille.', 'Huile d\'olive Kaïa', 'gigot-quercy'),
  c('a-souris', 'agneau', 'souris', 'Souris', 34, ['four', 'mijoté'], 'Une par personne', 'Dix minutes', 350, 'Cuite à basse température, elle se détache à la cuillère.', 'Moutarde d\'Orléans', 'souris-agneau-quercy'),
  c('a-poitrine', 'agneau', 'poitrine', 'Poitrine', 16, ['four', 'mijoté'], 'Pièce entière', 'Dix minutes', 250, 'Une pièce de bouchers, grasse et goûteuse. Farcie, c\'est encore mieux.', 'Cornichons Maison Marc'),
  c('a-jarret', 'agneau', 'jarret', 'Jarret', 20, ['mijoté'], 'Entier', 'Dans la sauce', 350, 'Un jarret par personne, au vin blanc et à l\'ail.', 'Bouillon Dohatsu'),
]

export const CARCASS_LABEL: Record<CarcassKey, string> = { boeuf: 'Bœuf', cochon: 'Cochon', agneau: 'Agneau' }
export const METHOD_LABEL: Record<Method, string> = { poêle: 'Poêle', four: 'Four', barbecue: 'Barbecue ou plancha', mijoté: 'Mijoté' }
