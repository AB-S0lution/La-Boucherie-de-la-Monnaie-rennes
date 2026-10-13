// DONNÉES D'EXEMPLE (sample data) - à remplacer par les données réelles de la boutique.
// Les noms de produits suivent PLAN.md §3 (réels). TOUS LES PRIX SONT FICTIFS (seul le bouillon Dohatsu à 9,90 €/L, dans epicerie.ts, est réel).

export type Species = 'boeuf' | 'cochon' | 'veau-agneau' | 'volailles' | 'charcuterie'
export type Cuisson = 'poêle' | 'four' | 'barbecue' | 'plancha' | 'mijoté' | 'froid'
export type Occasion = 'semaine' | 'dimanche' | 'barbecue' | 'apéro' | 'fêtes'
export type Tag =
  | 'maturé' | 'AOP' | 'IGP' | 'Label Rouge' | 'breton' | 'fait maison' | 'barbecue' | 'plancha'
  | 'four' | 'mijoté' | 'apéro' | 'fêtes' | 'de saison' | 'coup de cœur' | 'sous vide possible'

export interface Product {
  id: string
  name: string
  species: Species
  /** Prix indicatif fictif */
  price: number
  unit: 'kg' | 'pièce' | 'portion'
  desc: string
  tags: Tag[]
  cuissons: Cuisson[]
  occasions: Occasion[]
  /** Jours de maturation connus (J28, J42, J56) */
  matureDays?: 28 | 42 | 56
  breed?: string
}

const p = (
  id: string, name: string, species: Species, price: number, unit: Product['unit'], desc: string,
  tags: Tag[], cuissons: Cuisson[], occasions: Occasion[], extra: Partial<Product> = {},
): Product => ({ id, name, species, price, unit, desc, tags, cuissons, occasions, ...extra })

