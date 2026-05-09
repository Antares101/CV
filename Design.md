# Persona 5 Style Guide — CV Design

## 1. Design Philosophy

El estilo de Persona 5 se basa en el concepto de **rebelión y estilo** ("Take Your Heart").
Es audaz, contrastante, y rompe con las convenciones de diseño tradicionales.
Cada elemento debe sentirse como si hubiera sido "recortado y pegado" de un periódico underground,
con una energía cruda y provocadora.

> _"Menús que son una galería de arte cinético" — Eurogamer_

---

## 2. Color Palette

Persona 5 usa un esquema **tricromático** intencionalmente limitado. No se usan sub-colores
que diluyan el impacto del rojo.

| Color | Hex | CSS Variable | Uso |
|-------|-----|-------------|-----|
| **P5 Red** | `#e53935` | `--p5-red` | Color principal: botones, acentos, bordes, highlights |
| **P5 Red Dark** | `#c62828` | `--p5-red-dark` | Hover/states del rojo |
| **P5 Red Light** | `#ff5252` | `--p5-red-light` | Brillo/glow del rojo |
| **P5 Black** | `#0a0a0a` | `--p5-black` | Fondo principal, paneles oscuros |
| **P5 Dark Gray** | `#1a1a1a` | `--p5-dark` | Fondos secundarios |
| **P5 Gray** | `#2a2a2a` | `--p5-gray` | Bordes, separadores |
| **P5 Light Gray** | `#e0e0e0` | `--p5-light-gray` | Fondos claros |
| **P5 White** | `#f5f5f5` | `--p5-white` | Texto principal |
| **P5 Muted** | `#999999` | `--p5-muted` | Texto secundario |

### Regla de color:
- **Fondo**: Siempre negro (`#0a0a0a`) o blanco (`#f5f5f5`) — nunca grises medios
- **Acento**: Solo rojo P5 — no usar azules, verdes, púrpuras
- **Contraste**: Máximo — blanco sobre negro, rojo sobre negro, blanco sobre rojo

---

## 3. Typography

Persona 5 mezcla fuentes como si fueran "recortes de periódico".

| Fecha | Uso | Fuente |
|-------|-----|--------|
| **Headlines / Títulos grandes** | Anton (Google Fonts) | Bold, condensado, impacto |
| **Body / Texto general** | Inter | Limpio, legible, neutral |
| **Monospace / Técnico** | JetBrains Mono | Código, fechas, tags |
| **Display Decorativo** | Playfair Display (opcional) | Texto tipo "newspaper cutout" |

### Reglas tipográficas:
- **Títulos**: Anton, uppercase, letter-spacing ajustado, color rojo P5 o blanco
- **Subtítulos**: Inter Bold, uppercase, con separador rojo
- **Body**: Inter Regular 400 o Medium 500
- **Datos técnicos** (fechas, skills, tags): JetBrains Mono
- **Boxed letters**: Cada letra importante puede tener un borde individual (efecto "recorte")
- **Skew**: Texto puede inclinarse ligeramente (transform: skewX) para efecto dinámico
- **Mezcla**: Serif + sans-serif en el mismo headline (efecto "cut & paste")

---

## 4. UI Elements

### 4.1 Cards / Paneles
- Borde grueso (2-3px) rojo P5 o blanco
- Esquinas: rectas (no redondeadas) o con corte diagonal
- Fondo: negro sólido o blanco
- Efecto hover: glow rojo en borde
- Opcional: "jagged edge" (borde dentado/zigzag) en cards destacados

### 4.2 Botones
- Fondo rojo P5, texto blanco, bold
- Borde: 2px blanco (opcional)
- Hover: rojo más oscuro (`#c62828`)
- Sin border-radius excesivo (max 4px)
- Efecto de "corte diagonal" en una esquina (opcional)

### 4.3 Líneas divisorias
- Líneas finas blancas o rojas
- Opcional: patrón zigzag en lugar de línea recta
- Línea central vertical que divide secciones (como los menús de P5)

### 4.4 Navegación
- Barra minimalista, fondo negro
- Links en blanco, hover rojo
- Indicador activo: línea roja gruesa abajo
- Estilo "phantom thief" — elegante pero agresivo

### 4.5 Tags / Chips
- Fondo: rojo P5, texto blanco
- O: Borde rojo, texto rojo, fondo transparente
- Font: JetBrains Mono
- Bold

