type Props = {
  index: string;
  label: string;
};

export function SectionHeader({ index, label }: Props) {
  return (
    <div className="mb-12 flex items-baseline gap-4 border-b border-rule pb-3">
      <span className="font-mono text-[0.7rem] tabular-nums text-muted">
        {index}
      </span>
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
    </div>
  );
}
