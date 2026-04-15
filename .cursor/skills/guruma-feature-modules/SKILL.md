---
name: guruma-feature-modules
description: Defines Guruma’s paired static app routes and modules folder layout, barrels, shared top-level folders, thin pages, and migration from components/site or app/[slug]. Use when adding routes, scaffolding features, splitting pages into modules, or when the user mentions modules/, app structure, static routes, or feature folders.
---

# Guruma: `app` + `modules` layout

## Authority

- **Quality bar** (theme, SSR, units, images): **`.cursor/rules/next-mui-figma-standards.mdc`**
- **Figma → implementation phases:** **`.cursor/skills/guruma-figma-to-mui/SKILL.md`**
- **This file:** **where files live** and **import rules** only.

## Core rule

For each **URL**, use a **static** route folder **`app/<segment>/`** (folder name = path segment, e.g. `about-her`, `contact`) and a matching **`modules/<segment>/`**. The **`app`** file owns **URL + `metadata`**; the **module** owns the **composed page component**.

**Default:** explicit **`app/<segment>/page.tsx`** — **not** a single catch-all **`app/[slug]/page.tsx`** for known marketing pages.

## Legacy vs new (additive)

- **Existing tree stays:** keep **`components/`**, **`lib/`**, and current **`app/`** files until you clean up later. **Add** **`modules/`**, **`theme/`**, and other shared folders **alongside** them for new work.
- **New features:** live under **`modules/<segment>/`**. Do **not** add new full-page implementations under **`components/site/`**.
- **Existing `components/site/`:** keep until migrated; when a slice moves, **`app`** should import **`@/modules/...`**.

## New feature checklist

1. **`app/<segment>/page.tsx`** — `generateMetadata` / `metadata` if needed + **one** import from **`@/modules/<segment>`**.
2. **`modules/<segment>/index.ts`** — composes sections; exports the page view (e.g. `AboutUsPage`). Children from **`./components`** only.
3. **`modules/<segment>/components/<block>/index.ts`** per block + **`components/index.ts`** barrel re-exporting them.
4. **`lib/`** — shared helpers, **`lib/site-pages.ts`**-style typed content, config **until** moved. **`content/`** — optional JSON/TS payloads for copy.
5. **`theme/`** — **all new** MUI theming: `createTheme`, palette/typography tokens, gradients, and exports consumed by **`ThemeProvider`**. Legacy **`lib/mui-theme.ts`** / **`lib/design-system.ts`** stay until migrated or thin re-exports from **`theme/`**.

## Shared top-level

| Path | Use |
|------|-----|
| **`theme/`** | New MUI theme (`createTheme`, tokens, gradients); provider-facing exports |
| **`hooks/`** | Hooks shared by multiple modules |
| **`utils/`** | Pure helpers |
| **`model/`** | Shared types / DTOs |
| **`component/`** | Global UI reused across modules (subfolder + optional `index.ts`) |

If two features need the same code, **lift** it here — do not duplicate under **`modules/`**.

## Imports

- **`app/.../page.tsx`** → **`@/modules/<segment>`** only for the composed page.
- Inside a module → **`./components`**; shared → **`@/theme/...`**, **`@/component/...`**, **`@/hooks/...`**, **`@/utils/...`**, **`@/model/...`** (create folders when first needed).

## Anti-patterns

- Large UI only in **`app/**/page.tsx`** with no **`modules/<segment>`** for new work.
- Growing a **fat `app/[slug]/page.tsx`** with **`if` chains** for pages that could be **static `app/<segment>/page.tsx`** instead.
- New page-sized UI under **`components/site/`**.
- Hooks/types duplicated across **`modules/`** trees.
- App-wide widgets only under **`modules/<segment>/components`** — use **`component/`**.

## Golden path (one segment)

```text
app/aboutus/page.tsx
  → import AboutUsPage from "@/modules/aboutus";

modules/aboutus/index.ts
  → compose sections, export AboutUsPage

modules/aboutus/components/index.ts
  → export * from "./hero-section"; …

modules/aboutus/components/hero-section/index.ts
  → export function HeroSection() { … }
```

## Migrating from `app/[slug]`

- **Goal:** one **`app/<segment>/page.tsx`** + **`modules/<segment>/`** per known page; **remove** the catch-all when every path is covered.
- **Incremental:** add **`app/contact/page.tsx`** (etc.); Next.js prefers the **static** route over **`[slug]`** for that path. Shrink the **`[slug]`** router until it is unused, then delete **`app/[slug]/`**.
- **When to keep `[slug]`:** many URLs from one template, or CMS-driven paths—not for a small fixed set of site pages.
