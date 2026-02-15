# Copilot Instructions — Ingenuity Website

## Project

Next.js 16 (App Router) website for FTC Team 24220 Ingenuity. React 19, TypeScript (strict), Tailwind CSS 3, shadcn/ui components.

## Code Conventions

- Prefer server components. Only add `'use client'` when interactivity is needed.
- Use `@/` path aliases for imports.
- Default exports for pages and components.
- Follow existing shadcn/ui patterns in `components/ui/` (forwardRef, `cn()`, CVA).
- Icons: use `lucide-react`. Add `aria-hidden="true" focusable="false"` on decorative icons.
- No unnecessary inline styles — use Tailwind classes.

## Commit Messages

Use Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `a11y:`, `chore:`.
Imperative mood, lowercase, under 72 characters.

## Accessibility (WCAG 2.2 AA)

- All pages need `<main id="main">` landmark.
- Anchored sections need `scroll-mt-24` for fixed header offset.
- Interactive elements need `focus-visible:ring-2 focus-visible:ring-orange-400`.
- Modals: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, focus trap, focus restore.
- Toggles: `aria-expanded`, `aria-controls`.
- Auto-moving content needs a pause control.
- Generic link text needs `sr-only` context (e.g., `<span className="sr-only"> about {name}</span>`).
- Each route needs a unique page title via `export const metadata`.

## Linting & Validation

- Run `npm run lint` before committing.
- Run `npm run build` to verify no build errors.

## Key Files

- `app/layout.tsx` — root layout (skip link, fonts, metadata)
- `app/page.tsx` — home page
- `app/about/page.tsx` — about/team page
- `components/ui/header.tsx` — site navigation (hamburger overlay menu)
- `components/ui/modal.tsx` — accessible modal dialog
- `components/ui/bio.tsx` — team member bio card
- `components.json` — shadcn/ui config
- `tailwind.config.ts` — Tailwind config with shadcn theme vars
- `eslint.config.mjs` — ESLint 9 flat config

## Maintaining These Docs

If the project structure, key files, tech stack, or conventions change, update both `AGENTS.md` and `.github/copilot-instructions.md` to reflect those changes.
