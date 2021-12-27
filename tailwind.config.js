const { urlObjectKeys } = require("next/dist/shared/lib/utils")

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        orange:{
          500:'#f76116',
          400:'#f77416',
        },
        purple:{
          500:'#CA10E7',
          600:'#8E066B',
          700:'#900C3F'
        }
      },
      margin:{
        '110':'36rem',
        '120':'42rem',
      },
      backgroundImage:theme=>({
        'image':"url('/images/wallpaperflare.com_wallpaper (1).jpg ')"
      })
    },
  },
  variants: {
    extend: {
      scale: ['active', ],
    },
  },
  plugins: [],
}
