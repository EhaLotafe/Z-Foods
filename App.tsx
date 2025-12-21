// App.tsx
import React from "react";
import { RestaurantProvider } from "./components/RestaurantContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    // On enveloppe toute l'application avec le Provider pour que useRestaurant() fonctionne partout
    <RestaurantProvider>
      <div className="bg-[#F5F1E8] text-[#4A2E1B] font-roboto scroll-smooth selection:bg-[#E67E22] selection:text-white">
        
        {/* Barre de navigation fixe */}
        <Header />

        <main>
          {/* 1. Accueil & CTA WhatsApp */}
          <Hero />

          {/* 2. Menu Hebdomadaire (Lundi-Vendredi) + Plats Spéciaux */}
          <Menu />
          {/* 3. Services Complémentaires (Traiteur & Formation) */}
          <Services />
          {/* 3. La Cheffe (Maman Jeannine) */}
          <About />

          {/* 4. Contact, Localisation & Services (Traiteur/Formation) */}
          <Contact />
        </main>

        {/* 5. Crédits & Liens Sociaux */}
        <Footer />

      </div>
    </RestaurantProvider>
  );
};

export default App;