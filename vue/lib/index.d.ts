import { Config as EslintConfig } from "typescript-eslint";
import { Config as PrettierConfig } from "prettier";
import { Config as StylelintConfig } from "stylelint";

declare module "@config-federation/vue" {
  export const eslintConfig: EslintConfig;
  export const prettierConfig: PrettierConfig;
  export const stylelintConfig: StylelintConfig;
  export function deepMerge(config: object, customs: object): object;
}
