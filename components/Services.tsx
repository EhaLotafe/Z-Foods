// components/Services.tsx
import React from "react";
import { useRestaurant } from "./RestaurantContext";

const Services: React.FC = () => {
  const { restaurant } = useRestaurant();

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* En-tête de section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F5F43] font-poppins mb-4 uppercase">
            Nos Services
          </h2>
          <div className="w-20 h-1.5 bg-[#E67E22] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* --- CARTE SERVICE TRAITEUR (Immersive) --- */}
          <div className="relative overflow-hidden rounded-[2.5rem] group h-[450px] shadow-xl">
            {/* Image de fond avec zoom au survol */}
            <img 
              src="/assets/service-traiteur.jpg" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              alt="Service Traiteur Z Foods" 
            />
            {/* Overlay dégradé pour la lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F5F43] via-[#1F5F43]/40 to-transparent"></div>
            
            {/* Contenu de la carte */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
              <span className="bg-[#E67E22] w-fit px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                Événementiel
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
                Service Traiteur
              </h3>
              <p className="mb-8 opacity-90 text-sm md:text-base max-w-md leading-relaxed">
                Mariages, anniversaires ou réunions professionnelles. Nous transformons vos événements en moments inoubliables avec le goût authentique de chez nous.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a 
                  href={`tel:${restaurant.contact.traiteurPhone.replace(/\s/g, "")}`} 
                  className="bg-[#E67E22] text-white w-full sm:w-auto text-center px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-[#E67E22] transition-all shadow-lg"
                >
                  Réserver : {restaurant.contact.traiteurPhone}
                </a>
                <span className="text-[10px] uppercase font-bold opacity-70 tracking-tighter">
                  Disponible Samedi & Dimanche
                </span>
              </div>
            </div>
          </div>

          {/* --- CARTE FORMATION (Stylisée Atelier) --- */}
          <div className="bg-[#F5F1E8] p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-center border-2 border-dashed border-[#1F5F43]/20 relative shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <span className="text-[#E67E22] font-black uppercase tracking-[0.3em] text-xs mb-2 block">
                Transmission & Passion
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1F5F43] font-poppins mb-4">
                Formation en Cuisine
              </h3>
            </div>
            
            <p className="text-[#4A2E1B] text-lg md:text-xl mb-8 leading-relaxed italic opacity-80">
              "Apprenez les secrets de Maman Jeannine et maîtrisez l'art de la cuisine congolaise et internationale."
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <p className="text-[10px] uppercase font-bold text-[#E67E22] mb-1">Durée</p>
                <p className="text-[#1F5F43] font-bold">4 Semaines</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <p className="text-[10px] uppercase font-bold text-[#E67E22] mb-1">Tarif</p>
                <p className="text-[#1F5F43] font-bold">50$ - 65$</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm col-span-2">
                <p className="text-[10px] uppercase font-bold text-[#E67E22] mb-1">Lieu</p>
                <p className="text-[#1F5F43] font-bold">Lubumbashi (Au restaurant)</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href={`https://wa.me/${restaurant.contact.formationPhone.replace(/\D/g, "")}`} 
                className="bg-[#1F5F43] text-white text-center py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-[#E67E22] transition-all shadow-lg"
              >
                S'inscrire via WhatsApp
              </a>
              <p className="text-center text-[10px] text-[#4A2E1B] opacity-50 uppercase font-bold">
                Contact direct : {restaurant.contact.formationPhone}
              </p>
            </div>

            {/* Décoration icône en fond */}
            <div className="absolute -bottom-6 -right-6 text-9xl opacity-[0.03] pointer-events-none rotate-12">
              🍳
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;