"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function MusicRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Music Realm"
        description="The sonic imagination engine of your Creative OS — melodies, rhythms, harmonies, and atmospheric sound design."
        aura="from-pink-500/40 to-purple-500/40"
      />

      <RealmToolPanel
        title="Music Tools"
        description="Tools for generating melodies, rhythms, mixes, and sonic atmospheres."
        aura="from-pink-500/20 to-purple-500/20"
        tools={[
          {
            title: "Melody Engine",
            description: "Generate melodies, motifs, and harmonic structures.",
            aura: "from-pink-500/20 to-purple-500/20",
          },
          {
            title: "Beat Sequencer",
            description: "Create drum patterns, rhythms, and percussive layers.",
            aura: "from-purple-500/20 to-indigo-500/20",
          },
          {
            title: "Mix Engine",
            description: "Blend stems, layers, and sonic textures.",
            aura: "from-indigo-500/20 to-blue-500/20",
          },
        ]}
      />
    </main>
  );
}
