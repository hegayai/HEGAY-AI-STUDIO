// app/(dashboard)/layout.tsx

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  Globe2,
  Network,
  Star,
  Archive,
  User,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const nav = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Studio", href: "/studio", icon: Sparkles },
    { label: "Realms", href: "/realms", icon: Globe2 },
    { label: "Civilizations", href: "/civilizations", icon: Network },
    { label: "Pantheon", href: "/pantheon", icon: Star },
    { label: "Archive", href: "/archive", icon: Archive },
  ];

  return (
    <div className="min-h-screen w-full bg-[#050509] text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-gradient-to-b from-black via-[#050509] to-black flex flex-col">
        {/* Logo */}
        <div className="px-6 py-6 flex items-center gap-3 border-b border-white/5">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#F5D48A] via-[#C9A24F] to-[#FFB85C] shadow-[0_0_40px_rgba(245,212,138,0.6)] flex items-center justify-center">
            <div className="h-6 w-6 rounded-full border border-black/20 bg-black/20" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.25em] uppercase text-[#F5D48A]">
              HEGAY
            </div>
            <div className="text-xs text-slate-400">Creative Civilization OS</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-2 text-sm">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-colors ${
                  active
                    ? "bg-[#F5D48A1A] text-[#F5D48A]"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Profile */}
        <div className="px-4 py-4 border-t border-white/5 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#1A2A4F] to-[#243A6B] flex items-center justify-center">
            <User className="h-4 w-4 text-[#F5D48A]" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium">Bola‑Ige Samuel Solomon</div>
            <div className="text-[10px] text-slate-400">
              Architect of Infinite Civilizations
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="border-b border-white/5 px-8 py-4 bg-black/40 backdrop-blur">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Hegay OS · Dashboard Environment
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#050509] via-[#050509] to-black">
          {children}
        </div>
      </main>
    </div>
  );
}
