# Element Essentials

**A lightweight, accessible component library providing essential UI building blocks for modern web applications.**

---

## Overview

Element Essentials is a modern, accessible React component library designed to help you build beautiful, consistent, and user-friendly interfaces with ease. It provides a set of essential UI components, tokens, and documentation for rapid web application development.

---

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite** (for docs dev/build)
- **Storybook** (for interactive component documentation)
- **pnpm** (monorepo/workspaces)
- **Turborepo** (monorepo build orchestration and caching)
- **ESLint & Prettier** (code quality)

### Monorepo Management with Turborepo

This project uses [Turborepo](https://turbo.build/) to efficiently manage builds, caching, and task orchestration across multiple packages. Turborepo helps speed up development and CI by running only the necessary tasks and sharing cache artifacts between machines.

**Common Turborepo commands:**

```sh
pnpm turbo run build      # Build all packages
pnpm turbo run dev        # Start dev servers for all packages
pnpm turbo run lint       # Lint all packages
```

Learn more in the [Turborepo docs](https://turbo.build/repo/docs).

---

## Project Structure

```
/element-essentials
├── packages
│   ├── components   # React component library source code
│   ├── tokens       # Design tokens (colors, typography, spacing, etc.)
│   └── docs         # Documentation site (Vite + Storybook)
└── ...              # Configs, CI, etc.
```

- **components**: All reusable UI components live here.
- **tokens**: Centralized design tokens for consistency.
- **docs**: Storybook-powered documentation and usage guides.

---

## Getting Started

### Install dependencies

```sh
pnpm install
```

### Develop

Start the docs site and Storybook in development mode:

```sh
cd packages/docs
pnpm dev         # Starts Vite dev server for docs
pnpm storybook   # Starts Storybook for live component preview
```

### Build

Build the component library and docs:

```sh
pnpm build       # Build all packages
cd packages/docs
pnpm build-storybook   # Build static Storybook docs
```

### View Storybook

After building, open `packages/docs/storybook-static/index.html` in your browser or deploy to a static host (e.g., Vercel).

---

## Contributing

- Please open issues or pull requests for bugs, features, or improvements.
- Follow the coding standards enforced by ESLint and Prettier.

---

## License

MIT

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turborepo.com/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
