/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const prettierConfig = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: "none",
  endOfLine: "auto",
  plugins: ["prettier-plugin-organize-imports"],
};

export default prettierConfig;
