"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function RadioRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Radio Realm"
        description="The broadcast engine of your Creative OS — audio atmospheres, storytelling, live mixes, and diaspora radio intelligence."
        aura="from-amber-500/40 to-red-500/40"
      />

      <RealmToolPanel
        title="Radio Tools"
        description="Tools for crafting radio shows, mixing atmospheres, generating voices, and building immersive broadcast experiences."
        aura="from-red-500/20 to-amber-500/20"
        tools={[
          {
            title: "Atmosphere Mixer",
            description: "Blend ambient layers, textures, and soundscapes for radio moods.",
            aura: "from-red-500/20 to-orange-500/20",
          },
          {
            title: "Diaspora Story Engine",
            description: "Generate cultural narratives, oral histories, and spoken‑word stories.",
            aura: "from-orange-500/20 to-amber-500/20",
          },
          {
            title: "Radio Show Builder",
            description: "Assemble segments, transitions, and broadcast‑ready show structures.",
            aura: "from-amber-500/20 to-yellow-500/20",
          },
          {
            title: "Voice Synth",
            description: "Generate character voices, narrators, and expressive vocal textures.",
            aura: "from-rose-500/20 to-red-500/20",
          },
        ]}
      />
    </main>
  );
}
