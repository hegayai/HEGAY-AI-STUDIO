"use client";

import { useState } from "react";
import Link from "next/link";

type UploadedVideo = {
  id: string;
  name: string;
  duration: string;
  status: "processing" | "ready";
};

type Reel = {
  id: string;
  title: string;
  duration: string;
  hook: string;
  platform: "TikTok" | "IG Reels" | "YouTube Shorts";
};

export default function AdsEnginePage() {
  const [videos, setVideos] = useState<UploadedVideo[]>([
    {
      id: "1",
      name: "NaijaMix Radio – Full Show.mp4",
      duration: "47:13",
      status: "ready",
    },
  ]);

  const [reels, setReels] = useState<Reel[]>([
    {
      id: "r1",
      title: "“The moment the beat drops”",
      duration: "00:28",
      hook: "High‑energy intro for NaijaMix Radio universe.",
      platform: "TikTok",
    },
    {
      id: "r2",
      title: "“Call‑to‑action for new listeners”",
      duration: "00:34",
      hook: "Invites diaspora listeners into the radio universe.",
      platform: "IG Reels",
    },
    {
      id: "r3",
      title: "“Behind the mic”",
      duration: "00:41",
      hook: "Human, intimate moment with the host.",
      platform: "YouTube Shorts",
    },
  ]);

  const [isAdmin] = useState(true); // UI-only flag; later wired to real auth

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-black via-slate-950 to-black" />
      <div className="fixed inset-0 -z-10 opacity-40 pointer-events-none">
        <div className="w-[160%] h-[160%] bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.3),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.22),_transparent_55%)] translate-x-[-15%] translate-y-[-10%]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col gap-8">
        {/* TOP BAR */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-emerald-400 shadow-lg shadow-fuchsia-500/40" />
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-slate-300">
                HEGAY AI
              </span>
              <span className="text-[10px] text-slate-500">
                Ads Engine · Admin Stack
              </span>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-[11px] text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">
              Homepage
            </Link>
            <Link
              href="/control-room"
              className="hover:text-white transition-colors"
            >
              Control Room
            </Link>
            <span className="rounded-full border border-fuchsia-500/60 bg-fuchsia-500/10 px-3 py-1 text-[10px] text-fuchsia-200">
              Admin‑only · Internal
            </span>
          </nav>
        </header>

        {/* TITLE STRIP */}
        <section className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-fuchsia-300/80">
            HEGAY ADS ENGINE
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Turn long stories into short, premium advert reels.
            </h1>
            <p className="text-[11px] text-slate-400 max-w-md">
              Upload full shows, sermons, or brand videos. Hegay AI slices them
              into multiple short‑form reels tuned for TikTok, IG Reels, and
              YouTube Shorts.
            </p>
          </div>
        </section>

        {!isAdmin && (
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-[11px] text-slate-300">
            <p className="font-semibold mb-1">Access restricted</p>
            <p>
              This Ads Engine is currently reserved for Hegay AI admins. In the
              future, a public{" "}
              <span className="text-fuchsia-300">Hegay Ads Studio</span> will be
              available as a separate package.
            </p>
          </div>
        )}

        {isAdmin && (
          <>
            {/* MAIN GRID */}
            <section className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
              {/* LEFT: UPLOAD + VIDEO LIST */}
              <div className="space-y-4">
                {/* Upload panel (UI only) */}
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-100">
                        Upload source video
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Long‑form content: shows, sermons, podcasts, brand
                        videos.
                      </p>
                    </div>
                    <span className="rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-200">
                      Step 1 · Source
                    </span>
                  </div>

                  <div className="mt-2 flex flex-col gap-3 text-[11px]">
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700/80 bg-black/40 px-4 py-6 text-slate-400">
                      <p className="mb-1 text-slate-300">
                        Drag & drop video here
                      </p>
                      <p className="text-[10px] text-slate-500 mb-3">
                        .mp4 · .mov · up to 2 hours
                      </p>
                      <button className="rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-[11px] text-slate-100 hover:border-fuchsia-400/70 hover:text-white transition">
                        Choose file
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-500">
                      Note: This is a UI‑only shell. Later, this panel will
                      connect to your real video processing backend.
                    </p>
                  </div>
                </div>

                {/* Uploaded videos list */}
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-100">
                      Source library
                    </p>
                    <span className="text-[10px] text-slate-500">
                      {videos.length} video
                      {videos.length !== 1 ? "s" : ""} in library
                    </span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    {videos.map((video) => (
                      <div
                        key={video.id}
                        className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-black/50 px-3 py-2"
                      >
                        <div className="flex flex-col">
                          <span className="text-slate-200">{video.name}</span>
                          <span className="text-slate-500">
                            Duration: {video.duration}
                          </span>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span
                            className={`rounded-full px-2 py-0.5 text-[9px] ${
                              video.status === "ready"
                                ? "border border-emerald-400/60 bg-emerald-400/10 text-emerald-200"
                                : "border border-slate-600/60 bg-slate-700/20 text-slate-200"
                            }`}
                          >
                            {video.status === "ready"
                              ? "Reels generated"
                              : "Processing…"}
                          </span>
                          <button className="text-[10px] text-fuchsia-300 hover:text-fuchsia-200">
                            View reels
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: REEL PREVIEW GRID */}
              <div className="space-y-4">
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-100">
                        Generated reels
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Short‑form cuts ready for TikTok, IG Reels, and Shorts.
                      </p>
                    </div>
                    <span className="rounded-full border border-fuchsia-400/60 bg-fuchsia-400/10 px-3 py-1 text-[10px] text-fuchsia-200">
                      Step 2 · Reels
                    </span>
                  </div>

                  <div className="grid gap-3 md:grid-cols-1">
                    {reels.map((reel) => (
                      <ReelCard key={reel.id} reel={reel} />
                    ))}
                  </div>
                </div>

                {/* Export / Social strip */}
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 space-y-2 text-[11px]">
                  <p className="text-slate-300 font-semibold">
                    Step 3 · Export & send
                  </p>
                  <p className="text-slate-400">
                    In the full implementation, this panel will connect to your
                    social media APIs to send reels directly to TikTok, IG, and
                    YouTube—or export them as downloadable files.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[10px] text-slate-100 hover:border-fuchsia-400/70 hover:text-white transition">
                      Export all as .mp4
                    </button>
                    <button className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[10px] text-slate-100 hover:border-emerald-400/70 hover:text-white transition">
                      Send to TikTok (future)
                    </button>
                    <button className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[10px] text-slate-100 hover:border-indigo-400/70 hover:text-white transition">
                      Send to IG Reels (future)
                    </button>
                    <button className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[10px] text-slate-100 hover:border-sky-400/70 hover:text-white transition">
                      Send to YouTube Shorts (future)
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* FUTURE: PUBLIC ADS STUDIO NOTE */}
            <section className="mt-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-6 py-5 text-[11px] text-slate-300 space-y-2">
              <p className="font-semibold">
                Future path: Hegay Ads Studio (public package)
              </p>
              <p className="text-slate-400">
                This internal Ads Engine can later be exposed as a separate
                product for creators, churches, brands, and event organizers to
                generate their own advert reels. The UI you see here becomes the
                foundation for that public‑facing studio.
              </p>
            </section>
          </>
        )}

        {/* FOOTER */}
        <footer className="mt-8 border-t border-slate-800/70 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <span>
            © {new Date().getFullYear()} Hegay AI Studio · Ads Engine · Admin
            Stack
          </span>
          <span className="text-slate-500">
            Control Room · Ads Engine · Image Studio · Creator OS
          </span>
        </footer>
      </div>
    </main>
  );
}

function ReelCard({ reel }: { reel: Reel }) {
  const platformColor =
    reel.platform === "TikTok"
      ? "text-fuchsia-300 border-fuchsia-400/60 bg-fuchsia-400/10"
      : reel.platform === "IG Reels"
      ? "text-rose-300 border-rose-400/60 bg-rose-400/10"
      : "text-sky-300 border-sky-400/60 bg-sky-400/10";

  return (
    <div className="rounded-2xl border border-slate-800/80 bg-black/60 p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-slate-200">{reel.title}</p>
          <p className="text-[10px] text-slate-500">
            Duration: {reel.duration} · Hook: {reel.hook}
          </p>
        </div>
        <span
          className={`rounded-full border px-2 py-0.5 text-[9px] ${platformColor}`}
        >
          {reel.platform}
        </span>
      </div>
      <div className="flex items-center justify-between text-[10px] text-slate-400">
        <span>Preview reel (future player)</span>
        <div className="flex gap-2">
          <button className="hover:text-slate-200">Download</button>
          <button className="hover:text-slate-200">Send to platform</button>
        </div>
      </div>
    </div>
  );
}
