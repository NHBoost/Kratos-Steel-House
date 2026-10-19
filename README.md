# Kratos Steel House — version Vue 3

Conversion du site d'origine (`../index.html`) en application Vue 3 + Vite + Vue Router.
Le design n'a pas changé : la feuille de style, les textes, les images et les données ont été repris à l'identique.

## Commandes

```bash
npm install
npm run dev      # développement : http://localhost:5173
npm run build    # production : dossier dist/
```

## Structure

- `src/assets/styles.css` : CSS d'origine, copié sans modification
- `src/data/content.js` : contenu d'origine (services, réalisations, FAQ, articles, régions, coordonnées)
- `src/store.js` : état partagé (dernière demande, cookies, toast), suivi `dataLayer`
- `src/router.js` : routes en hash (`#/services`, `#/projet-toiture-uccle`, `#/lp-facade-crepi`…)
- `src/components/` : en-tête, pied de page, bannière cookies, formulaire de devis et blocs réutilisables
- `src/pages/` : une page par vue de l'original

## Différences avec l'original

- Les URL prennent la forme `#/devis` au lieu de `#devis`, comme le veut le router Vue en mode hash.
- Le service présélectionné dans le formulaire passe par `#/devis?svc=…` au lieu de l'attribut `data-svc`.
