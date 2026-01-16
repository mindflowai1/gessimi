import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);

        const tooltipTimer = setTimeout(() => {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 6000);
        }, 4000);

        return () => {
            clearTimeout(timer);
            clearTimeout(tooltipTimer);
        };
    }, []);

    const handleClick = () => {
        window.open(
            'https://wa.me/5531992284675?text=Olá%2C%20gostaria%20de%20agendar%20uma%20avaliação%20personalizada.',
            '_blank'
        );
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-scale-in">
            {/* Professional Tooltip - Desktop Only */}
            {showTooltip && (
                <div className="hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl px-5 py-3 border border-gold-butterfly/20 animate-slide-in-right relative">
                    <div className="flex flex-col">
                        <span className="text-warm-grey font-semibold text-sm">Agende sua avaliação</span>
                        <span className="text-warm-grey/70 text-xs">Respondo em até 24h</span>
                    </div>

                    <button
                        onClick={() => setShowTooltip(false)}
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-warm-grey/80 text-white rounded-full flex items-center justify-center hover:bg-warm-grey transition-colors"
                        aria-label="Fechar"
                    >
                        <X className="w-3 h-3" />
                    </button>

                    {/* Arrow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white/95"></div>
                    </div>
                </div>
            )}

            {/* WhatsApp Button - Smaller and More Professional */}
            <button
                onClick={handleClick}
                className="group relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-lg hover:shadow-[0_10px_40px_rgba(37,211,102,0.35)] transition-all duration-500 hover:scale-110 flex items-center justify-center"
                aria-label="Contato via WhatsApp"
            >
                {/* Subtle Pulse */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-15"></span>

                {/* Icon */}
                <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10 group-hover:rotate-6 transition-transform duration-300" />

                {/* Mobile Tooltip */}
                <span className="md:hidden absolute -top-10 right-0 bg-warm-grey/95 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
                    Fale conosco
                </span>
            </button>
        </div>
    );
};

export default WhatsAppButton;
