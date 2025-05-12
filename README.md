# Mini Application de Catalogue de Produits

Cette application est un catalogue de produits réalisé avec **Next.js** et **Tailwind CSS**. Elle affiche une liste de produits récupérés depuis une API publique et permet de filtrer les produits par catégorie ainsi que de paginer les résultats.

## Fonctionnalités

- **Page d'accueil (`/`)** : Affiche une grille de produits avec leur image, nom, prix et note.
- **Page de détail (`/product/[id]`)** : Affiche les informations détaillées d'un produit : image, nom, prix, description, et note.
- **Pagination** : Permet de paginer les produits par lot de 10.
- **Filtre par catégorie** : Permet de filtrer les produits en fonction de leur catégorie.

## Technologies utilisées

- **Next.js** (avec le **App Router**)
- **Tailwind CSS** pour le style
- **API Fakestore** pour récupérer les données des produits
- **React** pour la gestion des composants

## Installation

1. Clonez ce repository :

   ```bash
   git clone https://github.com/raniaklabi/my-shop
2. Installez les dépendances :
cd my-shop
npm install
3. Lancez l'application en mode développement :
npm run dev
