import { education } from '@/data/resume';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Education() {
  return (
    <section id="education" className="py-10 md:py-24">
      <Reveal>
        <SectionHeader index="05" label="Education" />
      </Reveal>

      <ol>
        {education.map((entry, idx) => (
          <Reveal
            key={entry.school}
            delay={0.04 * idx}
            className={idx === 0 ? '' : 'mt-8 border-t border-rule/50 pt-8'}
          >
            <li>
              {entry.period && (
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {entry.period}
                </p>
              )}
              <h3 className="font-display text-xl leading-tight text-ink">
                {entry.school}
              </h3>
              <p className="mt-1 text-sm italic text-muted">{entry.detail}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
