# src/layouts/ — Astro Layout Templates

## Inherits
- Root `AGENTS.md` Orchestrator Contract
- `src/AGENTS.md` Source Code Rules

## Directory-Specific Rules

### For Orchestrator
- ALL layout creation/editing → DELEGATE to `category="deep"`
- NEVER edit .astro layout files yourself

### For Workers (Deep Category)
- Layouts are Astro files (`.astro`)
- Use `---` frontmatter for TypeScript
- Import components from `../components/`
- Use `<slot />` for content injection
- Include standard HTML boilerplate (html, head, body)
- Tailwind classes allowed
- SEO meta tags in head
