import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import ts from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginVue.configs["flat/essential"],
  eslintConfigPrettier,
  {
    plugins: {
      "@stylistic": stylistic,
    },
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    rules: {
      curly: "error",
      "@stylistic/indent": ["error", 2],
      "@stylistic/brace-style": "error",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
