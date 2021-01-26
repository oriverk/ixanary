// module.exports = {
//   plugins: ['tailwindcss', 'autoprefixer'],
// }

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("@fullhuman/postcss-purgecss")({
      content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    require("postcss-preset-env"),
    require("cssnano")({ preset: "default", }), // minify css to inline
  ],
};