"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function StudioHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // --- PARTICLE FIELD (GPU-accelerated) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = 400);

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
    }));

    function animate() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.7)";

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 400;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black border-b border-white/10">

      {/* PARTICLE FIELD */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-[400px] opacity-40"
      />

      {/* PARALLAX NEBULA LAYERS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-purple-600/20 blur-[160px] animate-pulse-slow" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[140px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] animate-float-delayed" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">

        {/* MYTHIC EMBLEM */}
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/40 flex items-center justify-center animate-emblem-pulse">
          <span className="text-white text-xl font-bold tracking-wider">H</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          Hegay AI Studio
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Enter a mythic‑cosmic creative operating system for building worlds,
          civilizations, cultures, economies, and origin systems — powered by
          sovereign imagination and guided by cinematic AI engines.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/ascension"
            className="px-6 py-3 rounded-lg bg-indigo-600/40 border border-indigo-400/40 text-indigo-100 text-sm hover:bg-indigo-600/60 transition backdrop-blur-sm"
          >
            Enter Ascension Layer
          </Link>

          <Link
            href="/realms/origin"
            className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition backdrop-blur-sm"
          >
            Explore Realms
          </Link>
        </div>
      </div>

      {/* ANIMATION KEYFRAMES */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 12s ease-in-out infinite 2s;
        }
        .animate-emblem-pulse {
          animation: emblemPulse 3.5s ease-in-out infinite;
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes emblemPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.15); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
