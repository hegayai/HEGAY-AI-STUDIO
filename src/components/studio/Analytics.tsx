"use client";

import { useState, useEffect } from "react";

export default function Analytics() {
  const [usage, setUsage] = useState<any>(null);
  const [realms, setRealms] = useState<any>(null);
  const [creators, setCreators] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const loadUsage = async () => {
    try {
      const res = await fetch("/api/analytics/usage");
      const data = await res.json();
      setUsage(data);
    } catch {
      setError("Failed to load usage analytics.");
    }
  };

  const loadRealms = async () => {
    try {
      const res = await fetch("/api/analytics/realms");
      const data = await res.json();
      setRealms(data);
    } catch {
      setError("Failed to load realm analytics.");
    }
  };

  const loadCreators = async () => {
    try {
      const res = await fetch("/api/analytics/creators");
      const data = await res.json();
      setCreators(data);
    } catch {
      setError("Failed to load creator analytics.");
    }
  };

  useEffect(() => {
    loadUsage();
    loadRealms();
    loadCreators();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10">

      {/* USAGE ANALYTICS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Usage Metrics</h2>

        <div className="p-6 rounded-xl bg-black/40 border border-white/15 space-y-3">
          <p className="text-white/70 text-sm">Total Requests</p>
          <p className="text-3xl font-bold text-white">{usage?.totalRequests ?? "—"}</p>

          <p className="text-white/70 text-sm mt-4">Active Users</p>
          <p className="text-3xl font-bold text-white">{usage?.activeUsers ?? "—"}</p>

          <p className="text-white/70 text-sm mt-4">Tokens Used</p>
          <p className="text-3xl font-bold text-white">{usage?.tokensUsed ?? "—"}</p>
        </div>
      </section>

      {/* REALM PERFORMANCE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Realm Performance</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {realms?.map((realm: any) => (
            <div
              key={realm.name}
              className="p-4 rounded-xl bg-black/40 border border-white/15"
            >
              <h3 className="text-lg font-semibold text-white">{realm.name}</h3>
              <p className="text-white/60 text-sm mt-1">
                Requests: {realm.requests}
              </p>
              <p className="text-white/60 text-sm">
                Avg Latency: {realm.latency}ms
              </p>
              <p className="text-white/60 text-sm">
                Errors: {realm.errors}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CREATOR INSIGHTS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Creator Insights</h2>

        <div className="space-y-3">
          {creators?.map((creator: any) => (
            <div
              key={creator.id}
              className="p-4 rounded-xl bg-black/40 border border-white/15"
            >
              <p className="text-white font-semibold">{creator.name}</p>
              <p className="text-white/60 text-sm">
                Activity Score: {creator.activityScore}
              </p>
              <p className="text-white/60 text-sm">
                Assets Created: {creator.assets}
              </p>
              <p className="text-white/60 text-sm">
                Earnings: {creator.earnings} credits
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ERROR */}
      {error && (
        <div className="text-red-400 text-sm bg-red-900/20 border border-red-500/40 p-4 rounded-xl">
          {error}
        </div>
      )}
    </div>
  );
}
