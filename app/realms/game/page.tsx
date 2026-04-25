"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function GameRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Game Realm"
        description="The interactive systems engine of your Creative OS — gameplay loops, mechanics, agents, and progression models."
        aura="from-yellow-500/40 to-orange-500/40"
      />

      <RealmToolPanel
        title="Game Tools"
        description="Tools for building gameplay systems, AI agents, and interactive mechanics."
        aura="from-yellow-500/20 to-orange-500/20"
        tools={[
          {
            title: "Gameplay Engine",
            description: "Design mechanics, rules, and player interactions.",
            aura: "from-yellow-500/20 to-orange-500/20",
          },
          {
            title: "AI Agent Engine",
            description: "Generate NPC behaviors, decision trees, and logic.",
            aura: "from-orange-500/20 to-red-500/20",
          },
          {
            title: "State Machine Engine",
            description: "Model game states, transitions, and triggers.",
            aura: "from-red-500/20 to-rose-500/20",
          },
        ]}
      />
    </main>
  );
}
