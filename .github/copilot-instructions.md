# Copilot Instructions for personal-portfolio

## Project Overview

This is a **React + Vite + Tailwind CSS** personal portfolio web application.
It's a minimal setup optimized for fast development and production builds using
modern tooling.

**Key Technologies:**

- **React 19.2** with JSX (uses functional components and React hooks)
- **Vite 7.2** for bundling and HMR (Hot Module Replacement)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (not a PostCSS build)
- **DaisyUI 5.5** for pre-built Tailwind component classes
- **ESLint 9** with React-specific rules for code quality

## Architecture Patterns

### Component Structure

- **Entry Point:** `src/main.jsx` - Bootstraps React app into DOM element
  `#root` (defined in `index.html`)
- **Root Component:** `src/App.jsx` - Currently a minimal functional component;
  expand here for main UI
- **Styling:** `src/index.css` - Global styles using Tailwind directives
  (`@import "tailwindcss"` and `@plugin "daisyui"`)
- No component subdirectories yet—as the portfolio grows, create
  `src/components/` for reusable pieces

### Styling Approach

- **Pure Tailwind utility-first:** Use utility classes directly in JSX (e.g.,
  `className="bg-blue-500 p-4 rounded"`)
- **DaisyUI components:** Leverage ready-made classes like `btn`, `card`,
  `navbar`, `form-control` (see [DaisyUI docs](https://daisyui.com/) for
  component class names)
- **No CSS-in-JS or CSS modules** currently in use
- Custom CSS in `index.css` should use Tailwind's `@layer` directive if needed
  (e.g., `@layer components { ... }`)

### JSX Rules

- **Functional components only** (no class components)
- **React Hooks:** Use `useState`, `useEffect`, `useContext` etc. as needed
- **React 19 features:** No automatic JSX runtime needed; imports of `React` not
  required for JSX
- **Props:** Use destructuring in function parameters for clarity

## Development Workflow

### Essential Commands

| Command           | Purpose                                                          |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR (auto-refresh on file changes)    |
| `npm run build`   | Create optimized production build in `dist/` folder              |
| `npm run lint`    | Run ESLint on all `.js` and `.jsx` files; see `eslint.config.js` |
| `npm run preview` | Serve the production build locally for testing                   |

### ESLint Configuration

- **Config file:** `eslint.config.js` (flat config format, not `.eslintrc.json`)
- **Rule note:** `'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]`
  — allows unused variables starting with uppercase or underscore (useful for
  component props like `_unused` or `SomeComponent` that aren't used yet)
- **Run linting regularly** before committing to catch issues

## File Organization

```
src/
  ├── App.jsx           # Root component (main UI goes here)
  ├── main.jsx          # App bootstrap (do not move)
  ├── index.css         # Global styles (import Tailwind + DaisyUI here)
  └── assets/           # Images, fonts, etc. (reference with relative imports)

index.html             # HTML entry point (contains <div id="root">)
vite.config.js         # Vite config (plugins: Tailwind + React)
eslint.config.js       # ESLint rules
package.json           # Dependencies & scripts
```

## Common Patterns & Conventions

### Adding New Features

1. **New components:** Create `src/components/ComponentName.jsx` as you scale
2. **Import styles:** No import needed for CSS—Tailwind is applied globally via
   `src/index.css`
3. **Import components:** Use ES module syntax: `import App from './App.jsx'`

### Tailwind + DaisyUI Usage

```jsx
// Good: Use DaisyUI component classes
<button className="btn btn-primary">Click me</button>
<div className="card bg-base-100 shadow-xl">...</div>

// Also good: Mix Tailwind utilities with DaisyUI
<div className="card p-6 mb-4">...</div>
```

### State Management

- For now, keep state local with `useState` in components
- If state grows complex, consider Context API or external library later
- Avoid prop drilling by moving shared state to a common parent

## Integration Points & Dependencies

- **No backend API integration yet** — design components assuming static data or
  local state
- **Icons package (`icons`):** Available but usage not yet documented; check
  package for API
- **React DOM:** Only used in `main.jsx` via `createRoot()` and `render()`
- **Vite plugins:** Auto-configured in `vite.config.js`; no manual setup needed

## Do's and Don'ts

- ✅ Use functional components and hooks
- ✅ Leverage Tailwind utility classes and DaisyUI components
- ✅ Run `npm run lint` before creating PRs
- ✅ Keep components in `src/components/` once portfolio structure grows
- ❌ Don't add CSS frameworks beyond Tailwind (no Bootstrap, no Chakra, etc.)
- ❌ Don't modify `main.jsx` or `index.html` unless adding new root elements
- ❌ Don't use deprecated React patterns (class components, string refs)

## Quick References

- **Vite docs:** https://vitejs.dev/
- **React 19 docs:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/
- **DaisyUI components:** https://daisyui.com/components/
- **ESLint flat config:**
  https://eslint.org/docs/latest/use/configure/configuration-files-new
