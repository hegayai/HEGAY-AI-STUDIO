"use client";

import { useState } from "react";

export default function Pantheon() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [traits, setTraits] = useState("");
  const [memory, setMemory] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [invocation, setInvocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPersona = async () => {
    try {
      setError(null);
      setResponse(null);

      if (!name.trim()) {
        setError("Persona name is required.");
        return;
      }

      setLoading(true);

      const res = await fetch("/api/pantheon/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          role,
          traits,
          memory,
        }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setLoading(false);
    } catch (err) {
      setError("Unexpected error occurred.");
      setLoading(false);
    }
  };

  const invokePersona = async () => {
    try {
      setError(null);
      setResponse(null);

      if (!name.trim()) {
        setError("Persona name is required to invoke.");
        return;
      }

      if (!invocation.trim()) {
        setError("Invocation prompt is required.");
        return;
      }

      setLoading(true);

      const res = await fetch("/api/pantheon/invoke", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          invocation,
        }),
      });

      const data = await res.json();
      setResponse(data?.reply || "No response.");
      setLoading(false);
    } catch (err) {
      setError("Unexpected error occurred.");
      setLoading(false);
    }
  };

  const listPersonas = async () => {
    try {
      setError(null);
      setResponse(null);
      setLoading(true);

      const res = await fetch("/api/pantheon/list");
      const data = await res.json();

      setResponse(JSON.stringify(data, null, 2));
      setLoading(false);
    } catch (err) {
      setError("Unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">

      {/* CREATE PERSONA */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Create Persona</h2>

        <input
          type="text"
          placeholder="Persona Name (e.g., Orunmila, Aetherion, Nyx)"
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Role (e.g., Oracle, Strategist, Story Weaver)"
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <textarea
          placeholder="Traits (comma-separated: wise, cosmic, analytical...)"
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white h-24"
          value={traits}
          onChange={(e) => setTraits(e.target.value)}
        />

        <textarea
          placeholder="Memory (optional — lore, backstory, purpose...)"
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white h-24"
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
        />

        <button
          onClick={createPersona}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold"
        >
          {loading ? "Creating..." : "Create Persona"}
        </button>
      </section>

      {/* INVOKE PERSONA */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Invoke Persona</h2>

        <textarea
          placeholder="Invocation prompt..."
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white h-24"
          value={invocation}
          onChange={(e) => setInvocation(e.target.value)}
        />

        <button
          onClick={invokePersona}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold"
        >
          {loading ? "Invoking..." : "Invoke Persona"}
        </button>
      </section>

      {/* LIST PERSONAS */}
      <section className="space-y-4">
        <button
          onClick={listPersonas}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-white/10 text-white hover:bg-white/20"
        >
          {loading ? "Loading..." : "List All Personas"}
        </button>
      </section>

      {/* ERROR */}
      {error && (
        <div className="text-red-400 text-sm bg-red-900/20 border border-red-500/40 p-4 rounded-xl">
          {error}
        </div>
      )}

      {/* RESPONSE */}
      {response && (
        <pre className="bg-black/40 border border-white/15 p-4 rounded-xl text-white/80 text-sm overflow-auto">
          {response}
        </pre>
      )}
    </div>
  );
}
