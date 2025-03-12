import { Config as EslintConfig } from "typescript-eslint";
import { Config as PrettierConfig } from "prettier";
import { Config as StylelintConfig } from "stylelint";
import { UserConfig as VitestConfig } from "vitest/node";

declare module "@config-federation/vue" {
  export const eslintConfig: EslintConfig[];
  export const prettierConfig: PrettierConfig;
  export const stylelintConfig: StylelintConfig;
  export const vitestConfig: VitestConfig;
  export function deepMerge(config: object, customs: object): object;
}
