"use client";

import StudioSidebar from "@/components/StudioSidebar";
import Topbar from "@/app/components/ui/Topbar";

export default function RealmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-white/10 bg-black/40">
        <StudioSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
