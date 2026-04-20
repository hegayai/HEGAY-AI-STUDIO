// app/components/Sidebar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Globe2,
  Layers,
  Infinity,
  Cpu,
  BookOpen,
  BarChart3,
  Monitor,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const nav = [
    {
      label: "Dashboard",
      href: "/",
      icon: Home,
    },
    {
      label: "Universe Simulation",
      href: "/simulation/universe",
      icon: Globe2,
    },
    {
      label: "Meta‑Timeline",
      href: "/simulation/meta-timeline",
      icon: Layers,
    },
    {
      label: "Multiverse Navigator",
      href: "/simulation/multiverse-navigator",
      icon: BookOpen,
    },
    {
      label: "Origin System Codex",
      href: "/simulation/origin-codex",
      icon: Infinity,
    },
    {
      label: "System Intelligence Codex",
      href: "/simulation/system-intelligence-codex",
      icon: Cpu,
    },
    {
      label: "Engine Hub",
      href: "/engines",
      icon: BarChart3,
    },

    // ⭐ FULLY ADDED — DESKTOP MODE
    {
      label: "Desktop Mode",
      href: "/desktop",
      icon: Monitor,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-[260px] border-r border-white/10 bg-black/60 backdrop-blur-xl p-6 flex flex-col">
      <div className="mb-10">
        <h1 className="text-lg font-semibold tracking-wide text-[#F5D48A]">
          Hegay OS
        </h1>
        <p className="text-[11px] text-slate-500 mt-1">
          Creative Civilization Engine
        </p>
      </div>

      <nav className="space-y-1">
        {nav.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                active
                  ? "bg-white/10 text-slate-100 border border-white/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              <item.icon className="h-4 w-4 text-[#F5D48A]" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
