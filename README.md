# La Boucherie de la Monnaie, Rennes (site de démonstration)

Site de démonstration non officiel pour la boucherie-charcuterie-traiteur d'Aymeric Hurault, 10 rue de la Monnaie, 35000 Rennes. Concept: **« Le Coin & le Billot »** (boucher à la vue de tous, carcasses entières, maturation en cave).

> Les faits vérifiés (adresse, horaires, téléphone, identité légale) viennent de `PLAN.md`. Tous les prix, plats, articles, listes d'épicerie et photos sont des **exemples** (`sample data`) à remplacer.

## Pile

- Vite 8, TypeScript 6 (strict), Tailwind CSS v4 (importé, avec une feuille de style écrite à la main dans `src/style.css`).
- **GSAP** (ScrollTrigger, SplitText): scènes épinglées et scrubées, découpage du texte, frappe du sceau.
- **Lenis**: défilement doux (désactivé avec `prefers-reduced-motion`).
- Polices auto-hébergées: Gloock, Instrument Sans, IBM Plex Mono (`@fontsource`).
- Aucune image bitmap: toute l'imagerie est du SVG/CSS original (gravures, carte, sceaux, carrelage, marbre).

## Lancer

```bash
npm install
npm run dev        # serveur de développement
npm run typecheck  # tsc --noEmit
npm run build      # typecheck + génération des pages + vite build
npm run preview    # prévisualiser dist/ (ex.: npm run preview -- --port 4178)
```

L'URL de base est `/La-Boucherie-de-la-Monnaie-rennes/` (GitHub Pages). `public/404.html` et `public/.nojekyll` sont copiés dans `dist/`.

## Architecture

- `src/pages.ts`: liste des routes (23 pages dont les articles du journal). Lue par `scripts/gen-pages.ts` (fichiers HTML par route, titre, description, Open Graph, JSON-LD `ButcherShop` sur l'accueil et le contact) et par `vite.config.ts` (entrées multi-pages).
- `src/main.ts`: enveloppe (en-tête, menu, pied de page, rideau de transition) + module de page (`src/pages/<clé>.ts`, exports `render` et `init`).
- `src/data/*.ts`: données typées, chacune annotée « sample data » ou « vérifié ».
- `src/lib/art.ts`: gravures SVG originales (côte de bœuf, billot, carcasse, carte de France, sceaux, textures).
- `src/lib/motion.ts`: Lenis, reveals, textes, magnétisme, rideau.
- `src/components/finder.ts`: interaction signature « La carcasse entière ».

Les dossiers HTML par route sont **générés** (ignorés par git, sauf `index.html` racine).

## Mouvement et accessibilité

transform / opacity / clip-path uniquement; repli complet sous `prefers-reduced-motion` (aucun épinglage, contenu visible, pas de rideau); thème Comptoir (clair) / Cave (sombre); navigation au clavier, focus visibles, contrastes AA visés.

## Ce qu'il reste à fournir par la maison

Logo officiel (`TODO` dans `src/components/shell.ts`), photos, prix réels, carte du jour, e-mail public, second numéro de téléphone, moyens de paiement, fermetures annuelles, offre de livraison (jamais annoncée ici). Voir `PLAN.md` §13.
