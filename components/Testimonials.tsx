// components/Testimonials.tsx
import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    { 
      name: "Jean-Luc K.", 
      content: "Le meilleur Pondu de Lubumbashi. Livraison toujours à l'heure au bureau. Une équipe très professionnelle !" 
    },
    { 
      name: "Eha Lotafe", 
      content: "La meilleure cuisine de Lubumbashi, authentique et savoureuse. Le goût de chez nous est vraiment là." 
    },
    { 
      name: "Mireille T.", 
      content: "Excellente formation en cuisine. J'ai beaucoup appris sur les spécialités locales et internationales en seulement 4 semaines." 
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#1F5F43] text-white relative overflow-hidden">
      {/* Éléments de décoration en arrière-plan */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E67E22] opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-[0.02] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <span className="text-[#E67E22] font-black uppercase tracking-[0.3em] text-xs mb-3 block">
            Confiance & Qualité
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6 uppercase">
            Ce que disent nos clients
          </h2>
          <div className="w-20 h-1.5 bg-[#E67E22] mx-auto rounded-full"></div>
        </div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between hover:bg-white/20 transition-all duration-300"
            >
              {/* Icône de citation */}
              <div className="text-[#E67E22] text-5xl font-serif mb-4 leading-none">“</div>
              
              <p className="mb-8 text-lg md:text-xl italic leading-relaxed opacity-90 font-roboto">
                {t.content}
              </p>
              
              {/* Infos Client */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 bg-[#E67E22] text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#E67E22] tracking-widest uppercase text-sm">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-white/50 uppercase tracking-tighter">Client vérifié</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note de bas de section */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm italic">
            Rejoignez nos centaines de clients satisfaits à Lubumbashi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;