// /components/MotionProvider.tsx

"use client";

import React, { ReactNode, useMemo } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";

type MotionProviderProps = {
  children: ReactNode;
};

/**
 * Global motion settings:
 * - Apple-level subtle motion
 * - Consistent easing + duration
 * - OS-wide physics
 */
const TRANSITION = {
  duration: 0.45,
  ease: [0.25, 0.1, 0.25, 1.0], // Apple-like cubic-bezier
};

const FADE_SCALE_VARIANTS = {
  initial: {
    opacity: 0,
    scale: 0.985,
    y: 8,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...TRANSITION,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.985,
    y: -8,
    filter: "blur(4px)",
    transition: {
      ...TRANSITION,
      duration: 0.35,
    },
  },
};

/**
 * Cosmic background:
 * - Subtle starfield
 * - Slow parallax drift
 * - Hybrid cosmic-minimal
 */
const CosmicBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-black">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2937_0,_#020617_55%,_#000000_100%)]" />

      {/* Soft color nebula */}
      <motion.div
        aria-hidden
        className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-amber-400/12 via-pink-500/10 to-sky-500/14 blur-3xl"
        animate={{
          x: [0, 40, 0, -30, 0],
          y: [0, -20, 10, -10, 0],
          scale: [1, 1.05, 1, 1.03, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary nebula */}
      <motion.div
        aria-hidden
        className="absolute -right-40 bottom-[-10rem] h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-sky-500/10 via-violet-500/12 to-fuchsia-500/10 blur-3xl"
        animate={{
          x: [0, -30, 0, 20, 0],
          y: [0, 10, -15, 5, 0],
          scale: [1.02, 1, 1.04, 1, 1.02],
        }}
        transition={{
          duration: 46,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Starfield layer */}
      <div className="absolute inset-0 opacity-[0.35]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.18)_0,transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12)_0,transparent_45%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.16)_0,transparent_50%)]" />
      </div>

      {/* Subtle vertical glow column */}
      <motion.div
        aria-hidden
        className="absolute inset-x-1/3 top-0 h-full bg-gradient-to-b from-white/4 via-white/1 to-transparent blur-3xl opacity-40"
        animate={{
          opacity: [0.25, 0.4, 0.3, 0.45, 0.25],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

/**
 * Subtle glow pulse for key OS surfaces:
 * - Can be wrapped around main panels / shells
 * - Apple-level restraint, cosmic resonance
 */
export const GlowShell: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      className={`relative rounded-2xl border border-white/6 bg-white/3 bg-clip-padding p-[1px] shadow-[0_0_40px_rgba(15,23,42,0.65)] backdrop-blur-xl ${className}`}
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{
        opacity: 1,
        scale: 1,
        boxShadow: [
          "0 0 40px rgba(15,23,42,0.55)",
          "0 0 52px rgba(15,23,42,0.75)",
          "0 0 40px rgba(15,23,42,0.55)",
        ],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="rounded-2xl bg-slate-950/70 p-4 sm:p-6 lg:p-8">
        {children}
      </div>
    </motion.div>
  );
};

/**
 * MotionProvider:
 * - Wraps the entire OS
 * - Handles page / realm transitions
 * - Provides global motion config
 */
export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
  const pathname = usePathname();

  const key = useMemo(() => {
    // Use pathname as transition key so each route animates in/out
    return pathname || "/";
  }, [pathname]);

  return (
    <MotionConfig
      transition={TRANSITION}
      reducedMotion="user" // respects OS-level reduced motion
    >
      <CosmicBackground />

      <div className="relative z-0 flex min-h-screen flex-col bg-transparent text-slate-50 antialiased">
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={key}
            variants={FADE_SCALE_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex min-h-screen flex-1 flex-col"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};

export default MotionProvider;
