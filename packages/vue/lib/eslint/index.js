import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import ts from "typescript-eslint";

const SOURCE_FILES = ["**/*.{js,mjs,cjs,ts,vue}"];

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
	// 1. Global ignores (optional: add things not in .gitignore)
	{
		ignores: ["dist/**", "node_modules/**", "public/**"],
	},
	// 2. Base Config
	js.configs.recommended,
	...ts.configs.recommended,
	...eslintPluginVue.configs["flat/essential"],
	// 3. Your Custom Settings
	{
		files: SOURCE_FILES,
		languageOptions: {
			globals: globals.browser,
			ecmaVersion: 2020,
			parserOptions: {
				parser: ts.parser, // Use the imported ts object
				extraFileExtensions: [".vue"],
			},
		},
		plugins: {
			"@stylistic": stylistic,
		},
		rules: {
			curly: "error",
			"@stylistic/indent": ["error", 2],
			"@stylistic/brace-style": "error",
		},
	},
	eslintConfigPrettier,
];

export default eslintConfig;
