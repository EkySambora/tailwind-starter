module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
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