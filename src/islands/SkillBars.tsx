import { createSignal, onMount, onCleanup } from 'solid-js';

interface Skill {
  name: string;
  level: number;
}

interface Props {
  skills: Skill[];
}

export default function SkillBars(props: Props) {
  const [animated, setAnimated] = createSignal(false);
  let ref: HTMLDivElement | undefined;

  onMount(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay animation start to let the card settle
          setTimeout(() => setAnimated(true), 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref);
    onCleanup(() => observer.disconnect());
  });

  return (
    <div ref={ref} class="space-y-4">
      {props.skills.map((skill) => (
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
            <span class="text-xs font-mono text-gray-500 dark:text-gray-500">
              {skill.level}%
            </span>
          </div>
          <div class="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full bg-gradient-to-r from-accent-400 to-blue-500 transition-all duration-1000 ease-out"
              style={{ width: animated() ? `${skill.level}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
