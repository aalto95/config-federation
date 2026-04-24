import type { Config as PrettierConfig } from "prettier";
import type StylelintConfig from "stylelint";
import type { Config as EslintConfig } from "typescript-eslint";
import type { TestUserConfig as VitestConfig } from "vitest/node";

export type { EslintConfig, PrettierConfig, StylelintConfig, VitestConfig };

export type DeepMergeCustomRules<T> = T extends Array<infer U>
	? Array<DeepMergeCustomRules<U>>
	: T extends object
		? { [K in keyof T]?: DeepMergeCustomRules<T[K]> } & Record<string, unknown>
		: T;

export declare const eslintConfig: EslintConfig[];
export declare const prettierConfig: PrettierConfig;
export declare const stylelintConfig: typeof StylelintConfig;
export declare const vitestConfig: VitestConfig;
export function deepMerge<TConfig, TCustoms extends DeepMergeCustomRules<TConfig>>(
	config: TConfig,
	customs: TCustoms,
): TConfig & TCustoms;
