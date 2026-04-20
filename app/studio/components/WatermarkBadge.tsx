type Props = {
  plan: "free" | "pro" | "studio" | "enterprise";
};

export default function WatermarkBadge({ plan }: Props) {
  const active = plan === "free";

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-white/60">
      <span
        className={`h-2 w-2 rounded-full ${
          active ? "bg-amber-400" : "bg-emerald-400"
        }`}
      />
      {active ? "Watermark Active" : "Watermark Removed"}
    </span>
  );
}
