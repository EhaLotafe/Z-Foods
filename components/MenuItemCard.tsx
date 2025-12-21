// components/MenuItemCard.tsx
import React from "react";
import { MenuItem } from "../types";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  // Formatage du prix pour afficher "10 000 FC"
  const formattedPrice = new Intl.NumberFormat('fr-FR').format(item.price as number);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#1F5F43]/5 flex flex-col h-full">
      
      {/* Zone Image avec zoom au survol */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badge "Choix de la Cheffe" si Featured */}
        {item.isFeatured && (
          <div className="absolute top-4 left-4 bg-[#1F5F43] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
            Coup de cœur
          </div>
        )}

        {/* Overlay dégradé discret */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Zone Contenu */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-[#1F5F43] font-poppins leading-tight">
            {item.name}
          </h4>
        </div>

        <p className="text-[#4A2E1B] opacity-70 text-sm leading-relaxed mb-6 flex-grow font-roboto">
          {item.description}
        </p>

        {/* Pied de carte : Prix et Indicateur d'accompagnement */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-[#4A2E1B] opacity-50 font-bold tracking-tighter">Prix du plat</span>
            <span className="text-xl font-extrabold text-[#E67E22]">
              {formattedPrice} <span className="text-sm">FC</span>
            </span>
          </div>
          
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase text-[#4A2E1B] opacity-50 font-bold">Inclus</span>
            <span className="text-[11px] font-medium text-[#1F5F43] bg-[#1F5F43]/5 px-2 py-0.5 rounded italic">
              Riz ou Foufou
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;