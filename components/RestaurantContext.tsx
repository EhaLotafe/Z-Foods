// RestaurantContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { Metadata } from '../types';

const Z_FOODS_DATA: Metadata = {
  name: "Z Foods",
  slogan: "Les saveurs de chez nous",
  cheffeName: "Maman Jeannine Zialo",
  restaurantId: "z-foods-lubum",
  developedBy: "Eha Lotafe — Overcome Solution",
  description: "Authentique cuisine congolaise à Lubumbashi. Plats faits maison, service traiteur et formations culinaires professionnelles.",
  seo: {
    keywords: ["Restaurant Lubumbashi", "Cuisine Congolaise", "Pondu", "Tshaka Madesu", "Z Foods", "Maman Jeannine"],
    author: "Eha Lotafe",
    geoRegion: "CD-HK",
    geoCity: "Lubumbashi",
    target: "Local"
  },
  contact: {
    whatsapp: "243817317189",
    phone: "+243 817 317 189",
    traiteurPhone: "+243 817 317 189",
    formationPhone: "+243 993 033 321",
    address: "Avenue Congo Motors n°11",
    reference: "Arrêt Tshangalele, Carrefour",
    hours: {
      orderWindow: "08h00 - 12h00",
      deliveryWindow: "12h00 - 15h00"
    }
  },
  social: [
    { name: "WhatsApp", url: "https://wa.me/243817317189" },
    { name: "Facebook", url: "#" }
  ],
  menu: [
    {
      id: "weekly",
      name: "Menu de la semaine",
      description: "Composez votre assiette : Base + Légume + Viande au choix.",
      items: [
        {
          itemId: "m1",
          name: "Lundi & Jeudi : Pondu, Matembele & Ndunda",
          description: "Le festival des légumes verts. Combinez avec Riz, Foufou ou Pommes sautées et votre protéine (Thompson, Poulet ou Viande).",
          price: 10000,
          images: [
            "/assets/pondu.jpg",
            "/assets/pondu-fufu-thompson.jpg",
            "/assets/legumesvert.jpg",
            "/assets/ndunda.jpg",
            "/assets/thompson.jpg"
          ],
          days: ["Lundi", "Jeudi"],
          isFeatured: true
        },
        {
          itemId: "m2",
          name: "Mardi & Vendredi : Spécial Tshaka Madesu",
          description: "L'onctuosité du mélange feuilles de manioc et haricots. Servi avec Riz, Foufou ou Pommes sautées et Thompson ou Poulet.",
          price: 10000,
          images: [
            "/assets/plat-tshaka-madesu.jpg",
            "/assets/tshaka-madesu.jpg",
            "/assets/tshaka_madesu.jpg",
            "/assets/thompson.jpg"
          ],
          days: ["Mardi", "Vendredi"],
          isFeatured: true
        },
        {
          itemId: "m3",
          name: "Mercredi : Duo Madesu ou Pondu",
          description: "Des haricots ou du pondu frais. Accompagnement Riz, Foufou ou Pommes sautées au choix.",
          price: 10000,
          images: [
            "/assets/riz-madesu.jpg",
            "/assets/madesu.jpg",
            "/assets/pondu.jpg"
          ],
          days: ["Mercredi"],
          isFeatured: true
        }
      ]
    }
  ],
  specials: [
    "Pommes de terre (sautées, frites, salade)",
    "Fumbwa",
    "Mikebuka",
    "Limbondo",
    "Liboke",
    "Banane plantain",
    "Mbinzo",
    "etc."
  ]
};

type RestaurantContextType = {
  restaurant: Metadata;
};

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined);

export const RestaurantProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <RestaurantContext.Provider value={{ restaurant: Z_FOODS_DATA }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = (): RestaurantContextType => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurant must be used within a RestaurantProvider');
  }
  return context;
};