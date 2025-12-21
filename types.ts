// types.ts

export type BusinessHours = {
  orderWindow: string;    // ex: "08h00 - 12h00"
  deliveryWindow: string; // ex: "12h00 - 15h00"
};

export type ContactInfo = {
  whatsapp: string;       // Format: "243XXXXXXXXX" (sans le + pour l'API)
  phone: string;          // Format affichage: "+243 XXX XXX XXX"
  traiteurPhone: string;
  formationPhone: string;
  address: string;
  reference: string;
  hours: BusinessHours;
};

export type SocialLink = {
  name: string;
  url: string;
};

export type MenuItem = {
  itemId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  days: string[]; // ex: ["Lundi", "Jeudi"]
  isFeatured: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
};

export type SpecialDish = string;

export type Metadata = {
  name: string;
  slogan: string;
  cheffeName: string;
  restaurantId: string;
  developedBy: string;
  description: string;
  seo: {
    keywords: string[];
    author: string;
    geoRegion: string;
    geoCity: string;
    target: string;
  };
  contact: ContactInfo;
  social: SocialLink[];
  menu: MenuCategory[];
  specials: SpecialDish[];
};