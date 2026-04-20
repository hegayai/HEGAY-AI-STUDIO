"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  badge?: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Dashboard" },
  { href: "/studio", label: "Studio" },
  { href: "/realms", label: "Realms" },
  { href: "/timeline", label: "Timeline" },
  { href: "/archive", label: "Archive" },
  { href: "/signals", label: "Signals" },
];

function SidebarLogo() {
  return (
    <div className="mb-6 flex items-center gap-2 px-4 pt-4">
      <div className="h-8 w-8 rounded-2xl bg-[radial-gradient(circle_at_top,var(--glow-blue),transparent_60%)] shadow-[0_0_30px_rgba(0,0,0,0.9)]" />
      <div className="flex flex-col">
        <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--cosmic-blue)]">
          Hegay OS
        </span>
        <span className="text-[11px] text-[var(--diamond-white)]/70">
          Creative Civilization
        </span>
      </div>
    </div>
  );
}

function SidebarNavItem({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={`
        group flex items-center justify-between rounded-xl px-4 py-2.5 text-[13px]
        transition diamond-hover
        ${active ? "bg-[rgba(255,255,255,0.08)] text-[var(--platinum)]" : "text-[var(--diamond-white)]/75 hover:bg-[rgba(255,255,255,0.04)]"}
      `}
    >
      <span>{item.label}</span>
      {item.badge && (
        <span className="rounded-full bg-[rgba(255,255,255,0.06)] px-2 py-0.5 text-[10px] text-[var(--diamond-white)]/80">
          {item.badge}
        </span>
      )}
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname() || "/";

  return (
    <aside
      className="
        hidden lg:flex lg:flex-col
        glass-panel
        w-64 shrink-0
        border-r border-white/10
        bg-[rgba(0,0,0,0.7)]
        backdrop-blur-2xl
      "
    >
      <SidebarLogo />

      <nav className="flex-1 space-y-1 px-2">
        {NAV_ITEMS.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return <SidebarNavItem key={item.href} item={item} active={active} />;
        })}
      </nav>

      <div className="mt-auto px-4 pb-4 pt-2 border-t border-white/5 text-[11px] text-[var(--diamond-white)]/60">
        <div className="flex items-center justify-between">
          <span>World‑Soul: Stable</span>
          <span className="h-2 w-10 rounded-full bg-[rgba(74,107,255,0.4)]" />
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span>Pantheon: Online</span>
          <span className="h-2 w-6 rounded-full bg-[rgba(107,74,255,0.5)]" />
        </div>
      </div>
    </aside>
  );
}
