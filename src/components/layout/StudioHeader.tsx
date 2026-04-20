export default function StudioHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="flex flex-col gap-3">
      <div className="text-[11px] uppercase tracking-[0.35em] text-[var(--diamond-white)]/55">
        {label}
      </div>

      <h1 className="text-[28px] leading-tight text-[var(--platinum)]">
        {title}
      </h1>

      <p className="text-[13px] text-[var(--diamond-white)]/70 max-w-xl">
        {description}
      </p>
    </section>
  );
}
