# Exploration: CV Web Llamativo + Estilo Persona 5

> **Change:** cv-ui-ux-revamp
> **Date:** 2026-05-09
> **Status:** COMPLETED (parcial — esperando análisis codebase)

---

## 1. Sistema de Diseño Persona 5 — Referencias Completas

### 1.1 Paleta de Colores Oficial

Persona 5 usa deliberadamente una tríada restrictiva: **rojo, negro, blanco**. Los diseñadores de Atlus evitan sub-colores (salvo HP/MP bars).

| Color | Hex | Uso en P5 | Relevancia para CV |
|-------|-----|-----------|-------------------|
| **Primary Red** | `#CC2C34` | Color dominante, pasion/rebelion | Color principal del tema |
| **Dark Red** | `#922526` | Sombras, profundidad | Hover states, borders |
| **Deep Maroon** | `#673535` | Backgrounds oscuros | Cards, sections bg |
| **Light Pink** | `#D49C94` | Acentos suaves | Texto secundario |
| **Muted Rose** | `#BE7F80` | Texto secundario sobre oscuro | Descriptions, meta |
| **Off-White** | `#D9D0D1` | Texto principal sobre negro | Body text |
| **Pure Black** | `#000000` / `#0A0A0A` | Background principal | Page bg |
| **Pure White** | `#FFFFFF` | Texto destacado, bordes angulares | Headlines, borders |

**Paleta HP/MP del juego (para skills/stats):**
| Color | Hex | Uso |
|-------|-----|-----|
| **Turquoise (HP)** | `#01FDF6` | Barras de vida |
| **Magenta/Pink (MP)** | `#F20089` / `#FF0080` | Barras de magia |
| **Yellow** | `#FEF23C` / `#F9E139` | Experiencia, dinero, recompensas |

**Comparación con paleta actual del CV:**
| Actual | Propuesto P5 | Diferencia |
|--------|-------------|------------|
| `#e53935` (p5-red) | `#CC2C34` | El actual es mas naranja; el P5 real es mas carmesí |
| `#c62828` (p5-red-dark) | `#922526` | Similar, aceptable |
| `#f5f5f5` (p5-white) | `#D9D0D1` | El blanco actual es demasiado puro; P5 usa off-white rosado |

> **Nota:** Tu paleta actual está MUY cerca del P5 real. Ajustes menores de tono harían que sea prácticamente idéntico.

### 1.2 Tipografía

| Fuente | Uso en P5 | Disponibilidad Web | Alternativa Web |
|--------|-----------|-------------------|-----------------|
| **Rodin** | UI general, menús, texto de juego | No (propietaria Atlus) | `Noto Sans JP`, `M PLUS 1p`, `Inter` |
| **PhatBoy Slim** / "P5 Font" | Títulos, logos, nombres de Personas | No (custom) | `Anton` (ya la tenés, muy cercana), `Bebas Neue`, `Impact` |
| **Japanese Gothic** | Texto japonés UI | Parcial | `Noto Sans JP` |

**Recomendación para tu CV:**
- **Display:** `Anton` (ya la tenés, es la mejor alternativa a PhatBoy Slim)
- **Body:** `Inter` (ya la tenés, funciona bien, pero considerá `Noto Sans JP` para un toque más japonés)
- **Mono:** `JetBrains Mono` (ya la tenés, perfecto para stats/tech tags)
- **Opcional japonés:** Agregar `Noto Sans JP` como fallback para acentos y caracteres especiales

### 1.3 Patrones Visuales Recurrentes en UI de P5

1. **Bordes angulares cortados (clip-path)**
   - Cada caja de diálogo, menú, y botón tiene esquinas cortadas en ángulo de 45°
   - Implementación: `clip-path: polygon(...)` o `border` tricks

2. **Shards / Fragmentos triangulares**
   - Triángulos rojos que "rompen" los bordes de las UI boxes
   - Se usan como decorativos en esquinas
   - Ya los tenés parcialmente implementados

