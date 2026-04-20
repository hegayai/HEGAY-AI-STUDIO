"use client";

import { useEffect, useState } from "react";

export default function RealmCinematicEntry({
  realm,
  children,
}: {
  realm: string;
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return <>{children}</>;

  const realmColors: Record<string, string> = {
    "Culture Realm": "text-amber-300",
    "Origin Codex": "text-sky-300",
    "System Intelligence": "text-emerald-300",
    "Multiverse Navigator": "text-purple-300",
    "Timeline Engine": "text-rose-300",
    "Archive Vault": "text-slate-300",
    "Universe Builder": "text-indigo-300",
  };

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/90 backdrop-blur-3xl animate-fade-in-scale">
      <div className="text-center space-y-4">
        <div className="text-[12px] uppercase tracking-[0.3em] text-slate-500">
          Entering Realm
        </div>
        <div className={`text-4xl font-bold ${realmColors[realm] || "text-slate-100"}`}>
          {realm}
        </div>
      </div>
    </div>
  );
}
