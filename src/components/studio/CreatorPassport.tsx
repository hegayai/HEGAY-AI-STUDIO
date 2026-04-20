"use client";

import { useState } from "react";

export default function CreatorPassport() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("creator");
  const [lineage, setLineage] = useState("");
  const [tier, setTier] = useState("citizen");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");

  const generate = async () => {
    setLoading(true);
    setOutput("");

    const res = await fetch("/api/passport/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        role,
        lineage,
        tier,
        bio,
      }),
    });

    const data = await res.json();
    setOutput(data.text || "");
    setLoading(false);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] flex flex-col gap-6">
      {/* NAME */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Creator Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Creator name or identity"
          className="
            w-full rounded-xl p-3
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            text-[13px] text-[var(--platinum)]
            outline-none
          "
        />
      </div>

      {/* ROLE */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Role</span>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            rounded-xl p-2 text-[13px]
          "
        >
          <option value="creator">Creator</option>
          <option value="architect">Architect</option>
          <option value="storyteller">Storyteller</option>
          <option value="producer">Producer</option>
          <option value="visionary">Visionary</option>
        </select>
      </div>

      {/* LINEAGE */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Lineage</span>
        <input
          value={lineage}
          onChange={(e) => setLineage(e.target.value)}
          placeholder="Cultural, mythic, or symbolic lineage"
          className="
            w-full rounded-xl p-3
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            text-[13px] text-[var(--platinum)]
            outline-none
          "
        />
      </div>

      {/* TIER */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Tier</span>
        <select
          value={tier}
          onChange={(e) => setTier(e.target.value)}
          className="
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            rounded-xl p-2 text-[13px]
          "
        >
          <option value="citizen">Citizen</option>
          <option value="artisan">Artisan</option>
          <option value="master">Master</option>
          <option value="legend">Legend</option>
          <option value="pantheon">Pantheon</option>
        </select>
      </div>

      {/* BIO */}
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Describe the creator’s essence, mission, or mythic identity…"
        className="
          w-full h-32 rounded-xl p-4
          bg-[rgba(255,255,255,0.05)]
          border border-[rgba(255,255,255,0.08)]
          text-[13px] text-[var(--platinum)]
          outline-none
        "
      />

      {/* GENERATE BUTTON */}
      <button
        onClick={generate}
        disabled={loading}
        className="
          px-5 py-3 rounded-xl
          bg-[var(--cosmic-blue)]
          text-black text-[13px]
          shadow-[0_0_20px_var(--cosmic-blue)]
          transition-all
          hover:scale-[1.03]
          disabled:opacity-50 disabled:hover:scale-100
        "
      >
        {loading ? "Generating Passport…" : "Generate Passport"}
      </button>

      {/* OUTPUT */}
      {output && (
        <div
          className="
            mt-4 p-4 rounded-2xl
            bg-[rgba(0,0,0,0.55)]
            border border-[rgba(255,255,255,0.08)]
            text-[13px]
            whitespace-pre-wrap
          "
        >
          {output}
        </div>
      )}
    </div>
  );
}
