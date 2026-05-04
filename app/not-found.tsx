import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-[820px] flex-col items-start justify-center px-6 md:px-10">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-display tracking-display text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] text-ink">
        Page not <span className="italic text-accent">found</span>.
      </h1>
      <Link
        href="/"
        className="mt-8 border-b border-ink/30 pb-0.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
      >
        ← Back home
      </Link>
    </main>
  );
}
