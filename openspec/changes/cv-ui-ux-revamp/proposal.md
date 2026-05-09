# Proposal: CV UI/UX Revamp — Persona 5 Themed

## Intent

El CV actual tiene una base visual sólida con temática Persona 5 (colores rojo/negro, tipografía Anton, elementos angulares, police tape), pero las animaciones son básicas y predecibles, la UI se vuelve repetitiva sección por sección, y faltan microinteracciones y elementos de orientación que eleven la experiencia de usuario a un nivel "delightful". Este cambio busca transformar el CV de un documento estático bien diseñado a una experiencia interactiva memorable, manteniendo la coherencia temática y sin sacrificar rendimiento ni accesibilidad.

## Scope

### In Scope
- Implementar stagger animations en listas (Experience, Projects, Education, Skills)
- Rediseñar el Hero con efecto typewriter, parallax de shards y glitch sutil en el nombre
- Agregar scroll progress bar y active section indicator en la navegación
- Rediseñar Skills: reemplazar barras lineales por un diseño más visual y alineado al tema P5
- Mejorar tarjetas de Projects con thumbnails/placeholders y hover effects más elaborados
- Rediseñar sección Contact con efecto "sello", copiar al portapapeles, y feedback visual estilo P5
- Implementar mobile navigation con menú hamburguesa y overlay temático
- Agregar microinteracciones de hover en botones y links (glow pulsante, borde dibujado)
- Implementar `prefers-reduced-motion` fallback para todas las animaciones nuevas

### Out of Scope
- Cambios de contenido (textos, datos del CV)
- Modificaciones al stack tecnológico (se mantiene Astro + SolidJS + Tailwind)
- Refactor de arquitectura de componentes existentes
- Integración de librerías externas pesadas (Three.js, etc.) — se priorizan soluciones nativas/CSS/Canvas ligero
- Testing E2E completo (no hay infraestructura actual)

## Capabilities

### New Capabilities
- `stagger-animations`: Animaciones escalonadas en listas y grids
- `hero-enhancements`: Hero con typewriter, parallax y glitch effect
- `scroll-indicators`: Scroll progress bar y active section navigation
- `skills-redesign`: Rediseño visual de la sección de habilidades
- `project-cards-enhanced`: Tarjetas de proyectos con imágenes y microinteracciones
- `contact-interactions`: Interacciones mejoradas en la sección de contacto
- `mobile-navigation`: Navegación responsive con menú hamburguesa
- `microinteractions`: Hover effects y feedback visual en botones/links

### Modified Capabilities
- `animated-section`: Extender el componente existente para soportar stagger y diferentes easing curves
- `persona5-card`: Agregar variantes visuales y efectos de hover más elaborados

## Approach

1. **Investigación**: Evaluar opciones nativas (CSS animations, Web Animations API, Canvas 2D) vs librerías ligeras (GSAP, anime.js) para cada mejora. Priorizar soluciones que no aumenten el bundle size significativamente.
2. **Diseño**: Documentar decisiones de easing, timing, spacing y colores para cada animación.
3. **Implementación incremental**: Tackle por sección, verificando que cada cambio no rompa accesibilidad ni responsive.
4. **Verificación**: Validar visualmente cada mejora en desktop y mobile, y asegurar `prefers-reduced-motion`.

## Rollback Plan
- Cada mejora se implementa en commits separados (convencionales).
- Si alguna animación causa problemas de performance o accesibilidad, se puede revertir el commit específico sin afectar el resto.
- Las animaciones nuevas se agregan como clases/utilities adicionales, no se modifican estilos base existentes (salvo el Hero que requiere rework).

## Risks
- **Performance en mobile**: Animaciones complejas pueden causar jank en dispositivos de gama baja. Mitigación: usar `will-change`, `transform` y `opacity` exclusivamente; testear en throttling.
- **Accesibilidad**: Efectos visuales pueden distraer o causar malestar. Mitigación: `prefers-reduced-motion` obligatorio y skip-link funcional.
- **Bundle size**: Si optamos por librerías de animación. Mitigación: tree-shaking y evaluación de costo/beneficio antes de importar.