3. **Líneas diagonales**
   - Líneas diagonales que dividen secciones o guían la mirada
   - Color rojo sobre negro

4. **Texto con outline/borde**
   - Títulos importantes tienen borde blanco con fondo transparente
   - "Boxed letters" — letras individuales con borde cuadrado

5. **Police Tape / Caution stripes**
   - Franjas diagonales amarillas/negro o rojas/blancas
   - Ya lo tenés implementado

6. **Velvet Room aesthetic**
   - Azul profundo con cortinas azules (no para tu tema rojo/negro)
   - Podrías adaptar el concepto: cortinas/rojos oscuros como transiciones

7. **Battle UI elements**
   - "COMMAND" menu: lista vertical con selector rojo
   - "All-out Attack" screen: fondo rojo intenso con siluetas
   - "Baton Pass" arrows: flechas rojas animadas

8. **Social Link / Confidant cards**
   - Tarjetas con fondo azul oscuro (en P5) o rojo (en P5R)
   - Arcana symbol, person name, rank stars
   - **Perfecto para proyectos/skills:** convertir cada proyecto en una "Confidant Card"

9. **Text Message / Chat style**
   - Burbujas de chat con esquinas redondeadas en un lado, angulares en el otro
   - Avatar circular a la izquierda
   - **Perfecto para la sección Contact:** "Send a Message" estilo chat

10. **Loading screens**
    - Texto "LOADING..." con puntos animados
    - Barra de progreso angular
    - Podría usarse como scroll progress indicator

11. **Wanted Posters**
    - Estilo "SE BUSCA" occidental
    - **Ya lo tenés en Contact, excelente**

12. **Star / Rating system**
    - Estrellas o rombos para indicar rank/nivel
    - **Perfecto para reemplazar las barras de Skills**

### 1.4 Componentes Específicos Replicables

**a) P5 Menu Selection (Battle/Command Menu)**
```
┌──────────┐
│► ATTACK   │  ← Selector rojo triangular a la izquierda
│  SKILL    │
│  ITEM     │
│  GUARD    │
│  PERSONA  │
└──────────┘
```
- Aplicación: **Navegación mobile** o **menú de secciones**
- Selector animado que se mueve entre items

**b) Confidant Card (Social Link)**
```
┌──────────────────┐
│  ⭐⭐⭐⭐⭐       │  ← Rank stars (1-5)
│  [ARCANA SYMBOL] │
│  Person Name     │
│  "Description"   │
└──────────────────┘
```
- Aplicación: **Project cards** o **Skill categories**
- Cada proyecto como un "Social Link" con rank

**c) Battle Result Screen**
```
VICTORY!
EXP + 352
¥ + 15,600
```
- Texto grande con números que suben (counter animation)
- Aplicación: **Stats section** — "X años de experiencia", "Y proyectos", "Z tecnologías"

**d) Persona Summoning (Fusion)**
- Guillotina animation (no, eso es demasiado oscuro para un CV)
- Pero el concepto de "combinar elementos" puede inspirar transiciones

**e) Safe Room / Save Point**
- Icono de floppy disk azul
- Texto "DATA SAVED"
- Aplicación: **Toast notification** cuando se copia el email

### 1.5 Animaciones del Juego Adaptables

1. **Text Reveal (Visual Novel style)**
   - Caracteres aparecen uno por uno
   - Sonido de "typewriter" (opcional, sin sonido en web)
   - **Aplicación:** Hero headline typewriter effect

2. **Battle Transition**
   - Flash blanco + líneas diagonales rojas
   - Screen shake sutil
   - **Aplicación:** Transición entre secciones (opcional, puede ser demasiado)

3. **Critical Hit / Weakness Exploit**
   - "1 MORE!" text flash
   - Texto rojo brillante
   - **Aplicación:** Highlight de skills principales

4. **All-Out Attack Finish**
   - Fondo rojo con siluetas negras
   - Texto en japonés + inglés
   - **Aplicación:** CTA final, footer, o sección de contacto

