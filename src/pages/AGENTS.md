# src/pages/ — Astro Page Routes

## Inherits
- Root `AGENTS.md` Orchestrator Contract
- `src/AGENTS.md` Source Code Rules

## Directory-Specific Rules

### For Orchestrator
- ALL page creation/editing → DELEGATE to `category="deep"`
- NEVER create .astro pages yourself

### For Workers (Deep Category)
- Pages are Astro files (`.astro`)
- File name = route path (e.g., `about.astro` → `/about`)
- Use `---` frontmatter for TypeScript
- Import layouts from `../layouts/`
- Import components from `../components/`
- Use `export const prerender = true` for static pages
- Page-specific metadata in frontmatter
