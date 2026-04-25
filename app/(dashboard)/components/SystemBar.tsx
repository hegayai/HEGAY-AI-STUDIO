"use client";

import { usePathname } from "next/navigation";

export default function SystemBar() {
  const pathname = usePathname();

  const realmNames = {
    "/dashboard": "Origin Realm",
    "/aesthetic": "Aesthetic Realm",
    "/avatar": "Avatar Realm",
    "/mood": "Mood Realm",
    "/dream": "Dream Realm",
  };

  const realm =
    realmNames[pathname as keyof typeof realmNames] || "Hegay OS";

  return (
    <footer className="w-full fixed bottom-0 left-0 py-3 px-6 border-t border-white/10 bg-white/5 backdrop-blur flex items-center justify-between text-sm text-white/80">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        <span>System Stable</span>
      </div>

      <div className="opacity-90">{realm}</div>

      <div className="flex items-center gap-2">
        <span className="opacity-70">Energy:</span>
        <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white/70 animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
}