5. **Baton Pass**
   - Flechas animadas que pasan entre personajes
   - Glow rojo
   - **Aplicación:** Scroll indicator o navegación entre proyectos

6. **HP/MP Bar Fill**
   - Barra que se llena de derecha a izquierda
   - Color cambia según porcentaje
   - **Aplicación:** Skills (pero ya decidimos reemplazar por rombos)

### 1.6 Recursos de Código Open Source

**Repositorios encontrados:**

1. **aikusu/persona5-css** — CSS framework con componentes P5
   - Botones, cards, menús, inputs
   - Buena referencia para implementaciones CSS puras

2. **d0rich/persona5** — Design system completo en Vue
   - Paleta, tipografía, componentes
   - Muy completo, referencia de arquitectura

3. **CodePen: "Persona 5 UI"**
   - Varios ejemplos de cards, menus, text effects
   - Bueno para ver implementaciones CSS puras

4. **GitHub: "persona-5-theme"**
   - Temas para VS Code, Discord, etc.
   - Útil para paleta exacta

5. **Figma Community: "Persona 5 UI Kit"**
   - Componentes de diseño
   - Referencia visual

---

## 2. Evaluación Técnica: Librerías de Animación

### 2.1 Scroll Animations / Reveal on Scroll

| Opción | Pros | Contras | Bundle Size | Veredicto |
|--------|------|---------|-------------|-----------|
| **IntersectionObserver nativo** | Cero bundle, nativo, perfecto para Astro static, no requiere hidratación extra | Requiere código manual | 0 bytes | ✅ **RECOMENDADO** |
| **AOS (Animate On Scroll)** | Simple, solo CSS + data attributes | 8KB, requiere inicialización JS, conflictos con islands de Solid | ~8KB | ❌ No recomendado (overkill) |
| **ScrollReveal** | Más control que AOS | 16KB, complejo con Astro islands | ~16KB | ❌ No recomendado |
| **GSAP ScrollTrigger** | Control total, timeline sequencing, stagger nativo | ~25KB gzipped (solo ScrollTrigger), overkill | ~25KB | ⚠️ Considerar solo para timeline complejas |

**Decisión:** Quedarse con `IntersectionObserver` nativo (ya lo tenés en `AnimatedSection.tsx`) y extenderlo para stagger. Es la opción más performante y zero-cost.

### 2.2 Timeline / Sequence Animations (Stagger)

| Opción | Pros | Contras | Bundle Size | Veredicto |
|--------|------|---------|-------------|-----------|
| **CSS `animation-delay` inline** | Cero bundle, nativo, GPU-accelerated | Requiere calcular delay en render | 0 bytes | ✅ **RECOMENDADO** |
| **GSAP Timeline** | Control total, stagger nativo, timeline compleja | ~35KB total, overkill para stagger simple | ~35KB | ❌ No justifica |
| **anime.js** | Ligero, stagger built-in, timeline simple | ~6KB, agrega dependencia | ~6KB | ⚠️ Considerar si CSS no alcanza |
| **SolidJS signals + setTimeout** | Nativo al stack, reactivo | Más verbose, requiere cleanup manual | 0 bytes | ⚠️ Alternativa válida |

**Decisión:** CSS nativo con `animation-delay` calculado por índice. Si necesitamos secuencias más complejas más adelante, evaluar `anime.js`.

### 2.3 Typewriter Effect

| Opción | Pros | Contras | Bundle Size | Veredicto |
|--------|------|---------|-------------|-----------|
| **Implementación propia (SolidJS)** | Zero deps, full control, fácil integrar con P5 theme | Requiere escribir ~50 líneas | 0 bytes | ✅ **RECOMENDADO** |
| **Typed.js** | Feature-rich, backspace, loop | ~5KB, overkill para un solo efecto | ~5KB | ❌ No justifica |
| **CSS `steps()` animation** | Pure CSS, zero JS | No permite pausas dinámicas, menos control | 0 bytes | ⚠️ Alternativa para textos estáticos |

