export default function StudioLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 glass-panel p-6 border-r border-white/10">
        <nav className="flex flex-col gap-4">
          <a href="/studio/dashboard">Dashboard</a>
          <a href="/studio/images">Image Engine</a>
          <a href="/studio/videos">Video Engine</a>
          {/* Add other engines */}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
