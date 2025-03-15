// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: 'src/layouts/Layout.astro', // Target only this specific file
      options: {
        parser: 'astro',
        singleAttributePerLine: false, // Override for this file only
      },
    },
    {
      files: '*.html',
      options: {
        parser: 'angular',
      },
    },
  ],
  tabWidth: 2,
  bracketSpacing: true,
  endOfLine: 'lf',
  singleQuote: true,
  semi: false,
  singleAttributePerLine: true,
  arrowParens: 'avoid',
}
