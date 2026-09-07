/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta aproximada extraída del logo/intranet actual de XENCO.
        // Ajustar a los HEX exactos apenas los tengas.
        xenco: {
          teal: '#12967F', // verde/teal principal (navbar, acentos)
          tealDark: '#0B6E5C',
          tealLight: '#5FC9B4',
          gold: '#E9B949', // dorado/amarillo de la "X" del logo
          goldDark: '#C89A2E',
          ink: '#101C1B', // texto oscuro
          paper: '#F6F8F7', // fondo claro
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'xenco-mesh':
          'radial-gradient(at 20% 20%, rgba(18,150,127,0.55) 0px, transparent 55%), radial-gradient(at 80% 0%, rgba(233,185,73,0.35) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(18,150,127,0.4) 0px, transparent 55%)',
      },
    },
  },
  plugins: [],
};
