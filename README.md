# 🥘 Z Foods — Les saveurs de chez nous

**Z Foods** est une Single Page Application (SPA) de haut standing conçue pour un restaurant de cuisine congolaise authentique à **Lubumbashi (RDC)**. Dirigé par la cheffe **Maman Jeannine Zialo**, le projet allie tradition culinaire et modernité numérique.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-CDN-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## 🌟 Fonctionnalités Clés

- **Menu Dynamique intelligent** : Détection automatique du jour actuel pour afficher le menu correspondant (Lundi-Vendredi).
- **Galerie de Plats Interactive** : Système de visualisation multi-images pour découvrir les combinaisons quotidiennes (A+B+C).
- **Architecture "Frictionless"** : Transformation immédiate des visiteurs en clients via l'intégration directe WhatsApp et Click-to-Call.
- **Services de Prestige** : Sections dédiées pour le service Traiteur (week-end) et les formations en cuisine culinaire.
- **Preuve Sociale** : Section témoignages intégrée pour renforcer la crédibilité locale.
- **Optimisation Mobile Totale** : Design pensé pour les réseaux 4G/3G de Lubumbashi (léger et fluide).

---

## 🎨 Design System (Premium)

Le projet utilise une palette de couleurs symbolisant la terre et la fraîcheur :
- **Vert Forêt (#1F5F43)** : Tradition et confiance.
- **Orange Solaire (#E67E22)** : Appétit et dynamisme.
- **Beige Crème (#F5F1E8)** : Pureté et clarté.
- **Animations** : Transitions fluides via **AOS (Animate On Scroll)** pour une expérience utilisateur haut de gamme.

---

## 🛠 Stack Technique

- **Frontend** : React 19 (Functional Components & Hooks).
- **Data Management** : React Context API pour une source de vérité unique (`RestaurantContext`).
- **Styling** : Tailwind CSS avec des fonctions de typographie fluide (`clamp`).
- **Animations** : AOS Library & CSS Keyframes personnalisés.
- **SEO** : Meta tags Open Graph optimisés pour le partage sur WhatsApp et Facebook.

---

## 📋 Règles Métier & Logistique

| Paramètre | Détails |
| :--- | :--- |
| **Prise de commande** | Uniquement entre **08h00 et 12h00**. |
| **Fenêtre de livraison** | Entre **12h00 et 15h00**. |
| **Prix du plat** | Tarif unique et transparent de **10 000 FC**. |
| **Livraison gratuite** | Applicable pour toute commande de **5 plats ou plus**. |
| **Localisation** | Avenue Congo Motors n°11, Arrêt Tshangalele, Lubumbashi. |

---

## 📂 Structure du Projet

```text
Z Foods/
├── components/
│   ├── Header.tsx           # Navigation Slim & Sticky
│   ├── Hero.tsx             # Accueil Impactant & CTA
│   ├── Menu.tsx             # Système de galerie & Sélecteur de jours
│   ├── Services.tsx         # Cartes Traiteur & Formation
│   ├── About.tsx            # Storytelling Cheffe Jeannine
│   ├── Testimonials.tsx     # Section avis clients (Glassmorphism)
│   ├── Contact.tsx          # Maps, Horaires & Localisation
│   ├── Footer.tsx           # Crédits & Réseaux sociaux
│   └── RestaurantContext.tsx # Cerveau de l'application (Données)
├── public/assets/           # Ressources visuelles optimisées
├── App.tsx                  # Chef d'orchestre de la SPA
├── index.html               # Configuration SEO & Scripts tiers
├── metadata.json            # Base de données structurée du restaurant
└── types.ts                 # Contrats de données TypeScript (Strict)
```

---

## ⚙️ Installation et Lancement

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/EhaLotafe/Z-Foods.git
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer en local :**
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Développeur & Agence

Ce projet a été conçu et réalisé par **Eha Lotafe**, Lead Developer chez **Overcome Solution**.

- **Portfolio** : [https://portfolio-overcome-solution-2026.vercel.app/](https://portfolio-overcome-solution-2026.vercel.app/)
- **Contact** : Via le site web de l'agence.
- **Localisation** : Lubumbashi, RDC.

---
© 2025 **Z Foods — Les saveurs de chez nous**. Tous droits réservés.
Propulsé par **Overcome Solution**.