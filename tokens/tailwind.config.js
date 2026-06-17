/** GPartner Consulting — extensión de tema para Tailwind CSS
 *  Importa o fusiona estos valores en tu tailwind.config.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        gp: {
          navy: '#1B3A6B',          // primario
          green: '#2D8A4E',         // secundario
          red: '#C0392B',           // acento
          light: '#EBF0F8',         // fondo claro
          text: '#4A4A4A',          // texto
          // variantes vivas del logo (pantalla)
          'navy-vivid': '#193F70',
          'green-vivid': '#02953A',
          'red-vivid': '#E40D36',
          'navy-deep': '#0A1B35',
        },
      },
      fontFamily: {
        gp: ['Arial', 'Helvetica Neue', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'gp-caps': '0.08em',
      },
      borderRadius: {
        gp: '4px',
        'gp-lg': '10px',
      },
    },
  },
};