**Decisión:** Implementación propia con `createSignal` + `setInterval`. Más limpio, integrable con el tema.

### 2.4 Parallax / Mouse Follow

| Opción | Pros | Contras | Bundle Size | Veredicto |
|--------|------|---------|-------------|-----------|
| **requestAnimationFrame nativo** | Zero deps, máximo control, no causa re-renders en Solid | Requiere código manual | 0 bytes | ✅ **RECOMENDADO** |
| **SolidJS primitives (`@solid-primitives/raf`)** | Wrapper limpio de rAF para Solid | ~1KB extra | ~1KB | ⚠️ Útil si se complica |
| **Librerías tipo parallax.js** | Fácil setup | ~10KB+, overkill, conflictos con islands | ~10KB+ | ❌ No recomendado |

**Decisión:** rAF nativo con refs (mutación directa del DOM, sin signals). La forma correcta en SolidJS.

### 2.5 Text Effects (Glitch, Reveal)

| Opción | Pros | Contras | Bundle Size | Veredicto |
|--------|------|---------|-------------|-----------|
| **CSS puro (keyframes)** | Zero deps, performante, fácil `prefers-reduced-motion` | Limitado a efectos simples | 0 bytes | ✅ **RECOMENDADO** |
| **CSS Houdini (Paint API)** | Efectos avanzados | No soportado en todos los browsers | 0 bytes | ❌ No usar (compatibilidad) |

**Decisión:** CSS puro con keyframes. Glitch con `text-shadow`, `clip-path`, y `transform`. Reveal con `clip-path: inset()`.

### 2.6 Mobile Navigation

| Opción | Pros | Contras | Bundle Size | Veredicto |
|--------|------|---------|-------------|-----------|
| **CSS transitions + Solid signals** | Zero deps, control total, integrable con tema P5 | Requiere más código | 0 bytes | ✅ **RECOMENDADO** |
| **Framer Motion** | Animaciones fluidas, AnimatePresence | ~40KB, React-only, no funciona con Solid | ~40KB | ❌ No compatible |
| **Solid Motion One** | Animaciones declarativas para Solid | ~5KB, buena API | ~5KB | ⚠️ Opción si queremos algo más pulido |

**Decisión:** CSS transitions + Solid signals. El menú P5 (COMMAND) se puede replicar perfectamente con CSS.

### 2.7 SVG Animations (Stroke Draw)

| Opción | Pros | Contras | Bundle Size | Veredicto |
|--------|------|---------|-------------|-----------|
| **CSS `stroke-dashoffset`** | Zero deps, nativo, performante | Requiere SVG inline | 0 bytes | ✅ **RECOMENDADO** |
| **GSAP DrawSVG** | Más control, morphing | Requiere GSAP completo | ~35KB | ❌ No justifica |
| **anime.js** | stroke animation built-in | ~6KB | ~6KB | ⚠️ Si ya usamos anime.js para otra cosa |

**Decisión:** CSS `stroke-dashoffset` para el efecto de borde dibujado. Simple y elegante.

### 2.8 Resumen de Decisiones Técnicas

| Feature | Solución | Bundle Impact |
|---------|----------|---------------|
| Scroll reveal | IntersectionObserver nativo | 0 bytes |
| Stagger | CSS `animation-delay` inline | 0 bytes |
| Typewriter | SolidJS signals + `setInterval` | 0 bytes |
| Parallax | rAF nativo + refs | 0 bytes |
| Glitch text | CSS keyframes | 0 bytes |
| Mobile nav | CSS transitions + Solid | 0 bytes |
| SVG stroke draw | CSS `stroke-dashoffset` | 0 bytes |
| **TOTAL** | | **0 bytes adicionales** |

