"use client";

import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>

      {subtitle && (
        <p className="text-sm text-slate-400 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
