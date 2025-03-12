declare module "@config-federation/vue" {
  import type { Config as EslintConfig } from "typescript-eslint";
  import type { Config as PrettierConfig } from "prettier";
  import type { Config as StylelintConfig } from "stylelint";
  import type { UserConfig as VitestConfig } from "vitest/node";

  export type { EslintConfig, PrettierConfig, StylelintConfig, VitestConfig };

  export const eslintConfig: EslintConfig[];
  export const prettierConfig: PrettierConfig;
  export const stylelintConfig: StylelintConfig;
  export const vitestConfig: VitestConfig;
  export function deepMerge(config: object, customs: object): object;
}
