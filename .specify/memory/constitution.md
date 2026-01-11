<!--
================================================================================
SYNC IMPACT REPORT
================================================================================
Version change: 1.0.0 → 1.1.0 (MINOR - Expanded testing principle)

Modified principles:
  - VI. Testing Discipline → VI. Testing Discipline (expanded with Playwright E2E)

Added sections:
  - Playwright E2E testing requirements in Testing Discipline
  - Playwright MCP in Technology Stack

Removed sections: None

Templates requiring updates:
  ✅ plan-template.md - Compatible (Constitution Check section present)
  ✅ spec-template.md - Compatible (user stories include acceptance scenarios for E2E)
  ⚠ tasks-template.md - Review needed: Currently marks tests as "OPTIONAL", but
      Playwright E2E tests are now MANDATORY per constitution. Consider updating
      template to reflect this requirement for new features.

Follow-up TODOs:
  - Consider updating tasks-template.md to make Playwright tests mandatory
================================================================================
-->

# Portfolio-Svelte Constitution

## Core Principles

### I. Svelte 5 Runes-First Reactivity

All reactive state MUST use Svelte 5 runes. Legacy reactive syntax is prohibited.

**Non-negotiable rules:**
- Use `$state()` for mutable reactive state
- Use `$derived()` for computed values derived from state
- Use `$effect()` only for side effects (DOM updates, external subscriptions)
- NEVER use `$:` reactive statements (Svelte 4 syntax)
- NEVER mutate derived values directly
- Effects MUST NOT be used for state synchronization—use `$derived` instead

**Rationale:** Svelte 5 runes provide explicit, fine-grained reactivity that is more predictable,
debuggable, and performant than implicit reactive declarations.

### II. TypeScript Strict Mode

All code MUST be written in TypeScript with strict mode enabled.

**Non-negotiable rules:**
- `strict: true` MUST remain in `tsconfig.json`
- All function parameters and return types MUST be explicitly typed
- Use Zod schemas for runtime validation of external data (API responses, user input)
- Prefer type inference for local variables when type is obvious
- NEVER use `any` type—use `unknown` with type guards if type is truly unknown
- Use SvelteKit's generated types (`$types`) for load functions and form actions

**Rationale:** TypeScript strict mode catches errors at compile time, improves IDE support,
and serves as living documentation for the codebase.

### III. Component-Based Architecture

UI MUST be composed of reusable, single-responsibility Svelte components.

**Non-negotiable rules:**
- Components MUST be placed in `src/components/` with logical subdirectories
- Each component file MUST export a single default component
- Use path aliases (`@components/`, `@utils/`, `@stores/`) for all imports
- Props MUST be typed using TypeScript interfaces or inline types
- Components MUST NOT exceed 200 lines—extract sub-components or utilities
- Use snippets for render delegation instead of slots where appropriate (Svelte 5)
- Layout components go in `src/components/layout/`
- Shared/generic components go in `src/components/shared/`

**Rationale:** Component-based architecture enables reusability, testability, and maintainable
code through separation of concerns.

### IV. Server-Side Data Loading Pattern

Data fetching MUST follow SvelteKit's server-side patterns.

**Non-negotiable rules:**
- Use `+page.server.ts` or `+layout.server.ts` for data that requires server access
- Use `+page.ts` or `+layout.ts` for data that can run on both client and server
- API routes MUST be in `src/routes/api/` with `+server.ts` files
- Server-only code MUST import from `$lib/server/` to prevent client bundling
- Private environment variables MUST use `$env/static/private` or `$env/dynamic/private`
- Public environment variables MUST use `$env/static/public` or `$env/dynamic/public`
- Return structured error responses using SvelteKit's `error()` helper
- Set appropriate cache headers for API responses

**Rationale:** SvelteKit's data loading patterns ensure security, SEO optimization,
and optimal performance through server-side rendering.

### V. Tailwind CSS Utility-First Styling

All styling MUST use Tailwind CSS utilities with consistent theming.

**Non-negotiable rules:**
- Use Tailwind utility classes directly in component markup
- Dark mode MUST use class-based toggling (`darkMode: 'class'`)
- Custom colors and theme extensions MUST be defined in `tailwind.config.cjs`
- CSS custom properties (CSS variables) for dynamic theming values
- Component-scoped `<style>` blocks ONLY for complex animations or pseudo-elements
- NEVER use inline `style` attributes for values achievable with utilities
- Use `@apply` sparingly—only for repeated patterns in global CSS
- Responsive design uses mobile-first approach (`sm:`, `md:`, `lg:`, etc.)

**Rationale:** Utility-first CSS ensures consistent styling, reduces CSS bundle size,
and enables rapid UI development without context switching.

### VI. Testing Discipline

Features MUST be testable with appropriate test coverage at all levels.

**Non-negotiable rules:**

**Unit & Component Testing (Vitest):**
- Use Vitest as the test runner with Testing Library for component tests
- Test files MUST be co-located or in a parallel `tests/` directory
- Components MUST be testable in isolation—avoid deep coupling
- Mock external dependencies (APIs, stores) in unit tests
- Test user-facing behavior, not implementation details
- Run `npm run check` before committing to catch type errors

