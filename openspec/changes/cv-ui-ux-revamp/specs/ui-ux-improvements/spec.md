# Delta Spec: CV UI/UX Revamp — Persona 5 Themed

> **Domain:** ui-ux-improvements
> **Change:** cv-ui-ux-revamp
> **Status:** DRAFT
> **Related Proposal:** [Proposal](../proposal.md)

---

## 1. Stagger Animations in Lists & Grids

### 1.1 Intent
Todas las secciones de lista (Experience, Projects, Education, Skills grid) animan sus items simultaneamente. Esto carece de ritmo visual y hace que el scroll sea monotono. Se requiere que los items entren secuencialmente con un delay progresivo.

### 1.2 Requirements
- **FR-SA-1:** Cada item dentro de una lista/grid animada DEBE tener un `animation-delay` calculado como `index x baseDelay`.
- **FR-SA-2:** El `baseDelay` DEBE ser configurable por componente, con valor por defecto de `100ms`.
- **FR-SA-3:** La animacion base DEBE ser `opacity: 0 -> 1` combinada con `translateY(20px -> 0)`.
- **FR-SA-4:** El easing DEBE ser `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) para un feel punchy acorde al tema.
- **FR-SA-5:** El `duration` DEBE ser `600ms`.
- **FR-SA-6:** El stagger DEBE respetar `prefers-reduced-motion: reduce` — en ese caso, los items aparecen inmediatamente sin delay ni animacion.

### 1.3 Scenarios

#### Scenario: Stagger en Experience
```
Given el usuario scrollea hacia la seccion Experience
When los items de experiencia entran en viewport
Then cada item aparece con opacity 0->1 y translateY 20px->0
And el item N tiene un delay de N x 100ms
And la animacion dura 600ms con easing expo-out
```

#### Scenario: prefers-reduced-motion
```
Given el usuario tiene activada la preferencia de movimiento reducido
When carga cualquier pagina con listas animadas
Then todos los items se renderizan inmediatamente sin animacion ni stagger
```

### 1.4 Technical Design

**Approach recomendado:** Extender `AnimatedSection.tsx` para soportar un prop `staggerIndex` y aplicar `animation-delay` via inline style o clases dinamicas de Tailwind.

**Alternativas evaluadas:**
| Opcion | Pros | Contras | Veredicto |
|--------|------|---------|-----------|
| CSS puro con `animation-delay` inline | Cero bundle cost, nativo, performante | Requiere calcular delay en render | ✅ **Seleccionado** |
| GSAP / ScrollTrigger | Control total, timeline sequencing | ~25KB gzipped, overkill para este caso | ❌ Rechazado (bundle) |
| anime.js | Ligero (~6KB), stagger nativo | Agrega dependencia, no es necesario | ❌ Rechazado (no justifica deps) |
| SolidJS spring/primitives | Reutiliza Solid nativo | Stagger requiere logica manual igual | ⚠️ Considerado pero CSS gana en simplicidad |

**Implementacion:**
```tsx
// AnimatedSection.tsx — agregar props opcionales
interface Props {
  children: JSX.Element;
  staggerIndex?: number;      // indice para delay
  baseDelay?: number;         // ms, default 100
  duration?: number;          // ms, default 600
}

