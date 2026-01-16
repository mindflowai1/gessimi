import React, { useState, useEffect } from 'react';
import Button from './Button';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'procedures' },
    { label: 'Resultados', id: 'results' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gold-light/30 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Logo size={scrolled ? 'sm' : 'md'} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative group text-warm-grey hover:text-gold-butterfly transition-colors duration-300 font-medium"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-butterfly to-soft-rose group-hover:w-full transition-all duration-500"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            href="https://wa.me/5531992284675?text=Olá%2C%20gostaria%20de%20agendar%20uma%20avaliação%20personalizada."
            variant={scrolled ? "primary" : "outline"}
            className={!scrolled ? "border-warm-grey/30 text-warm-grey hover:bg-white/90 hover:border-gold-butterfly" : ""}
          >
            Agendar Avaliação
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gold-butterfly/10 transition-colors"
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-warm-grey" />
          ) : (
            <Menu className="w-6 h-6 text-warm-grey" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-gold-light/30 shadow-2xl transition-all duration-500 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left py-3 px-4 rounded-xl text-warm-grey hover:bg-gold-butterfly/10 hover:text-gold-butterfly transition-all duration-300 font-medium"
              style={{
                animation: mobileMenuOpen ? `fadeInUp 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: mobileMenuOpen ? 1 : 0
              }}
            >
              {item.label}
            </button>
          ))}
          <Button
            href="https://wa.me/5531992284675?text=Olá%2C%20gostaria%20de%20agendar%20uma%20avaliação%20personalizada."
            fullWidth
            className="mt-2"
          >
            Agendar Avaliação
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;