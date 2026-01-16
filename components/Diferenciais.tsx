import React from 'react';
import { Heart, Shield, Sparkles, Award } from 'lucide-react';

const Diferenciais: React.FC = () => {
    const diferenciais = [
        {
            icon: Heart,
            title: "Atendimento Humanizado",
            description: "Cada paciente é único. Dedico tempo para entender suas necessidades e criar um plano personalizado que respeita sua individualidade.",
            color: "from-soft-rose/20 to-gold-light/20"
        },
        {
            icon: Shield,
            title: "Segurança e Ética",
            description: "Formação sólida em Biomedicina desde 2017, com especialização em análises clínicas. Procedimentos realizados com máxima segurança e responsabilidade.",
            color: "from-gold-butterfly/20 to-nude-pink/20"
        },
        {
            icon: Sparkles,
            title: "Resultados Naturais",
            description: "Minha filosofia é realçar sua beleza natural, sem exageros. Procedimentos que evidenciam quem você é, respeitando sua harmonia facial.",
            color: "from-pearl/30 to-cream/20"
        },
        {
            icon: Award,
            title: "Experiência Comprovada",
            description: "Mais de 7 anos na área da saúde, com dedicação exclusiva à estética avançada. Atualização constante nas melhores técnicas do mercado.",
            color: "from-nude-pink/20 to-soft-rose/20"
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-off-white via-white to-pearl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-[5%] w-32 h-32 opacity-5 animate-float">
                <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
                    <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
                </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-gold-butterfly" />
                        <span className="font-signature text-5xl lg:text-6xl text-gold-butterfly">Por que escolher</span>
                    </div>
                    <h2 className="font-elegant text-4xl lg:text-6xl text-warm-grey mb-6 leading-tight">
                        Meu Compromisso com Você
                    </h2>
                    <p className="text-taupe/80 font-sans text-lg max-w-2xl mx-auto">
                        Mais do que procedimentos estéticos, ofereço uma experiência completa de cuidado e transformação.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {diferenciais.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/60 backdrop-blur-xl rounded-2xl border border-gold-butterfly/20 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-butterfly/20 to-soft-rose/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="w-8 h-8 text-gold-butterfly" />
                                </div>

                                {/* Title */}
                                <h3 className="font-elegant text-2xl text-warm-grey mb-4 group-hover:text-gold-butterfly transition-colors duration-300">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-warm-grey/80 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-4 right-4 w-12 h-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
                                    <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Quote */}
                <div className="text-center mt-20 animate-fade-in-slow">
                    <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-md rounded-2xl p-10 border border-gold-butterfly/30 shadow-xl">
                        <p className="font-signature text-4xl lg:text-5xl text-gold-butterfly mb-3 leading-tight">
                            "Meu objetivo é fazer você se sentir
                        </p>
                        <p className="font-signature text-4xl lg:text-5xl text-warm-grey">
                            ainda mais confiante e radiante."
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4">
                            <div className="h-[2px] w-20 bg-gold-butterfly/60"></div>
                            <Heart className="w-5 h-5 text-gold-butterfly" />
                            <div className="h-[2px] w-20 bg-gold-butterfly/60"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Diferenciais;
