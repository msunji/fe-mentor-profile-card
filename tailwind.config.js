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
    fontSize: {
      xs: ['0.6em', {
        letterSpacing: '0.083rem'
      }],
      sm: ['0.78em', '1.1'],
      base: ['18px', '22px'],
    },
    fontFamily: {
      sans: ['"Khumbh Sans"', "sans-serif"]
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    boxShadow: {
      DEFAULT: '0px 50px 100px -20px rgba(8, 70, 94, 0.504835)'
    },
    borderWidth: {
      '1': '1px',
      '5': '5px'
    },
    backgroundPosition: {
      'blobPosition': 'right 50vw bottom 40vh, left 50vw top 40vh',
    },
    extend: {
      backgroundImage: {
        'blobs': "url('../assets/img/bg-pattern-top.svg'), url('../assets/img/bg-pattern-bottom.svg')",
        'card-bg': "url('../assets/img/bg-pattern-card.svg')",
        'person-bg': "url('../assets/img/image-victor.jpg')"
      }
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
