"use client";

import { useState } from "react";
import { useMotherboard } from "./MotherboardContext";

export default function Motherboard() {
  const [open, setOpen] = useState(false);
  const { settings, toggle, toggleRealm } = useMotherboard();

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-6 z-50 px-4 py-2 bg-white/20 backdrop-blur rounded-lg border border-white/10 hover:bg-white/30 transition-all"
      >
        Motherboard
      </button>

      {open && (
        <div className="fixed bottom-28 right-6 w-80 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 z-50">
          <h2 className="text-xl font-bold mb-4">Hegay OS Motherboard</h2>

          <div className="flex flex-col gap-3">
            {Object.keys(settings)
              .filter((k) => k !== "realms")
              .map((key) => (
                <button
                  key={key}
                  onClick={() => toggle(key)}
                  className="flex justify-between items-center px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                >
                  <span className="capitalize">{key}</span>
                  <span>{settings[key] ? "ON" : "OFF"}</span>
                </button>
              ))}

            <h3 className="mt-4 mb-2 font-semibold">Realms</h3>

            {Object.keys(settings.realms).map((realm) => (
              <button
                key={realm}
                onClick={() => toggleRealm(realm)}
                className="flex justify-between items-center px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                <span className="capitalize">{realm}</span>
                <span>{settings.realms[realm] ? "ON" : "OFF"}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
