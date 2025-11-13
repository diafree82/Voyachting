/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        'dark-blue': '#0D1A3A',     // ← ЗАМЕНИТЕ НА РЕАЛЬНЫЙ HEX ИЗ FIGMA
        'dark-blue-glass': '#1A2B50', // ← ЗАМЕНИТЕ НА РЕАЛЬНЫЙ HEX
        blue: '#2563EB',
        'blue-light': '#93C5FD',
        'dark-grey': '#374151',
        white: '#FFFFFF',
        background: '#F8FAFC',
      },
      fontSize: {
        h1: ['80px', { lineHeight: '100px' }],
        h2: ['48px', { lineHeight: '120px' }],
        h3: ['40px', { lineHeight: '120px' }],
        h4: ['32px', { lineHeight: '110px' }],
        h5: ['24px', { lineHeight: '130px' }],
        'h5-upper': ['24px', { lineHeight: '120px' }],
        'h5-medium': ['24px', { lineHeight: '110px' }],
        h6: ['18px', { lineHeight: '140px' }],
        main: ['16px', { lineHeight: '130px' }],
        'main-upper': ['16px', { lineHeight: '140px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        12: '48px',
        16: '64px',
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '8px',
        lg: '16px',
        full: '9999px',
      },
      boxShadow: {
        DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
    },
    plugins: [],
  };