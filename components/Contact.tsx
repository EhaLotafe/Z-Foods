// components/Contact.tsx
import React from "react";
import { useRestaurant } from "./RestaurantContext";

const Contact: React.FC = () => {
  const { restaurant } = useRestaurant();

  const whatsappLink = `https://wa.me/${restaurant.contact.whatsapp}?text=${encodeURIComponent(
    `Bonjour Z Foods, je souhaite passer une commande pour aujourd'hui.`
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#F5F1E8]" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <span className="text-[#E67E22] font-black uppercase tracking-[0.3em] text-xs mb-3 block">
            Nous trouver
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F5F43] font-poppins mb-4 uppercase">
            Contact & Localisation
          </h2>
          <div className="w-20 h-1.5 bg-[#E67E22] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. Bloc Commande & Livraison */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border-t-8 border-[#1F5F43]" data-aos="fade-right">
            <h3 className="text-xl font-bold text-[#1F5F43] mb-6 flex items-center gap-3 font-poppins">
              <span className="bg-[#F5F1E8] p-2 rounded-lg text-2xl">🕒</span> Prise de commande
            </h3>
            <ul className="space-y-4 text-[#4A2E1B]">
              <li className="flex justify-between border-b border-gray-100 pb-2 text-sm md:text-base">
                <span className="opacity-70">Commandes :</span>
                <span className="font-black text-[#1F5F43]">{restaurant.contact.hours.orderWindow}</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2 text-sm md:text-base">
                <span className="opacity-70">Livraisons :</span>
                <span className="font-black text-[#1F5F43]">{restaurant.contact.hours.deliveryWindow}</span>
              </li>
              <li className="mt-6 p-5 bg-orange-50 rounded-2xl text-xs md:text-sm italic border border-orange-100 text-[#4A2E1B]">
                <strong className="text-[#E67E22] uppercase block mb-1">Livraison :</strong> 
                Gratuite dès 5 plats. En dessous, frais de transport à charge du client.
              </li>
            </ul>
          </div>

          {/* 2. Bloc Actions Directes (L'aimant à clics) */}
          <div className="bg-[#1F5F43] p-10 rounded-[2.5rem] shadow-2xl text-white flex flex-col justify-center items-center text-center transform lg:scale-105 z-10" data-aos="zoom-in">
            <h3 className="text-2xl font-bold mb-8 font-poppins uppercase tracking-wider leading-tight">
              Prêt à savourer <br/>votre plat ?
            </h3>
            <div className="flex flex-col w-full gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-black py-5 px-6 rounded-2xl hover:bg-[#1fae54] transition-all shadow-xl uppercase text-xs tracking-widest"
              >
                💬 WhatsApp Direct
              </a>
              <a
                href={`tel:${restaurant.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-3 bg-[#E67E22] text-white font-black py-5 px-6 rounded-2xl hover:bg-[#cf711f] transition-all shadow-xl uppercase text-xs tracking-widest"
              >
                📞 Appeler maintenant
              </a>
            </div>
          </div>

          {/* 3. Bloc Coordonnées & Autres Services */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border-t-8 border-[#E67E22]" data-aos="fade-left">
            <h3 className="text-xl font-bold text-[#1F5F43] mb-6 flex items-center gap-3 font-poppins">
              <span className="bg-[#F5F1E8] p-2 rounded-lg text-2xl">📍</span> Localisation
            </h3>
            <div className="text-[#4A2E1B] space-y-4">
              <div>
                <p className="font-black text-lg text-[#1F5F43] leading-tight mb-2">
                  {restaurant.contact.address}
                </p>
                <p className="text-sm bg-[#F5F1E8] p-4 rounded-xl italic opacity-80 border border-[#1F5F43]/5">
                  <strong>Référence :</strong> {restaurant.contact.reference}
                  <br />Lubumbashi – RDC
                </p>
                
                {/* BOUTON GOOGLE MAPS */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Avenue+Congo+Motors+11+Lubumbashi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-[#1F5F43]/5 text-[#1F5F43] hover:text-[#E67E22] font-black py-3 px-6 rounded-xl transition-all text-xs uppercase tracking-tighter"
                >
                  📍 Voir sur Google Maps
                </a>
              </div>
              
              <div className="pt-6 mt-6 border-t border-gray-100">
                <h4 className="font-black text-[#E67E22] mb-3 text-[10px] uppercase tracking-widest">Supports clients :</h4>
                <div className="space-y-2 text-xs font-bold">
                  <p className="flex justify-between">
                    <span className="opacity-50">Traiteur :</span> 
                    <span>{restaurant.contact.traiteurPhone}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="opacity-50">Formation :</span> 
                    <span>{restaurant.contact.formationPhone}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Note locale finale */}
        <div className="mt-16 text-center text-[#4A2E1B] opacity-40 text-[10px] font-bold uppercase tracking-[0.4em]">
           {restaurant.name} — Lubumbashi, Haut-Katanga
        </div>
      </div>
    </section>
  );
};

export default Contact;