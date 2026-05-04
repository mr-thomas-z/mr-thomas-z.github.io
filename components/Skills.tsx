import { skills } from '@/data/resume';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Skills() {
  return (
    <section id="skills" className="py-10 md:py-24">
      <Reveal>
        <SectionHeader index="04" label="Toolbox" />
      </Reveal>

      <div className="space-y-10">
        {skills.map((group, idx) => (
          <Reveal key={group.label} delay={0.04 * idx}>
            <div className="grid grid-cols-1 gap-x-12 gap-y-3 md:grid-cols-[200px_1fr]">
              <h3 className="font-display text-xl text-ink">{group.label}</h3>
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-rule bg-paper-deep/40 px-3 py-1 font-mono text-[0.72rem] text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
