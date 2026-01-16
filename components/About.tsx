import React from 'react';
import { Award, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-pearl to-off-white relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-20 right-0 lg:right-20 font-signature text-[18vw] lg:text-[14rem] text-gold-light/40 leading-none z-0 select-none pointer-events-none">
        Gessica
      </div>

      {/* Floating Butterfly */}
      <div className="absolute top-40 left-[10%] w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
          <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side - Image */}
          <div className="lg:w-5/12 relative group w-full max-w-md lg:max-w-full mx-auto">
            {/* Glassmorphism Frame */}
            <div className="absolute -inset-6 bg-gradient-to-br from-gold-light/30 to-white/20 backdrop-blur-sm rounded-2xl border border-gold-butterfly/20 z-0 hidden lg:block transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1"></div>

            {/* Image Container */}
            <div className="relative z-10 aspect-[3/4] bg-neutral-100 overflow-hidden shadow-2xl rounded-xl">
              <img
                src="/Gessi2H.webp"
                alt="Dra. Gessica Miranda - Biomédica Esteta"
                className="w-full h-full object-cover object-center transition-transform duration-[3s] group-hover:scale-110"
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-grey/10 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Name Card */}
            <div className="absolute -bottom-8 lg:-bottom-12 -right-4 lg:-right-16 bg-white/95 backdrop-blur-xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.15)] max-w-sm z-20 border-l-4 border-gold-butterfly rounded-lg animate-scale-in">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-gold-butterfly" />
                <p className="font-serif text-xs tracking-[0.3em] uppercase text-taupe">Biomédica Esteta</p>
              </div>
              <p className="font-signature text-5xl text-warm-grey leading-none mb-2">Gessica Miranda</p>
              <p className="text-sm text-warm-grey/70 leading-relaxed">
                Formada em 2017, especialista em análises clínicas e estética facial.
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-7/12 space-y-10 pt-16 lg:pt-0">
            <div className="animate-fade-in-up space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-16 bg-gradient-to-r from-gold-butterfly to-soft-rose"></span>
                <span className="text-gold-butterfly tracking-[0.3em] uppercase text-xs font-bold flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Sobre Mim
                </span>
              </div>

              <h2 className="font-serif text-4xl lg:text-6xl text-warm-grey leading-[1.1]">
                Cuidando de você de uma
                <span className="block font-signature text-6xl lg:text-7xl text-gold-butterfly mt-3">maneira diferente</span>
              </h2>
            </div>

            <div className="space-y-6 text-warm-grey/85 font-sans text-lg leading-[1.9] max-w-2xl">
              <p className="pl-6 border-l-2 border-gold-butterfly/40">
                A <strong className="text-warm-grey font-semibold">mais de 10 anos na área da saúde</strong>, me formei em Biomedicina em 2017 com especialização em análises clínicas.
              </p>

              <p>
                Me encontrei na estética ao perceber que poderia cuidar das pessoas de uma maneira diferente: <span className="italic font-serif text-xl text-soft-rose">melhorando a autoestima e evidenciando ainda mais sua beleza.</span>
              </p>

              <p className="bg-cream/50 p-6 rounded-xl border border-gold-light/30">
                Aqui cuido de você de maneira <strong>individualizada</strong>, e sem exageros nos procedimentos faciais. Devolvo sua autoestima nos protocolos personalizados de terapia capilar e te auxilio a melhorar suas medidas para o verão.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gold-light/40">
              <div className="space-y-3 group text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Award className="w-5 h-5 text-gold-butterfly" />
                  <span className="block text-5xl font-serif text-gold-butterfly group-hover:scale-110 transition-transform duration-500">2017</span>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-taupe font-medium block">Formação</span>
              </div>

              <div className="space-y-3 group text-center lg:text-left">
                <span className="block text-5xl font-serif text-gold-butterfly group-hover:scale-110 transition-transform duration-500">10+</span>
                <span className="text-xs uppercase tracking-[0.2em] text-taupe font-medium block">Anos Saúde</span>
              </div>

              <div className="space-y-3 group text-center lg:text-left">
                <span className="block text-5xl font-serif text-gold-butterfly group-hover:scale-110 transition-transform duration-500">100%</span>
                <span className="text-xs uppercase tracking-[0.2em] text-taupe font-medium block">Dedicação</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;