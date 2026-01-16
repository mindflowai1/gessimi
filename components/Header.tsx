import React, { useState, useEffect } from 'react';
import Button from './Button';
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gold-light/30 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Logo size={scrolled ? 'sm' : 'md'} />

        {/* CTA Button */}
        <div>
          <Button
            href="https://wa.me/5531992284675?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            variant={scrolled ? "primary" : "outline"}
            className={!scrolled ? "border-warm-grey/30 text-warm-grey hover:bg-white/90 hover:border-gold-butterfly" : ""}
          >
            Agendar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;