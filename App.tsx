// App.tsx
import React from "react";
import { RestaurantProvider } from "./components/RestaurantContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials"; // Ajouté !
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <RestaurantProvider>
      <div className="bg-[#F5F1E8] text-[#4A2E1B] font-roboto scroll-smooth selection:bg-[#E67E22] selection:text-white">
        
        {/* Navigation */}
        <Header />

        <main>
          {/* 1. Accueil & CTA */}
          <Hero />

          {/* 2. Menu du Jour & Galerie Dynamique */}
          <Menu />

          {/* 3. Services (Traiteur & Formation) */}
          <Services />

          {/* 4. Histoire & Cheffe */}
          <About />

          {/* 5. Preuve Sociale (Confiance) */}
          <Testimonials />

          {/* 6. Localisation & Contact */}
          <Contact />
        </main>

        {/* Footer & Crédits */}
        <Footer />

      </div>
    </RestaurantProvider>
  );
};

export default App;