import { createSignal, onMount, onCleanup, type JSX } from 'solid-js';

export default function AnimatedSection(props: { children: JSX.Element }) {
  let ref: HTMLDivElement | undefined;
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      class={`transition-all duration-700 ease-out ${
        visible()
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {props.children}
    </div>
  );
}
