module.exports = {
  purge: [],//['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'sans-serif']
      },
      colors: {
        black: {
          DEFAULT: "#212325",
          2: "#424243"
        },
        offwhite: {
          DEFAULT: "#F9EFE8",
          2: "#E3D5C8"
        },
        beige: {
          DEFAULT: "#E0CD96",
          2: "#CCB480"
        },
        placeholder: {
          DEFAULT: "#908677"
        },
        accent: {
          DEFAULT: "#CB9447"
        }
      },
      maxHeight: {
        160: "40rem",
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
