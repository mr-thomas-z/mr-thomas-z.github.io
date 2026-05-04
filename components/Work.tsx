import { selectedWork } from '@/data/resume';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Work() {
  return (
    <section id="work" className="py-10 md:py-24">
      <Reveal>
        <SectionHeader index="03" label="Selected Work" />
      </Reveal>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
        {selectedWork.map((w, idx) => (
          <Reveal key={w.title} delay={0.04 * idx}>
            <article className="group relative flex h-full flex-col gap-3 pt-3">
              <span
                aria-hidden
                className="absolute left-0 top-0 h-px w-8 bg-accent/70"
              />
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.7rem] tabular-nums text-accent/80">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                  {w.company}
                </span>
              </div>
              <h3 className="font-display text-[1.65rem] leading-tight text-ink">
                {w.title}
              </h3>
              <p className="text-[0.97rem] leading-[1.65] text-ink-soft">
                {w.description}
              </p>
              <p className="mt-auto pt-2 text-sm italic text-accent">
                {w.impact}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
