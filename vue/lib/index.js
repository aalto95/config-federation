import eslintConfig from "./eslint/index.js";
import prettierConfig from "./prettier/index.js";
import stylelintConfig from "./stylelint/index.js";
import vitestConfig from "./vitest/index.js";
import { deepMerge } from "./utils/deep-merge.js";

export {
  eslintConfig,
  prettierConfig,
  stylelintConfig,
  vitestConfig,
  deepMerge,
};
