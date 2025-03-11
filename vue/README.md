# Config Federation

## Concept

United repository of all essential configs for your frontend project.

## Forget about dependency hell

This library will handle all the common dependencies and rules. At the same time it will let you modify all the configs for your specific needs.

## Installation

```sh
npm i -D config-federation
```

## Usage

Create config files and import configs from a library.

```js
// eslint.config.js

import { eslintConfig } from "config-federation";

export default [
  ...eslintConfig,
  // extend here
];
```

```js
// stylelint.config.js

import { deepMerge, stylelintConfig } from "config-federation";

const customs = {
  // extend here
};

export default deepMerge(stylelintConfig, customs);
```

```js
// prettier.config.js

import { deepMerge, prettierConfig } from "config-federation";

const customs = {
  // extend here
};

export default deepMerge(prettierConfig, customs);
```
