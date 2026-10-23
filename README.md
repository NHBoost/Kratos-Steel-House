# Kratos Steel House — version Vue 3

Conversion du site d'origine (`../index.html`) en application Vue 3 + Vite + Vue Router.
Le design n'a pas changé : la feuille de style, les textes, les images et les données ont été repris à l'identique.

## Commandes

```bash
npm install
npm run dev      # développement : http://localhost:5173/fr/
npm run build    # production : pages HTML pré-rendues dans dist/
```

Le domaine utilisé pour les canonical, le sitemap et Open Graph est `https://www.kratossteelhouse.com`.
Pour en changer : `VITE_SITE_URL=https://mon-domaine.be npm run build` (ou modifier `src/paths.js`).

## Mise en ligne

`dist/` est un site statique : chaque page a son propre `index.html` (`/fr/services/renovation-toiture/index.html`…),
lisible par Google sans JavaScript. Il se dépose tel quel sur n'importe quel hébergement statique
(Netlify, Vercel, Cloudflare Pages, OVH…). Fichiers générés en plus : `sitemap.xml`, `robots.txt`, `404.html`.

## Structure

- `src/assets/styles.css` : feuille de style du site
- `src/data/content.js` : contenu (services, réalisations, FAQ, articles, régions, coordonnées)
- `src/paths.js` : toutes les URL publiques (`/fr/...`) et le domaine
- `src/seo.js` : titre, description, canonical, Open Graph et JSON-LD de chaque page
- `src/router.js` : routes, suivi `dataLayer`, mise à jour du `<head>` à la navigation
- `src/entry-server.js` + `scripts/prerender.mjs` : pré-rendu de chaque page au build
- `src/components/` et `src/pages/` : composants et pages Vue

## SEO

- URL réelles par page, HTML pré-rendu, hydratation Vue côté navigateur
- Titres ≤ 60 caractères et descriptions uniques (110–160 caractères)
- JSON-LD : `GeneralContractor`, `BreadcrumbList`, `Service` + `FAQPage` (services), `FAQPage` (FAQ), `Article` (conseils)
- Pages d'atterrissage publicitaires `/fr/lp/…` en `noindex` avec canonical vers la page service
- Anciennes adresses `#/...` redirigées vers les nouvelles URL
- Photos en WebP

Téléphone, e-mail et adresse ne sont pas encore dans les données structurées : à ajouter dans `business()` (`src/seo.js`)
une fois confirmés.
