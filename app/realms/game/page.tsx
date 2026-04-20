"use client";

import ToolCard from "@/app/components/ui/ToolCard";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function GameRealmPage() {
  return (
    <RealmToolPanel
      title="Game Realm"
      description="Engines for gameplay systems, physics, interactions, AI agents, loops, and state logic."
      aura="from-rose-500/20 to-orange-500/20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <ToolCard
          title="Gameplay Engine"
          description="Generate gameplay systems, mechanics, rules, and interactive logic."
          href="/tools/game/gameplay-engine"
          aura="from-rose-500/30 to-pink-500/30"
        />

        <ToolCard
          title="Physics Engine"
          description="Create physics rules, collision systems, forces, and movement logic."
          href="/tools/game/physics-engine"
          aura="from-pink-500/30 to-orange-500/30"
        />

        <ToolCard
          title="Interaction Engine"
          description="Define interactions, triggers, events, and player-object behaviors."
          href="/tools/game/interaction-engine"
          aura="from-orange-500/30 to-amber-500/30"
        />

        <ToolCard
          title="AI Agent Engine"
          description="Generate AI behaviors, decision trees, pathfinding, and agent logic."
          href="/tools/game/ai-agent-engine"
          aura="from-amber-500/30 to-yellow-500/30"
        />

        <ToolCard
          title="Game Loop Engine"
          description="Create update loops, tick systems, frame logic, and runtime cycles."
          href="/tools/game/game-loop-engine"
          aura="from-yellow-500/30 to-lime-500/30"
        />

        <ToolCard
          title="State Machine Engine"
          description="Generate state machines, transitions, conditions, and flow logic."
          href="/tools/game/state-machine-engine"
          aura="from-lime-500/30 to-green-500/30"
        />

      </div>
    </RealmToolPanel>
  );
}
