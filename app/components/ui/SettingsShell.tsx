"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSettings,
  FiUser,
  FiBell,
  FiShield,
  FiCpu,
  FiGlobe,
} from "react-icons/fi";

type Section = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const sections: Section[] = [
  { id: "general", label: "General", icon: FiSettings },
  { id: "account", label: "Account", icon: FiUser },
  { id: "notifications", label: "Notifications", icon: FiBell },
  { id: "privacy", label: "Privacy & Security", icon: FiShield },
  { id: "system", label: "System", icon: FiCpu },
  { id: "language", label: "Language & Region", icon: FiGlobe },
];

export default function SettingsShell() {
  const [active, setActive] = useState<string>("general");

  const ActiveIcon =
    sections.find((s) => s.id === active)?.icon ?? FiSettings;

  const activeLabel =
    sections.find((s) => s.id === active)?.label ?? "Settings";

  return (
    <div className="grid gap-8 md:grid-cols-[260px,1fr]">
      {/* Sidebar */}
      <aside className="h-full rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Settings
        </h2>

        <nav className="space-y-1">
          {sections.map(({ id, label, icon: Icon }) => {
            const isActive = id === active;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                  isActive
                    ? "bg-purple-500/20 text-purple-100 border border-purple-400/40"
                    : "text-slate-300 hover:bg-white/5 border border-transparent"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Content */}
      <section className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
        <header className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/20 border border-purple-400/40">
            <ActiveIcon className="h-5 w-5 text-purple-200" />
          </div>

          <div>
            <h1 className="text-base font-semibold text-slate-100">
              {activeLabel}
            </h1>
            <p className="text-xs text-slate-400">
              Fine‑tune your Creative OS environment.
            </p>
          </div>
        </header>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-4"
        >
          {active === "general" && <GeneralSettings />}
          {active === "account" && <AccountSettings />}
          {active === "notifications" && <NotificationSettings />}
          {active === "privacy" && <PrivacySettings />}
          {active === "system" && <SystemSettings />}
          {active === "language" && <LanguageSettings />}
        </motion.div>
      </section>
    </div>
  );
}

/* --------------------------------------------- */
/* COMPONENTS                                    */
/* --------------------------------------------- */

function Card({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      {description && (
        <p className="mt-1 text-xs text-slate-400">{description}</p>
      )}
      {children && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}

function ToggleRow({
  label,
  hint,
}: {
  label: string;
  hint?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-xs text-slate-100">{label}</p>
        {hint && (
          <p className="text-[0.7rem] text-slate-500 mt-0.5">{hint}</p>
        )}
      </div>

      <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-purple-500/60">
        <span className="inline-block h-4 w-4 translate-x-4 rounded-full bg-white shadow transition" />
      </button>
    </div>
  );
}

/* --------------------------------------------- */
/* SETTINGS SECTIONS                             */
/* --------------------------------------------- */

function GeneralSettings() {
  return (
    <>
      <Card
        title="Appearance"
        description="Control the visual mood of your Creative OS."
      >
        <ToggleRow label="Use cosmic gradient theme" />
        <ToggleRow label="Enable subtle motion" />
      </Card>

      <Card
        title="Startup"
        description="Choose what you see when you enter the OS."
      >
        <ToggleRow label="Open on Dashboard" />
        <ToggleRow label="Restore last open realm" />
      </Card>
    </>
  );
}

function AccountSettings() {
  return (
    <>
      <Card
        title="Profile"
        description="Manage your identity across realms and studio."
      >
        <p className="text-xs text-slate-300">
          Connected account: <span className="font-semibold">Bola‑Ige</span>
        </p>
        <p className="text-[0.7rem] text-slate-500">
          Future: avatar, roles, multi‑profile support.
        </p>
      </Card>

      <Card
        title="Security"
        description="Strengthen access to your Creative OS."
      >
        <ToggleRow label="Require re‑auth for critical actions" />
        <ToggleRow label="Session alerts on new device" />
      </Card>
    </>
  );
}

function NotificationSettings() {
  return (
    <>
      <Card
        title="System Notifications"
        description="Control what the OS is allowed to tell you."
      >
        <ToggleRow label="Backups & system health" />
        <ToggleRow label="New tools & features" />
      </Card>

      <Card
        title="Creative Activity"
        description="Signals from realms, studio, and collaborators."
      >
        <ToggleRow label="Realm activity updates" />
        <ToggleRow label="Studio job completion" />
      </Card>
    </>
  );
}

function PrivacySettings() {
  return (
    <>
      <Card
        title="Data Visibility"
        description="Decide how your activity is surfaced inside the OS."
      >
        <ToggleRow label="Show recent activity on Dashboard" />
        <ToggleRow label="Show realm usage insights" />
      </Card>

      <Card
        title="Protection"
        description="Guardrails for sensitive creative work."
      >
        <ToggleRow label="Mark some realms as private" />
        <ToggleRow label="Hide experimental tools from main views" />
      </Card>
    </>
  );
}

function SystemSettings() {
  return (
    <>
      <Card
        title="Performance"
        description="Tune how aggressively the OS uses effects."
      >
        <ToggleRow label="Enable high‑fidelity visuals" />
        <ToggleRow label="Prefer performance on low‑power devices" />
      </Card>

      <Card
        title="Backups"
        description="Continuity and restoration of your creative civilization."
      >
        <ToggleRow label="Automatic nightly backup" />
        <ToggleRow label="Cloud sync for realms & studio" />
      </Card>
    </>
  );
}

function LanguageSettings() {
  return (
    <>
      <Card
        title="Language"
        description="How your Creative OS speaks to you."
      >
        <p className="text-xs text-slate-300">Primary: English (Global)</p>
        <p className="text-[0.7rem] text-slate-500">
          Future: layered language packs, dialect‑aware UI, cultural modes.
        </p>
      </Card>

      <Card
        title="Region"
        description="Regional defaults for time, formats, and signals."
      >
        <p className="text-xs text-slate-300">Region: Global Diaspora</p>
        <p className="text-[0.7rem] text-slate-500">
          Future: realm‑specific regional behaviors and calendars.
        </p>
      </Card>
    </>
  );
}