// En el div contenedor:
style={{
  'transition-delay': prefersReducedMotion ? '0ms' : `${(staggerIndex ?? 0) * (baseDelay ?? 100)}ms`,
  'transition-duration': `${duration ?? 600}ms`,
}}
```

**Nota:** `prefers-reduced-motion` se detecta via `window.matchMedia('(prefers-reduced-motion: reduce)')` en `onMount`.

### 1.5 Acceptance Criteria
- [ ] Los 4 items de Experience entran con delays 0ms, 100ms, 200ms, 300ms.
- [ ] Los 6 items de Projects (grid 2-col) entran con delays 0ms, 100ms, 200ms, etc.
- [ ] Los items de Education entran staggered.
- [ ] Las cards de Skills (grid) entran staggered.
- [ ] En `prefers-reduced-motion: reduce`, todas las animaciones se desactivan.

---

## 2. Hero Enhancements

### 2.1 Intent
El Hero es la primera impresion. Actualmente tiene shards decorativos estaticos y un texto simple. Se busca un impacto visual inmediato con typewriter effect, parallax sutil en shards, y glitch effect en el nombre.

### 2.2 Requirements
- **FR-HE-1:** El `headline` DEBE mostrarse con efecto typewriter (caracteres apareciendo uno por uno).
- **FR-HE-2:** El typewriter DEBE tener una velocidad de `50ms` por caracter y un cursor parpadeante al final.
- **FR-HE-3:** El nombre del usuario DEBE tener un efecto glitch sutil (desplazamiento horizontal aleatorio de 1-2px, duracion ~100ms, trigger en hover o en intervalo automatico cada 5s).
- **FR-HE-4:** Los shards decorativos DEBEN reaccionar al movimiento del mouse con parallax sutil (factor 0.02-0.05).
- **FR-HE-5:** El parallax DEBE estar implementado con `requestAnimationFrame` para evitar re-renders de Solid.
- **FR-HE-6:** El glitch DEBE respetar `prefers-reduced-motion: reduce` (desactivado).

### 2.3 Scenarios

#### Scenario: Typewriter en carga
```
Given el usuario carga la pagina
When el Hero se monta
Then el headline se escribe caracter por caracter a 50ms/char
And al finalizar aparece un cursor parpadeante
```

#### Scenario: Glitch en hover del nombre
```
Given el usuario pasa el mouse sobre el nombre
Then el nombre tiene un desplazamiento horizontal rapido (glitch)
Y vuelve a la posicion normal en < 150ms
```

#### Scenario: Parallax de shards
```
Given el usuario mueve el mouse sobre el Hero
Then los shards se desplazan ligeramente en direccion opuesta al mouse
And el desplazamiento es proporcional a la posicion del mouse (factor 0.03)
```

### 2.4 Technical Design

**Typewriter:**
- Implementar como Solid signal `typedText` que se actualiza con `setInterval`.
- Usar `createSignal` + `setInterval` con cleanup en `onCleanup`.
- Cursor con CSS `@keyframes blink`.

**Glitch:**
- Opcion A: CSS puro con `text-shadow` y `clip-path` animados. Muy ligero.
- Opcion B: WebGL/Canvas. Overkill.
- **Veredicto:** CSS puro con keyframes `p5-glitch` que alterna `transform: translateX()`, `clip-path: inset()`, y `text-shadow`.

**Parallax:**
- Listener de `mousemove` en `document` o en el section.
- Usar `requestAnimationFrame` para actualizar `transform: translate()` de cada shard.
- NO usar signals de Solid para el parallax (causa re-render). Usar refs y mutacion directa del DOM.

**Archivos afectados:**
- `src/components/sections/Hero.astro`
- `src/styles/persona5.css` (nuevos keyframes)
- Posible nuevo componente: `src/islands/HeroTypewriter.tsx`

### 2.5 Acceptance Criteria
- [ ] El headline se escribe automaticamente al cargar.
- [ ] El cursor parpadea al final del texto.
- [ ] El nombre tiene glitch en hover y cada 5s automatico.
- [ ] Los shards se mueven sutilmente con el mouse.
- [ ] `prefers-reduced-motion` desactiva typewriter y glitch (texto aparece completo).

---

## 3. Scroll Progress Bar & Active Section Indicator

### 3.1 Intent
El usuario no tiene feedback visual de donde esta en el documento ni cuanto le falta. Esto es especialmente util en un CV largo de una sola pagina.

### 3.2 Requirements
- **FR-SP-1:** DEBE existir una barra de progreso fija en la parte superior de la pantalla (`position: fixed`).
- **FR-SP-2:** La barra DEBE crecer proporcionalmente al scroll (`scrollY / (scrollHeight - clientHeight)`).
- **FR-SP-3:** La barra DEBE tener altura de `3px`, color `var(--p5-red)`, y `box-shadow` glow sutil.
- **FR-SP-4:** La navegacion fija DEBE resaltar la seccion actualmente visible.
- **FR-SP-5:** El indicador activo DEBE ser un punto rojo o un underline que se desplaza animadamente al item correspondiente.
- **FR-SP-6:** La deteccion de seccion activa DEBE usar `IntersectionObserver` con `threshold: 0.5` para mejorar performance.

### 3.3 Scenarios

#### Scenario: Scroll progress
```
Given el usuario scrollea por la pagina
Then la barra roja superior crece proporcionalmente
And cuando llega al final ocupa el 100% del ancho
```

#### Scenario: Active section
```
Given el usuario esta en la seccion Skills
Then el link "Skills" en la navegacion tiene un indicador rojo activo
And si scrollea a Projects, el indicador se mueve animadamente a "Projects"
```

### 3.4 Technical Design

**Scroll Progress:**
- Componente Solid island (`ScrollProgress.tsx`) que escucha `scroll` event con throttling (o `requestAnimationFrame`).
- Calcular `progress = scrollY / (document.documentElement.scrollHeight - window.innerHeight)`.
- Aplicar `width: ${progress * 100}%` a un div interno.
- Usar `will-change: width` para GPU acceleration.

**Active Section:**
- Extender `BaseLayout.astro` o crear `ActiveNav.tsx` island.
- `IntersectionObserver` observando cada `<section>`.
- Guardar en signal `activeSection` el `id` del section mas visible.
- Aplicar clase activa al `<a>` correspondiente en el nav.
- Animacion del indicador: puede ser un pseudo-elemento `::after` con `transition: left 0.3s` o `transform: translateX()`.

**Archivos afectados:**
- `src/islands/ScrollProgress.tsx` (nuevo)
- `src/islands/ActiveNav.tsx` (nuevo)
- `src/layouts/BaseLayout.astro`

### 3.5 Acceptance Criteria
- [ ] Barra roja fija en top que crece con el scroll.
- [ ] Navegacion resalta seccion activa.
- [ ] Indicador se anima al cambiar de seccion.
- [ ] No hay re-layouts ni jank en el scroll (60fps).

---

## 4. Skills Redesign

### 4.1 Intent
Las barras de progreso lineales son el patron mas comun y generico. Para un CV con tematica Persona 5, los skills deberian lucir como un "stat screen" de videojuego.

### 4.2 Requirements
- **FR-SK-1:** Cada skill DEBE mostrarse como un "badge" o "chip" con forma angular (clip-path o border styling).
- **FR-SK-2:** El nivel DEBE representarse visualmente sin barra lineal: opciones evaluadas — segmentos (como rating de estrellas pero en forma de rombos/diamantes), o tamano de texto proporcional, o categorias textuales (Expert/Advanced/Intermediate).
- **FR-SK-3:** Cada categoria (Frontend, Backend, etc.) DEBE tener un color de acento sutil diferente (derivados del rojo P5 o escala de grises).
- **FR-SK-4:** Los badges DEBEN tener hover effect (glow, scale sutil).
- **FR-SK-5:** La animacion de entrada DEBE ser staggered (ver spec 1).

### 4.3 Scenarios

#### Scenario: Skill badge visual
```
Given el usuario ve la seccion Skills
Then cada skill aparece como un badge angular con el nombre
And el nivel se indica con 1-5 segmentos/diamantes rojos
And al hacer hover el badge se ilumina con glow rojo
```

### 4.4 Technical Design

**Opciones de visualizacion evaluadas:**
| Opcion | Descripcion | Pros | Contras | Veredicto |
|--------|-------------|------|---------|-----------|
| Segmentos (rombos) | 1-5 rombos rojos/grises como rating | Muy alineado a P5, claro visualmente | Ocupa mas espacio que barras | ✅ **Seleccionado** |
| Radar chart | Grafico de area por categoria | Impactante visualmente | Requiere SVG/Canvas, overkill | ❌ Rechazado |
| Nube de tags | Tags con tamano proporcional al nivel | Minimalista | No muestra nivel claramente | ❌ Rechazado |
| Barras verticales | Barras estilo EQ/sonido | Estilo retro gaming | Similar a lineales, menos info | ⚠️ Considerado |

**Implementacion:**
- Reemplazar `SkillBars.tsx` por `SkillBadges.tsx`.
- Cada skill: `<span>` con borde angular + 5 rombos pequenos (`clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`).
- Rellenar los primeros `N` rombos con `--p5-red`, el resto con `--p5-gray`.
- Grid layout: mantener `md:grid-cols-2 lg:grid-cols-3` por categoria.

**Archivos afectados:**
- `src/islands/SkillBars.tsx` -> reemplazar o renombrar
- `src/components/sections/Skills.astro`

### 4.5 Acceptance Criteria
- [ ] No queda ninguna barra de progreso lineal.
- [ ] Cada skill muestra 1-5 rombos indicando nivel.
- [ ] Las categorias tienen variantes visuales sutilmente diferenciadas.
- [ ] Hover con glow rojo en cada badge.
- [ ] Stagger en la entrada.

---

## 5. Project Cards Enhanced

### 5.1 Intent
Las tarjetas de proyectos son puramente textuales. Agregar elementos visuales (aunque sean placeholders generados) y microinteracciones mas elaboradas mejora el scaneability y el interes.

### 5.2 Requirements
- **FR-PC-1:** Cada tarjeta DEBE tener un area de thumbnail/placeholder en la parte superior.
- **FR-PC-2:** El placeholder DEBE ser un gradiente generado dinamicamente o una imagen estatica si existe.
- **FR-PC-3:** El gradiente DEBE derivarse del nombre del proyecto (hash -> hsl) para consistencia.
- **FR-PC-4:** En hover, la imagen/placeholder DEBE hacer zoom sutil (`scale(1.05)`).
- **FR-PC-5:** En hover, DEBE aparecer un border glow rojo y corner accents (ya parcialmente implementado, extender).
- **FR-PC-6:** Los tech tags DEBEN tener forma de chips angulares y un color distintivo por tecnologia (si es viable) o al menos estilo consistente.

### 5.3 Scenarios

#### Scenario: Tarjeta con thumbnail
```
Given el usuario ve la seccion Projects
Then cada tarjeta tiene un rectangulo superior con un gradiente unico
And al hacer hover el gradiente crece un 5%
And el borde se ilumina en rojo con glow
```

### 5.4 Technical Design

**Gradiente generado:**
- Funcion simple: `hash(str) % 360` -> `hsl(hash, 70%, 20%)` con un stop mas claro.
- Implementar en CSS inline o como clase dinamica.
- Alternativa: usar `public/` con screenshots manuales (mas trabajo, mejor resultado). Dejar como **future work** documentado.

**Tech tags:**
- Extender estilos existentes. Agregar `p5-tech-tag` con `clip-path` para bordes angulares.
- Mapa de colores opcional: `{ React: '#61DAFB', TypeScript: '#3178C6', ... }` aplicado como borde o fondo sutil.

**Archivos afectados:**
- `src/components/sections/Projects.astro`
- `src/styles/persona5.css`

### 5.5 Acceptance Criteria
- [ ] Cada proyecto tiene un thumbnail/gradiente.
- [ ] Hover con zoom y glow.
- [ ] Tech tags con estilo angular.
- [ ] Layout no se rompe en mobile.

---

## 6. Contact Section Interactions

### 6.1 Intent
La seccion Contact tiene estilo "WANTED" pero los botones de accion son genericos. Se busca que la interaccion sea memorable y funcional (copiar email, descargar CV con feedback).

### 6.2 Requirements
- **FR-CO-1:** El boton de email DEBE copiar la direccion al portapapeles al hacer click.
- **FR-CO-2:** Al copiar, DEBE mostrarse un toast/feedback estilo P5: un rectangulo angular rojo con texto "COPIED!" que aparece y desaparece.
- **FR-CO-3:** El boton de descarga de CV DEBE tener efecto de "sello" al hacer click (un circulo rojo que se expande desde el centro).
- **FR-CO-4:** Los iconos sociales DEBEN tener hover effect: scale + glow + posible cambio de color a rojo.
- **FR-CO-5:** El boton principal DEBE tener un efecto de borde que "se dibuja" en hover (SVG stroke-dashoffset animation o CSS `background` trick).

### 6.3 Scenarios

#### Scenario: Copiar email
```
Given el usuario hace click en el boton de email
Then la direccion se copia al portapapeles
And aparece un toast rojo angular con "COPIED!"
And el toast desaparece despues de 2 segundos
```

#### Scenario: Hover en boton principal
```
Given el usuario pasa el mouse sobre "Send Email"
Then un borde rojo se dibuja alrededor del boton (animacion de stroke)
And el boton tiene un glow sutil
```

### 6.4 Technical Design

**Copy to clipboard:**
- `navigator.clipboard.writeText(email)`.
- Manejar fallback para browsers sin API (raro hoy en dia).

**Toast:**
- Componente `P5Toast.tsx` reutilizable. Se monta al copiar y se desmonta con timeout.
- Posicion: fixed bottom-center o cerca del boton.
- Animacion: `p5-bounce-in` o similar.

**Sello:**
- CSS `::after` pseudo-elemento con `scale(0) -> scale(1)` y `opacity` fade.
- `transform-origin: center`.

**Borde dibujado:**
- Opcion A: SVG rect con `stroke-dasharray` + `stroke-dashoffset` animado.
- Opcion B: CSS `background` con `linear-gradient` animado.
- **Veredicto:** SVG es mas limpio y controlable.

**Archivos afectados:**
- `src/components/sections/Contact.astro`
- `src/islands/P5Toast.tsx` (nuevo)
- `src/styles/persona5.css`

### 6.5 Acceptance Criteria
- [ ] Click en email copia al portapapeles.
- [ ] Toast "COPIED!" aparece y desaparece.
- [ ] Boton principal tiene borde dibujado en hover.
- [ ] Iconos sociales tienen hover glow.

---

## 7. Mobile Navigation

### 7.1 Intent
En mobile, la navegacion horizontal actual probablemente hace overflow o se comprime feo. Se necesita un menu hamburguesa con overlay tematico.

### 7.2 Requirements
- **FR-MN-1:** En viewports `< md` (768px), la navegacion horizontal DEBE ocultarse.
- **FR-MN-2:** DEBE aparecer un boton hamburguesa con 3 lineas rojas.
- **FR-MN-3:** Al hacer click, DEBE abrirse un overlay a pantalla completa con fondo negro semitransparente (`backdrop-blur`).
- **FR-MN-4:** Los links del menu DEBEN ser grandes (`text-2xl`), centrados, y espaciados.
- **FR-MN-5:** El boton hamburguesa DEBE animarse a una X con las 3 lineas rotando.
- **FR-MN-6:** El overlay DEBE cerrarse al hacer click en un link o al hacer click fuera.
- **FR-MN-7:** La apertura/cierre DEBE tener animacion de fade + slide.

### 7.3 Scenarios

#### Scenario: Abrir menu mobile
```
Given el usuario esta en un viewport mobile
When hace click en el boton hamburguesa
Then las 3 lineas se transforman en una X
And un overlay negro aparece con los links de navegacion
```

#### Scenario: Cerrar menu al navegar
```
Given el menu mobile esta abierto
When el usuario hace click en un link
Then el overlay se cierra animadamente
And la pagina scrollea a la seccion correspondiente
```

### 7.4 Technical Design

- Componente Solid island: `MobileNav.tsx`.
- Signal `isOpen` para controlar estado.
- Boton hamburguesa: 3 `<span>` con `transform: rotate()` y `translateY()` para morph a X.
- Overlay: `fixed inset-0 z-50 bg-p5-black/95 backdrop-blur-lg`.
- Links: mapear desde `navItems` (compartido con desktop nav si es posible).
- Animacion con Tailwind `transition-all duration-300` y clases condicionales.

**Archivos afectados:**
- `src/islands/MobileNav.tsx` (nuevo)
- `src/layouts/BaseLayout.astro`

### 7.5 Acceptance Criteria
- [ ] En mobile, solo se ve el boton hamburguesa.
- [ ] Click abre overlay con links grandes.
- [ ] Boton se transforma en X.
- [ ] Click en link cierra menu y navega.
- [ ] Click fuera cierra menu.

---

## 8. Microinteractions (Global)

### 8.1 Intent
Pequenos detalles de interaccion que hacen que la UI se sienta viva y responsive.

### 8.2 Requirements
- **FR-MI-1:** Todos los botones y links interactivos DEBEN tener `transition-all duration-200` minimo.
- **FR-MI-2:** Los botones DEBEN tener un efecto de "press" (`active:scale-95`) al hacer click.
- **FR-MI-3:** Los links con flechas ("->") DEBEN mover la flecha `translateX(4px)` en hover.
- **FR-MI-4:** Las cards DEBEN tener `hover:shadow-[0_0_20px_rgba(229,57,53,0.3)]` ya parcialmente implementado, extender a todos los elementos interactivos.
- **FR-MI-5:** Los inputs (si existen futuros) DEBEN tener focus ring rojo.
- **FR-MI-6:** El theme toggle DEBE tener animacion de rotacion al cambiar (sun/moon rotate 180deg).

### 8.3 Scenarios

#### Scenario: Hover en link
```
Given el usuario pasa el mouse sobre un link con flecha
Then la flecha se desplaza 4px a la derecha
And vuelve al salir el mouse
```

### 8.4 Technical Design
- Extender Tailwind config con `active:` variants.
- Crear utilidades `.p5-btn-press`, `.p5-link-arrow` en `persona5.css`.
- Theme toggle: agregar `rotate-180` con `transition-transform` al icono.

**Archivos afectados:**
- `src/styles/persona5.css`
- `src/islands/ThemeToggle.tsx`
- Multiples componentes (aplicar clases)

### 8.5 Acceptance Criteria
- [ ] Todos los botones tienen press effect.
- [ ] Links con flecha se animan.
- [ ] Theme toggle rota al cambiar.
- [ ] Consistencia en todos los elementos interactivos.

---

## 9. Performance & Accessibility (Cross-cutting)

### 9.1 Requirements
- **FR-PA-1:** Todas las animaciones DEBEN usar solo `transform` y `opacity` (propiedades composite-only).
- **FR-PA-2:** Animaciones complejas DEBEN tener `will-change` aplicado antes de la animacion y removido despues (o via CSS `@keyframes`).
- **FR-PA-3:** El `prefers-reduced-motion` DEBE desactivar TODAS las animaciones (excepto el scroll progress que es informativo).
- **FR-PA-4:** El sitio DEBE mantener un Lighthouse Performance score >= 90 en mobile.
- **FR-PA-5:** Las nuevas islas de SolidJS DEBEN usar `client:visible` o `client:idle` segun prioridad.

### 9.2 Acceptance Criteria
- [ ] No hay animaciones que modifiquen `width`, `height`, `top`, `left`.
- [ ] `prefers-reduced-motion` funciona globalmente.
- [ ] Lighthouse mobile >= 90.
- [ ] Ninguna island bloquea el critical path.

---

## Appendix A: Librerias Evaluadas (Resumen)

| Libreria | Uso potencial | Tamano (gz) | Veredicto |
|----------|---------------|-------------|-----------|
| GSAP + ScrollTrigger | Stagger, scroll-driven | ~25KB | ❌ No justifica para este scope |
| anime.js | Stagger, timeline | ~6KB | ⚠️ Considerar solo si CSS nativo no alcanza |
| SolidJS primitives (`@solid-primitives/raf`) | requestAnimationFrame helper | ~1KB | ✅ Util para parallax si se complica |
| Canvas Confetti | Efecto de celebracion (opcional) | ~3KB | ⚠️ Opcional para alguna interaccion |
| Typed.js | Typewriter effect | ~5KB | ⚠️ Evaluar vs implementacion propia |

**Decision general:** Priorizar CSS nativo + SolidJS signals. Evaluar anime.js o una primitiva de Solid solo si una animacion especifica requiere timeline compleja.

## Appendix B: Archivos Impactados (Summary)

| Archivo | Tipo de cambio |
|---------|----------------|
| `src/islands/AnimatedSection.tsx` | Extender |
| `src/components/sections/Hero.astro` | Modificar |
| `src/islands/HeroTypewriter.tsx` | Nuevo |
| `src/islands/ScrollProgress.tsx` | Nuevo |
| `src/islands/ActiveNav.tsx` | Nuevo |
| `src/islands/MobileNav.tsx` | Nuevo |
| `src/islands/P5Toast.tsx` | Nuevo |
| `src/islands/SkillBars.tsx` | Reemplazar |
| `src/components/sections/Projects.astro` | Modificar |
| `src/components/sections/Contact.astro` | Modificar |
| `src/layouts/BaseLayout.astro` | Modificar |
| `src/islands/ThemeToggle.tsx` | Modificar |
| `src/styles/persona5.css` | Extender significativamente |
| `tailwind.config.mjs` | Posiblemente extender |
