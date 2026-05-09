import { createSignal, onMount } from 'solid-js';

export default function ThemeToggle() {
  const [dark, setDark] = createSignal(true);

  onMount(() => {
    const stored = localStorage.getItem('theme');
    const isDark = stored !== 'light';
    setDark(isDark);
  });

  const toggle = () => {
    const newDark = !dark();
    setDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    document.documentElement.classList.toggle('light', !newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      class="flex items-center justify-center w-9 h-9 border-2 border-p5-gray text-p5-muted hover:border-p5-red hover:text-p5-red hover:shadow-[0_0_10px_rgba(229,57,53,0.3)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-p5-red p5-hover-skew"
      aria-label={dark() ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark() ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sun icon (shown in dark mode, hidden in light mode) */}
      <svg
        class={`w-4 h-4 transition-all duration-300 ${
          dark() ? 'opacity-100 scale-100' : 'opacity-0 scale-75 absolute'
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
      {/* Moon icon (shown in light mode, hidden in dark mode) */}
      <svg
        class={`w-4 h-4 transition-all duration-300 ${
          !dark() ? 'opacity-100 scale-100' : 'opacity-0 scale-75 absolute'
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
    </button>
  );
}
