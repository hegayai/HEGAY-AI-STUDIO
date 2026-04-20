"use client";

import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdult, setIsAdult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignup() {
    if (!email || !password || !isAdult) {
      setMessage("You must be 18+ and fill all fields.");
      return;
    }
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, isAdult }),
    });

    const data = await res.json();
    setMessage(data.message || "Check your email to verify your account.");
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-sm p-6 rounded-xl bg-black/60 border border-white/10">
        <h1 className="text-lg font-semibold text-white">Create your account</h1>
        <p className="text-xs text-slate-400 mt-1">
          Hegay AI Studio is for users 18+ only.
        </p>

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

        <label className="mt-3 flex items-center gap-2 text-xs text-slate-300">
          <input
            type="checkbox"
            checked={isAdult}
            onChange={(e) => setIsAdult(e.target.checked)}
          />
          I confirm I am 18 years or older.
        </label>

        <button
          onClick={handleSignup}
          disabled={loading}
          className="mt-4 w-full px-4 py-2 text-xs rounded-lg bg-indigo-500/40 border border-indigo-400/40 text-indigo-100 disabled:opacity-40"
        >
          {loading ? "Creating account…" : "Sign up"}
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
