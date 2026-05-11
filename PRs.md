# PRs de Mejoras del CV

## Propósito
Documentar las decisiones tomadas en cada PR de mejora del CV.

## Stack
- Astro 5.0 + Solid.js + Tailwind
- Estilo actual: Persona 5 / Gaming aesthetic

## Estado de las Branches

| # | Branch | Descripción | Estado |
|---|--------|-------------|--------|
| 1 | `feature/dark-mode-default` | Dark mode con soporte system preference | ✅ Completado |
| 2 | `feature/subtle-animations` | Animaciones sutiles con reduced-motion | ✅ Completado |
| 3+8 | `feature/improved-project-cards` | Project Cards mejorados con tech badges y links | ✅ Completado |
| 4 | `feature/wcag-accessibility` | WCAG 2.2 AA compliance | ✅ Completado |
| 5 | `feature/seo-optimization` | SEO con Open Graph, Twitter Cards, sitemap | ✅ Completado |
| 6 | `feature/json-ld-structured-data` | JSON-LD structured data para rich snippets | ✅ Completado |
| 7 | `feature/view-transitions` | View Transitions API para navegación suave | ✅ Completado |
| 9 | `feature/performance-optimization` | Performance con resource hints | ✅ Completado |
| 10 | `feature/analytics` | Analytics placeholder (GDPR compliant) | ✅ Completado |
| 11 | `feature/print-stylesheet` | Print stylesheet mejorado | ✅ Completado |
| 12 | `feature/contact-form` | Contact form con mailto approach | ✅ Completado |

## Decisiones por PR

### PR #1: Dark Mode Default
**Decisiones**:
- ThemeToggle con 3 estados: dark → system → light
- System preference detection via `prefers-color-scheme`
- Persistencia en localStorage sin FOUC
- Inline script en BaseLayout para prevenir flash
- CSS variables para light mode en `:root.light`
- Color yellow en Tailwind para indicador de system mode

### PR #2: Animaciones Subtiles
**Decisiones**:
- CSS variables para timing: 150ms (micro), 200ms (fast), 300ms (normal)
- `prefers-reduced-motion` media query (WCAG)
- Clases `.p5-micro-hover` para interacciones sutiles
- Easing: `ease-out` para entrada, `ease-in` para salida
- AnimatedSection reducido de 700ms a 300ms
- Removido `view-transition-name` con Math.random() (rompe SSR)

### PR #3+8: Project Cards Mejorados
**Decisiones**:
- Tech badges con bordes y colores P5
- Links a GitHub y demo con iconos SVG
- Hover effects consistentes con el theme
- aria-labels para accesibilidad

### PR #4: WCAG 2.2 AA
**Decisiones**:
- Touch targets mínimo 44x44px para elementos interactivos
- Focus indicators visibles con color P5 red
- Clase `.p5-muted-contrast` para mejor contraste
- Prevenir focus en elementos decorativos con aria-hidden

### PR #5: SEO Optimization
**Decisiones**:
- Open Graph meta tags para Facebook/social sharing
- Twitter Card meta tags
- Author y keywords meta tags
- sitemap.xml para search engines
- robots.txt con referencia al sitemap

### PR #6: JSON-LD Structured Data
**Decisiones**:
- Schema Person con job title, organización, ubicación
- Social profile links (GitHub, LinkedIn)
- knowsAbout para rich snippets en search results

### PR #7: View Transitions
**Decisiones**:
- ViewTransitions de `astro:transitions/client`
- fallback='swap' para navegadores sin soporte
- Navegación suave entre páginas

### PR #9: Performance Optimization
**Decisiones**:
- Preload para imagen crítica de perfil
- DNS prefetch para dominio externo
- Google Fonts ya usa display=swap

### PR #10: Analytics
**Decisiones**:
- Script placeholder comentado (GDPR compliant)
- Contador de page views simple
- Listo para integrar Plausible/Fathom

### PR #11: Print Stylesheet
**Decisiones**:
- Ocultar elementos decorativos (police tape, shards, aria-hidden)
- Reset de animaciones y transiciones para print
- Mantener optimizaciones existentes

### PR #12: Contact Form
**Decisiones**:
- Formulario con approach mailto: (funciona en sitios estáticos)
- Campos de asunto y mensaje con validación
- Labels y placeholders en ambos idiomas
- Focus styles con theme P5

## Cómo Probar

Para probar cada mejora:

```bash
# Cambiar a la branch deseada
git checkout feature/dark-mode-default

# Instalar dependencias (si es necesario)
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir http://localhost:4321
```

## Merge Strategy

Para mergear todas las mejoras:

```bash
# Opción 1: Merge secuencial
git checkout main
git merge feature/dark-mode-default
git merge feature/subtle-animations
# ... repetir para cada branch

# Opción 2: Rebase interactivo (más limpio)
git checkout main
git rebase feature/dark-mode-default
git rebase feature/subtle-animations
# ... repetir para cada branch
```

## Notas

- Todas las branches están basadas en `main`
- Cada branch es independiente y puede mergearse en cualquier orden
- Los cambios son compatibles entre sí (no hay conflictos esperados)
- El diseño mantiene la estética Persona 5 en todas las mejoras