/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'clinical-white': '#FFFFFF',
                'off-white': '#F9F8F6',
                'cream': '#FAF7F4',
                'nude-pink': '#E8DAD4',
                'soft-rose': '#CFA7A2',
                'deep-rose': '#A88B86',
                'taupe': '#B9ADA3',
                'warm-grey': '#3A3A3A',
                'charcoal': '#2D2D2D',
                'gold-accent': '#D4C4B7',
                'gold-light': '#E8DFD6',
                'gold-butterfly': '#C9A961',
                'pearl': '#F5F1ED',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                signature: ['Allura', 'cursive'],
                elegant: ['Cormorant Garamond', 'serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'fade-in-slow': 'fadeIn 1.5s ease-out forwards',
                'slide-in-right': 'slideInRight 1s ease-out forwards',
                'shimmer': 'shimmer 3s infinite linear',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'scale-in': 'scaleIn 0.8s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                shimmer: {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(201, 169, 97, 0.2), 0 0 10px rgba(201, 169, 97, 0.1)' },
                    '100%': { boxShadow: '0 0 20px rgba(201, 169, 97, 0.4), 0 0 30px rgba(201, 169, 97, 0.2)' }
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                }
            }
        },
    },
    plugins: [],
}
