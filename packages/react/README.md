# Config Federation

## Concept

Set of essential configs for your React project.

## Forget about dependency hell

This library will handle all the common dependencies and rules. At the same time it will let you modify all the configs for your specific needs.

## Installation

```sh
npm i -D @config-federation/react
```

## Usage

Create config files and import configs from a library.

```js
// eslint.config.js

import { eslintConfig } from "@config-federation/react";

export default [
  ...eslintConfig,
  // extend here
];
```

```js
// stylelint.config.js

import { deepMerge, stylelintConfig } from "@config-federation/react";

const customs = {
  // extend here
};

export default deepMerge(stylelintConfig, customs);
```

```js
// prettier.config.js

import { deepMerge, prettierConfig } from "@config-federation/react";

const customs = {
  // extend here
};

export default deepMerge(prettierConfig, customs);
```

```js
// vitest.config.js

import { deepMerge, vitestConfig } from "@config-federation/react";
import { mergeConfig } from "vite";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  deepMerge(vitestConfig, {
    // extend here
  })
);
```
