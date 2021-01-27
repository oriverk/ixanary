module.exports = {
  plugins: {
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production') && {
      autoprefixer: {},
      '@fullhuman/postcss-purgecss': {
        content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      },
      'postcss-custom-properties': {},
      'postcss-preset-env': { stage: 1 },
      cssnano: { preset: 'default' },
    }
  },
}