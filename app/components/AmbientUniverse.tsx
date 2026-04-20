"use client";

export default function AmbientUniverse() {
  return (
    <div
      className="
        universe-layer
        fixed inset-0
        z-[-10]
        pointer-events-none
        bg-[radial-gradient(circle_at_top,var(--glow-blue),transparent_60%),radial-gradient(circle_at_bottom,var(--glow-purple),transparent_60%)]
      "
    />
  );
}
