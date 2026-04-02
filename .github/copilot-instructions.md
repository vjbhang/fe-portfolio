# Project Guidelines

## Build And Validate

- Use `npm install` to install dependencies.
- Use `npm run dev` for local development.
- Use `npm run build` for production builds.
- Use `npm run lint` for validation.
- There is no test script in this repo. Do not claim tests were run unless you added and ran them explicitly.

## Architecture

- This portfolio is a single-page experience driven from `app/page.tsx`, not a route-per-section app.
- Page transitions are controlled by `pageIndex`, wheel delta accumulation, and `scrollIntoView`; preserve that flow unless the task explicitly changes navigation behavior.
- Reusable UI lives under `app/component/elements/`.
- Section-level content lives under `app/component/page/`.
- Animated canvas-style effects are implemented in the `AnimatedBG` and `AnimatedButton` folders with client-only dynamic imports and CSS modules.

## Conventions

- Follow `docs/coding-standards.md` for JavaScript and TypeScript conventions instead of restating those rules here.
- Keep changes minimal and consistent with the existing component structure and naming.
- Preserve the current styling split: Tailwind utilities for page layout and composition, CSS or SCSS modules for isolated animated or highly custom components.
- The codebase currently uses relative imports heavily; only introduce aliases when they improve clarity and remain consistent with existing files.
- Be careful with animation and layout changes. The README notes timeline and animation performance sensitivity on weaker machines.

## Useful References

- See `docs/coding-standards.md` for coding standards.
- See `README.md` for the current project notes and performance log.