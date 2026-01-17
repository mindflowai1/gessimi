import React, { useState, useEffect } from 'react';
import Button from './Button';
import Logo from './Logo';
import { Menu, X, Home, User, Briefcase, Award, Mail, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['hero', 'about', 'procedures', 'diferenciais', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
    {
      label: 'Início',
      id: 'hero',
      icon: Home,
      description: 'Conheça minha história'
    },
    {
      label: 'Sobre Mim',
      id: 'about',
      icon: User,
      description: 'Minha trajetória profissional'
    },
    {
      label: 'Serviços',
      id: 'procedures',
      icon: Briefcase,
      description: 'Procedimentos oferecidos'
    },
    {
      label: 'Diferenciais',
      id: 'diferenciais',
      icon: Award,
      description: 'Por que me escolher'
    },
    {
      label: 'Contato',
      id: 'contact',
      icon: Mail,
      description: 'Agende sua avaliação'
    }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gold-light/30 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo - Clickable to scroll to top */}
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
            className="transition-transform duration-300 hover:scale-105"
            aria-label="Voltar ao início"
          >
            <Logo size={scrolled ? 'sm' : 'md'} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group font-medium transition-colors duration-300 ${activeSection === item.id ? 'text-gold-butterfly' : 'text-warm-grey hover:text-gold-butterfly'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold-butterfly to-soft-rose transition-all duration-500 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
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
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/80 backdrop-blur-sm border border-gold-butterfly/20 hover:border-gold-butterfly/40 transition-all shadow-lg relative z-50"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-warm-grey" />
            ) : (
              <Menu className="w-6 h-6 text-warm-grey" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-warm-grey/98 backdrop-blur-2xl z-40 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {/* Mobile Menu Content */}
        <div
          className={`absolute top-0 right-0 w-full max-w-md h-full bg-gradient-to-br from-white via-pearl to-cream shadow-2xl transition-transform duration-700 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative Elements */}
          <div className="absolute top-20 right-8 w-32 h-32 opacity-5 animate-float">
            <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
              <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
            </svg>
          </div>
          <div className="absolute bottom-32 left-8 w-24 h-24 opacity-5 animate-float" style={{ animationDelay: '1s' }}>
            <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
              <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
            </svg>
          </div>

          <nav className="flex flex-col h-full pt-28 pb-8 px-6">
            {/* Header */}
            <div
              className="mb-8 pb-6 border-b border-gold-butterfly/20"
              style={{
                animation: mobileMenuOpen ? 'fadeInUp 0.5s ease-out forwards' : 'none',
                opacity: 0
              }}
            >
              <h3 className="font-elegant text-2xl text-warm-grey mb-1">Menu de Navegação</h3>
              <p className="text-warm-grey/60 text-sm">Explore nossos serviços</p>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative py-4 px-5 text-left rounded-2xl transition-all duration-300 ${isActive
                      ? 'bg-gradient-to-r from-gold-butterfly/20 to-soft-rose/20 border-2 border-gold-butterfly/40 shadow-lg'
                      : 'bg-white/40 backdrop-blur-sm border-2 border-transparent hover:border-gold-butterfly/30 hover:bg-white/60'
                      }`}
                    style={{
                      animation: mobileMenuOpen ? `fadeInUp 0.5s ease-out ${index * 0.1 + 0.1}s forwards` : 'none',
                      opacity: 0
                    }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive
                        ? 'bg-gradient-to-br from-gold-butterfly to-soft-rose shadow-md'
                        : 'bg-white/60 group-hover:bg-gold-butterfly/20'
                        }`}>
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gold-butterfly'}`} />
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-elegant text-lg ${isActive ? 'text-gold-butterfly' : 'text-warm-grey group-hover:text-gold-butterfly'}`}>
                            {item.label}
                          </span>
                          {isActive && (
                            <span className="px-2 py-0.5 bg-gold-butterfly text-white text-[10px] rounded-full font-bold uppercase tracking-wider">
                              Atual
                            </span>
                          )}
                        </div>
                        <p className="text-warm-grey/60 text-xs mt-0.5">{item.description}</p>
                      </div>

                      {/* Arrow */}
                      <ChevronRight className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-gold-butterfly translate-x-0' : 'text-warm-grey/40 -translate-x-2 group-hover:translate-x-0 group-hover:text-gold-butterfly'
                        }`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CTA Section */}
            <div
              className="mt-6 space-y-4"
              style={{
                animation: mobileMenuOpen ? 'fadeInUp 0.5s ease-out 0.6s forwards' : 'none',
                opacity: 0
              }}
            >
              <div className="bg-gradient-to-r from-gold-butterfly/10 to-soft-rose/10 rounded-2xl p-4 border border-gold-butterfly/20">
                <p className="text-warm-grey/80 text-sm text-center mb-3">
                  Pronta para transformar sua autoestima?
                </p>
                <Button
                  href="https://wa.me/5531992284675?text=Olá%2C%20gostaria%20de%20agendar%20uma%20avaliação%20personalizada."
                  fullWidth
                >
                  Agendar Avaliação Gratuita
                </Button>
              </div>

              <p className="text-center text-warm-grey/50 text-xs italic">
                "Beleza que respeita quem você é"
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;