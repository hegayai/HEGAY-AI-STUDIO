"use client";

import RealmCard from "./RealmCard";

const realms = [
  {
    title: "Image Realm",
    description: "Generate, enhance, and orchestrate visual assets.",
    accent: "from-purple-500/20 to-purple-700/10",
  },
  {
    title: "Dream Realm",
    description: "Craft cinematic dream sequences and emotional narratives.",
    accent: "from-fuchsia-500/20 to-fuchsia-700/10",
  },
  {
    title: "Radio Realm",
    description: "Broadcast ambience, signals, and creative frequencies.",
    accent: "from-blue-500/20 to-blue-700/10",
  },
  {
    title: "Mythic Realm",
    description: "Build ancestral mythologies and cultural resonance.",
    accent: "from-amber-500/20 to-amber-700/10",
  },
  {
    title: "Workflow Realm",
    description: "Design and automate creative pipelines and systems.",
    accent: "from-emerald-500/20 to-emerald-700/10",
  },
  {
    title: "Core Realm",
    description: "Monitor engines, memory, and creative throughput.",
    accent: "from-rose-500/20 to-rose-700/10",
  },
];

export default function RealmList() {
  return (
    <section className="w-full mt-10">
      <h2 className="mb-4 text-lg font-semibold text-slate-100">
        Realms
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {realms.map((realm) => (
          <RealmCard
            key={realm.title}
            title={realm.title}
            description={realm.description}
            accent={realm.accent}
          />
        ))}
      </div>
    </section>
  );
}
