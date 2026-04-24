import { deepMerge, vitestConfig } from '@config-federation/vue';
import vue from '@vitejs/plugin-vue';
import { defineConfig, mergeConfig } from 'vitest/config';

export default mergeConfig(
  defineConfig({
    plugins: [vue()]
  }),
  deepMerge(vitestConfig, {})
);
