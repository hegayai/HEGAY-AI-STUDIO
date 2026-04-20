// app/components/ui/index.tsx

import React from "react";
import { cn } from "@/lib/utils";

/* ───────────────── BUTTONS ───────────────── */

export function Button({
  children,
  className,
  variant = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gold" | "ghost";
  [key: string]: any;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm transition-all border";

  const variants = {
    default:
      "border-white/10 text-slate-200 hover:border-[#F5D48A66] hover:text-[#F5D48A]",
    gold:
      "border-[#F5D48A66] bg-[#F5D48A1A] text-[#F5D48A] hover:bg-[#F5D48A33]",
    ghost: "border-transparent text-slate-400 hover:text-slate-200",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

/* ───────────────── INPUTS ───────────────── */

export function Input({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) {
  return (
    <input
      className={cn(
        "w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-[#F5D48A66] focus:outline-none transition-all",
        className
      )}
      {...props}
    />
  );
}

/* ───────────────── TEXTAREA ───────────────── */

export function TextArea({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) {
  return (
    <textarea
      className={cn(
        "w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-[#F5D48A66] focus:outline-none transition-all",
        className
      )}
      {...props}
    />
  );
}

/* ───────────────── CARD ───────────────── */

export function Card({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-black/60 p-4 relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ───────────────── PANEL ───────────────── */

export function Panel({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-black/70 p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ───────────────── SECTION HEADER ───────────────── */

export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-1">
      <h3 className="text-sm font-semibold tracking-wide flex items-center gap-2">
        <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
        <span>{title}</span>
      </h3>
      {subtitle && (
        <p className="text-[11px] text-slate-400 max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}

/* ───────────────── PILL ───────────────── */

export function Pill({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="inline-flex flex-col rounded-full border border-white/10 bg-black/40 px-4 py-2">
      <span className="text-[11px] text-slate-400">{label}</span>
      <span className="text-sm font-semibold text-[#F5D48A]">{value}</span>
    </div>
  );
}

/* ───────────────── CHIP ───────────────── */

export function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[11px] text-slate-300",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ───────────────── BADGE ───────────────── */

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-slate-400",
        className
      )}
    >
      {children}
    </span>
  );
}

/* ───────────────── DIVIDER ───────────────── */

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-px w-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]", className)}
    />
  );
}

/* ───────────────── GLOW WRAPPER ───────────────── */

export function Glow({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F5D48A22] via-[#FFB85C11] to-transparent blur-2xl opacity-40" />
      <div className="relative">{children}</div>
    </div>
  );
}

/* ───────────────── ICON WRAPPER ───────────────── */

export function IconWrap({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-8 w-8 rounded-full border border-[#F5D48A55] bg-black/40 flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}
