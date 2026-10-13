# La Boucherie de la Monnaie, Rennes (démo)

Source de vérité: `PLAN.md` (identité révisée §9/§15). Site statique Vite + TS + Tailwind v4, GitHub Pages sous `/La-Boucherie-de-la-Monnaie-rennes/`.

- **Concept**: « Le Coin & le Billot » (boucher à la vue de tous). Palette: vert bouteille #12433B (logo), rouge sombre #9B2430, crème; textures carrelage, marbre noir, ardoise. Coins carrés, serif Gloock, pas d'em-dash ni d'en-dash dans les textes.
- **Interdits de publication**: téléphone principal 02 99 22 04 96 uniquement; aucune livraison annoncée; aucun bon expiré; aucun badge d'hygiène; ne pas redessiner le logo; aucune température de cave; pas de noms d'éleveurs inventés. Prix = exemples.
- **Pièges**: les HTML par route sont générés par `scripts/gen-pages.ts` (appelé dans `vite.config.ts`); ajouter une page = l'ajouter à `src/pages.ts` + un module dans `src/pages/` (clé = nom du fichier; `article` → `journal.ts`). Toujours passer les chemins par `href()`. Le texte passe par `typo()` (espaces insécables).
- **Mouvement**: classe `js-motion` posée dans le `<head>`; sans elle (ou avec reduced-motion) tout est visible. Pins GSAP seulement ≥ 900 px.
- **Vérifier**: `npm run typecheck && npm run build`, puis `npm run preview -- --port 4178`. Un seul navigateur headless à la fois.
