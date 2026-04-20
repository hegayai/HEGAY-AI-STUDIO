// components/layout/RealmNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Realms } from "@/lib/realms";

export function RealmNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {Object.entries(Realms).map(([key, realm]) => {
        const active = pathname === realm.path;

        return (
          <Link
            key={key}
            href={realm.path}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
              ${active
                ? "bg-slate-800 text-sky-300 shadow-inner"
                : "text-slate-300 hover:bg-slate-800/50 hover:text-sky-200"
              }`}
          >
            <span className="text-lg">{realm.icon}</span>
            {realm.name}
          </Link>
        );
      })}
    </nav>
  );
}

