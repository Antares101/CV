/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        display: ["Anton", "Impact", "sans-serif"],
      },
      colors: {
        p5: {
          red: "#e53935",
          "red-dark": "#c62828",
          "red-light": "#ff5252",
          black: "#0a0a0a",
          dark: "#1a1a1a",
          gray: "#2a2a2a",
          "light-gray": "#e0e0e0",
          white: "#f5f5f5",
          muted: "#999999",
        },
      },
      animation: {
        "p5-fade-in": "p5FadeIn 0.6s ease-out forwards",
        "p5-slide-up": "p5SlideUp 0.6s ease-out forwards",
        "p5-slide-right": "p5SlideRight 0.6s ease-out forwards",
        "p5-slide-left": "p5SlideLeft 0.6s ease-out forwards",
        "p5-glow": "p5Glow 2s ease-in-out infinite",
        "p5-shard": "p5Shard 1.5s ease-out forwards",
        "p5-reveal": "p5Reveal 0.8s ease-out forwards",
        "p5-bounce-in": "p5BounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "p5-skew-in": "p5SkewIn 0.6s ease-out forwards",
        "p5-pulse": "p5Pulse 2s ease-in-out infinite",
        "p5-tape-slide": "p5TapeSlide 8s linear infinite",
        "p5-corner-flash": "p5CornerFlash 3s ease-in-out infinite",
      },
      keyframes: {
        p5FadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        p5SlideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        p5SlideRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        p5SlideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        p5Glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(229, 57, 53, 0.3), 0 0 10px rgba(229, 57, 53, 0.1)",
          },
          "50%": { boxShadow: "0 0 20px rgba(229, 57, 53, 0.5), 0 0 40px rgba(229, 57, 53, 0.2)" },
        },
        p5Shard: {
          "0%": { opacity: "0", transform: "translateY(-20px) rotate(-15deg) scale(0.5)" },
          "100%": { opacity: "1", transform: "translateY(0) rotate(0deg) scale(1)" },
        },
        p5Reveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        p5BounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        p5SkewIn: {
          "0%": { opacity: "0", transform: "skewX(-15deg) translateX(-30px)" },
          "100%": { opacity: "1", transform: "skewX(0deg) translateX(0)" },
        },
        p5Pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        p5TapeSlide: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "80px 0" },
        },
        p5CornerFlash: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};
