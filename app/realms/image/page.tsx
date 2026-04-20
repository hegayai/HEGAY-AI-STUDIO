"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function ImageRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Image Realm"
        description="The visual universe of your Creative OS — origin images, aesthetics, avatars, moods, and cosmic compositions."
        aura="from-purple-500/40 to-fuchsia-500/40"
      />

      <RealmToolPanel
        title="Image Tools"
        tools={[
          {
            title: "Image Generator",
            description: "Create origin images and cosmic compositions.",
            aura: "from-purple-500/20 to-purple-700/20",
          },
          {
            title: "Aesthetic Engine",
            description: "Transform visuals with cinematic styles.",
            aura: "from-fuchsia-500/20 to-pink-500/20",
          },
          {
            title: "Avatar Engine",
            description: "Generate characters, personas, and identities.",
            aura: "from-rose-500/20 to-purple-500/20",
          },
          {
            title: "Mood Painter",
            description: "Paint emotional atmospheres and gradients.",
            aura: "from-indigo-500/20 to-purple-500/20",
          },
          {
            title: "Composition Lab",
            description: "Arrange scenes, frames, and visual layouts.",
            aura: "from-blue-500/20 to-purple-500/20",
          },
        ]}
      />
    </main>
  );
}
