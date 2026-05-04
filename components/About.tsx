import { profile } from "@/data/resume";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="py-10 md:py-24">
      <Reveal>
        <SectionHeader index="01" label="About" />
      </Reveal>
      <Reveal delay={0.05}>
        <p className="max-w-[58ch] font-display text-2xl leading-[1.45] text-ink md:text-[1.75rem]">
          {profile.about}
        </p>
      </Reveal>
    </section>
  );
}
