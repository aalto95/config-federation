# Config Federation

Monorepo with reusable frontend configuration packages.

## Packages

- [`@config-federation/vue`](./packages/vue) - shared ESLint, Stylelint, Prettier, and Vitest configs for Vue 3 projects.

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
