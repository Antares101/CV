import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solid from "@astrojs/solid-js";

export default defineConfig({
  integrations: [tailwind(), solid()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  site: "https://antares101.github.io",
  base: "/CV",
});
