---
name: guruma-figma-to-mui
description: Phased workflow to turn Figma references into MUI + Next.js for Guruma: theme pass, fluid layout, SSR, and thin static app routes with modules/. Use for Figma handoff, screen implementation from design, or when the user shares a Figma link or frame.
---

# Guruma: Figma → MUI

## Before you start

1. **Figma MCP:** load **`figma-use`** before any Figma MCP call that needs plugin context.
2. **Law:** **`.cursor/rules/next-mui-figma-standards.mdc`**
3. **Placement:** **`.cursor/skills/guruma-feature-modules/SKILL.md`** (all `app` / `modules` / barrel detail lives there — do not duplicate here).
4. **Theme source:** **new tokens and `createTheme` changes** go under **`theme/`** (see **feature-modules** skill). Until migration, also read **`lib/mui-theme.ts`** and **`lib/design-system.ts`** so breakpoints and palette stay consistent.

## Phase 1 — Read Figma (no pixel worship)

- Frames → **sections → components**; propose boundaries even if the file is messy.
- From design take **only:** families, weights, hierarchy, **semantic** color → map to **palette / tokens**, not hex in JSX.
- Spacing as **tight / comfortable / loose** → **`theme.spacing`** + **`sx` breakpoints**, not Figma gap literals.
- **Fluid:** **rem**-leaning layout/typography; responsive `typography` / clamp where useful.

## Phase 2 — Theme before big JSX

- New tokens (palette steps, gradients, surfaces) → **`theme/`** (e.g. `createTheme`, palette extensions), not leaf components. **`lib/`** theme files remain valid until migrated.
- Translucency → **`alpha(theme.palette.*.*, value)`**.
- Gradient not in theme → **stop, list minimal theme additions, ask** — no inline gradients in components.

## Phase 3 — Build (structure = feature-modules skill)

- **New screens:** thin **`app/<segment>/page.tsx`** with a **static** `<segment>` (e.g. `about-her`, `contact`) + composed UI in **`modules/<segment>/`** — see **golden path** in the feature-modules skill. Avoid introducing new logic into a catch-all **`[slug]`** router for fixed marketing URLs.
- **Server by default;** **`"use client"`** only for interactivity / browser / required client MUI.
- **Copy:** **`content/*`**, typed **`lib/`** modules (e.g. **`site-pages`**), or small JSON imports — avoid long hardcoded prose for repeatable blocks.

## Phase 4 — Responsive

- **xs → md+** with theme breakpoints; wrap/stack/flex; avoid fixed widths copied from artboards.

## Phase 5 — Images & SEO

- **`public/`** tree; **`next/image`**; **`priority`** only for LCP-critical assets.
- Primary copy + **metadata** remain SSR-friendly.

## Exit checklist

- [ ] Touched/new UI: **theme + `alpha` / tokens** — no new stray hex/rgba/gradients.
- [ ] No Figma **`letterSpacing` / `lineHeight`** in `sx` — **`theme.typography`**.
- [ ] **`"use client"`** minimal for this work.
- [ ] **SSR/SEO:** metadata + primary text path intact.
- [ ] **New** route: **`app/<segment>/page.tsx`** (static segment) + **`modules/<segment>/`** (**feature-modules** skill).

## Anti-patterns

| Figma | Code |
|-------|------|
| Exact gaps | `theme.spacing` + breakpoint `gap` |
| Hex fills | palette / theme extensions |
| Spec letter-spacing / line-height | `theme.typography` variants |
