"use client";

import { useState } from "react";

export default function RealmModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-cosmic-gold text-black font-semibold rounded-lg hover:bg-cosmic-goldSoft transition shadow-lg shadow-cosmic-gold/30 text-sm"
      >
        Create New Realm
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-cosmic-panel p-8 rounded-2xl border border-white/10 w-[440px] max-w-[92vw]">
            <h2 className="text-2xl font-bold text-cosmic-gold">
              New Realm
            </h2>
            <p className="text-white/60 text-xs mt-1">
              Define a new world in your creative civilization.
            </p>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <label className="block text-[11px] text-white/50 mb-1">
                  Realm Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lagos Night Market"
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/12 text-white text-sm focus:outline-none focus:border-cosmic-gold"
                />
              </div>

              <div>
                <label className="block text-[11px] text-white/50 mb-1">
                  Realm Description
                </label>
                <textarea
                  placeholder="Describe the energy, purpose, and story of this realm..."
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/12 text-white text-sm h-28 resize-none focus:outline-none focus:border-cosmic-gold"
                />
              </div>

              <div>
                <label className="block text-[11px] text-white/50 mb-1">
                  Primary Vibe
                </label>
                <select className="w-full p-3 rounded-lg bg-black/40 border border-white/12 text-white text-sm focus:outline-none focus:border-cosmic-gold">
                  <option>Midnight Cosmic</option>
                  <option>Sunrise Origin</option>
                  <option>Electric Lagos</option>
                  <option>Temple of Memory</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-4 text-sm">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-white/60 hover:text-white transition"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-cosmic-gold text-black rounded-lg hover:bg-cosmic-goldSoft transition font-semibold">
                Save Realm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
