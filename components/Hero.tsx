'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/resume';

const lineVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const prefersReduced = useReducedMotion();

  const transition = prefersReduced
    ? { duration: 0 }
    : { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <header className="pt-16 pb-12 md:pt-32 md:pb-36">
      <motion.p
        className="eyebrow mb-10 flex items-center gap-3"
        initial={prefersReduced ? false : 'hidden'}
        animate="show"
        variants={lineVariants}
        transition={{ ...transition, delay: 0 }}
      >
        <span className="inline-block h-px w-8 bg-ink/40" />
        {profile.location}
      </motion.p>

      <motion.h1
        className="font-display tracking-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] text-ink"
        initial={prefersReduced ? false : 'hidden'}
        animate="show"
        variants={lineVariants}
        transition={{ ...transition, delay: 0.1 }}
      >
        Thomas{' '}
        <span className="italic text-accent" style={{ fontVariationSettings: '"opsz" 144' }}>
          Zhu
        </span>
      </motion.h1>

      <motion.p
        className="mt-10 max-w-[44ch] text-lg leading-[1.55] text-ink-soft md:text-xl"
        initial={prefersReduced ? false : 'hidden'}
        animate="show"
        variants={lineVariants}
        transition={{ ...transition, delay: 0.2 }}
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
        initial={prefersReduced ? false : 'hidden'}
        animate="show"
        variants={lineVariants}
        transition={{ ...transition, delay: 0.3 }}
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
        >
          <span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-accent">
            github.com/{profile.githubHandle}
          </span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.6}
          />
        </a>

        <a
          href="#work"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline-none"
        >
          <span>Selected work</span>
          <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
        </a>
      </motion.div>
    </header>
  );
}
