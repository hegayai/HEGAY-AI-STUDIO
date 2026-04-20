"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const realms = [
  { name: "Origin", path: "/dashboard", color: "blue" },
  { name: "Aesthetic", path: "/aesthetic", color: "pink" },
  { name: "Avatar", path: "/avatar", color: "green" },
  { name: "Mood", path: "/mood", color: "yellow" },
  { name: "Dream", path: "/dream", color: "indigo" },
];

export default function RealmNav() {
  const pathname = usePathname();

  return (
    <div className="flex gap-4">
      {realms.map((realm) => {
        const active = pathname === realm.path;

        return (
          <Link
            key={realm.name}
            href={realm.path}
            className={`px-4 py-2 rounded-lg transition-all ${
              active
                ? `bg-${realm.color}-600 text-white`
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {realm.name}
          </Link>
        );
      })}
    </div>
  );
}
