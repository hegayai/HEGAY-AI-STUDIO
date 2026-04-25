// app/(dashboard)/studio/layout.tsx

import React from "react";

type StudioLayoutProps = {
  children: React.ReactNode;
};

export default function StudioLayout({ children }: StudioLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 glass-panel p-6 border-r border-white/10">
        <nav className="flex flex-col gap-4">
          <a href="/studio">Dashboard</a>
          <a href="/studio/images">Image Engine</a>
          <a href="/studio/videos">Video Engine</a>
          <a href="/studio/gallery">Gallery</a>
        </nav>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
