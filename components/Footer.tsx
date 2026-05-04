import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-rule pt-8 pb-12 md:mt-20 md:pt-10 md:pb-16">
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
        <span>© {new Date().getFullYear()} Thomas Zhu</span>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
        >
          <span>github.com/{profile.githubHandle}</span>
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.6}
          />
        </a>
      </div>
    </footer>
  );
}
