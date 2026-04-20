"use client";

import { useEffect, useState } from "react";

type Universe = {
  id: string;
  name: string;
  type: string;
  description: string;
};

export default function UniverseBrowser() {
  const [universes, setUniverses] = useState<Universe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/universe/list");
      const data = await res.json();
      setUniverses(data.universes || []);
      setLoading(false);
    };

    load();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {loading && (
        <div className="text-[13px] text-[var(--diamond-white)]/60">
          Loading universes…
        </div>
      )}

      {!loading && universes.length === 0 && (
        <div className="text-[13px] text-[var(--diamond-white)]/60">
          No universes found. Create universes through the Worldbuilder or Story engines.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {universes.map((u) => (
          <div
            key={u.id}
            className="
              p-6 rounded-2xl
              bg-[rgba(255,255,255,0.04)]
              border border-[rgba(255,255,255,0.06)]
              hover:border-[var(--cosmic-blue)]
              hover:bg-[rgba(255,255,255,0.06)]
              transition-all
              shadow-[0_0_20px_rgba(0,0,0,0.25)]
              hover:shadow-[0_0_35px_rgba(0,0,0,0.45)]
              flex flex-col gap-3
            "
          >
            <h3 className="text-[16px] text-[var(--platinum)]">{u.name}</h3>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--diamond-white)]/50">
              {u.type}
            </p>
            <p className="text-[12px] text-[var(--diamond-white)]/70 leading-relaxed">
              {u.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
