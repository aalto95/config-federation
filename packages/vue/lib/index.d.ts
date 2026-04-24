import type { Config as PrettierConfig } from "prettier";
import type StylelintConfig from "stylelint";
import type { Config as EslintConfig } from "typescript-eslint";
import type { TestUserConfig as VitestConfig } from "vitest/node";

export type { EslintConfig, PrettierConfig, StylelintConfig, VitestConfig };

export declare const eslintConfig: EslintConfig[];
export declare const prettierConfig: PrettierConfig;
export declare const stylelintConfig: typeof StylelintConfig;
export declare const vitestConfig: VitestConfig;
export function deepMerge<TConfig, TCustoms>(
	config: TConfig,
	customs: TCustoms,
): TConfig & TCustoms;
