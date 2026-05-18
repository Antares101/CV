# src/components/ — SolidJS Components

## Inherits
- Root `AGENTS.md` Orchestrator Contract
- `src/AGENTS.md` Source Code Rules

## Directory-Specific Rules

### For Orchestrator
- ALL component creation/editing → DELEGATE to `category="visual-engineering"`
- NEVER create .tsx/.astro components yourself

### For Workers (Visual-Engineering Category)
- Components MUST be SolidJS (not React)
- Use `.tsx` extension
- Export as default or named export
- Use Tailwind classes for styling
- Follow PascalCase naming
- Props interface defined at top
- Use SolidJS `createSignal`, `createMemo`, `createEffect`
- No class components — functional only
