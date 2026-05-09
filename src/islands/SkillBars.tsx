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
            <span class="text-sm font-semibold text-p5-white">
              {skill.name}
            </span>
            <span class="text-xs font-mono text-p5-red">
              {skill.level}%
            </span>
          </div>
          <div class="p5-skill-bar-track">
            <div
              class="p5-skill-bar-fill"
              style={{ width: animated() ? `${skill.level}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}