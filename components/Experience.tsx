import { experience } from '@/data/resume';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <section id="experience" className="py-10 md:py-24">
      <Reveal>
        <SectionHeader index="02" label="Experience" />
      </Reveal>

      <ol className="space-y-16">
        {experience.map((entry, idx) => (
          <Reveal key={`${entry.company}-${idx}`} delay={0.04 * idx}>
            <li className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-[140px_1fr]">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted md:pt-2">
                {entry.period}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-3xl leading-tight text-ink">
                    {entry.company}
                  </h3>
                  <span className="text-sm italic text-muted">{entry.role}</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {entry.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-[0.97rem] leading-[1.65] text-ink-soft"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.7em] h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-accent/70"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
