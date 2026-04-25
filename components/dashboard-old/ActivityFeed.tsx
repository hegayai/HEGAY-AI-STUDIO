"use client";

import React from "react";

type ActivityItem = {
  id: string | number;
  title: string;
  description: string;
  timestamp: string;
};

type ActivityFeedProps = {
  items: ActivityItem[];
};

export default function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border border-slate-800 bg-slate-900 p-4 hover:border-cyan-400/50 transition"
        >
          <div className="flex items-start justify-between">
            <h3 className="text-sm font-semibold text-slate-100">
              {item.title}
            </h3>

            <span className="text-[10px] text-slate-500">
              {new Date(item.timestamp).toLocaleString()}
            </span>
          </div>

          <p className="text-xs text-slate-400 mt-1">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
