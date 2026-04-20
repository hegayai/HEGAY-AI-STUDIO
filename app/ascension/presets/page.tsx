"use client";

export default function PresetsPage() {
  const presets = [
    { name: "Mythic Civilization", desc: "Ancient, heroic, divine‑influenced." },
    { name: "Technocratic World", desc: "Logic‑driven, advanced, efficient." },
    { name: "Spiritual Realm", desc: "Mystical, ritual‑based, symbolic." },
    { name: "Trade Empire", desc: "Economy‑heavy, merchant guilds, markets." },
    { name: "Scholarly Nation", desc: "Education‑focused, knowledge‑driven." },
  ];

  return (
    <div className="p-6 rounded-xl bg-black/40 border border-white/10">
      <h1 className="text-xl font-semibold text-white">Presets</h1>
      <p className="text-xs text-slate-400 mt-1">
        One‑click templates for creators.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {presets.map((p, i) => (
          <div
            key={i}
            className="p-4 rounded-lg bg-white/5 border border-white/10"
          >
            <h2 className="text-sm font-semibold text-white">{p.name}</h2>
            <p className="text-xs text-slate-400 mt-1">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
