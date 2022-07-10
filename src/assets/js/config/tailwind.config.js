module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: {
    enabled: true,
    mode: 'all',
    content: ['./src/**/*.twig', './src/**/*.html']
  },
  target: "relaxed",
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        gray: {
          light: '#9B9B9B',
          dark: '#181818',
        },
        blue: {
          light: '#00AEEF',
        },
      },
      fontSize: {
        '28': '28px',
        '50': '50px',
      },
      spacing: {
        '7': '1.875rem',
        '45': '45px',
        '400': '25rem',
      },
      lineHeight: {
        '45': '45px',
      },
    }
  },
  variants: { },
  corePlugins: {},
  plugins: [],
}