> **Conclusión técnica:** No necesitamos agregar NINGUNA librería de animación. Todo se puede hacer nativamente con CSS + SolidJS, manteniendo el bundle mínimo y la performance máxima.

**Librerías a evaluar solo si surge necesidad futura:**
- `anime.js` (~6KB) — si necesitamos timelines complejas
- `@solid-primitives/raf` (~1KB) — si el parallax se complica
- `canvas-confetti` (~3KB) — efecto opcional de celebración

---

## 3. Tendencias y Referencias de CV Web (2024-2025)

### 3.1 Tendencias Actuales en Portfolio/CV Web

1. **Bento Grid Layouts**
   - Cajas de diferentes tamaños organizadas en grid
   - Inspirado en el dashboard de Apple
   - **Aplicación:** Sección de Skills o Projects como un "bento grid" P5

2. **3D Perspective Cards**
   - Cards con efecto 3D en hover (tilt basado en posición del mouse)
   - `transform: perspective(1000px) rotateX() rotateY()`
   - **Aplicación:** Project cards con tilt sutil

3. **Spotlight / Radial Gradient Hover**
   - Gradiente radial que sigue al mouse dentro de un card
   - Efecto de "iluminación" en hover
   - **Aplicación:** Cards de proyectos o skills

4. **Scroll-Linked Animations (CSS `animation-timeline`)**
   - Animaciones atadas al scroll nativamente con CSS
   - Soporte creciente en browsers modernos
   - **Aplicación:** Parallax sutil, progreso de secciones

5. **Text Scramble / Decode Effects**
   - Texto que se "descifra" de caracteres random a texto real
   - **Aplicación:** Headlines, nombres de tecnologías

6. **Liquid Glass / Frosted Glass v2**
   - Efectos de vidrio más avanzados que el simple `backdrop-blur`
   - Apple lo popularizó recientemente
   - **Aplicación:** Navigation bar, cards

7. **Kinetic Typography**
   - Texto que se anima, escala, o cambia según interacción
   - **Aplicación:** Hero section

8. **Oversized Typography**
   - Texto display que ocupa toda la pantalla o secciones
   - **Aplicación:** Hero, section titles

9. **Isometric / Pseudo-3D Elements**
   - Elementos con sombras y perspectiva que simulan 3D
   - **Aplicación:** Decorativos, icons

10. **Noise & Texture Overlays**
    - Texturas sutilas de ruido o grano sobre fondos
    - **Aplicación:** Backgrounds oscuros para evitar el "flat black"

### 3.2 Ejemplos de CV/Portfolio Web Inspiradores

**Categoría: Gaming / Dark / Aggressive**

1. **brittanychiang.com** — Minimalista pero con microinteracciones excelentes
   - Tabs animados, hover effects, proyectos bien presentados
   - URL: https://brittanychiang.com

2. **jacekjeznach.com** — CV interactivo con partículas y animaciones
   - Particle background, scroll animations
   - URL: https://jacekjeznach.com

3. **sarahdrasnerdesign.com** — Animaciones sofisticadas
   - Transiciones suaves, storytelling visual
   - URL: https://sarahdrasnerdesign.com

4. **rafaelalucas.com** — CV con temática de juego/level
   - Skills como "stats", experiencia como "quests"
   - URL: https://rafaelalucas.com

5. **codeman38.github.io** — Typographic portfolio
   - Enfocado en tipografía y CSS puro
   - URL: https://codeman38.github.io

**Categoría: Componentes Específicos**

6. **Timeline Interactivo:**
   - https://codepen.io/tag/timeline — Varios ejemplos de timelines verticales y horizontales
   - Referencia para mejorar la timeline de Experience

7. **Skill Visualization:**
   - https://codepen.io/tag/skill-bar — Alternativas a barras lineales
   - Radar charts, circular progress, hexágonos

8. **Project Cards:**
   - https://dribbble.com/search/project-cards — Diseños de cards innovadores
   - 3D tilt, spotlight, glassmorphism

