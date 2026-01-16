import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
    return (
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-pearl to-cream relative overflow-hidden">
            {/* Decorative Butterfly */}
            <div className="absolute top-20 right-[10%] w-20 h-20 opacity-10 animate-float">
                <svg viewBox="0 0 100 100" className="text-gold-butterfly fill-current">
                    <path d="M50,50 Q30,30 20,40 Q10,50 20,60 Q30,70 50,50 Q70,30 80,40 Q90,50 80,60 Q70,70 50,50" />
                </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <MapPin className="w-5 h-5 text-gold-butterfly" />
                        <span className="font-signature text-5xl lg:text-6xl text-gold-butterfly">Venha nos Visitar</span>
                    </div>
                    <h2 className="font-elegant text-3xl lg:text-5xl text-warm-grey mb-4 leading-tight">
                        Estamos em Contagem
                    </h2>
                    <p className="text-taupe/80 font-sans max-w-xl mx-auto">
                        Fácil acesso, estacionamento disponível e um ambiente acolhedor esperando por você.
                    </p>
                </div>

                {/* Content */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

                        {/* Address Card */}
                        <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gold-butterfly/20 p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-butterfly/20 to-soft-rose/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <MapPin className="w-5 h-5 text-gold-butterfly" />
                                </div>
                                <div>
                                    <h3 className="font-elegant text-xl text-warm-grey mb-2">Endereço</h3>
                                    <p className="text-warm-grey/70 text-sm leading-relaxed">
                                        R. Felipe dos Santos, 145<br />
                                        Nacional, Contagem - MG<br />
                                        CEP: 32185-160
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gold-butterfly/20 p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-butterfly/20 to-soft-rose/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <Phone className="w-5 h-5 text-gold-butterfly" />
                                </div>
                                <div>
                                    <h3 className="font-elegant text-xl text-warm-grey mb-2">Telefone</h3>
                                    <a
                                        href="tel:+5531992284675"
                                        className="text-warm-grey/70 hover:text-gold-butterfly transition-colors block mb-1"
                                    >
                                        (31) 99228-4675
                                    </a>
                                    <p className="text-xs text-warm-grey/50">WhatsApp disponível</p>
                                </div>
                            </div>
                        </div>

                        {/* Hours Card */}
                        <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gold-butterfly/20 p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-butterfly/20 to-soft-rose/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <Clock className="w-5 h-5 text-gold-butterfly" />
                                </div>
                                <div>
                                    <h3 className="font-elegant text-xl text-warm-grey mb-2">Horário</h3>
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-green-600 text-sm font-medium">Aberto agora</span>
                                    </div>
                                    <p className="text-warm-grey/70 text-sm">Fecha às 20:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gold-butterfly/20 overflow-hidden shadow-xl p-6">
                        <div className="flex flex-col lg:flex-row gap-6 items-center">

                            {/* Map */}
                            <div className="lg:w-2/3 w-full">
                                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.234567890123!2d-44.05!3d-19.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzQ4LjAiUyA0NMKwMDMnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-lg"
                                        title="Localização Dra. Gessica Miranda"
                                    ></iframe>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="lg:w-1/3 w-full flex flex-col items-center lg:items-start gap-4">
                                <div className="text-center lg:text-left">
                                    <h3 className="font-elegant text-2xl text-warm-grey mb-2">Como Chegar</h3>
                                    <p className="text-warm-grey/70 text-sm mb-4">
                                        Aproximadamente 23 minutos do centro de Belo Horizonte
                                    </p>
                                </div>

                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=R.+Felipe+dos+Santos,+145+-+Nacional,+Contagem+-+MG,+32185-160"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-butterfly to-soft-rose text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-sm font-medium"
                                >
                                    <Navigation className="w-4 h-4" />
                                    Abrir no Maps
                                </a>

                                <Button
                                    href="https://wa.me/5531992284675?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
                                    className="w-full"
                                >
                                    Agendar Avaliação
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
