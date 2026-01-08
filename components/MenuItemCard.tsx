// components/MenuItemCard.tsx
import React from "react";
import { MenuItem } from "../types";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  // Sécurité : on récupère la première image du tableau, ou une image par défaut si vide
  const displayImage = item.images && item.images.length > 0 
    ? item.images[0] 
    : "/assets/placeholder-food.jpg";

  // Formatage du prix pour afficher "10 000 FC"
  const formattedPrice = new Intl.NumberFormat('fr-FR').format(item.price);

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#1F5F43]/5 flex flex-col h-full">
      
      {/* Zone Image avec zoom au survol */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={displayImage}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badge Jour (Prend le premier jour défini) */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#1F5F43] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-sm">
          {item.days[0]}
        </div>

        {/* Badge "Coup de cœur" si Featured */}
        {item.isFeatured && (
          <div className="absolute top-4 left-4 bg-[#E67E22] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-lg animate-pulse">
            ★ Populaire
          </div>
        )}

        {/* Overlay dégradé discret */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F5F43]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Zone Contenu */}
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-[#1F5F43] font-poppins leading-tight mb-3">
          {item.name}
        </h4>

        <p className="text-[#4A2E1B] opacity-70 text-sm leading-relaxed mb-6 flex-grow font-roboto italic">
          "{item.description}"
        </p>

        {/* Pied de carte : Prix et Accompagnements */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-50 mt-auto">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase text-[#4A2E1B] opacity-50 font-bold tracking-widest mb-1">Prix unique</span>
            <span className="text-xl font-black text-[#E67E22]">
              {formattedPrice} <span className="text-xs font-bold">FC</span>
            </span>
          </div>
          
          <div className="flex flex-col items-end">
            <span className="text-[9px] uppercase text-[#4A2E1B] opacity-50 font-bold mb-1">Accompagnement</span>
            <span className="text-[10px] font-bold text-[#1F5F43] bg-[#F5F1E8] px-3 py-1 rounded-lg border border-[#1F5F43]/5">
              Riz / Foufou / Pommes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;