/** @type {import("prettier").Config} */

export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: 'src/layouts/Layout.astro',
      options: {
        parser: 'astro',
        singleAttributePerLine: false,
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
