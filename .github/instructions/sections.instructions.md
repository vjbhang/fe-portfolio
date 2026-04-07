---
description: "Use when editing or adding section components in app/component/page, including landing, work, about, and other portfolio sections. Keeps section files presentational, preserves the scroll-driven pageIndex flow, and matches the existing Tailwind-first layout patterns."
name: "Portfolio Sections"
applyTo: "app/component/page/**/*.tsx"
---

# Portfolio Section Guidelines

- Keep section components presentational. Navigation state, wheel handling, and `scrollIntoView` behavior belong in `app/page.tsx` unless the task explicitly changes that architecture.
- Match the existing section shape: simple function components, minimal local logic, and layout built primarily with Tailwind utility classes.
- Reuse the current visual language before introducing new abstractions. Section files are for content and composition, while reusable controls belong under `app/component/elements/`.
- When a section needs interaction, prefer receiving narrowly scoped props such as `setPageIndex` instead of recreating page-level state inside the section.
- Preserve the full-screen panel assumption. Section layouts should continue to work inside the horizontal snap container defined by `app/page.tsx`.
- Be careful with large animation or layout changes in section files. This project already has performance sensitivity called out in `README.md`.
- Follow `docs/coding-standards.md` for TypeScript and cleanup rules, especially avoiding commented-out code and keeping responsibilities narrow.
