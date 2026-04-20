"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiGrid,
  FiGlobe,
  FiLayers,
  FiSettings,
} from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();

  const nav = [
    { label: "Dashboard", href: "/dashboard", icon: FiHome },
    { label: "Studio", href: "/studio", icon: FiGrid },
    { label: "Universe", href: "/universe", icon: FiGlobe },
    { label: "Realms", href: "/realms", icon: FiLayers },
    { label: "Settings", href: "/settings", icon: FiSettings },
  ];

  return (
    <aside className="sticky top-0 h-screen w-56 border-r border-white/10 bg-black/40 backdrop-blur-xl p-4 flex flex-col gap-4">
      <h1 className="text-sm font-semibold text-slate-200 tracking-wide px-2">
        Hegay OS
      </h1>

      <nav className="flex flex-col gap-1">
        {nav.map(({ label, href, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                active
                  ? "bg-purple-500/20 text-purple-100 border border-purple-400/40"
                  : "text-slate-300 hover:bg-white/5 border border-transparent"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
