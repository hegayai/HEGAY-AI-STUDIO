"use client";

import { useState, useEffect } from "react";

export default function Settings() {
  const [profile, setProfile] = useState<any>(null);
  const [apiKeys, setApiKeys] = useState<any>(null);
  const [preferences, setPreferences] = useState<any>(null);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);

  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyValue, setNewKeyValue] = useState("");

  const [theme, setTheme] = useState("cosmic");
  const [language, setLanguage] = useState("en");

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadSettings = async () => {
    try {
      const res = await fetch("/api/settings/load");
      const data = await res.json();

      setProfile(data.profile);
      setApiKeys(data.apiKeys);
      setPreferences(data.preferences);

      setName(data.profile?.name || "");
      setTheme(data.preferences?.theme || "cosmic");
      setLanguage(data.preferences?.language || "en");
    } catch {
      setError("Failed to load settings.");
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result as string);
    reader.readAsDataURL(file);
  };

  const saveProfile = async () => {
    try {
      setLoading(true);
      setResponse(null);

      const res = await fetch("/api/settings/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, avatar }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setLoading(false);

      await loadSettings();
    } catch {
      setError("Failed to save profile.");
      setLoading(false);
    }
  };

  const saveApiKey = async () => {
    try {
      setLoading(true);
      setResponse(null);

      const res = await fetch("/api/settings/api-keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newKeyName, value: newKeyValue }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setLoading(false);

      await loadSettings();
      setNewKeyName("");
      setNewKeyValue("");
    } catch {
      setError("Failed to save API key.");
      setLoading(false);
    }
  };

  const savePreferences = async () => {
    try {
      setLoading(true);
      setResponse(null);

      const res = await fetch("/api/settings/preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme, language }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setLoading(false);

      await loadSettings();
    } catch {
      setError("Failed to save preferences.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">

      {/* PROFILE SETTINGS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Profile</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {!avatar ? (
          <label className="w-full h-40 border border-dashed border-white/25 rounded-xl flex flex-col items-center justify-center text-white/50 cursor-pointer hover:border-cosmic-gold hover:text-cosmic-gold transition">
            <input type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
            <span className="text-sm">+ Upload Avatar</span>
          </label>
        ) : (
          <div className="w-full p-4 rounded-xl border border-white/15 bg-black/60 flex justify-between items-center">
            <span className="text-white/80 text-sm">Avatar uploaded</span>
            <button
              onClick={() => setAvatar(null)}
              className="px-2 py-1 text-[11px] rounded bg-black/70 text-white/80 hover:bg-black"
            >
              Remove
            </button>
          </div>
        )}

        <button
          onClick={saveProfile}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold"
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </section>

      {/* API KEYS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">API Keys</h2>

        <input
          type="text"
          placeholder="Key Name"
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white"
          value={newKeyName}
          onChange={(e) => setNewKeyName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Key Value"
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white"
          value={newKeyValue}
          onChange={(e) => setNewKeyValue(e.target.value)}
        />

        <button
          onClick={saveApiKey}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold"
        >
          {loading ? "Saving..." : "Save API Key"}
        </button>

        <div className="space-y-3">
          {apiKeys?.map((key: any) => (
            <div key={key.name} className="p-4 rounded-xl bg-black/40 border border-white/15">
              <p className="text-white font-semibold">{key.name}</p>
              <p className="text-white/60 text-sm">••••••••••••••••</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREFERENCES */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Preferences</h2>

        <select
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="cosmic">Cosmic</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <select
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="yo">Yoruba</option>
          <option value="fr">French</option>
        </select>

        <button
          onClick={savePreferences}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold"
        >
          {loading ? "Saving..." : "Save Preferences"}
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
