import React from 'react';
import { MessageCircle, Calendar, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Contato pelo WhatsApp",
    desc: "Inicie a conversa para tirarmos suas dúvidas iniciais e agendar sua avaliação."
  },
  {
    icon: Calendar,
    number: "02",
    title: "Avaliação Individual",
    desc: "Um momento exclusivo para entender suas necessidades e criar seu protocolo personalizado."
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Procedimento e Acompanhamento",
    desc: "Execução técnica com cuidado individualizado e suporte total pós-procedimento."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-off-white to-pearl relative overflow-hidden">
      {/* Decorative Butterfly */}
      <div className="absolute top-20 left-[15%] w-16 h-16 opacity-10 animate-float">
        <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
          <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="font-signature text-5xl text-gold-butterfly mb-3 block">Processo</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-warm-grey">Como Funciona</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-gold-butterfly/20 via-gold-butterfly/50 to-gold-butterfly/20 -z-0"></div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center relative z-10 group animate-scale-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Glassmorphism Card */}
              <div className="w-full bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-700 p-8 hover:-translate-y-2">
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-gold-butterfly to-soft-rose rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-serif text-white font-bold text-sm">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-soft-rose/20 to-gold-light/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 mt-4">
                  <step.icon className="text-gold-butterfly" size={32} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-warm-grey mb-4 group-hover:text-gold-butterfly transition-colors duration-500">{step.title}</h3>
                <p className="font-sans text-warm-grey/75 text-base leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;