export const PRODUCTS: Product[] = [
  // Bœuf (20)
  p('cote-boeuf-maturee', 'Côte de bœuf maturée', 'boeuf', 79, 'kg', 'La pièce de la tablée. Affinée dans nos caves, coupée à l\'épaisseur que vous choisissez.', ['maturé', 'barbecue', 'plancha', 'four', 'coup de cœur', 'sous vide possible'], ['barbecue', 'plancha', 'four'], ['dimanche', 'barbecue', 'fêtes'], { matureDays: 56, breed: 'Selon arrivage' }),
  p('entrecote-noire-baltique', 'Entrecôte Noire de Baltique', 'boeuf', 89, 'kg', 'Affinée 8 semaines. Gras fin, goût très prononcé, un vrai plat de dimanche.', ['maturé', 'coup de cœur', 'sous vide possible'], ['poêle', 'plancha'], ['dimanche', 'fêtes'], { matureDays: 56, breed: 'Noire de Baltique' }),
  p('entrecote-limousine', 'Entrecôte limousine', 'boeuf', 64, 'kg', 'Maturée 6 semaines. Tendre, persillée, simple et efficace à la poêle.', ['maturé', 'sous vide possible'], ['poêle', 'plancha', 'barbecue'], ['semaine', 'dimanche'], { matureDays: 42, breed: 'Limousine' }),
  p('faux-filet-minhota', 'Faux-filet de Minhota', 'boeuf', 94, 'kg', 'Affiné 8 semaines dans nos caves de maturation. Une viande profonde, presque noisetée.', ['maturé', 'coup de cœur'], ['poêle', 'plancha'], ['dimanche', 'fêtes'], { matureDays: 56, breed: 'Minhota' }),
  p('bavette-normande', 'Bavette de Normande', 'boeuf', 38, 'kg', 'Affinée 4 semaines. La pièce du mardi soir, à saisir vite et à trancher dans le sens contraire des fibres.', ['maturé', 'plancha', 'barbecue', 'coup de cœur'], ['poêle', 'plancha', 'barbecue'], ['semaine', 'barbecue'], { matureDays: 28, breed: 'Normande' }),
  p('cote-basse', 'Côte basse', 'boeuf', 44, 'kg', 'Une pièce de bouchers: goûteuse, un peu grasse, très généreuse pour le prix.', ['barbecue', 'plancha'], ['poêle', 'barbecue', 'plancha'], ['semaine', 'barbecue'], {}),
  p('filet-boeuf-barde', 'Filet de bœuf bardé au gras de bœuf', 'boeuf', 86, 'kg', 'Le rôti de fête. Bardé par nos soins pour rester fondant à la cuisson.', ['fêtes', 'four'], ['four'], ['fêtes', 'dimanche'], {}),
  p('tournedos-barde-bigorre', 'Tournedos bardé à la ventrèche de Noir de Bigorre', 'boeuf', 90, 'kg', 'Du filet de bœuf enveloppé de ventrèche de Noir de Bigorre AOP. Une assiette de fête en dix minutes.', ['AOP', 'fêtes', 'coup de cœur'], ['poêle', 'four'], ['fêtes', 'dimanche'], {}),
  p('onglet', 'Onglet', 'boeuf', 36, 'kg', 'Le morceau du boucher. Bien saignant, avec une échalote.', ['plancha', 'barbecue'], ['poêle', 'plancha', 'barbecue'], ['semaine'], {}),
  p('rumsteck', 'Rumsteck', 'boeuf', 48, 'kg', 'Maigre et tendre, pour celles et ceux qui aiment une viande franche.', ['four', 'barbecue'], ['poêle', 'barbecue', 'four'], ['semaine', 'barbecue'], {}),
  p('paleron', 'Paleron', 'boeuf', 24, 'kg', 'À mijoter longtemps. Il fond. Parfait pour un pot-au-feu ou une daube.', ['mijoté'], ['mijoté'], ['dimanche', 'semaine'], {}),
  p('macreuse', 'Macreuse', 'boeuf', 28, 'kg', 'Un bifteck tendre ou un bouilli de caractère, selon la découpe.', ['mijoté'], ['poêle', 'mijoté'], ['semaine', 'dimanche'], {}),
  p('joue-boeuf', 'Joue de bœuf', 'boeuf', 20, 'kg', 'La pièce mijotée par excellence: gélatineuse, fondante, qui adore le vin rouge.', ['mijoté', 'de saison'], ['mijoté'], ['dimanche'], {}),
  p('plat-de-cotes', 'Plat de côtes', 'boeuf', 18, 'kg', 'Pour le pot-au-feu ou la cuisson basse au four. Demandez-nous la taille des morceaux.', ['mijoté'], ['mijoté', 'four'], ['dimanche'], {}),
  p('bourguignon', 'Bœuf à bourguignon', 'boeuf', 22, 'kg', 'Mélange de morceaux à mijoter, coupés à la main, prêt pour la cocotte.', ['mijoté', 'de saison', 'sous vide possible'], ['mijoté'], ['dimanche', 'semaine'], {}),
  p('hache-minute', 'Haché minute', 'boeuf', 26, 'kg', 'Haché devant vous, dans le morceau de votre choix. Rien à cacher.', ['sous vide possible'], ['poêle'], ['semaine'], {}),
  p('makis-boeuf-colonnata', 'Makis de bœuf au lard de Colonnata', 'boeuf', 62, 'kg', 'Pour surprendre vos invités à l\'apéro. Roulés à la main.', ['apéro', 'fêtes', 'coup de cœur'], ['four', 'poêle'], ['apéro', 'fêtes'], {}),
  p('entrecote-blonde-galice', 'Entrecôte de Blonde de Galice', 'boeuf', 72, 'kg', 'Une race de caractère, maturée en cave. Selon arrivage.', ['maturé'], ['poêle', 'plancha'], ['dimanche', 'fêtes'], { breed: 'Blonde de Galice' }),
  p('cote-salers-angus', 'Côte de Salers × Angus', 'boeuf', 68, 'kg', 'Le croisement qui donne du gras fin et de la tendreté. Selon arrivage.', ['maturé', 'barbecue'], ['barbecue', 'plancha', 'poêle'], ['barbecue', 'dimanche'], { breed: 'Salers × Angus' }),
  p('gite-noix', 'Gîte à la noix', 'boeuf', 30, 'kg', 'Rôti ou steak, à vous de voir. Bonne affaire, bonne tenue.', ['four'], ['four', 'poêle'], ['semaine', 'dimanche'], {}),

  // Cochon (12)
  p('cote-premiere-breton', 'Côte première de cochon breton élevé sur paille', 'cochon', 24, 'kg', 'Parce que c\'est bon, le cochon bien élevé. Épaisse, juteuse, à la poêle ou au four.', ['breton', 'coup de cœur', 'sous vide possible'], ['poêle', 'four', 'barbecue'], ['semaine', 'dimanche'], { breed: 'Breton, élevé sur paille' }),
  p('echine', 'Échine de porc', 'cochon', 17, 'kg', 'Persillée et généreuse, pour un rôti fondant ou des brochettes.', ['breton', 'barbecue'], ['four', 'barbecue', 'mijoté'], ['barbecue', 'dimanche'], {}),
  p('filet-mignon', 'Filet mignon', 'cochon', 28, 'kg', 'Le plus tendre du cochon. Cuisson courte, jus de cuisson avec un trait de moutarde.', ['breton'], ['four', 'poêle'], ['dimanche', 'semaine'], {}),
  p('poitrine', 'Poitrine de porc', 'cochon', 16, 'kg', 'Pour la cuisson lente, croustillante dessus et fondante dedans.', ['breton', 'four'], ['four', 'mijoté'], ['dimanche'], {}),
  p('jarret', 'Jarret de porc', 'cochon', 14, 'kg', 'Le plat d\'hiver par excellence, avec des lentilles ou une choucroute.', ['mijoté', 'de saison'], ['mijoté', 'four'], ['dimanche'], {}),
  p('roti-porc', 'Rôti de porc', 'cochon', 19, 'kg', 'Ficelé à la demande, avec ou sans barde.', ['four', 'breton'], ['four'], ['dimanche', 'semaine'], {}),
  p('cote-noir-bigorre', 'Côte de Noir de Bigorre', 'cochon', 49, 'kg', 'Porc noir élevé en plein air, AOP. Un gras qui sent la noisette.', ['AOP', 'coup de cœur'], ['poêle', 'plancha'], ['dimanche', 'fêtes'], { breed: 'Noir de Bigorre AOP' }),
  p('ventreche-noir-bigorre', 'Ventrèche de Noir de Bigorre', 'cochon', 39, 'kg', 'Pour barder, pour poêler, pour parfumer un plat. Quelques tranches suffisent.', ['AOP'], ['poêle', 'four'], ['apéro', 'fêtes'], { breed: 'Noir de Bigorre AOP' }),
  p('porc-retiers', 'Rôti de porc de Retiers', 'cochon', 21, 'kg', 'Issu d\'une ferme éco-responsable de Retiers, en Ille-et-Vilaine.', ['breton'], ['four'], ['dimanche'], {}),
  p('saucisse-vigneronne', 'Saucisse vigneronne', 'cochon', 22, 'kg', 'Notre signature: porc, miel, vin rouge et échalotes. À poêler doucement.', ['fait maison', 'coup de cœur', 'plancha', 'barbecue'], ['poêle', 'barbecue', 'plancha'], ['semaine', 'barbecue'], {}),
  p('merguez-menthe', 'Merguez à la menthe', 'cochon', 19, 'kg', 'Les meilleures merguez de Rennes, d\'après un avis Google. À vous de juger.', ['fait maison', 'barbecue', 'plancha'], ['barbecue', 'plancha', 'poêle'], ['barbecue'], {}),
  p('chipolatas', 'Chipolatas', 'cochon', 20, 'kg', 'Fines et bien assaisonnées, pour les enfants comme pour les grands.', ['fait maison', 'barbecue'], ['barbecue', 'poêle'], ['barbecue', 'semaine'], {}),

  // Veau et agneau (11)
  p('escalope-veau-lait', 'Escalope de veau de lait', 'veau-agneau', 52, 'kg', 'Veau de lait breton, acheté directement auprès d\'éleveurs. Tendre et clair.', ['breton', 'coup de cœur'], ['poêle'], ['semaine', 'dimanche'], {}),
  p('quasi-veau', 'Quasi de veau', 'veau-agneau', 54, 'kg', 'Un rôti fin, à cuire rosé avec basilic et mozzarella si l\'envie vous prend.', ['breton', 'four'], ['four', 'poêle'], ['dimanche', 'fêtes'], {}),
  p('blanquette-veau', 'Blanquette de veau', 'veau-agneau', 32, 'kg', 'Épaule et poitrine coupées pour la blanquette de famille.', ['breton', 'mijoté', 'sous vide possible'], ['mijoté'], ['dimanche'], {}),
  p('ris-de-veau', 'Ris de veau', 'veau-agneau', 52, 'kg', 'Pour les bouchées à la reine ou une poêlée de fête. À commander à l\'avance.', ['fêtes', 'breton'], ['poêle', 'mijoté'], ['fêtes'], {}),
  p('gigot-quercy', 'Gigot d\'agneau du Quercy', 'veau-agneau', 38, 'kg', 'Agneau fermier du Quercy IGP et Label Rouge. Une chair tendre, un goût fin.', ['IGP', 'Label Rouge', 'de saison', 'coup de cœur', 'four'], ['four'], ['fêtes', 'dimanche'], { breed: 'Quercy IGP, Label Rouge' }),
  p('carre-quercy', 'Carré d\'agneau du Quercy', 'veau-agneau', 62, 'kg', 'Le carré de Pâques, paré par nos soins.', ['IGP', 'Label Rouge', 'de saison', 'fêtes'], ['four', 'poêle'], ['fêtes'], { breed: 'Quercy IGP, Label Rouge' }),
  p('epaule-quercy', 'Épaule d\'agneau du Quercy', 'veau-agneau', 28, 'kg', 'À confire doucement, sept heures si vous avez le temps.', ['IGP', 'Label Rouge', 'mijoté', 'four'], ['four', 'mijoté'], ['dimanche', 'fêtes'], { breed: 'Quercy IGP, Label Rouge' }),
  p('souris-agneau-quercy', 'Souris d\'agneau du Quercy', 'veau-agneau', 34, 'kg', 'Cuite à basse température, elle se détache à la cuillère.', ['IGP', 'Label Rouge', 'four', 'mijoté'], ['four', 'mijoté'], ['dimanche', 'fêtes'], { breed: 'Quercy IGP, Label Rouge' }),
  p('cotelettes-agneau', 'Côtelettes d\'agneau', 'veau-agneau', 56, 'kg', 'Au barbecue, à la plancha ou à la poêle, cinq minutes suffisent.', ['barbecue', 'plancha', 'IGP'], ['barbecue', 'plancha', 'poêle'], ['barbecue', 'fêtes'], {}),
  p('agneau-bergerie-epaule', 'Agneau de bergerie, épaule', 'veau-agneau', 29, 'kg', 'Agneau de bergerie élevé au lait maternel. Chair très claire et douce.', ['four', 'mijoté'], ['four', 'mijoté'], ['dimanche'], {}),
  p('navarin-agneau', 'Navarin d\'agneau', 'veau-agneau', 30, 'kg', 'Morceaux à mijoter, découpés pour le navarin du printemps.', ['mijoté', 'de saison'], ['mijoté'], ['dimanche'], {}),

  // Volailles (6)
  p('poularde-landes', 'Poularde fermière jaune des Landes', 'volailles', 18, 'kg', 'Pour le déjeuner du dimanche. Rôtie, elle embaume toute la maison.', ['four', 'coup de cœur'], ['four'], ['dimanche', 'fêtes'], {}),
  p('poulet-fermier', 'Poulet fermier', 'volailles', 16, 'kg', 'Élevé en plein air. Prêt à rôtir, découpé ou en crapaudine.', ['four', 'barbecue'], ['four', 'barbecue'], ['semaine', 'dimanche'], {}),
  p('supremes-volaille', 'Suprêmes de volaille', 'volailles', 28, 'kg', 'Peau croustillante, chair juteuse. Cuisson douce.', ['four'], ['poêle', 'four'], ['semaine'], {}),
  p('cuisses-volaille', 'Cuisses de volaille', 'volailles', 14, 'kg', 'Pour le barbecue ou la cocotte, bien dorées.', ['barbecue', 'mijoté'], ['four', 'barbecue', 'mijoté'], ['barbecue', 'semaine'], {}),
  p('volaille-bio', 'Volaille fermière bio', 'volailles', 19, 'kg', 'Certaines de nos volailles sont fermières et bio, selon arrivage.', ['four'], ['four'], ['dimanche'], {}),
  p('brochettes-marinees', 'Brochettes marinées', 'volailles', 26, 'kg', 'Marinées maison, prêtes pour le barbecue ou la plancha. Exquises, dit un avis Google.', ['fait maison', 'barbecue', 'plancha', 'coup de cœur'], ['barbecue', 'plancha'], ['barbecue', 'semaine'], {}),

  // Charcuterie (13)
  p('terrine-campagne', 'Terrine de campagne', 'charcuterie', 26, 'kg', 'Faite avec tout le cochon, rien ne se perd. À servir avec des cornichons français.', ['fait maison', 'apéro'], ['froid'], ['apéro', 'semaine'], {}),
  p('pate-en-croute', 'Pâté en croûte maison', 'charcuterie', 48, 'kg', 'Pâte dorée, farce soignée, gelée limpide. « À tomber », dit un client.', ['fait maison', 'fêtes', 'coup de cœur'], ['froid'], ['apéro', 'fêtes', 'dimanche'], {}),
  p('foie-gras-canard', 'Foie gras de canard du Sud-Ouest', 'charcuterie', 140, 'kg', 'Mi-cuit maison, relevé comme il faut. À commander avant les fêtes.', ['fait maison', 'fêtes', 'coup de cœur', 'de saison'], ['froid'], ['fêtes'], {}),
  p('rillettes-boeuf-espelette', 'Rillettes de bœuf au piment d\'Espelette', 'charcuterie', 34, 'kg', 'Fondantes, avec un petit feu. Sur du pain grillé, c\'est le bonheur.', ['fait maison', 'apéro', 'coup de cœur'], ['froid'], ['apéro'], {}),
  p('coppa-maison', 'Coppa', 'charcuterie', 62, 'kg', 'Mention spéciale d\'un client pour cette coppa.', ['fait maison', 'apéro'], ['froid'], ['apéro', 'fêtes'], {}),
  p('pate-lapin', 'Pâté de lapin', 'charcuterie', 36, 'kg', 'Fin et parfumé, pour les tartines du soir.', ['fait maison', 'apéro'], ['froid'], ['apéro', 'semaine'], {}),
  p('rosette-bellota', 'Rosette 100 % Bellota', 'charcuterie', 98, 'kg', 'Porc ibérique Bellota, tranché à la demande.', ['apéro', 'fêtes'], ['froid'], ['apéro', 'fêtes'], {}),
  p('coppa-bellota', 'Coppa 100 % Bellota', 'charcuterie', 105, 'kg', 'Un gras qui fond sur la langue.', ['apéro', 'fêtes'], ['froid'], ['apéro', 'fêtes'], {}),
  p('lomo-bellota', 'Lomo 100 % Bellota', 'charcuterie', 110, 'kg', 'Le plus fin des Bellota, à découper en tranches presque transparentes.', ['apéro', 'fêtes'], ['froid'], ['apéro', 'fêtes'], {}),
  p('cecina', 'Cecina', 'charcuterie', 88, 'kg', 'Charcuterie de bœuf, séchée et profonde. Une surprise à l\'apéro.', ['apéro'], ['froid'], ['apéro'], {}),
  p('saucisse-vigneronne-cuite', 'Saucisse vigneronne cuite', 'charcuterie', 24, 'kg', 'Déjà cuite, à réchauffer ou à manger froide. Dans la galette, si vous voulez.', ['fait maison', 'apéro'], ['froid', 'poêle'], ['apéro', 'semaine'], {}),
  p('jambon-cuit', 'Jambon cuit à l\'os', 'charcuterie', 34, 'kg', 'Cuit lentement, tranché à la demande.', ['fait maison'], ['froid'], ['semaine', 'dimanche'], {}),
  p('saucisson-sec', 'Saucisson sec', 'charcuterie', 56, 'kg', 'Le saucisson de la table d\'apéro, bien sec et bien poivré.', ['apéro'], ['froid'], ['apéro'], {}),
]

export const SPECIES_LABEL: Record<Species, string> = {
  boeuf: 'Bœuf', cochon: 'Cochon', 'veau-agneau': 'Veau et agneau', volailles: 'Volailles', charcuterie: 'Charcuterie',
}

export const PRICE_NOTE = 'Prix indicatifs, demandez au comptoir.'

export const eur = (n: number) => n.toLocaleString('fr-FR', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }) + ' €'
export const unitLabel = (u: Product['unit']) => (u === 'kg' ? '/ kg' : u === 'pièce' ? '/ pièce' : '/ portion')
