// components/Menu.tsx
import React from "react";
import { useRestaurant } from "./RestaurantContext";
import MenuItemCard from "./MenuItemCard";

const Menu: React.FC = () => {
  const { restaurant } = useRestaurant();

  // Recherche du menu hebdomadaire
  const weeklyMenu = restaurant.menu.find(cat => cat.id.toLowerCase() === "weekly");

  if (!weeklyMenu) return null;

  return (
    <section id="menu" className="py-12 md:py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* En-tête de section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F5F43] font-poppins mb-4 uppercase">
            Le Menu du Jour
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#E67E22] mx-auto mb-6"></div>
          <p className="text-[#1F5F43] font-extrabold text-xl md:text-2xl">
            Prix unique : 10 000 FC
          </p>
        </div>

        {/* LOGIQUE DE COMBINAISON (A + B + C) - OPTIMISÉE MOBILE */}
        <div className="mb-12 md:mb-20 bg-white p-6 md:p-12 rounded-[2rem] shadow-sm border border-[#1F5F43]/10">
          <h3 className="text-lg md:text-xl font-bold text-[#1F5F43] text-center mb-8 md:mb-10 uppercase tracking-widest">
            Comment composer votre assiette ?
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative">
            {/* Composant A */}
            <div className="text-center w-full md:w-1/3">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1F5F43] text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 shadow-lg shadow-green-900/20">A</div>
              <h4 className="font-bold text-[#E67E22] uppercase text-xs md:text-sm mb-1">La Base</h4>
              <p className="text-sm text-[#4A2E1B]">Riz, Foufou ou <br className="hidden md:block"/> Pommes de terre sautées</p>
            </div>

            {/* Flèche Mobile 1 */}
            <div className="md:hidden text-[#E67E22] animate-bounce">↓</div>

            {/* Composant B */}
            <div className="text-center w-full md:w-1/3">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1F5F43] text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 shadow-lg shadow-green-900/20">B</div>
              <h4 className="font-bold text-[#E67E22] uppercase text-xs md:text-sm mb-1">L'Accompagnement</h4>
              <p className="text-sm text-[#4A2E1B]">Pondu, Matembele ou <br className="hidden md:block"/> Haricots (Madesu)</p>
            </div>

            {/* Flèche Mobile 2 */}
            <div className="md:hidden text-[#E67E22] animate-bounce">↓</div>

            {/* Composant C */}
            <div className="text-center w-full md:w-1/3">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1F5F43] text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 shadow-lg shadow-green-900/20">C</div>
              <h4 className="font-bold text-[#E67E22] uppercase text-sm mb-1">La Viande</h4>
              <p className="text-sm text-[#4A2E1B]">Poulet (Grillé/Brûlé), Thompson, <br className="hidden md:block"/> Viandes ou Saucisses</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-dashed border-gray-200 text-center">
             <p className="text-[#4A2E1B] text-xs md:text-sm italic opacity-80 px-2">
                🌶️ Piment et salade disponibles selon vos préférences lors de la commande.
             </p>
          </div>
        </div>

        {/* Grille du Menu par Jour (Les têtes d'affiche) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
          {weeklyMenu.items.map((item) => (
            <div key={item.itemId} className="flex flex-col">
              <div className="mb-3">
                <span className="bg-[#1F5F43] text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest inline-block">
                  {item.days.join(" & ")}
                </span>
              </div>
              <MenuItemCard item={item} />
            </div>
          ))}
        </div>

        {/* INFO COMMANDE : Pourquoi appeler ? - OPTIMISÉE POUR CLIC MOBILE */}
        <div className="bg-[#1F5F43] p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] text-center text-white shadow-2xl">
          <h3 className="text-xl md:text-3xl font-bold mb-4 font-poppins">
            Vérifiez le menu du jour !
          </h3>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed px-2">
            Les viandes varient chaque matin pour vous garantir une fraîcheur totale. 
            <strong> Appelez-nous entre 08h et 12h</strong> pour connaître la combinaison exacte du jour.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`tel:${restaurant.contact.phone.replace(/\s/g, "")}`}
              className="bg-[#E67E22] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform text-sm"
            >
              Appeler pour commander
            </a>
            <a 
              href={`https://wa.me/${restaurant.contact.whatsapp}`}
              className="bg-white text-[#1F5F43] px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* SECTION PLATS SPÉCIAUX */}
        <div className="mt-20 md:mt-32">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 border-b-2 border-[#1F5F43]/10 pb-6 gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F5F43] font-poppins uppercase">Plats Spéciaux</h3>
              <p className="text-[#E67E22] font-medium italic text-sm mt-1">
                Disponibles sur commande préalable
              </p>
            </div>
            <a 
              href={`https://wa.me/${restaurant.contact.whatsapp}`}
              className="text-[#1F5F43] font-bold border-2 border-[#1F5F43] px-6 py-2 rounded-full hover:bg-[#1F5F43] hover:text-white transition-all text-sm uppercase"
            >
              Commander un spécial
            </a>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {restaurant.specials.map((special, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 border border-[#1F5F43]/5"
              >
                <span className="text-[#E67E22] flex-shrink-0">✦</span>
                <span className="text-[#4A2E1B] font-medium text-sm md:text-base leading-tight">{special}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Menu;