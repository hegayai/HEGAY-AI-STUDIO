"use client";

import { useState } from "react";
import Link from "next/link";

type GeneratedImage = {
  id: string;
  prompt: string;
  style: string;
  url: string;
};

export default function ImageStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Cinematic poster");
  const [images, setImages] = useState<GeneratedImage[]>([
    {
      id: "img1",
      prompt: "NaijaMix Radio universe promo poster",
      style: "Cinematic poster",
      url: "/images/sample-hegay-poster-1.jpg", // replace later
    },
    {
      id: "img2",
      prompt: "Diaspora creative civilization launch banner",
      style: "Gradient minimal",
      url: "/images/sample-hegay-poster-2.jpg", // replace later
    },
  ]);

  const [isAdmin] = useState(true); // UI-only flag for now

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    const id = `img-${Date.now()}`;
    setImages((prev) => [
      {
        id,
        prompt,
        style,
        url: "/images/placeholder-generated.jpg", // placeholder
      },
      ...prev,
    ]);
    setPrompt("");
  };

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
                Image Studio · Campaign Visuals
              </span>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-[11px] text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">
              Homepage
            </Link>
            <Link
              href="/ads-engine"
              className="hover:text-white transition-colors"
            >
              Ads Engine
            </Link>
            <Link
              href="/control-room"
              className="hover:text-white transition-colors"
            >
              Control Room
            </Link>
          </nav>
        </header>

        {/* TITLE STRIP */}
        <section className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-300/80">
            HEGAY IMAGE STUDIO
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Generate posters, flyers, and banners for your universes.
            </h1>
            <p className="text-[11px] text-slate-400 max-w-md">
              Turn prompts into premium visuals for radio shows, events,
              products, and campaigns—ready for social media and print.
            </p>
          </div>
        </section>

        {!isAdmin && (
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-[11px] text-slate-300">
            <p className="font-semibold mb-1">Access mode</p>
            <p>
              This Image Studio can be admin‑only or opened as a public tool for
              creators. For now, it’s locked to internal use.
            </p>
          </div>
        )}

        {isAdmin && (
          <>
            {/* MAIN GRID */}
            <section className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
              {/* LEFT: PROMPT + CONTROLS */}
              <div className="space-y-4">
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-100">
                        Describe the visual
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Campaign posters, event flyers, thumbnails, product
                        banners.
                      </p>
                    </div>
                    <span className="rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-200">
                      Step 1 · Prompt
                    </span>
                  </div>

                  <div className="space-y-3 text-[11px]">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g. Premium poster for NaijaMix Radio universe launch, neon Lagos skyline, cosmic gradients, bold typography"
                      className="w-full rounded-2xl border border-slate-700/80 bg-black/50 px-3 py-2 text-[11px] text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-fuchsia-400/70"
                      rows={4}
                    />
                    <div className="flex flex-wrap items-center gap-3">
                      <select
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[11px] text-slate-100 focus:outline-none"
                      >
                        <option>Cinematic poster</option>
                        <option>Gradient minimal</option>
                        <option>Afrofuturist collage</option>
                        <option>Event flyer</option>
                        <option>Product banner</option>
                      </select>
                      <button
                        onClick={handleGenerate}
                        className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 px-4 py-1.5 text-[11px] font-semibold text-black shadow-md shadow-fuchsia-500/40 hover:brightness-110 transition"
                      >
                        Generate visual (UI only)
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-500">
                      This is a UI shell. Later, it will connect to your image
                      generation backend and asset storage.
                    </p>
                  </div>
                </div>

                {/* NOTES */}
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 text-[11px] text-slate-300 space-y-2">
                  <p className="font-semibold">Use cases</p>
                  <ul className="space-y-1 text-slate-400">
                    <li>• Radio show posters and episode art.</li>
                    <li>• Event flyers for concerts, conferences, and services.</li>
                    <li>• Product banners for campaigns and launches.</li>
                    <li>• Thumbnails for YouTube, podcasts, and reels.</li>
                  </ul>
                </div>
              </div>

              {/* RIGHT: IMAGE GRID */}
              <div className="space-y-4">
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-100">
                        Generated visuals
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Latest campaign images, ready for export.
                      </p>
                    </div>
                    <span className="rounded-full border border-fuchsia-400/60 bg-fuchsia-400/10 px-3 py-1 text-[10px] text-fuchsia-200">
                      Step 2 · Assets
                    </span>
                  </div>

                  <div className="grid gap-3 md:grid-cols-1">
                    {images.map((img) => (
                      <ImageCard key={img.id} image={img} />
                    ))}
                  </div>
                </div>

                {/* EXPORT STRIP */}
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 text-[11px] space-y-2">
                  <p className="text-slate-300 font-semibold">
                    Step 3 · Export & share
                  </p>
                  <p className="text-slate-400">
                    Later, this panel can export images in multiple sizes and
                    send them directly to your social media or cloud storage.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[10px] text-slate-100 hover:border-fuchsia-400/70 hover:text-white transition">
                      Download all
                    </button>
                    <button className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[10px] text-slate-100 hover:border-indigo-400/70 hover:text-white transition">
                      Send to social (future)
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* FOOTER */}
        <footer className="mt-8 border-t border-slate-800/70 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <span>
            © {new Date().getFullYear()} Hegay AI Studio · Image Studio
          </span>
          <span className="text-slate-500">
            Ads Engine · Image Studio · Creator OS · Control Room
          </span>
        </footer>
      </div>
    </main>
  );
}

function ImageCard({ image }: { image: GeneratedImage }) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-black/60 p-3 flex gap-3">
      <div className="h-20 w-32 shrink-0 rounded-xl bg-slate-900/80 border border-slate-800/80 overflow-hidden flex items-center justify-center text-[10px] text-slate-500">
        {/* Replace with real <Image /> later */}
        <span>Preview</span>
      </div>
      <div className="flex flex-col justify-between text-[11px]">
        <div>
          <p className="text-slate-200 line-clamp-2">{image.prompt}</p>
          <p className="text-slate-500 mt-1">Style: {image.style}</p>
        </div>
        <div className="flex gap-2 text-[10px] text-slate-400">
          <button className="hover:text-slate-200">Download</button>
          <button className="hover:text-slate-200">Open in new tab</button>
        </div>
      </div>
    </div>
  );
}
