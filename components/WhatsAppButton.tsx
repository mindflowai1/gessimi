import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Show button after a short delay
        const timer = setTimeout(() => setIsVisible(true), 1000);

        // Show tooltip after 3 seconds, then hide after 5 seconds
        const tooltipTimer = setTimeout(() => {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 5000);
        }, 3000);

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
        <>
            {/* WhatsApp Floating Button */}
            <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-scale-in">
                {/* Tooltip */}
                {showTooltip && (
                    <div className="hidden md:block bg-white shadow-2xl rounded-2xl px-6 py-4 border border-gold-butterfly/20 animate-slide-in-right">
                        <p className="text-warm-grey font-medium text-sm whitespace-nowrap">
                            Agende sua avaliação! 💬
                        </p>
                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-warm-grey text-white rounded-full flex items-center justify-center hover:bg-gold-butterfly transition-colors"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                )}

                {/* Button */}
                <button
                    onClick={handleClick}
                    className="group relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl hover:shadow-[0_20px_60px_rgba(37,211,102,0.4)] transition-all duration-500 hover:scale-110 flex items-center justify-center"
                    aria-label="Contato via WhatsApp"
                >
                    {/* Pulse Animation */}
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

                    {/* Icon */}
                    <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />

                    {/* Mobile Tooltip */}
                    <span className="md:hidden absolute -top-12 right-0 bg-warm-grey text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Fale conosco
                    </span>
                </button>
            </div>
        </>
    );
};

export default WhatsAppButton;
