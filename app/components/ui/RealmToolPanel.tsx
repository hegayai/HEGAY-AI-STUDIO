"use client";

import React from "react";

type RealmToolPanelProps = {
  title: string;
  description: string;
  aura: string;
  tools?: {
    title: string;
    description: string;
    aura: string;
  }[];
  children?: React.ReactNode; // ✅ FIXED — allow children
};

export default function RealmToolPanel({
  title,
  description,
  aura,
  tools = [],
  children,
}: RealmToolPanelProps) {
  return (
    <div className={`p-10 rounded-2xl bg-gradient-to-br ${aura} border border-white/10`}>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-300 mb-8">{description}</p>

      {children && (
        <div className="mb-10">
          {children}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-black/40 border border-gray-700 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
            <p className="text-gray-400 text-sm">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
