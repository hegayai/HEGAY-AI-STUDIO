// components/ui/SectionHeader.tsx
export function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {subtitle && (
        <p className="text-sm text-white/60 mt-1">{subtitle}</p>
      )}
    </div>
  );
}
