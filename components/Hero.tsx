import React from 'react';
import Button from './Button';
import { Star, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-pearl via-off-white to-cream pt-20 overflow-hidden">
      {/* Floating Butterfly Decorations */}
      <div className="absolute top-20 right-[15%] w-16 h-16 opacity-20 animate-float" style={{ animationDelay: '0s' }}>
        <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
          <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50 M45,50 L55,50 M50,45 L50,55" />
        </svg>
      </div>
      <div className="absolute top-[60%] left-[10%] w-12 h-12 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
          <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-soft-rose/20 to-gold-light/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-tr from-nude-pink/20 to-pearl/30 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 border border-gold-butterfly/30 rounded-full bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-scale-in">
              <Sparkles className="w-4 h-4 text-gold-butterfly animate-pulse" />
              <span className="text-warm-grey tracking-[0.25em] text-[11px] uppercase font-bold">Biomédica Esteta</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-5xl lg:text-7xl text-warm-grey leading-[1.05] tracking-tight">
              <span className="block font-signature text-7xl lg:text-8xl text-gold-butterfly mb-2 ml-1 opacity-90 drop-shadow-sm">Gessica Miranda</span>
              <span className="block mt-4">Beleza que</span>
              <span className="block italic font-light text-soft-rose">respeita você.</span>
            </h1>

            {/* Description */}
            <div className="space-y-4">
              <p className="font-sans text-warm-grey/90 text-lg leading-relaxed max-w-lg pl-6 border-l-2 border-gold-butterfly/50">
                Há mais de 7 anos na área da saúde, me formei em <strong>Biomedicina em 2017</strong> com especialização em análises clínicas.
              </p>
              <p className="font-sans text-warm-grey/90 text-lg leading-relaxed max-w-lg pl-6 border-l-2 border-gold-butterfly/50">
                Hoje, dedico-me à <strong>estética avançada</strong>, oferecendo procedimentos faciais, terapia capilar e tratamentos corporais com cuidado individualizado e sem exageros.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="https://wa.me/5531992284675?text=Olá%2C%20gostaria%20de%20agendar%20uma%20avaliação%20personalizada.">
                Agende sua Avaliação
              </Button>
              <button
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="relative overflow-hidden inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500 ease-out rounded-sm group bg-transparent border-2 border-taupe text-warm-grey hover:border-gold-butterfly hover:text-gold-butterfly hover:bg-gold-butterfly/5"
              >
                <span className="relative z-20">Conheça Meu Trabalho</span>
              </button>
            </div>
          </div>

          {/* Right Side - Image with Glassmorphism */}
          <div className="lg:w-1/2 relative h-[600px] lg:h-[750px] w-full flex items-center justify-center lg:justify-end animate-fade-in-slow">

            {/* Main Image Container with Glassmorphism Frame */}
            <div className="relative w-full max-w-md lg:max-w-lg group">

              {/* Glassmorphism Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl group-hover:shadow-[0_20px_60px_rgba(201,169,97,0.3)] transition-all duration-700"></div>

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/Gessi1H.webp"
                  alt="Dra. Gessica Miranda - Biomédica Esteta"
                  className="w-full h-full object-cover object-center transition-transform duration-[3s] ease-out group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-grey/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Info Card */}
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-w-xs border border-gold-light/50 animate-slide-in-right hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-12 bg-gradient-to-b from-gold-butterfly to-soft-rose rounded-full"></div>
                  <div>
                    <p className="font-serif text-sm tracking-widest uppercase text-taupe">Dra.</p>
                    <p className="font-signature text-3xl text-warm-grey leading-none">Gessica Miranda</p>
                  </div>
                </div>
                <p className="text-xs text-warm-grey/70 mt-3 leading-relaxed">
                  Cuidado individualizado, sem exageros nos procedimentos faciais.
                </p>
              </div>

              {/* Decorative Butterfly */}
              <div className="absolute -top-6 -right-6 w-20 h-20 opacity-80 animate-float">
                <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current drop-shadow-lg">
                  <path d="M50,50 Q25,25 15,35 Q5,45 15,55 Q25,65 50,50 Q75,25 85,35 Q95,45 85,55 Q75,65 50,50 M45,50 L55,50 M50,45 L50,55" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;