"use client";

import { ReactNode } from "react";

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
    <div className="w-full min-h-screen p-8 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p className="text-gray-400 max-w-2xl text-sm">{description}</p>
      </header>

      <section className="rounded-xl border border-white/10 bg-black/30 p-6">
        {children}
      </section>
    </div>
  );
}
