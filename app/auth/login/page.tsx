"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.message || "Login failed.");
    } else {
      setMessage("Logged in.");
      // TODO: redirect to /ascension or /auth/account
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-sm p-6 rounded-xl bg-black/60 border border-white/10">
        <h1 className="text-lg font-semibold text-white">Log in</h1>

        <input
          type="email"
          placeholder="Email"
          className="mt-4 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-2 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-4 w-full px-4 py-2 text-xs rounded-lg bg-emerald-500/40 border border-emerald-400/40 text-emerald-100 disabled:opacity-40"
        >
          {loading ? "Logging in…" : "Log in"}
        </button>

        {message && (
          <p className="mt-3 text-xs text-slate-300 whitespace-pre-line">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
