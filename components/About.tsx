// components/About.tsx
import React from "react";
import { useRestaurant } from "./RestaurantContext";

const About: React.FC = () => {
  const { restaurant } = useRestaurant();

  return (
    <section id="about" className="py-20 md:py-32 bg-[#F5F1E8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- COLONNE IMAGE : La Cheffe --- */}
          <div 
            className="relative" 
            data-aos="fade-right"
          >
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border-8 border-white group">
              <img
                src="/assets/maman-jeannine.jpg"
                alt={`La Cheffe ${restaurant.cheffeName} de ${restaurant.name}`}
                className="w-full h-[400px] md:h-[600px] object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5F43]/40 to-transparent opacity-60"></div>
            </div>

            {/* Décoration d'arrière-plan (Cercle Orange) */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E67E22] rounded-full -z-0 opacity-20 blur-2xl"></div>
            {/* Badge d'expérience */}
            <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-gray-50">
                <p className="text-[#1F5F43] font-black text-3xl leading-none">10+</p>
                <p className="text-[#4A2E1B] text-[10px] uppercase font-bold tracking-widest mt-1">Ans d'expertise</p>
            </div>
          </div>

          {/* --- COLONNE TEXTE : L'histoire --- */}
          <div 
            className="flex flex-col" 
            data-aos="fade-left"
          >
            <span className="text-[#E67E22] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              L'âme de notre cuisine
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#1F5F43] font-poppins leading-tight">
              {restaurant.cheffeName}
            </h2>
            
            <div className="space-y-6 text-[#4A2E1B] leading-relaxed font-roboto text-base md:text-lg">
                <p>
                  Derrière chaque saveur de <strong>{restaurant.name}</strong> se cache le savoir-faire ancestral et la passion de Maman Jeannine. Figure respectée de la gastronomie locale à Lubumbashi, elle s'est donné pour mission de préserver 
                  <span className="text-[#1F5F43] font-bold italic"> "les saveurs de chez nous"</span>.
                </p>

                <p>
                  Ici, nous ne faisons pas que cuisiner ; nous partageons un héritage. Que vous soyez un professionnel en pause déjeuner, une famille réunie ou un étudiant pressé, Maman Jeannine garantit un goût authentique, préparé avec la même rigueur qu'à la maison.
                </p>
            </div>

            {/* Citation stylisée */}
            <div className="mt-10 mb-10 relative">
                <span className="absolute -top-6 -left-4 text-6xl text-[#E67E22] opacity-20 font-serif">“</span>
                <div className="bg-white p-8 rounded-[2rem] border-l-8 border-[#E67E22] shadow-sm relative z-10">
                  <p className="italic text-[#4A2E1B] text-base md:text-lg">
                    "Ma cuisine est une invitation au voyage au cœur de nos traditions congolaises. Chaque ingrédient est choisi au marché chaque matin pour vous offrir le meilleur de notre terre."
                  </p>
                </div>
            </div>

            {/* Boutons d'action (Adaptés Mobile) */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#menu"
                className="bg-[#1F5F43] text-white font-bold py-4 px-10 rounded-2xl hover:bg-[#164a34] transition-all shadow-lg hover:shadow-xl text-center uppercase text-xs tracking-widest"
              >
                Découvrir le Menu
              </a>
              <a
                href={`https://wa.me/${restaurant.contact.whatsapp}`}
                className="bg-white text-[#1F5F43] border-2 border-[#1F5F43]/10 font-bold py-4 px-10 rounded-2xl hover:bg-[#1F5F43] hover:text-white transition-all shadow-sm text-center uppercase text-xs tracking-widest flex items-center justify-center gap-3"
              >
                <span>Discuter avec nous</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;