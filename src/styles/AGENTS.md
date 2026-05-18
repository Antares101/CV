# src/styles/ — Global Styles & Tailwind Config

## Inherits
- Root `AGENTS.md` Orchestrator Contract
- `src/AGENTS.md` Source Code Rules

## Directory-Specific Rules

### For Orchestrator
- ALL style changes → DELEGATE to `category="visual-engineering"`
- NEVER edit CSS or Tailwind config yourself

### For Workers (Visual-Engineering Category)
- Tailwind is the PRIMARY styling method
- Custom CSS only when Tailwind can't handle it
- Tailwind config edits must maintain existing theme extensions
- Global CSS files: `.css` extension
- Import global styles in layouts, not pages
