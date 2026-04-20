"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Command,
  Image,
  Video,
  Music,
  Cpu,
  PanelsTopLeft,
  MessageSquare,
  Workflow,
  Settings,
} from "lucide-react";

const nav = [
  {
    label: "Core",
    items: [
      { name: "Dashboard", href: "/studio/dashboard", icon: LayoutDashboard },
      { name: "Command Center", href: "/studio/command-center", icon: Command },
    ],
  },
  {
    label: "Creative Tools",
    items: [
      { name: "Image Generator", href: "/studio/image-generator", icon: Image },
      { name: "Video Generator", href: "/studio/video-generator", icon: Video },
      { name: "Audio Lab", href: "/studio/audio-lab", icon: Music },
      { name: "Models Lab", href: "/studio/models-lab", icon: Cpu },
    ],
  },
  {
    label: "System",
    items: [
      { name: "Window System", href: "/studio/window-system", icon: PanelsTopLeft },
      { name: "Chat", href: "/studio/chat", icon: MessageSquare },
      { name: "Jobs", href: "/studio/jobs", icon: Workflow },
      { name: "Settings", href: "/studio/settings", icon: Settings },
    ],
  },
];

export default function StudioNav() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-full bg-black/40 backdrop-blur-xl border-r border-white/10 flex flex-col">
      <div className="px-6 py-6 border-b border-white/10">
        <h1 className="text-lg font-semibold text-cosmic-gold tracking-wide">
          Hegay AI Studio
        </h1>
        <p className="text-[11px] text-white/40 tracking-[0.25em] uppercase mt-1">
          Creative Civilization OS
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
        {nav.map((section) => (
          <div key={section.label}>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
              {section.label}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                      ${
                        active
                          ? "bg-cosmic-gold/20 border border-cosmic-gold/40 text-cosmic-gold"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
