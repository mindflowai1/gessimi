import React from 'react';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
    const sizes = {
        sm: { logo: 'h-20', text: 'text-2xl' },
        md: { logo: 'h-24', text: 'text-3xl' },
        lg: { logo: 'h-32', text: 'text-5xl' }
    };

    const currentSize = sizes[size];

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {/* Logo Image */}
            <img
                src="/lgoo123123123.png"
                alt="Gessica Miranda"
                className={`${currentSize.logo} w-auto object-contain transition-transform duration-500 hover:scale-105 drop-shadow-2xl`}
            />

            {/* Name - Beautiful Signature Font */}
            <span className={`font-signature ${currentSize.text} text-gold-butterfly leading-none tracking-wide`}>
                Gessica Miranda
            </span>
        </div>
    );
};

export default Logo;
