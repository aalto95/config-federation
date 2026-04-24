# Config Federation

Monorepo with reusable frontend configuration packages.

This project provides opinionated Prettier, Stylelint, ESLint, and Vitest setups, designed to be extended when needed.

## Packages

- [`@config-federation/vue`](./packages/vue) - shared ESLint, Stylelint, Prettier, and Vitest configs for Vue 3 projects.
- [`@config-federation/react`](./packages/react) - shared ESLint, Stylelint, Prettier, and Vitest configs for React projects.
- [`vue-sample-app`](./packages/vue-sample-app) - sample Vue app for validating all Vue config presets.

## Workspace Setup

This repository uses a pnpm workspace:

- package manager: `pnpm@10.0.0`
- workspace packages: `packages/*`

Install dependencies from the repository root:

```sh
pnpm install
```

Run all workspace tests:

```sh
pnpm -r test
```

## Package Documentation

- [Vue package README](./packages/vue/README.md)
- [React package README](./packages/react/README.md)
- [Vue sample app README](./packages/vue-sample-app/README.md)
