import eslintConfig from "./eslint/index.js";
import prettierConfig from "./prettier/index.js";
import stylelintConfig from "./stylelint/index.js";
import { deepMerge } from "./utils/deep-merge.js";
import vitestConfig from "./vitest/index.js";

export {
	deepMerge,
	eslintConfig,
	prettierConfig,
	stylelintConfig,
	vitestConfig,
};
