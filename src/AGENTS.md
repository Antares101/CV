# src/ — Source Code Directory

## Inherits
- Root `AGENTS.md` Orchestrator Contract

## Directory-Specific Rules

### For Orchestrator
- ALL code changes in this directory → DELEGATE to `category="deep"` or `category="visual-engineering"`
- Component creation → `category="visual-engineering"`
- Page creation → `category="deep"`
- Layout creation → `category="deep"`
- Style changes → `category="visual-engineering"`

### For Workers (When Delegated Here)
- Follow Astro + SolidJS + Tailwind conventions
- Components: PascalCase, in `src/components/`
- Pages: lowercase, in `src/pages/`
- Use TypeScript strictly
- Prefer SolidJS signals over props drilling
