import { createSignal, onMount } from 'solid-js';

type Theme = 'system' | 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = createSignal<Theme>('dark');

  onMount(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'system' || stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else {
      // Default to system preference
      setTheme('system');
    }
    applyTheme(theme());
  });

  const applyTheme = (t: Theme) => {
    let isDark: boolean;
    
    if (t === 'system') {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      isDark = t === 'dark';
    }

    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
  };

  const cycleTheme = () => {
    const themes: Theme[] = ['dark', 'system', 'light'];
    const currentIndex = themes.indexOf(theme());
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  };

  // Listen for system preference changes
  onMount(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme() === 'system') {
        applyTheme('system');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
  });

  // Determine icon based on resolved theme
  const isDarkMode = () => {
    if (theme() === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return theme() === 'dark';
  };

  const getTitle = () => {
    const titles = {
      dark: 'Dark mode (click for system)',
      system: 'System preference (click for light)',
      light: 'Light mode (click for dark)'
    };
    return titles[theme()];
  };

  return (
    <button
      onClick={cycleTheme}
      class="flex items-center justify-center w-9 h-9 border-2 border-p5-gray text-p5-muted hover:border-p5-red hover:text-p5-red hover:shadow-[0_0_10px_rgba(229,57,53,0.3)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-p5-red p5-angular-border-sm"
      aria-label={getTitle()}
      title={getTitle()}
    >
      {/* Moon icon (dark mode) */}
      <svg
        class={`w-4 h-4 transition-all duration-300 ${
          isDarkMode() ? 'opacity-100 scale-100' : 'opacity-0 scale-75 absolute'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
      {/* Sun icon (light mode) */}
      <svg
        class={`w-4 h-4 transition-all duration-300 ${
          !isDarkMode() ? 'opacity-100 scale-100' : 'opacity-0 scale-75 absolute'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      {/* System icon - small indicator when system */}
      <span
        class={`absolute -bottom-1 -right-1 w-2 h-2 rounded-full border border-p5-gray ${
          theme() === 'system' ? 'bg-p5-yellow' : 'hidden'
        }`}
        aria-hidden="true"
      />
    </button>
  );
}