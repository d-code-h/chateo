/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        'mulish-bold': ['Mulish-Bold', 'sans-serif'],
        'mulish-semibold': ['Mulish-SemiBold', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0F1828',
          default: '#002DE3',
          'dark-mode': '#375FFF',
          light: '#879FFF',
          background: '#D2D5F9',
        },
        neutral: {
          active: '#0F1828',
          dark: '#152033',
          body: '#1B2B48',
          weak: '#A4A4A4',
          disabled: '#ADB5BD',
          line: '#EDEDED',
          'off-white': '#F7F7FC',
        },
        accent: {
          danger: '#E94242',
          warning: '#FDCF41',
          success: '#2CC069',
          safe: '#7BCBCF',
        },
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(90deg, #D2D5F9 0%, #2C37E1 100%)',
        'gradient-2': 'linear-gradient(90deg, #EC9EFF 0%, #5F2EEA 100%)',
      },
    },
  },
  plugins: [],
};
