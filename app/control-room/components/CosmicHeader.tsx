"use client";

export default function CosmicHeader() {
  return (
    <div className="relative mb-12">
      {/* COSMIC AURA BACKDROP */}
      <div className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse-slow" />

      {/* HEADER CONTENT */}
      <div className="relative text-center py-10">
        {/* GLYPH */}
        <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-700/40 border border-white/10">
          <span className="text-4xl font-bold tracking-widest text-white">
            H
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-5xl font-extrabold tracking-wide text-white drop-shadow-lg">
          HegayOS Control Room
        </h1>

        {/* SUBTITLE */}
        <p className="mt-3 text-gray-300 text-lg tracking-wide">
          Creative Operating System • Cosmic Identity Layer
        </p>
      </div>

      {/* BORDER LINE */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-6" />
    </div>
  );
}
