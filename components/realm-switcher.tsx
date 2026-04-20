"use client";

import { useRealm } from "@/app/providers/realm-provider";

const REALMS = [
  { id: "origin", label: "Origin", color: "from-amber-400 to-rose-500" },
  { id: "aesthetic", label: "Aesthetic", color: "from-fuchsia-400 to-purple-500" },
  { id: "avatar", label: "Avatar", color: "from-cyan-400 to-blue-500" },
  { id: "mood", label: "Mood", color: "from-emerald-400 to-teal-500" },
  { id: "dream", label: "Dream", color: "from-indigo-400 to-violet-500" },
];

export default function RealmSwitcher() {
  const { realm, setRealm } = useRealm();

  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      {REALMS.map((r) => (
        <button
          key={r.id}
          onClick={() => setRealm(r.id as any)}
          className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition 
            ${realm === r.id 
              ? `bg-gradient-to-r ${r.color} text-slate-950` 
              : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60"
            }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
