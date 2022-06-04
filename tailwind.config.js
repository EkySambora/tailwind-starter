module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding:'16px'
    },
    extend: {
      screens:{
        '2xl': '1320px'
      },
      colors:{
        primary:'#14b8a6',
        dark:'#0f172a'
      },
      fontFamily:{
        inter:['Inter']
      },
      animation:{
        'goyang': 'goyang 1s ease-in-out'
      },
      keyframes:{
        goyang:{
          '0%, 100%':{ transform: 'rotate(-3deg)'},
          '50%': { transform: 'rotate(3deg)'}
        }
      }
    },
  },
  plugins: [],
}