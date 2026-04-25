import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string; // ← optional now
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`glass-panel p-4 rounded-xl border border-white/10 ${className}`}
    >
      {children}
    </div>
  );
}
