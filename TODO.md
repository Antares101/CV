# CV Persona 5 — TODO List

**URL:** https://antares101.github.io/CV/  
**Repo:** https://github.com/Antares101/CV  
**Última actualización:** 2026-05-09

---

## ✅ Completado

- [x] Datos reales en YAML (EN/ES)
- [x] Foto estilo P5 Wanted Poster integrada
- [x] Layout 2-columnas en desktop (texto + imagen)
- [x] Sección Education eliminada, reemplazada por Key Systems
- [x] PoliceTape con animación seamless
- [x] Light mode funcionando
- [x] GitHub Pages deploy automático
- [x] Routing base path /CV para GitHub Pages
- [x] Cambio de idioma funciona correctamente
- [x] Hover agresivo removido de títulos
- [x] Guiones automáticos deshabilitados

---

## 🔲 Pendiente — Animaciones P5 Avanzadas

### Red Mask Reveal
- [ ] Texto de títulos de sección que se revela con una máscara roja deslizante
- [ ] Aplicar a todos los `<h2>` de sección (Experience, Skills, Key Systems, Contact)
- [ ] Timing: 800ms ease-out, trigger en scroll

### Glitch/Scanline Effect
- [ ] Efecto sutil de líneas de barrido en el Hero
- [ ] Glitch aleatorio en el nombre "Alejandro Mancebo" cada X segundos
- [ ] Scanlines CSS overlay con opacidad muy baja (0.03)

### Diagonal Entrance
- [ ] Cards de Experience que entran en ángulo desde la izquierda/derecha
- [ ] Cards de Key Systems con entrada diagonal alternada
- [ ] Timing: 600ms ease-out, stagger 100ms entre items

### Scroll-triggered Shard Particles
- [ ] Triángulos rojos flotantes que aparecen al hacer scroll
- [ ] Más shards en el Hero (ya hay algunos básicos)
- [ ] Shards que flotan hacia arriba y desaparecen

### Text Split Reveal ("Take Your Heart")
- [ ] El nombre "Alejandro Mancebo" se revela letra por letra
- [ ] Cada letra aparece con delay progresivo
- [ ] Efecto similar al de los menús de Persona 5

---

## 🔲 Pendiente — Mejoras Visuales

### Hero Section
- [ ] Revisar espaciado vertical en desktop (puede ser más compacto)
- [ ] Considerar layout alternativo: imagen arriba en mobile, a la derecha en desktop
- [ ] Glow rojo más sutil detrás de la foto

### Skills Section
- [ ] Animación de fill en las barras de skills (ya existe SkillBars.tsx pero verificar timing)
- [ ] Números de porcentaje que cuentan de 0 a target

### Contact Section
- [ ] Efecto "Calling Card" más elaborado
- [ ] Animación de máquina de escribir para el texto

### Performance
- [ ] Lazy loading de imágenes
- [ ] Optimizar bundle size
- [ ] Verificar Core Web Vitals

---

## 🔲 Pendiente — Contenido

### PDF Descargable
- [ ] Crear CV en formato Harvard
- [ ] Actualizar botón "Coming Soon" → descarga real
- [ ] Generar PDF desde Astro (opcional)

### Projects/Key Systems
- [ ] Agregar screenshots o diagrams de los sistemas
- [ ] Links a demos o repos (si existen)

---

## 🔲 Pendiente — Responsive & A11Y

- [ ] Revisar layout en tablet (iPad)
- [ ] Verificar focus states en todos los links/botones
- [ ] Testear con screen reader
- [ ] Asegurar contraste WCAG AA en light mode

---

## 🔲 Pendiente — Extras P5

- [ ] Sonido de hover (click sutil) — opcional
- [ ] Transición entre secciones estilo "menu P5" (corte diagonal)
- [ ] Easter egg: Konami code activa algo especial
- [ ] Meta tags para Open Graph / Twitter Cards
- [ ] Favicon P5 style

---

## Notas Técnicas

- **Stack:** Astro 5 + Tailwind 3 + SolidJS + TypeScript
- **Deploy:** GitHub Actions → GitHub Pages
- **Base path:** `/CV` (necesario para GitHub Pages project site)
- **i18n:** EN (default) / ES
- **Theme:** Dark (default) / Light

## Archivos Clave

- `src/data/en/cv.yaml` — Datos CV inglés
- `src/data/es/cv.yaml` — Datos CV español
- `src/components/sections/Hero.astro` — Hero con foto P5
- `src/components/sections/Experience.astro` — Timeline
- `src/components/sections/Skills.astro` — Skills con barras
- `src/components/sections/Projects.astro` — Key Systems
- `src/components/sections/Contact.astro` — Contacto
- `src/components/ui/PoliceTape.astro` — Cinta diagonal
- `src/styles/persona5.css` — Estilos P5 custom
- `src/islands/AnimatedSection.tsx` — Scroll animations
- `src/islands/SkillBars.tsx` — Animated skill bars
- `src/islands/ThemeToggle.tsx` — Dark/light toggle
- `.github/workflows/deploy.yml` — Deploy workflow
