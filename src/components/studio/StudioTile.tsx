"use client";

import Link from "next/link";

export default function StudioTile({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        group
        p-6 rounded-2xl
        bg-[rgba(255,255,255,0.04)]
        border border-[rgba(255,255,255,0.06)]
        transition-all duration-300
        shadow-[0_0_20px_rgba(0,0,0,0.25)]
        hover:shadow-[0_0_40px_rgba(0,0,0,0.55)]
        hover:border-[var(--cosmic-blue)]
        hover:bg-[rgba(255,255,255,0.07)]
        hover:-translate-y-[3px]
        flex flex-col gap-4
      "
    >
      <div className="text-[28px] opacity-70 group-hover:opacity-100 transition">
        {icon}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-[16px] text-[var(--platinum)]">{title}</h3>
        <p className="text-[12px] text-[var(--diamond-white)]/60 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
