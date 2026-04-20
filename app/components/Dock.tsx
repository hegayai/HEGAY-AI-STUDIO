"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type DockItem = {
  href: string;
  label: string;
  icon?: string;
};

const DOCK_ITEMS: DockItem[] = [
  { href: "/", label: "Dashboard" },
  { href: "/studio", label: "Studio" },
  { href: "/realms", label: "Realms" },
  { href: "/timeline", label: "Timeline" },
  { href: "/archive", label: "Archive" },
  { href: "/signals", label: "Signals" },
];

export default function Dock() {
  const pathname = usePathname() || "/";

  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        glass-panel
        px-4 py-3
        rounded-2xl
        flex gap-4
        shadow-[0_30px_90px_rgba(0,0,0,0.9)]
        z-[999]
      "
    >
      {DOCK_ITEMS.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              w-10 h-10 rounded-xl flex items-center justify-center
              transition diamond-hover
              ${
                active
                  ? "bg-[rgba(255,255,255,0.12)] text-[var(--platinum)]"
                  : "bg-[rgba(255,255,255,0.04)] text-[var(--diamond-white)]/70 hover:bg-[rgba(255,255,255,0.08)]"
              }
            `}
          >
            <span className="text-[11px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
