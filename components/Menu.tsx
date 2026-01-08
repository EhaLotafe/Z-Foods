// components/Menu.tsx
import React, { useState, useEffect } from "react";
import { useRestaurant } from "./RestaurantContext";

const Menu: React.FC = () => {
  const { restaurant } = useRestaurant();
  const daysOfWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
  
  // État pour le jour et l'image active
  const [selectedDay, setSelectedDay] = useState("Lundi");
  const [activeImage, setActiveImage] = useState("");

  // 1. Détecter le jour actuel au chargement
  useEffect(() => {
    const today = new Intl.DateTimeFormat('fr-FR', { weekday: 'long' }).format(new Date());
    const capitalizedToday = today.charAt(0).toUpperCase() + today.slice(1);
    if (daysOfWeek.includes(capitalizedToday)) {
      setSelectedDay(capitalizedToday);
    }
  }, []);

  // 2. Trouver la catégorie "Weekly" (Sécurisé)
  const weeklyCategory = restaurant?.menu?.find(cat => 
    cat.id.toLowerCase().includes("weekly")
  );

  // 3. Trouver l'item du jour (Sécurisé)
  const currentDayItem = weeklyCategory?.items?.find(item => 
    item.days.some(d => d.toLowerCase() === selectedDay.toLowerCase())
  );

  // 4. Mettre à jour l'image quand le jour ou l'item change
  useEffect(() => {
    if (currentDayItem?.images && currentDayItem.images.length > 0) {
      setActiveImage(currentDayItem.images[0]);
    }
  }, [selectedDay, currentDayItem]);

  // Si pas de données, on affiche un message neutre au lieu de crasher
  if (!weeklyCategory || !currentDayItem) {
    return <div className="py-20 text-center">Chargement du menu...</div>;
  }

  return (
    <section id="menu" className="py-12 md:py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F5F43] font-poppins mb-2 uppercase">
            Le Menu du Jour
          </h2>
          <p className="text-[#E67E22] font-bold text-lg md:text-xl uppercase tracking-widest">
            10 000 FC <span className="text-xs opacity-60">/ Assiette</span>
          </p>
        </div>

        {/* SÉLECTEUR DE JOURS */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar justify-start md:justify-center">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap text-xs uppercase ${
                selectedDay === day 
                ? "bg-[#1F5F43] text-white shadow-lg" 
                : "bg-white text-[#1F5F43] border border-[#1F5F43]/10"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* AFFICHAGE GALERIE */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-white">
          
          {/* GAUCHE : VISUEL */}
          <div className="w-full lg:w-1/2 p-4 md:p-6 bg-gray-50 flex flex-col">
            <div className="relative h-64 md:h-80 lg:h-[400px] rounded-3xl overflow-hidden mb-4">
              <img
                src={activeImage || currentDayItem?.images?.[0]}
                alt={currentDayItem.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* MINIATURES (Sécurisé avec ?.) */}
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {currentDayItem?.images?.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === img ? "border-[#E67E22] scale-105" : "border-transparent opacity-60"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="miniature" />
                </button>
              ))}
            </div>
          </div>

          {/* DROITE : INFOS */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-4xl font-bold text-[#1F5F43] font-poppins mb-4">
              {currentDayItem.name}
            </h3>
            <p className="text-[#4A2E1B] opacity-80 text-base mb-10 italic">
              "{currentDayItem.description}"
            </p>
            
            <div className="grid grid-cols-3 gap-2 pt-8 border-t border-gray-100 text-center">
               <div>
                 <p className="text-[10px] font-bold text-[#E67E22] uppercase">Base</p>
                 <p className="text-[11px] font-bold">Riz/Foufou/Pommes</p>
               </div>
               <div className="border-x border-gray-100">
                 <p className="text-[10px] font-bold text-[#E67E22] uppercase">Légume</p>
                 <p className="text-[11px] font-bold">Pondu/Madesu</p>
               </div>
               <div>
                 <p className="text-[10px] font-bold text-[#E67E22] uppercase">Viande</p>
                 <p className="text-[11px] font-bold">Poulet/Poisson</p>
               </div>
            </div>
          </div>
        </div>

        {/* SECTION PLATS SPÉCIAUX (Sécurisé avec ?.) */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-[#1F5F43] mb-6 uppercase text-center">Également Disponibles</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {restaurant?.specials?.map((special, index) => (
              <div key={index} className="bg-white/50 p-4 rounded-2xl flex items-center gap-3 border border-white">
                <span className="text-[#E67E22]">✦</span>
                <span className="text-[#4A2E1B] font-bold text-[10px] uppercase">{special}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
           <a href={`tel:${restaurant?.contact?.phone}`} className="bg-[#1F5F43] text-white px-10 py-4 rounded-2xl font-bold text-center uppercase tracking-widest shadow-xl">
              Appeler
           </a>
           <a href={`https://wa.me/${restaurant?.contact?.whatsapp}`} className="bg-[#25D366] text-white px-10 py-4 rounded-2xl font-bold text-center uppercase tracking-widest shadow-xl">
              WhatsApp
           </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;