# Spec: UI/UX Improvements (Main)

> **Domain:** ui-ux-improvements  
> **Status:** BASELINE — This is the main spec. Delta specs in `openspec/changes/*/specs/ui-ux-improvements/spec.md` extend or override this.

## Overview

This domain covers all user interface and user experience improvements for the Persona 5 themed CV. The baseline establishes the current state and general principles.

## Current State

- **Stack:** Astro + SolidJS islands + TailwindCSS + Custom CSS (persona5.css)
- **Theme:** Persona 5 (red/black, angular shapes, Anton font)
- **Animations:** Basic fade-in/slide-up via IntersectionObserver, limited to `AnimatedSection.tsx`
- **Navigation:** Fixed top bar with scroll links, no active state indicator
- **Mobile:** Horizontal nav that may overflow, no dedicated mobile menu
- **Skills:** Linear progress bars (`SkillBars.tsx`)
- **Contact:** Static email link and download button

## General Principles

1. **Persona 5 Consistency:** Every visual change must reinforce the red/black/angular aesthetic.
2. **Performance First:** Only composite properties (`transform`, `opacity`) for animations.
3. **Accessibility:** `prefers-reduced-motion` support is mandatory for all motion.
4. **Progressive Enhancement:** Core content must work without JavaScript.
5. **Mobile-First:** All new features must be designed for mobile before desktop.

## Animation Standards

- **Default easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out)
- **Default duration:** `600ms`
- **Stagger delay:** `100ms`
- **Hover duration:** `200ms`

## Component Inventory

| Component | Location | Type | Hydration |
|-----------|----------|------|-----------|
| AnimatedSection | `src/islands/AnimatedSection.tsx` | Island | `client:visible` |
| SkillBars | `src/islands/SkillBars.tsx` | Island | `client:visible` |
| ThemeToggle | `src/islands/ThemeToggle.tsx` | Island | `client:load` |
| Persona5Card | `src/components/ui/Persona5Card.astro` | Astro | Static |
| PoliceTape | `src/components/ui/PoliceTape.astro` | Astro | Static |
| LanguageToggle | `src/components/ui/LanguageToggle.astro` | Astro | Static |
| Hero | `src/components/sections/Hero.astro` | Astro | Static |
| Experience | `src/components/sections/Experience.astro` | Astro | Static |
| Skills | `src/components/sections/Skills.astro` | Astro | Static |
| Projects | `src/components/sections/Projects.astro` | Astro | Static |
| Education | `src/components/sections/Education.astro` | Astro | Static |
| Contact | `src/components/sections/Contact.astro` | Astro | Static |
| BaseLayout | `src/layouts/BaseLayout.astro` | Astro | Static |

## Change History

- **cv-ui-ux-revamp** (DRAFT) — Stagger animations, Hero enhancements, Scroll indicators, Skills redesign, Project cards, Contact interactions, Mobile nav, Microinteractions.
