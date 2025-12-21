// About.tsx
import React from "react";
import { useRestaurant } from "./RestaurantContext";

const About: React.FC = () => {
  const { restaurant } = useRestaurant();

  return (
    <section id="about" className="py-20 bg-[#F5F1E8]"> {/* Fond Beige/Crème selon le Design System */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Colonne Image : La Cheffe */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl border-4 border-white">
            <img
              src="/assets/maman-jeannine.jpg" // Assurez-vous d'avoir cette photo
              alt={`La Cheffe ${restaurant.cheffeName} de ${restaurant.name}`}
              className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay décoratif discret */}
            <div className="absolute inset-0 bg-[#1F5F43]/10 group-hover:bg-transparent transition duration-500"></div>
          </div>

          {/* Colonne Texte */}
          <div className="max-w-prose">
            <span className="text-[#E67E22] font-bold uppercase tracking-widest text-sm mb-2 block">
              L'âme de notre cuisine
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1F5F43] font-poppins">
              {restaurant.cheffeName}
            </h2>
            
            <p className="text-lg text-[#4A2E1B] mb-6 leading-relaxed font-roboto">
              Derrière chaque plat de <strong>{restaurant.name}</strong> se cache le savoir-faire et la passion de Maman Jeannine. Forte de plusieurs années d'expérience, elle s'est donné pour mission de préserver 
              <span className="text-[#1F5F43] font-semibold"> "les saveurs de chez nous"</span>.
            </p>

            <p className="text-lg text-[#4A2E1B] mb-6 leading-relaxed font-roboto">
              Ici, à Lubumbashi, nous ne faisons pas que cuisiner ; nous partageons un héritage. Que ce soit pour un repas d'entreprise, un déjeuner en famille ou pour les étudiants pressés, Maman Jeannine garantit un goût authentique, comme à la maison.
            </p>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[#E67E22] shadow-sm mb-8">
              <p className="italic text-[#4A2E1B]">
                "Ma cuisine est une invitation au voyage au cœur de nos traditions congolaises. Chaque ingrédient est choisi avec soin pour vous offrir le meilleur de notre terre."
              </p>
            </div>

            {/* Boutons d'action adaptés au contexte local */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="bg-[#1F5F43] text-white font-bold py-4 px-8 rounded-full hover:bg-[#164a34] transition-all shadow-md hover:shadow-lg"
              >
                Découvrir le Menu du Jour
              </a>
              <a
                href={`https://wa.me/${restaurant.contact.whatsapp}`}
                className="bg-[#E67E22] text-white font-bold py-4 px-8 rounded-full hover:bg-[#cf711f] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Discuter avec nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;