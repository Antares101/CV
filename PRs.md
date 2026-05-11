# PRs de Mejoras del CV

## Propósito
Documentar las decisiones tomadas en cada PR de mejora del CV.

## Stack
- Astro 5.0 + Solid.js + Tailwind
- Estilo actual: Persona 5 / Gaming aesthetic

---

## PR #1: Dark Mode Default
**Branch**: `feature/dark-mode-default`
**Descripción**: Implementar modo oscuro como default con toggle manual (system/light/dark)
**Decisiones**:
- Usar `prefers-color-scheme` para detección de sistema
- Persistir elección en localStorage sin FOUC
- Usar data-theme en `<html>` con CSS variables
- Añadir `color-scheme: light dark` en :root

---

## PR #2: Animaciones Subtiles
**Branch**: `feature/subtle-animations`
**Descripción**: Micro-interacciones (hover, fade-in on scroll) con prefers-reduced-motion
**Decisiones**:
- 150-250ms para micro-interacciones
- 200-400ms para transiciones de UI
- ease-out para entrada, ease-in para salida
- Respetar prefers-reduced-motion

---

## PR #3: Case Studies en Proyectos
**Branch**: `feature/project-case-studies`
**Descripción**: Convertir proyectos en páginas detalladas con estructura (Contexto → Desafío → Solución → Métricas)
**Decisiones**:
- Crear ruta /projects/[slug] para cada proyecto
- Incluir métricas concretas en cada case study
- 3-6 proyectos bien documentados

---

## PR #4: WCAG 2.2 AA Compliance
**Branch**: `feature/wcag-accessibility`
**Descripción**: Mejorar accesibilidad (contraste, touch targets, skip links, focus indicators)
**Decisiones**:
- Contraste mínimo 4.5:1 texto normal, 3:1 texto grande
- Touch targets mínimo 44x44px
- Skip links "Skip to main content"
- Focus indicators visibles

---

## PR #5: SEO Optimization
**Branch**: `feature/seo-optimization`
**Descripción**: Meta tags, Open Graph, Twitter Cards, sitemap, robots.txt
**Decisiones**:
- Meta description dinámico
- Open Graph para redes sociales
- Twitter Card support
- sitemap.xml y robots.txt

---

## PR #6: Structured Data (JSON-LD)
**Branch**: `feature/json-ld-structured-data`
**Descripción**: Schema.org para Person, ProfessionalService, SoftwareApplication
**Decisiones**:
- JSON-LD en head de cada página
- schemas: Person, ProfessionalService, SoftwareApplication
- BreadcrumbList para navegación

---

## PR #7: View Transitions API
**Branch**: `feature/view-transitions`
**Descripción**: Transiciones suaves entre páginas nativas del navegador
**Decisiones**:
- Usar API nativa de Astro
- Transiciones en proyectos y case studies
- Fallback para navegadores sin soporte

---

## PR #8: Improved Project Cards
**Branch**: `feature/improved-project-cards`
**Descripción**: Cards más ricas con hover effects, tech badges, links claros
**Decisiones**:
- Badges de tecnología con colores
- Links a GitHub y demo
- Hover effects consistentes con el theme

---

## PR #9: Performance Optimization
**Branch**: `feature/performance-optimization`
**Descripción**: Image optimization, font subsetting, lazy loading, bundle analysis
**Decisiones**:
- Optimizar imágenes con Astro
- Font-display: swap
- Lazy loading de componentes no críticos

---

## PR #10: Analytics Setup
**Branch**: `feature/analytics`
**Descripción**: Script para tracking simple (sin cookies, GDPR compliant)
**Decisiones**:
- Sin cookies, GDPR compliant
- Simple page view counter o analytics básico

---

## PR #11: Print Stylesheet
**Branch**: `feature/print-stylesheet`
**Descripción**: CSS optimizado para impresión (PDF export)
**Decisiones**:
- Ocultar elementos no relevantes (nav, animations)
- Links visibles como URLs
- Contraste optimizado para print

---

## PR #12: Contact Form
**Branch**: `feature/contact-form`
**Descripción**: Formulario funcional con validación client-side
**Decisiones**:
- Validación HTML5 + JavaScript
- Feedback visual para errores
- Diseño responsive