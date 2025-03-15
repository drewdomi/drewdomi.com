// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.html",
      options: {
        parser: "angular",
      },
    },
  ],
  tabWidth: 2,
  bracketSpacing: true,
  singleQuote: true,
  semi: false,
  singleAttributePerLine: true,
  arrowParens: "avoid",
};
