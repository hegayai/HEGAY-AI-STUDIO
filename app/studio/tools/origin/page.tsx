"use client";

import OriginComponent from "@/app/components/origin/OriginComponent";

export default function OriginToolsPage() {
  return (
    <div className="w-full p-8 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Origin Tools</h1>
        <p className="text-gray-400 max-w-2xl">
          Access the core creation engines of the Origin Realm — Lore Engine,
          World Seed Generator, and Timeline Engine. These tools define the
          mythic, structural, and historical foundations of your worlds.
        </p>
      </header>

      {/* Origin Component */}
      <OriginComponent />
    </div>
  );
}