### 4.6 Separadores de sección
- Línea horizontal gruesa (3px) roja
- O: patrón de zigzag/ondas
- O: línea diagonal que cruza la sección

---

## 5. Animaciones

| Elemento | Animación | Timing |
|----------|-----------|--------|
| Entrada de sección | Fade + slide up | 600ms ease-out |
| Hero name | Split/text reveal | 800ms |
| Cards hover | Border glow rojo + scale(1.01) | 200ms |
| Skill bars | Fill from 0 to target | 1000ms ease-out |
| Nav indicator | Slide transition | 300ms |
| Red pulse | Glow pulsante en elementos clave | 2s infinite |

### Efectos especiales P5:
- **"Shard" particles**: Triángulos/cuarzos rojos que flotan o aparecen al hacer scroll
- **Red mask reveal**: Texto que se revela con una máscara roja que se desplaza
- **Diagonal entrance**: Elementos que entran en ángulo
- **Glitch/scanline**: Efecto sutil de líneas de barrido (opcional, usar con moderación)

---

## 6. Layout Principles

1. **Alto contraste**: Cada sección alterna entre fondo negro y blanco
2. **Full-bleed**: Secciones que ocupan todo el ancho disponible
3. **Split layout**: Como los menús de P5 — contenido dividido en dos mitades contrastantes
4. **Jerarquía clara**: Un solo color de acento (rojo) guía la atención
5. **Espacio negativo**: Uso generoso de espacio para que respire el diseño
6. **Ángulos**: Elementos diagonales rompen la monotonía horizontal

---

## 7. Componentes Específicos

### Hero Section
- Name del developer: Anton font, blanco, enorme (clamp(3rem, 8vw, 7rem))
- Línea decorativa roja debajo del nombre
- Headline: Inter Bold, blanco o gris claro
- CTA buttons: rojo P5 con hover effect
- Fondo: negro con "shard" decorations rojas
- Efecto "Take Your Heart" sutil

### Experience Timeline
- Timeline line: roja (no gris)
- Timeline dots: rojo brillante con glow
- Cards: fondo casi negro, borde blanco fino, hover glow rojo
- Role/company texto: blanco, company en rojo
- Period: JetBrains Mono, muted

### Skills Grid
- Category cards: fondo casi negro, borde blanco
- Category title: blanco con bullet rojo
- Skill bars: rojo P5 gradient (sin azul), fondo de track gris oscuro
- Percentage text: JetBrains Mono, muted

### Projects
- Cards: fondo casi negro, borde blanco
- Project name: blanco, hover rojo
- Tech tags: rojo P5
- Links: rojo P5, con iconos a la izquierda
- Hover gradient: rojo P5 sutil (no azul/púrpura)

### Education
- Cards: fondo casi negro, borde blanco fino
- Degree: blanco
- Institution: rojo P5
- Period: JetBrains Mono, muted

### Contact
- CTA email button: rojo P5 grande, shadow rojo
- Download CV: borde rojo P5, hover fill rojo
- Social icons: blancos, hover rojo
- Fondo: negro

---

## 8. Modo Claro vs Oscuro

### Dark Mode (default — P5 auténtico)
- Fondo: `#0a0a0a` (P5 Black)
- Cards: `#1a1a1a` (P5 Dark Gray)
- Texto: `#f5f5f5` (P5 White)
- Acento: `#e53935` (P5 Red)

### Light Mode (alternativa — "Persona 5 Stripped")
- Fondo: `#f5f5f5` (P5 White)
- Cards: `#ffffff` (white)
- Texto: `#0a0a0a` (P5 Black)
- Acento: `#c62828` (P5 Red Dark — más contraste sobre blanco)
- Bordes: `#e0e0e0`

Ambos modos mantienen el rojo P5 como único color de acento.
No hay modulación azul/cyan/púrpura en ningún modo.

---

## 9. Ejemplos Visuales de Referencia

| Elemento | Descripción |
|----------|-------------|
| Menú principal P5 | Split screen: negro/rojo con texto blanco alineado al centro |
| Tarjetas de Persona | Marco grueso rojo, fondo negro, texto blanco |
| UI de batalla | Rojos brillantes, alto contraste, líneas diagonales |
| Menú de items | Split vertical: mitad negra con items, mitad roja con descripción |
| Texto de diálogo | Caja negra con borde rojo, texto blanco |


