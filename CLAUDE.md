# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

"Phục hồi tài sản" (PHTS) is a Vietnamese-language marketing/content site for a bankruptcy & corporate-recovery legal service (bankruptcy proceedings, business recovery, consulting, asset management). It is a Nuxt 4 application, currently early-stage: pages exist as route stubs and the home page (`app/pages/index.vue`) uses hardcoded mock data in place of a real backend/CMS.

## Commands

Package manager is **pnpm** (pinned via `packageManager` in package.json; workspace root marked by `pnpm-workspace.yaml`).

- `pnpm install` — install dependencies (runs `nuxt prepare` via postinstall)
- `pnpm dev` — start dev server at http://localhost:3000
- `pnpm build` — production build
- `pnpm generate` — static site generation
- `pnpm preview` — preview a production build locally

There is no lint, test, or typecheck script configured in `package.json` currently. Type references come from Nuxt's generated `.nuxt/tsconfig.*.json` files (see `tsconfig.json`); there is no standalone `tsc` script — use editor/IDE TS diagnostics or `nuxt typecheck` if type validation is needed.

## Architecture

- **Nuxt 4 with `app/` source directory** (`srcDir` convention: `app/app.vue`, `app/pages/`, `app/layouts/`, `app/components/`, `app/assets/`). File-based routing under `app/pages/` maps directly to Vietnamese URL slugs (e.g. `app/pages/dich-vu/pha-san.vue` → `/dich-vu/pha-san`).
- **Nuxt UI v4** (`@nuxt/ui`) + **Tailwind CSS v4** are the styling stack, wired in via `app/assets/css/main.css` (`@import "tailwindcss"; @import "@nuxt/ui";`). Custom theme tokens live in `app/assets/theme/`:
  - `color.css` defines `--color-primary` (used pervasively as `bg-primary`/`text-primary`/`border-primary` across components).
  - `breakpoint.css` defines custom Tailwind breakpoints (`s`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`).
- **Layout shell**: `app/app.vue` wraps everything in `<UApp><NuxtLayout><NuxtPage /></NuxtLayout></UApp>`. `app/layouts/default.vue` renders a fixed header (`LayoutHeader`), the page slot, a scroll-to-top button (driven by `useWindowScroll` from VueUse), and a footer (`LayoutFooter`).
- **Layout components** live under `app/components/layout/` (auto-imported per Nuxt convention, referenced as `<LayoutHeader />` / `<LayoutFooter />` — the directory name becomes a component-name prefix).
  - `header.vue` owns the nav config (`nav` array, including a "Dịch vụ" dropdown submenu), active-route highlighting (`isActive`/`isDropdownActive` based on `useRoute().path`), an expand-in-place search box wired to `navigateTo('/tim-kiem?q=...')` (note: `/tim-kiem` search results page does not exist yet), and dark-mode toggling via `<UColorModeButton>`.
  - `footer.vue` mirrors the same route list as the header nav (categories + services) plus an embedded Google Maps iframe and contact info.
- **Dark mode**: Nuxt UI color mode is used throughout; most content sections pair a light class with a `dark:` variant (e.g. `bg-white dark:bg-gray-900`) rather than relying on a single semantic token, so add both when introducing new UI.
- **No state management, API layer, i18n module, or content/CMS integration is wired up yet.** Page data (news, announcements, stats, services) is currently inline mock data typed with local `interface`s in `<script setup lang="ts">` blocks (see `app/pages/index.vue`). When wiring real data, keep in mind the nav/footer link lists in `header.vue`/`footer.vue` will need to move to a single source of truth.
- Route stub pages (e.g. `app/pages/dich-vu/pha-san.vue`) are currently empty `<template><div></div></template>` shells — building them out is expected ongoing work.
