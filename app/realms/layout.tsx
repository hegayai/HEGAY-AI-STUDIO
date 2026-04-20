"use client";

import StudioSidebar from "@/app/components/ui/StudioSidebar";
import Topbar from "@/app/components/ui/Topbar";

export default function RealmsLayout({ children }) {
  return (
    <div className="relative flex min-h-screen w-full bg-gradient-to-b from-black via-slate-900 to-black text-slate-100">

      {/* Global Sidebar */}
      <StudioSidebar />

      {/* Main Content Area */}
      <div className="ml-64 w-full px-8 py-10">
        <Topbar />
        {children}
      </div>
    </div>
  );
}
