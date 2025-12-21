// components/Services.tsx
import React from "react";
import { useRestaurant } from "./RestaurantContext";

const Services: React.FC = () => {
  const { restaurant } = useRestaurant();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F5F43] font-poppins mb-4">
            Nos Services Complémentaires
          </h2>
          <p className="text-[#4A2E1B] opacity-70">Au-delà du repas quotidien, nous vous accompagnons dans vos projets.</p>
          <div className="w-24 h-1 bg-[#E67E22] mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* SERVICE TRAITEUR */}
          <div className="group bg-[#F5F1E8] p-8 rounded-3xl border-b-8 border-[#1F5F43] hover:shadow-2xl transition-all duration-500">
            <div className="text-5xl mb-6">👨‍🍳</div>
            <h3 className="text-2xl font-bold text-[#1F5F43] mb-4 font-poppins text-wrap">
              Service Traiteur (Week-end)
            </h3>
            <p className="text-[#4A2E1B] mb-6 leading-relaxed">
              Le restaurant se transforme pour vos événements privés. Mariages, anniversaires ou réunions professionnelles : nous préparons et servons vos menus préférés avec rigueur.
            </p>
            <div className="bg-white/50 p-4 rounded-xl mb-6 text-sm italic border border-[#1F5F43]/10">
              Disponible uniquement Samedi et Dimanche.
            </div>
            <a 
              href={`tel:${restaurant.contact.traiteurPhone.replace(/\s/g, "")}`}
              className="inline-block bg-[#1F5F43] text-white font-bold py-3 px-8 rounded-full hover:bg-[#E67E22] transition-colors"
            >
              Réserver : {restaurant.contact.traiteurPhone}
            </a>
          </div>

          {/* FORMATION EN CUISINE */}
          <div className="group bg-[#F5F1E8] p-8 rounded-3xl border-b-8 border-[#E67E22] hover:shadow-2xl transition-all duration-500">
            <div className="text-5xl mb-6">🎓</div>
            <h3 className="text-2xl font-bold text-[#1F5F43] mb-4 font-poppins">
              Formation en Cuisine
            </h3>
            <p className="text-[#4A2E1B] mb-6 leading-relaxed">
              Apprenez les secrets de la cuisine congolaise et internationale avec Maman Jeannine. Une formation pratique de 4 semaines pour devenir un vrai cordon bleu.
            </p>
            <div className="flex justify-between items-center bg-white/50 p-4 rounded-xl mb-6">
              <span className="font-bold text-[#E67E22]">Durée : 4 semaines</span>
              <span className="font-bold text-[#1F5F43]">50$ - 65$</span>
            </div>
            <a 
              href={`https://wa.me/${restaurant.contact.formationPhone.replace(/\D/g, "")}`}
              className="inline-block bg-[#E67E22] text-white font-bold py-3 px-8 rounded-full hover:bg-[#1F5F43] transition-colors"
            >
              S'inscrire via WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;