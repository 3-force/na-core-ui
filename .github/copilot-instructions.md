# AI Coding Agent Guidelines for na-core-ui

## Project Overview

The `na-core-ui` repository is a React-based UI library designed to provide reusable components and plugins for web applications. It uses TypeScript, TailwindCSS, and Vite for development and build processes.

## Architecture

- **Components**: Located in `src/libs/components/`, these are reusable UI elements like `Button`, `Avatar`, and `Collapse`. Each component typically includes a `index.tsx` file for implementation and a `index.stories.tsx` file for Storybook documentation.
- **Plugins**: Found in `src/libs/plugins/`, these are integrations or utilities like `vanilla-calendar.js` and `swiper.js`.
- **Common Utilities**: Contexts and hooks are in `src/libs/common/contexts/` and `src/libs/common/hooks/` respectively, providing shared functionality like `AlertContext` and `useDrawer`.

## Developer Workflows

### Build and Run

- Install dependencies: `pnpm install`
- Start development server: `pnpm run dev`
- Build for production: `pnpm run build`

### Testing

- Run tests: `pnpm test`
- Add stories for components in `index.stories.tsx` files to ensure visual testing via Storybook.

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Use types like `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, and `chore`. Example:

```
feat(button): add loading state
```

## Project-Specific Conventions

- **TailwindCSS**: Use utility classes for styling. Custom presets are defined in `tailwind-preset.js`.
- **TypeScript**: Strict typing is enforced. Use `AvatarProps` and similar interfaces for props.
- **Storybook**: Document components with stories in `index.stories.tsx` files.

## Integration Points

- **External Libraries**: Includes `swiper.js`, `sweetalert2.js`, and `apexcharts.js` for advanced UI functionalities.
- **Build Tools**: Vite is used for fast builds and hot module replacement.

## Key Files

- `vite.config.ts`: Vite configuration.
- `tailwind.config.js`: TailwindCSS setup.
- `tsconfig.json`: TypeScript configuration.
- `src/libs/components/`: Main components directory.
- `src/libs/plugins/`: Plugins directory.

## Environment Setup

- Node.js version: Ensure compatibility with the version specified in `engines` field of `package.json`.
- Use `.env` files for environment variables if required. Check for `.env.example` for reference.

## Examples

### Adding a New Component

1. Create a new folder in `src/libs/components/`.
2. Add `index.tsx` for implementation.
3. Add `index.stories.tsx` for Storybook documentation.
4. Use TailwindCSS utility classes for styling.

### Writing a Hook

1. Add the hook file in `src/libs/common/hooks/`.
2. Use TypeScript for strict typing.
3. Write tests to ensure functionality.

---

Feel free to update this file as the project evolves.
