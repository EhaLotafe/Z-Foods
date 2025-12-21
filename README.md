
# 🥘 Z Foods — Les saveurs de chez nous

**Z Foods** est une Single Page Application (SPA) moderne conçue pour un restaurant de cuisine congolaise authentique basé à **Lubumbashi (RDC)**. Le projet met en avant le savoir-faire de la cheffe **Maman Jeannine Zialo** et facilite la prise de commande directe.

---

## 🚀 Vision du Projet

L'objectif de Z Foods est de digitaliser l'accès aux saveurs locales avec une interface simple, chaleureuse et ultra-efficace sur mobile. 

- **Cible :** Entreprises, familles et étudiants de Lubumbashi.
- **Canaux de vente :** WhatsApp et Appel téléphonique uniquement (Pas de paiement en ligne).
- **Concept Menu :** Système de combinaisons quotidiennes (Base + Accompagnement + Protéine).

---

## 🎨 Design System

Le design respecte l'identité visuelle "Terre & Nature" du restaurant :
- **Vert Foncé (#1F5F43) :** Confiance, fraîcheur et tradition.
- **Orange Chaud (#E67E22) :** Appétit, énergie et soleil.
- **Beige Crème (#F5F1E8) :** Douceur et clarté.
- **Typographies :** `Poppins` (Titres) & `Roboto` (Corps).

---

## 🛠 Stack Technique

- **Framework :** [React 19](https://react.dev/)
- **Langage :** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool :** [Vite 6](https://vitejs.dev/)
- **Styling :** [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- **Gestion d'état :** React Context API (`RestaurantContext`)

---

## 📋 Règles Métier (Business Rules)

| Règle | Détail |
| :--- | :--- |
| **Commandes** | De 08h00 à 12h00 maximum. |
| **Livraisons** | De 12h00 à 15h00. |
| **Prix Unique** | 10 000 FC le plat standard. |
| **Logistique** | Livraison gratuite dès 5 plats commandés. |
| **Services** | Traiteur (Week-end) et Formation (4 semaines). |

---

## 📂 Structure des Fichiers

Le projet est structuré de manière plate pour une maintenance rapide :

```text
Z Foods/
├── components/
│   ├── About.tsx            # Présentation de Maman Jeannine
│   ├── Contact.tsx          # Localisation & Horaires
│   ├── Footer.tsx           # Crédits & Réseaux sociaux
│   ├── Header.tsx           # Navigation & Logo
│   ├── Hero.tsx             # Accueil & CTA WhatsApp
│   ├── Menu.tsx             # Menu hebdomadaire (A+B+C)
│   ├── MenuItemCard.tsx     # Cartes des plats
│   ├── RestaurantContext.tsx # Source de vérité (Données)
│   └── Services.tsx         # Formation & Traiteur
├── public/assets/           # Photos des plats & de la cheffe
├── App.tsx                  # Assemblage de la SPA
├── index.html               # Point d'entrée & Design global
├── index.tsx                # Initialisation React
├── metadata.json            # Base de données du restaurant
├── types.ts                 # Définitions TypeScript
└── tsconfig.json            # Configuration TypeScript (Mode Strict)
⚙️ Installation et Lancement

Cloner le projet :

git clone [url-du-repo]

Installer les dépendances :


npm install

Lancer le serveur de développement :

npm run dev

Accéder au site :
Ouvrez http://localhost:3000 (ou l'adresse IP affichée dans le terminal).

👨‍💻 Développeur

Réalisé avec passion par Eha Lotafe — Overcome Solution.

Portfolio : https://portfolio-overcome-solution-2026.vercel.app/

Localisation : Lubumbashi, RDC.

© 2025 Z Foods — Tous droits réservés.
