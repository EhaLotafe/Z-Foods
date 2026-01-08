// components/Header.tsx
import React, { useState, useEffect } from "react";
import { useRestaurant } from "./RestaurantContext";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { restaurant } = useRestaurant();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#menu", label: "Menu" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "La Cheffe" },
    { href: "#testimonials", label: "Avis" },
    { href: "#contact", label: "Contact" },
  ];

  const whatsappLink = `https://wa.me/${restaurant.contact.whatsapp}?text=${encodeURIComponent(
    `Bonjour Z Foods, je souhaite passer une commande.`
  )}`;

  return (
    <>
      {/* Overlay mobile */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1F5F43] ${
          isScrolled ? "py-2 shadow-xl" : "py-4 md:py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* --- LOGO --- */}
          <a href="#" className="flex items-center relative z-[51]">
            <h1 className="text-xl md:text-3xl font-black font-poppins tracking-tighter text-white leading-none">
              Z<span className="text-[#E67E22]">FOODS</span>
            </h1>
          </a>

          {/* --- NAVIGATION DESKTOP (Plus grande et plus visible) --- */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#E67E22] font-bold text-sm uppercase tracking-wider transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E67E22] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E67E22] text-white font-black py-3 px-7 rounded-2xl hover:bg-white hover:text-[#E67E22] transition-all shadow-lg text-xs uppercase tracking-widest"
            >
              Commander
            </a>
          </nav>

          {/* --- ACTIONS MOBILE --- */}
          <div className="flex lg:hidden items-center gap-4 relative z-[51]">
            <a
              href={whatsappLink}
              className="bg-[#25D366] p-2.5 rounded-xl text-white shadow-md active:scale-90 transition-transform"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-7 flex flex-col items-end gap-1.5">
                <span className={`h-1 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "w-full rotate-45 translate-y-2.5" : "w-full"}`}></span>
                <span className={`h-1 bg-[#E67E22] rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-full"}`}></span>
                <span className={`h-1 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "w-full -rotate-45 -translate-y-2.5" : "w-full"}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* --- MENU MOBILE --- */}
        <div 
          className={`lg:hidden absolute top-0 left-0 w-full bg-[#1F5F43] shadow-2xl transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          } pt-24 pb-10 overflow-hidden`}
        >
          <nav className="flex flex-col items-center space-y-7">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-2xl font-bold font-poppins uppercase tracking-tight"
              >
                {link.label}
              </a>
            ))}
            <a 
              href={whatsappLink}
              className="bg-[#E67E22] text-white text-center py-4 px-12 rounded-[2rem] font-black text-lg uppercase tracking-widest shadow-xl active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Commander
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;