module.exports = {
  plugins:
    process.env.NODE_ENV === 'devlopment'
      ? [
          // require("tailwindcss")
        ]
      : [
          require("tailwindcss"),
          require("autoprefixer"),
          require("@fullhuman/postcss-purgecss")({
            content: [
              "./src/pages/**/*.{js,jsx,ts,tsx}",
              "./src/components/**/*.{js,jsx,ts,tsx}",
            ],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
          require("cssnano")({ preset: "default", }), // minify css to inline
        ],
};