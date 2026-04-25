"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function EducationRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Education Realm"
        description="The knowledge‑shaping engine of your Creative OS — learning systems, skill pathways, and curriculum intelligence."
        aura="from-indigo-500/40 to-violet-500/40"
      />

      <RealmToolPanel
        title="Education Tools"
        description="Tools for building learning paths, knowledge systems, and educational structures."
        aura="from-indigo-500/20 to-violet-500/20"
        tools={[
          {
            title: "Curriculum Engine",
            description: "Design structured learning programs and modules.",
            aura: "from-indigo-500/20 to-violet-500/20",
          },
          {
            title: "Skill Engine",
            description: "Map skills, competencies, and mastery levels.",
            aura: "from-violet-500/20 to-purple-500/20",
          },
          {
            title: "Knowledge Engine",
            description: "Generate conceptual frameworks and learning models.",
            aura: "from-purple-500/20 to-pink-500/20",
          },
        ]}
      />
    </main>
  );
}
