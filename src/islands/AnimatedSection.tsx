import { createSignal, onMount, onCleanup, type JSX } from 'solid-js';

export default function AnimatedSection(props: { children: JSX.Element }) {
  let ref: HTMLDivElement | undefined;
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    if (!ref) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    // Check if element is already in viewport on load
    const rect = ref.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInViewport) {
      // Already visible — skip animation, show immediately
      setVisible(true);
      return;
    }

    // Not in viewport yet — add animation class and wait for scroll
    requestAnimationFrame(() => {
      ref?.classList.add('p5-animate-target');
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref?.classList.remove('p5-animate-target');
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(ref);
    onCleanup(() => observer.disconnect());
  });

  return (
    <div
      ref={ref}
      class="transition-all duration-700 ease-out opacity-100 translate-y-0"
    >
      {props.children}
    </div>
  );
}
