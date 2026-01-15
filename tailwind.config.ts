import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-midnight',
    'bg-jonty-500',
    'stroke-white',
    'ring-midnight',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Orange
        jonty: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#FF8C42',
          500: '#FF6A00',  // Vibrant Orange - primary
          600: '#e65f00',
          700: '#cc5500',
          800: '#994000',
          900: '#662b00',
        },
        // Deep Midnight Blue (flat definition for reliable class generation)
        midnight: '#14142B',
        'midnight-light': '#1e1e3f',
        'midnight-dark': '#0a0a15',
        // Indigo/Purple-Blue (renamed to avoid conflict with Tailwind's built-in indigo)
        'brand-indigo': '#3D3D80',
        'brand-indigo-light': '#5252a3',
        'brand-indigo-dark': '#2e2e60',
        // Backgrounds
        cream: '#FAF9F6',
        background: '#ffffff',
        foreground: '#14142B',  // Use midnight as default text
        muted: {
          DEFAULT: '#f5f5f5',
          foreground: '#525252',
        },
      },
      fontFamily: {
        sans: ['var(--font-pt-serif)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      backgroundImage: {
        'jonty-gradient': 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
        'jonty-gradient-vertical': 'linear-gradient(180deg, #FF6B35 0%, #FF8C42 100%)',
      },
    },
  },
  plugins: [],
}

export default config
