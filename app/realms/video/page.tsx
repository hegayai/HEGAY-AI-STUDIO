"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function VideoRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Video Realm"
        description="The motion‑imagination engine of your Creative OS — cinematics, sequences, transitions, and visual storytelling."
        aura="from-red-500/40 to-purple-500/40"
      />

      <RealmToolPanel
        title="Video Tools"
        description="Tools for generating cinematic sequences, transitions, edits, and visual storytelling structures."
        aura="from-red-500/20 to-purple-500/20"
        tools={[
          {
            title: "Video Generator",
            description: "Create cinematic scenes and motion sequences.",
            aura: "from-red-500/20 to-purple-500/20",
          },
          {
            title: "Motion Engine",
            description: "Design camera movement, pacing, and transitions.",
            aura: "from-purple-500/20 to-indigo-500/20",
          },
          {
            title: "Storyboard Builder",
            description: "Generate shot lists, frames, and narrative flow.",
            aura: "from-indigo-500/20 to-blue-500/20",
          },
        ]}
      />
    </main>
  );
}