**End-to-End Testing (Playwright) — MANDATORY:**
- Every new feature MUST include Playwright E2E tests
- E2E tests MUST cover all user stories defined in the feature specification
- Use Playwright MCP for test execution and browser automation
- E2E test files MUST be placed in `tests/e2e/` or `e2e/` directory
- Tests MUST validate critical user journeys: navigation, form submissions, chat flow
- Tests MUST run in headless mode for CI/CD pipelines
- Tests MUST cover both light and dark mode for visual features
- Tests MUST verify responsive behavior at key breakpoints (mobile, tablet, desktop)
- Use accessibility snapshots via Playwright MCP for UI validation
- Run E2E tests before merging any feature branch

**Test Coverage Requirements:**
- Unit tests for utility functions and isolated logic
- Component tests for reusable UI components
- E2E tests for complete user journeys (MANDATORY for each feature)
- Integration tests for API routes and server-side data flows

**Rationale:** Multi-level testing ensures confidence in refactoring, documents expected behavior,
prevents regressions, and validates the complete user experience from a real browser perspective.

### VII. Code Quality Automation

Code quality MUST be enforced through automated tooling.

**Non-negotiable rules:**
- ESLint MUST pass with zero errors before commits
- Prettier MUST format all code consistently
- Run `npm run lint` and `npm run format` before committing
- Use the configured ESLint rules from `eslint.config.js`—do not disable rules inline
- Svelte-specific linting via `eslint-plugin-svelte`
- TypeScript errors from `svelte-check` MUST be resolved

**Rationale:** Automated quality gates ensure consistent code style across contributors
and catch issues before they reach production.

## Technology Stack Requirements

### Core Framework
- **SvelteKit** 2.x with **Svelte** 5.x (runes required)
- **TypeScript** 5.x with strict mode
- **Vite** 6.x as build tool

### Styling
- **Tailwind CSS** 4.x with `@tailwindcss/vite` plugin
- **@tailwindcss/typography** for prose styling
- Custom font: CascadiaCode (self-hosted)

### AI Integration
- **Vercel AI SDK** (`ai` package) for streaming AI responses
- **@ai-sdk/openai** for OpenAI model integration
- **@ai-sdk/google** for Google AI model integration
- MCP (Model Context Protocol) for external tool integration

### State Management
- Svelte stores (`readable`, `writable`) for global state
- Component-local `$state()` for UI state
- Path aliases configured in `svelte.config.js`

### Testing
- **Vitest** 3.x with JSDOM environment for unit/component tests
- **@testing-library/svelte** for component testing
- **@testing-library/jest-dom** for DOM assertions
- **Playwright** for end-to-end browser testing
- **Playwright MCP** for AI-assisted test execution and browser automation
  - Use `browser_snapshot` for accessibility-based element selection
  - Use `browser_click`, `browser_type`, `browser_navigate` for interactions
  - Use `browser_take_screenshot` for visual regression capture
  - Use `browser_evaluate` for complex assertions

### Deployment
- **@sveltejs/adapter-vercel** for Vercel deployment
- **Docker** support via `Dockerfile` and `docker-compose.yml`
- **Redis** (ioredis) for caching/session management

### Code Quality
- **ESLint** 9.x with TypeScript and Svelte plugins
- **Prettier** 3.x with Svelte and Tailwind plugins

## Development Workflow

### Branch Strategy
- Feature branches: `feat/<feature-name>`
- Bug fixes: `fix/<issue-description>`
- Main branch is protected—no direct commits

### Pre-Commit Checklist
1. Run `npm run check` — TypeScript/Svelte type checking
2. Run `npm run lint` — ESLint and Prettier validation
3. Run `npm run test` — Execute unit/component tests
4. Run Playwright E2E tests for affected features
5. Verify dark mode works for UI changes
6. Test responsive breakpoints (mobile, tablet, desktop)

### Code Review Gates
- All changes require pull request
- TypeScript strict mode compliance verified
- Svelte 5 runes usage verified (no legacy syntax)
- Component size limit (200 lines) verified
- Unit/component test coverage for new features
- Playwright E2E tests for user-facing features (MANDATORY)

### Environment Configuration
- Local development: `.env` file (gitignored)
- Required variables:
  - `OPEN_AI_AI_API_KEY` — OpenAI API key
  - `BIOGRAPHY_MCP_SERVER_URL` — MCP server endpoint
- Use `$env/static/private` for build-time secrets
- Use `$env/dynamic/private` for runtime secrets

## Governance

This constitution supersedes all other development practices for this project.

**Amendment Process:**
1. Propose change via pull request to constitution file
2. Document rationale and impact on existing code
3. Update version following semantic versioning:
   - **MAJOR**: Principle removal or incompatible redefinition
   - **MINOR**: New principle or significant expansion
   - **PATCH**: Clarification, typo fix, non-semantic refinement
4. Update dependent templates if principles change
5. Migration plan required for breaking changes

**Compliance:**
- All code reviews MUST verify constitution compliance
- Violations MUST be documented with justification if unavoidable
- Annual review of principles for relevance

**Guidance:**
- Use `.specify/` templates for feature specifications
- Refer to official documentation:
  - [SvelteKit Docs](https://svelte.dev/docs/kit)
  - [Svelte 5 Runes](https://svelte.dev/docs/svelte/what-are-runes)
  - [Tailwind CSS](https://tailwindcss.com/docs)
  - [Vercel AI SDK](https://sdk.vercel.ai/docs)
  - [Playwright Docs](https://playwright.dev/docs/intro)

**Version**: 1.1.0 | **Ratified**: 2026-01-11 | **Last Amended**: 2026-01-11
