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
        // Accent colors
        accent: {
          orange: '#FA5D29',  // Warmer hero gradient
          blue: '#49B3FC',    // For highlights/checkmarks
        },
        // Deep Midnight Blue - softer than before
        midnight: '#1A1A2E',
        'midnight-light': '#1e1e3f',
        'midnight-dark': '#0a0a15',
        // Indigo/Purple-Blue (renamed to avoid conflict with Tailwind's built-in indigo)
        'brand-indigo': '#3D3D80',
        'brand-indigo-light': '#5252a3',
        'brand-indigo-dark': '#2e2e60',
        // Backgrounds
        cream: '#FAF9F6',
        background: '#ffffff',
        foreground: '#1A1A2E',  // Use softer midnight as default text
        muted: {
          DEFAULT: '#f5f5f5',
          foreground: '#525252',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-pt-serif)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Modular scale with 1.333 ratio (Perfect Fourth)
        // Body sizes
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],        // 14px - captions
        'body': ['1.125rem', { lineHeight: '1.6' }],           // 18px - base (larger for readability)
        'body-lg': ['1.5rem', { lineHeight: '1.5' }],          // 24px - lead text
        // Display sizes with fluid typography
        'display-hero': ['clamp(2.5rem, 6vw, 4.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],  // 40-76px
        'display-lg': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],    // 32-56px
        'display-md': ['clamp(1.625rem, 3.5vw, 2.625rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 26-42px
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
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
      },
      backgroundImage: {
        'jonty-gradient': 'linear-gradient(135deg, #FA5D29 0%, #FFAA8A 100%)',
        'jonty-gradient-vertical': 'linear-gradient(180deg, #FA5D29 0%, #FFAA8A 100%)',
      },
    },
  },
  plugins: [],
}

export default config
