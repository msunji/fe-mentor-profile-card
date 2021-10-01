module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        desat: "hsl(229, 23%, 23%)",
        dark: "hsl(227, 10%, 46%)"
      },
      cyan: {
        dark: "hsl(185, 75%, 39%)"
      },
      grey: {
        dark: "hsl(0, 0%, 59%)"
      },
      white: {
        DEFAULT: "hsl(0,0%,100%)"
      }
    },
    fontFamily: {
      sans: ["Khumbh Sans", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'top-left-blob': "url('../assets/img/bg-pattern-top.svg')",
        'bottom-right-blob': "url('../assets/img/bg-pattern-bottom.svg')",
        'card-bg': "url('../assets/img/bg-pattern-card.svg')",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
