"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function RadioRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Radio Realm"
        description="The broadcast universe of your Creative OS — audio atmospheres, voice synthesis, radio shows, and diaspora storytelling."
        aura="from-amber-500/40 to-red-500/40"
      />

      <RealmToolPanel
        title="Radio Tools"
        tools={[
          {
            title: "Voice Synth",
            description: "Generate voices, tones, and vocal textures.",
            aura: "from-amber-500/20 to-orange-500/20",
          },
          {
            title: "Radio Show Builder",
            description: "Assemble shows, segments, and broadcast flows.",
            aura: "from-red-500/20 to-amber-500/20",
          },
          {
            title: "Atmosphere Mixer",
            description: "Blend ambiences, soundscapes, and layers.",
            aura: "from-yellow-500/20 to-red-500/20",
          },
          {
            title: "Diaspora Story Engine",
            description: "Craft cultural narratives and audio journeys.",
            aura: "from-orange-500/20 to-red-500/20",
          },
        ]}
      />
    </main>
  );
}
