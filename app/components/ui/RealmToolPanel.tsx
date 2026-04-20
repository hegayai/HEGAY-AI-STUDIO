"use client";

import ToolCard from "./ToolCard";

export default function RealmToolPanel({
  title,
  tools,
}: {
  title: string;
  tools: {
    title: string;
    description: string;
    aura: string;
  }[];
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl space-y-4">
      <h2 className="text-sm font-semibold text-slate-100">{title}</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            aura={tool.aura}
          />
        ))}
      </div>
    </section>
  );
}
