// =============================================================================
// UI Translation keys — for interface text (nav, buttons, labels, etc.)
// Content text (experience, skills, etc.) lives in src/data/{locale}/cv.yaml
// =============================================================================

export const ui = {
  en: {
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Work",
    "nav.contact": "Contact",
    "hero.scroll": "Scroll to explore",
    "section.experience": "Experience",
    "section.skills": "Skills & Technologies",
    "section.projects": "Key Systems",
    "section.contact": "Let's Connect",
    "contact.download": "Download CV",
    "contact.coming_soon": "Coming Soon",
    "contact.email": "Send Email",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",
    "lang.switch": "EN",
    "lang.label": "Switch to Spanish",
    "project.live": "Live Demo",
    "project.source": "Source Code",
    "footer.made": "Built with Astro & SolidJS",
  },
  es: {
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.projects": "Trabajo",
    "nav.contact": "Contacto",
    "hero.scroll": "Desplazate para explorar",
    "section.experience": "Experiencia",
    "section.skills": "Habilidades y Tecnologías",
    "section.projects": "Sistemas Clave",
    "section.contact": "Conectemos",
    "contact.download": "Descargar CV",
    "contact.coming_soon": "Próximamente",
    "contact.email": "Enviar Email",
    "theme.light": "Modo claro",
    "theme.dark": "Modo oscuro",
    "lang.switch": "ES",
    "lang.label": "Switch to English",
    "project.live": "Demo en vivo",
    "project.source": "Código Fuente",
    "footer.made": "Hecho con Astro & SolidJS",
  },
} as const;

export type Locale = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)["en"];

export function useTranslations(locale: string) {
  return (key: TranslationKey): string => {
    const dict = ui[locale as Locale] ?? ui.en;
    return dict[key] ?? key;
  };
}
