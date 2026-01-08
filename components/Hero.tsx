// components/Hero.tsx
import React from "react";
import { useRestaurant } from "./RestaurantContext";

interface ActionButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  delay?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ href, label, variant = "primary", icon, delay }) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-3 font-black px-8 py-4 rounded-2xl shadow-xl transition-all duration-500 transform hover:scale-105 active:scale-95 text-xs md:text-sm uppercase tracking-widest w-full sm:w-auto";

  const variantClasses =
    variant === "primary"
      ? "bg-[#E67E22] text-white hover:bg-white hover:text-[#E67E22] shadow-orange-900/20"
      : "bg-white/10 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white hover:text-[#1F5F43]";

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`} data-aos="fade-up" data-aos-delay={delay}>
      {icon}
      {label}
    </a>
  );
};

const Hero: React.FC = () => {
  const { restaurant } = useRestaurant();

  const whatsappLink = `https://wa.me/${restaurant.contact.whatsapp}?text=${encodeURIComponent(
    `Bonjour Z Foods, je souhaite commander le menu du jour.`
  )}`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-16 lg:pt-20 lg:pb-0 overflow-hidden"
      style={{
        backgroundColor: "#1F5F43",
        backgroundImage: "linear-gradient(rgba(31, 95, 67, 0.88), rgba(31, 95, 67, 0.96)), url('/assets/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* --- DÉCORATIONS --- */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#E67E22] opacity-10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-white opacity-5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- TEXTE GAUCHE --- */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div 
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-8"
              data-aos="fade-down"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E67E22] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E67E22]"></span>
              </span>
              {restaurant.seo.geoCity} • Livraison Express
            </div>

            <h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white font-poppins tracking-tighter"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {restaurant.slogan.split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase().includes('saveur') ? 'text-[#E67E22]' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p 
              className="mt-8 text-white/70 max-w-xl mx-auto lg:mx-0 text-base md:text-xl leading-relaxed font-medium"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Découvrez l'authenticité de la cuisine congolaise à Lubumbashi. 
              Des plats faits maison, préparés avec passion par <strong>{restaurant.cheffeName}</strong>.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <ActionButton
                href={whatsappLink}
                label="Commander WhatsApp"
                delay="300"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                }
              />
              <ActionButton
                href={`tel:${restaurant.contact.phone.replace(/\s/g, "")}`}
                label="Appeler l'équipe"
                variant="secondary"
                delay="400"
                icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                }
              />
            </div>

            <div className="mt-12 p-6 border-l-4 border-[#E67E22] bg-white/5 backdrop-blur-md max-w-md mx-auto lg:mx-0 rounded-r-2xl" data-aos="fade-up" data-aos-delay="500">
                <p className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-widest mb-1">Horaires de commande</p>
                <p className="text-white font-medium italic">
                    Prise de commande de <span className="text-[#E67E22]">{restaurant.contact.hours.orderWindow}</span>.
                    <br/>Livraison gratuite dès 5 plats !
                </p>
            </div>
          </div>

          {/* --- IMAGE DROITE --- */}
          <div className="flex order-1 lg:order-2 items-center justify-center relative px-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] aspect-square rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-8 border-white/10 group">
              <img
                src="/assets/featured-plate1.png"
                alt="Plat Vedette Z Foods"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Badge Prix */}
              <div className="absolute top-6 right-6 bg-[#E67E22] text-white px-6 py-3 rounded-2xl font-black text-xl md:text-2xl shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform">
                10 000 <span className="text-xs uppercase font-bold">FC</span>
              </div>

              {/* Overlay Info */}
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#1F5F43] via-[#1F5F43]/40 to-transparent">
                <h3 className="text-2xl font-black text-white font-poppins tracking-tight">Le Menu du Jour</h3>
                <p className="text-white/70 mt-1 text-sm font-medium">Composez votre assiette sur-mesure.</p>
              </div>
            </div>
            
            {/* Décoration autour du plat */}
            <div className="absolute -z-10 w-full h-full bg-[#E67E22]/20 blur-[100px] rounded-full scale-110 animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;