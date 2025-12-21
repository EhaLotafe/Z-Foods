// Contact.tsx
import React from "react";
import { useRestaurant } from "./RestaurantContext";

const Contact: React.FC = () => {
  const { restaurant } = useRestaurant();

  // Formatage du lien WhatsApp avec message pré-rempli
  const whatsappLink = `https://wa.me/${restaurant.contact.whatsapp}?text=${encodeURIComponent(
    `Bonjour Z Foods, je souhaite passer une commande pour aujourd'hui.`
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-6">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F5F43] font-poppins mb-4">
            Contact & Localisation
          </h2>
          <div className="w-24 h-1 bg-[#E67E22] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 1. Bloc Commande & Livraison (Règles Métier) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#1F5F43]">
            <h3 className="text-xl font-bold text-[#1F5F43] mb-6 flex items-center gap-2">
              <span className="text-2xl">🕒</span> Prise de commande
            </h3>
            <ul className="space-y-4 text-[#4A2E1B]">
              <li className="flex justify-between border-b pb-2">
                <span>Commandes :</span>
                <span className="font-bold">{restaurant.contact.hours.orderWindow}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Livraisons :</span>
                <span className="font-bold">{restaurant.contact.hours.deliveryWindow}</span>
              </li>
              <li className="mt-4 p-4 bg-orange-50 rounded-lg text-sm italic border border-orange-100">
                <strong>Règle de livraison :</strong> Gratuite à partir de 5 plats. 
                En dessous, les frais de transport sont à la charge du client.
              </li>
            </ul>
          </div>

          {/* 2. Bloc Actions Directes (Mobile First) */}
          <div className="bg-[#1F5F43] p-8 rounded-2xl shadow-xl text-white flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-6 font-poppins">Prêt à commander ?</h3>
            <div className="flex flex-col w-full gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-4 px-6 rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                <span className="text-xl">💬</span> WhatsApp
              </a>
              <a
                href={`tel:${restaurant.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-3 bg-[#E67E22] text-white font-bold py-4 px-6 rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                <span className="text-xl">📞</span> Appeler pour commander
              </a>
            </div>
            <p className="mt-6 text-sm opacity-80">
              Aucun formulaire web, contact direct uniquement pour garantir la fraîcheur.
            </p>
          </div>

          {/* 3. Bloc Coordonnées & Autres Services */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#E67E22]">
            <h3 className="text-xl font-bold text-[#1F5F43] mb-6 flex items-center gap-2">
              <span className="text-2xl">📍</span> Nous trouver
            </h3>
            <div className="text-[#4A2E1B] space-y-4">
              <p className="font-bold text-lg leading-snug">
                {restaurant.contact.address}
              </p>
              <p className="text-sm bg-gray-100 p-3 rounded">
                <strong>Référence :</strong> {restaurant.contact.reference}
                <br />Lubumbashi – RDC
              </p>
              
              <div className="pt-4 mt-4 border-t border-gray-100">
                <h4 className="font-bold text-[#E67E22] mb-2 text-sm uppercase">Autres services :</h4>
                <p className="text-sm">
                  <strong>Traiteur :</strong> {restaurant.contact.traiteurPhone}
                </p>
                <p className="text-sm">
                  <strong>Formation :</strong> {restaurant.contact.formationPhone}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer mention locale */}
        <div className="mt-16 text-center text-[#4A2E1B] opacity-60 text-sm">
          <p>© {new Date().getFullYear()} {restaurant.name} – Les saveurs de chez nous. Lubumbashi, RDC.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;