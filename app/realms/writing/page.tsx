"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function WritingRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Writing Realm"
        description="The narrative imagination engine of your Creative OS — stories, scripts, lore, and world‑building text."
        aura="from-amber-500/40 to-pink-500/40"
      />

      <RealmToolPanel
        title="Writing Tools"
        description="Tools for generating stories, scripts, lore, and narrative structures."
        aura="from-amber-500/20 to-pink-500/20"
        tools={[
          {
            title: "Story Structure Engine",
            description: "Generate plots, arcs, and narrative frameworks.",
            aura: "from-amber-500/20 to-pink-500/20",
          },
          {
            title: "Dialogue Engine",
            description: "Create character dialogue, tone, and voice.",
            aura: "from-pink-500/20 to-rose-500/20",
          },
          {
            title: "Lore Engine",
            description: "Build world‑building text, histories, and deep lore.",
            aura: "from-rose-500/20 to-purple-500/20",
          },
        ]}
      />
    </main>
  );
}
