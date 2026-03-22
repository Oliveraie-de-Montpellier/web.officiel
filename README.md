# Oliverie de Montpellier – Site React

Site web de l'Oliverie de Montpellier, migré de HTML/JS vers React.

## Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Structure

- `src/pages/` – Pages principales (Home, Shop, Visits, etc.)
- `src/components/` – Composants réutilisables (Nav, Footer, CartModal, etc.)
- `src/contexts/` – Contexte React (CartContext pour le panier)
- `src/data/` – Données (produits, FAQ)
- `src/styles/` – Fichiers CSS (variables, global, visites)

## Fonctionnalités

- **Navigation** : React Router avec routes `/`, `/boutique`, `/visites`, `/professionnels`, `/assistance`, `/visites/decouverte`, `/visites/experience-complete`, `/visites/espace-enfants`
- **Panier** : Ajout/suppression, persistance localStorage, modal
- **Calendrier** : Réservation de visites avec jours disponibles/réservés
- **Formulaires** : Contact, réservation, assistance (simulation avec alert)
- **FAQ** : Accordéon interactif

## Logo

Le logo par défaut est `public/logo.svg`. Pour utiliser le logo original (`assets/logo.png` du site HTML), copiez-le dans `public/logo.png` et mettez à jour les références dans Nav.jsx, NavSub.jsx et Footer.jsx.
