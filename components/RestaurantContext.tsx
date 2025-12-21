// RestaurantContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { Metadata } from '../types';

const Z_FOODS_DATA: Metadata = {
  name: "Z Foods",
  slogan: "Les saveurs de chez nous",
  cheffeName: "Maman Jeannine Zialo",
  restaurantId: "z-foods-lubum",
  developedBy: "Eha Lotafe", // Mis à jour avec ton nom
  description: "Authentique cuisine congolaise à Lubumbashi. Plats faits maison, service traiteur pour vos événements et formations culinaires professionnelles.",
  seo: {
    keywords: ["Restaurant Lubumbashi", "Cuisine Congolaise", "Pondu", "Tshaka Madesu", "Z Foods", "Traiteur Lubumbashi"],
    author: "Z Foods",
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
    reference: "arrêt Tshangalele, Carrefour",
    hours: {
      orderWindow: "08h00 - 12h00",
      deliveryWindow: "12h00 - 15h00"
    }
  },
  social: [
    { name: "WhatsApp", url: "https://wa.me/243817317189" },
    { name: "Facebook", url: "#" } // À remplir si existant
  ],
  menu: [
    {
      id: "weekly",
      name: "Menu de la semaine",
      description: "Nos plats signatures accompagnés de Riz ou Foufou.",
      items: [
        {
          itemId: "m1",
          name: "Pondu Thompson & Matembele",
          description: "La richesse des feuilles de manioc associée au poisson Thompson et aux feuilles de patates douces (Matembele).",
          price: 10000,
          imageUrl: "/assets/pondu-thompson.jpg", // Assure-toi que le nom correspond à tes fichiers dans /public/assets/
          days: ["Lundi", "Jeudi"],
          isFeatured: true
        },
        {
          itemId: "m2",
          name: "Tshaka Madesu",
          description: "Un mélange traditionnel et onctueux de haricots et de feuilles de manioc pilées.",
          price: 10000,
          imageUrl: "/assets/tshaka-madesu.jpg",
          days: ["Mardi", "Vendredi"],
          isFeatured: true
        },
        {
          itemId: "m3",
          name: "Haricots + Pondu",
          description: "Le mariage parfait des haricots rouges et du pondu frais pour un milieu de semaine plein d'énergie.",
          price: 10000,
          imageUrl: "/assets/haricots-pondu.jpg",
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
    "Banane plantain"
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