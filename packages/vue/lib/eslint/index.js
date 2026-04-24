import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import ts from "typescript-eslint";

const SOURCE_FILES = ["**/*.{js,mjs,cjs,ts,vue}"];

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
	{
		files: SOURCE_FILES,
		languageOptions: { globals: globals.browser },
	},
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
		files: SOURCE_FILES,
		rules: {
			curly: "error",
			"@stylistic/indent": ["error", 2],
			"@stylistic/brace-style": "error",
		},
	},
];

export default eslintConfig;
