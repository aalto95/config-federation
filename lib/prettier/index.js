/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const prettierConfig = {
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 80,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: ["prettier-plugin-organize-imports"],
};

export default prettierConfig;
