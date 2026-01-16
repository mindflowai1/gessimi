import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';
import Button from './Button';

const values = [
  {
    icon: Heart,
    title: "Cuidado Individualizado",
    desc: "Cada pessoa é única. Seus protocolos são personalizados para realçar sua beleza natural.",
    image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: Sparkles,
    title: "Sem Exageros",
    desc: "Procedimentos faciais que respeitam sua anatomia e evidenciam quem você realmente é.",
    image: "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: Star,
    title: "Autoestima Renovada",
    desc: "Mais que estética, é sobre você se sentir confiante e radiante todos os dias.",
    image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Manifesto: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-warm-grey via-charcoal to-warm-grey text-off-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/subtle-dots.png")' }}></div>

      {/* Floating Butterflies */}
      <div className="absolute top-20 right-[15%] w-24 h-24 opacity-10 animate-float">
        <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
          <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-[10%] w-20 h-20 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
          <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gold-butterfly/10 backdrop-blur-md rounded-full border border-gold-butterfly/20">
            <Heart className="w-5 h-5 text-gold-butterfly animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-butterfly font-bold">Filosofia de Atendimento</span>
          </div>

          <h2 className="font-elegant text-4xl lg:text-6xl leading-tight mb-8 animate-fade-in-up">
            Agende sua avaliação e saiba mais,
            <span className="block text-5xl lg:text-7xl text-gold-butterfly mt-4 font-signature">
              será um prazer te receber aqui
            </span>
          </h2>

          <p className="text-xl text-off-white/80 leading-relaxed max-w-2xl mx-auto font-light">
            O autocuidado não é luxo, é necessidade. Quanto mais cedo você agenda seu procedimento, mais tranquila fica sua rotina.
          </p>
        </div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-gold-butterfly/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-butterfly/20">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-grey via-warm-grey/50 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-gold-butterfly/20 backdrop-blur-md rounded-full flex items-center justify-center border border-gold-butterfly/30 group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="w-7 h-7 text-gold-butterfly" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-elegant text-2xl text-white mb-4 group-hover:text-gold-butterfly transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-off-white/70 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-fade-in-slow">
          <p className="text-lg text-off-white/70 mb-8 max-w-2xl mx-auto">
            Antecipe-se e garanta sua melhor versão para os momentos especiais.
          </p>

          <Button href="https://wa.me/5531992284675?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.">
            Agendar Minha Avaliação
          </Button>

          {/* Decorative Line */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-gold-butterfly/40"></div>
            <div className="w-2 h-2 rounded-full bg-gold-butterfly animate-pulse"></div>
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-gold-butterfly/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;