9. **Contact Sections:**
   - https://dribbble.com/search/contact-section — Formas creativas de presentar contacto
   - Terminal style, chat style, card style

### 3.3 Componentes Innovadores para CV

**a) Timeline "Quest Log" (Experience)**
- Estilo log de misiones de RPG
- Cada trabajo como una "quest" con objectives completados (highlights)
- Recompensas: skills aprendidos
- **Referencia:** Menú de misiones de cualquier RPG moderno

**b) Skill Tree (Skills)**
- Layout de "árbol de habilidades" como en juegos
- Skills conectados por líneas
- Nodos desbloqueados (conocidos) vs bloqueados (por aprender)
- **Referencia:** Skill trees de Path of Exile, Diablo, etc.

**c) Inventory Grid (Projects)**
- Grid de items como inventario de juego
- Cada proyecto como un "item" con icono, rareza, stats
- Hover muestra "item tooltip" con detalles
- **Referencia:** Inventario de Diablo, WoW, etc.

**d) Character Stats Screen (About/Hero)**
- Pantalla de estadísticas de personaje
- Nombre, clase (role), nivel (años de exp), stats principales
- Avatar o silueta
- **Referencia:** Pantalla de stats de cualquier RPG

**e) Bestiary / Codex (Projects)**
- Cada proyecto como una entrada de bestiario/codex
- Clasificación, descripción, debilidades (tech stack), recompensas (logros)
- **Referencia:** Bestiario de The Witcher, Codex de Mass Effect

**f) Social Link / Confidant Cards**
- Ya mencionado en sección P5
- Perfecto para proyectos o skills

---

## 4. Análisis del Codebase Actual (Pendiente)

> **Nota:** Este análisis será completado por el agente `bg_6010ed85` cuando finalice.
> Se documentarán: inconsistencias visuales, oportunidades por componente, espacios vacíos, reutilización, y ideas específicas de efectos P5.

---

## 5. Consolidación de Hallazgos Clave

### 5.1 Lo que YA funciona bien
- Paleta rojo/negro está muy cerca del P5 real
- Tipografía Anton es la mejor alternativa web a PhatBoy Slim
- Police tape y shards angulares están en la dirección correcta
- Componentes reutilizables (Persona5Card) son una buena base
- i18n y responsive están funcionales

### 5.2 Lo que necesita ajuste para ser más "P5"
1. **Colores:** Ajustar `#e53935` a `#CC2C34` para estar más cerca del P5 real
2. **Blanco:** Cambiar `#f5f5f5` a `#D9D0D1` (off-white rosado)
3. **HP/MP bars:** Agregar colores turquesa/magenta para stats/skills
4. **Tipografía:** Considerar agregar `Noto Sans JP` para acentos japoneses sutiles

### 5.3 Ideas más innovadoras para implementar
1. **Character Stats Screen** como Hero redesign
2. **Quest Log** como Experience redesign  
3. **Skill Tree o Confidant Cards** como Skills redesign
4. **Inventory Grid** como Projects redesign
5. **Chat/Text Message** como Contact redesign
6. **Battle Menu** como Mobile Navigation

### 5.4 Decisión técnica final
**Zero librerías de animación.** Todo nativo con CSS + SolidJS. Esto garantiza:
- Bundle size mínimo
- Máxima performance
- Fácil `prefers-reduced-motion`
- Menos dependencias = menos breaking changes
- Más control sobre el estilo P5 personalizado

---

## 6. Próximos Pasos Sugeridos

1. **Completar análisis de codebase** (cuando termine el agente)
2. **Priorizar ideas** por impacto visual vs esfuerzo de implementación
3. **Definir MVP** de mejoras (las que más impacto dan con menos trabajo)
4. **Diseñar componentes clave** (Character Stats, Quest Log, Confidant Cards)
5. **Implementar por fases** — empezar por Hero + Stagger (impacto inmediato)

---

*Documento generado el 2026-05-09. Pendiente agregar análisis de codebase.*
