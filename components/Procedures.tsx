import React from 'react';
import Button from './Button';
import { Sparkles, Heart, Droplets } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    category: "Procedimentos Faciais",
    title: "Harmonização Facial",
    desc: "Aqui cuido de você de maneira individualizada, e sem exageros nos procedimentos faciais. Devolvo sua autoestima e evidencio ainda mais sua beleza natural.",
    image: "https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-soft-rose/20 to-gold-light/20"
  },
  {
    icon: Heart,
    category: "Terapia Capilar",
    title: "Protocolos Personalizados",
    desc: "Devolvo sua autoestima nos protocolos personalizados de terapia capilar. Tratamentos individualizados para saúde do couro cabeludo e fios.",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-gold-butterfly/20 to-nude-pink/20"
  },
  {
    icon: Droplets,
    category: "Estética Corporal",
    title: "Preparação para o Verão",
    desc: "Te auxilio a melhorar suas medidas para o verão com tratamentos corporais personalizados e eficazes.",
    image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-pearl/30 to-cream/20"
  }
];

const Procedures: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-off-white via-cream to-pearl relative overflow-hidden">
      {/* Decorative Butterflies */}
      <div className="absolute top-20 right-[20%] w-20 h-20 opacity-10 animate-float">
        <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
          <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-gold-butterfly" />
            <span className="font-signature text-5xl lg:text-6xl text-gold-butterfly">Serviços</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl text-warm-grey mb-6 leading-tight">
            Tratamentos <span className="italic font-light text-soft-rose">Personalizados</span>
          </h2>
          <p className="text-taupe/90 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Sem exageros. Apenas cuidado individualizado aplicado à sua beleza.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-2">

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-grey/60 via-warm-grey/20 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-6 h-6 text-gold-butterfly" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 space-y-4">
                  <div>
                    <span className="text-gold-butterfly uppercase tracking-[0.25em] text-xs font-bold block mb-3">
                      {service.category}
                    </span>
                    <h3 className="font-serif text-3xl text-warm-grey leading-tight group-hover:text-gold-butterfly transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>

                  <p className="font-sans text-warm-grey/75 text-base leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="pt-4">
                    <Button
                      variant="text"
                      href="https://wa.me/5531992284675?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos."
                      className="text-gold-butterfly border-gold-butterfly hover:text-soft-rose hover:border-soft-rose"
                    >
                      Saber mais
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-slow">
          <p className="font-signature text-4xl text-taupe/70 mb-6">
            Agende sua avaliação e saiba mais
          </p>
          <Button href="https://wa.me/5531992284675?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.">
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Procedures;