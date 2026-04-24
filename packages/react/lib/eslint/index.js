import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import ts from "typescript-eslint";

const SOURCE_FILES = ["**/*.{js,mjs,cjs,ts,jsx,tsx}"];

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    files: SOURCE_FILES,
    languageOptions: { globals: globals.browser },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    files: SOURCE_FILES,
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
  eslintConfigPrettier,
  {
    plugins: {
      "@stylistic": stylistic,
    },
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    files: SOURCE_FILES,
    rules: {
      curly: "error",
      "@stylistic/indent": ["error", 2],
      "@stylistic/brace-style": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;
