# Agents Guide — Ingenuity Website

## Project Overview

Next.js 16 website for FTC Team 24220 Ingenuity. Uses React 19, TypeScript, Tailwind CSS 3, and shadcn/ui components.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3 + `tailwindcss-animate`
- **UI Primitives:** shadcn/ui (Radix UI + CVA + `cn` utility — components are local in `components/ui/`)
- **Icons:** `lucide-react`
- **Linting:** ESLint 9 flat config with `@next/eslint-plugin-next`, `typescript-eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`
- **Hosting:** Vercel

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (use to verify changes compile)
- `npm run lint` — run ESLint
- `npx next build` — equivalent to `npm run build`

## Conventions

### Commits

Use [Conventional Commits](https://www.conventionalcommits.org/). Types:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation only
- `style:` formatting, no code change
- `refactor:` restructuring without behavior change
- `perf:` performance improvement
- `a11y:` accessibility improvement
- `chore:` tooling, deps, config

Subject line: imperative mood, lowercase, under 72 characters.

### Code Style

- Prefer server components by default. Use `'use client'` only when the component needs interactivity (useState, useEffect, event handlers, browser APIs).
- Use `@/` path aliases for imports (e.g., `@/components/ui/button`).
- Default exports for pages and components, named exports for utilities.
- Decorative icons from `lucide-react` must have `aria-hidden="true" focusable="false"`.
- Avoid inline `style` unless required for dynamic values or third-party embed compatibility.

### Comments

This codebase is heavily commented so developers without AI tooling can understand it. When adding or modifying code:

- Add comments explaining **what** a section does and **why** (not just restating the code).
- Comment all props/interfaces, state variables, effects, and non-obvious logic.
- Reference relevant WCAG criteria when adding accessibility patterns (e.g., "WCAG 2.4.7 Focus Visible").
- Use ASCII characters only in comments (no unicode symbols).
- Use `//` for single-line comments and `{/* */}` for JSX comments.

### Component Patterns

- shadcn/ui primitives live in `components/ui/` (button, card, separator). Follow their existing pattern: `forwardRef`, `cn()` utility, CVA variants.
- Custom components also live in `components/ui/`.
- Pages use the App Router file conventions in `app/`.
- Heavy client components should be lazy-loaded via `next/dynamic` with `ssr: false` (see `LazySection.tsx`).

### Accessibility (WCAG 2.2 AA)

This project targets WCAG 2.2 AA compliance. When making changes:

- All pages must have a `<main id="main">` landmark.
- Sections with `id` attributes must include `scroll-mt-24` (fixed header offset).
- Interactive elements need visible focus indicators (`focus-visible:ring-2 focus-visible:ring-orange-400`).
- Modals must use `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, focus trap, and focus restore.
- Toggle buttons must have `aria-expanded` and `aria-controls`.
- Auto-moving content (marquees) must have a user-accessible pause control.
- Links with generic text (e.g., "Learn More") must include `sr-only` context.
- Each route should have a unique `<title>` via `export const metadata`.

### Validation

Before committing, always:

1. Run `npm run build` — must pass with no errors.
2. Run `npm run lint` — must pass with no errors.
3. Once all changes are verified, commit and push.

### General Guidance

For anything not explicitly covered in this document, follow established best practices for a Next.js App Router project with TypeScript, Tailwind CSS, and React. Prioritize readability, accessibility, and performance.

### Maintaining These Docs

If the project structure, key files, tech stack, or conventions change, update both `AGENTS.md` and `.github/copilot-instructions.md` to reflect those changes.
