"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function DreamRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Dream Realm"
        description="The subconscious engine of your Creative OS — dream writing, surreal generation, emotional physics, and narrative atmospheres."
        aura="from-indigo-500/40 to-blue-500/40"
      />

      <RealmToolPanel
        title="Dream Tools"
        description="Tools for imagination, dream‑state simulation, subconscious modeling, emotional physics, and surreal world‑building."
        aura="from-purple-500/20 to-pink-500/20"
        tools={[
          {
            title: "Dream Writer",
            description: "Generate surreal narratives and dream scripts.",
            aura: "from-indigo-500/20 to-blue-500/20",
          },
          {
            title: "Emotional Physics Engine",
            description: "Simulate emotional forces and resonance fields.",
            aura: "from-blue-500/20 to-cyan-500/20",
          },
          {
            title: "Atmosphere Generator",
            description: "Craft moods, vibes, and subconscious textures.",
            aura: "from-purple-500/20 to-indigo-500/20",
          },
          {
            title: "Subconscious Mapper",
            description: "Visualize dream logic and symbolic pathways.",
            aura: "from-fuchsia-500/20 to-blue-500/20",
          },
        ]}
      />
    </main>
  );
}
