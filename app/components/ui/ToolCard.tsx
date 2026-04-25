"use client";

import Link from "next/link";

type RealmToolCardProps = {
  title: string;
  description: string;
  aura: string;
  href: string; // ✅ FIXED — add href support
};

export default function RealmToolCard({
  title,
  description,
  aura,
  href,
}: RealmToolCardProps) {
  return (
    <Link
      href={href}
      className={`p-6 rounded-xl bg-gradient-to-br ${aura} border border-white/10 shadow-lg hover:scale-[1.02] transition block`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </Link>
  );
}
