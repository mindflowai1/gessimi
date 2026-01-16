import React from 'react';
import { Sparkles } from 'lucide-react';

const Results: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-pearl via-off-white to-cream relative overflow-hidden">
      {/* Decorative Butterflies */}
      <div className="absolute top-20 right-[10%] w-24 h-24 opacity-10 animate-float">
        <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
          <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-[15%] w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>
        <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
          <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl animate-slide-in-right">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-gold-butterfly animate-pulse" />
              <span className="text-xs font-bold tracking-[0.3em] text-gold-butterfly uppercase">Nosso Trabalho</span>
            </div>
            <h2 className="font-elegant text-4xl lg:text-6xl text-warm-grey mb-6 leading-tight">
              Resultados que Falam
              <span className="block text-5xl lg:text-7xl text-gold-butterfly mt-2 font-signature">
                por si só
              </span>
            </h2>
            <p className="text-warm-grey/80 font-sans text-lg leading-relaxed pl-6 border-l-2 border-gold-butterfly/50">
              Cada procedimento é único, assim como você. Veja transformações reais com foco em naturalidade,
              harmonia e respeito à sua essência.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-[2px] bg-gradient-to-r from-gold-butterfly/50 to-transparent"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Harmonização Facial",
              img: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              desc: "Equilíbrio e projeção natural",
              detail: "Procedimentos que valorizam seus traços únicos sem exageros"
            },
            {
              title: "Terapia Capilar",
              img: "https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              desc: "Saúde e vitalidade dos fios",
              detail: "Protocolos personalizados para couro cabeludo e cabelos"
            },
            {
              title: "Rejuvenescimento",
              img: "https://images.pexels.com/photos/3985322/pexels-photo-3985322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              desc: "Pele radiante e saudável",
              detail: "Tratamentos que devolvem viço e luminosidade natural"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glassmorphism Frame */}
              <div className="absolute -inset-2 bg-gradient-to-br from-gold-butterfly/20 to-soft-rose/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden bg-nude-pink/10 relative">

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-grey/90 via-warm-grey/30 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-gold-butterfly to-transparent mb-4 group-hover:w-20 transition-all duration-700"></div>
                  <span className="block text-white font-elegant text-2xl lg:text-3xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {item.title}
                  </span>
                  <span className="block text-white/90 text-sm uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 mb-2">
                    {item.desc}
                  </span>
                  <p className="text-white/80 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-20 animate-fade-in-slow">
          <p className="font-signature text-4xl lg:text-5xl text-taupe/70">
            Sua beleza, sua identidade, seu momento.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-gold-butterfly/40"></div>
            <Sparkles className="w-4 h-4 text-gold-butterfly" />
            <div className="h-[1px] w-16 bg-gold-butterfly/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;