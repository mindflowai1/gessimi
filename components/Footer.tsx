import React from 'react';
import Logo from './Logo';
import { Instagram, MapPin, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-pearl via-cream to-off-white border-t border-gold-butterfly/20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-[20%] w-32 h-32 opacity-5 animate-float">
        <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
          <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-[15%] w-24 h-24 opacity-5 animate-float" style={{ animationDelay: '1.5s' }}>
        <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
          <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">

        {/* Top Section - Logo and Tagline */}
        <div className="text-center mb-16">
          <Logo size="lg" className="justify-center mb-6" />
          <p className="font-signature text-4xl lg:text-5xl text-gold-butterfly mb-4">
            Beleza que respeita quem você é
          </p>
          <p className="text-warm-grey/70 max-w-2xl mx-auto leading-relaxed">
            Cuidado individualizado, sem exageros. Melhorando autoestima desde 2017 com procedimentos que valorizam sua essência.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Instagram */}
          <a
            href="https://instagram.com/dra_gessicamiranda"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gold-butterfly/20 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-butterfly to-soft-rose flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-elegant text-xl text-warm-grey mb-2 group-hover:text-gold-butterfly transition-colors">Instagram</h3>
                  <p className="text-warm-grey/70 text-sm">@dra_gessicamiranda</p>
                  <p className="text-warm-grey/50 text-xs mt-1">Siga para dicas e novidades</p>
                </div>
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+5531992284675"
            className="group"
          >
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gold-butterfly/20 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-butterfly to-soft-rose flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-elegant text-xl text-warm-grey mb-2 group-hover:text-gold-butterfly transition-colors">WhatsApp</h3>
                  <p className="text-warm-grey/70 text-sm">(31) 99228-4675</p>
                  <p className="text-warm-grey/50 text-xs mt-1">Atendimento personalizado</p>
                </div>
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gold-butterfly/20 p-8 shadow-lg">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-butterfly to-soft-rose flex items-center justify-center shadow-lg">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-elegant text-xl text-warm-grey mb-2">Localização</h3>
                <p className="text-warm-grey/70 text-sm">R. Felipe dos Santos, 145</p>
                <p className="text-warm-grey/70 text-sm">Nacional, Contagem - MG</p>
                <p className="text-warm-grey/50 text-xs mt-1">CEP: 32185-160</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Heart */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-gold-butterfly/40"></div>
          <Heart className="w-5 h-5 text-gold-butterfly animate-pulse" />
          <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-gold-butterfly/40"></div>
        </div>

        {/* Bottom Info */}
        <div className="text-center space-y-3">
          <p className="text-warm-grey/60 text-sm">
            © {new Date().getFullYear()} Dra. Gessica Miranda • Biomédica Esteta • CRBM/MG
          </p>
          <p className="text-warm-grey/50 text-xs">
            Todos os direitos reservados • Desenvolvido com dedicação e cuidado
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;