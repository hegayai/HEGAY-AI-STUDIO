import type { ReactNode } from "react";

export default function EngineTemplate({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-cosmic-panel/90 border border-white/10 p-8 backdrop-blur-md section-enter">
        <h1 className="text-3xl font-bold text-cosmic-gold">{title}</h1>
        <p className="text-white/60 text-sm mt-2 max-w-2xl">{description}</p>
      </section>

      {children}
    </div>
  );
}
