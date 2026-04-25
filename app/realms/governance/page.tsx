"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function GovernanceRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Governance Realm"
        description="The decision‑making engine of your Creative OS — laws, councils, authority systems, and collective governance."
        aura="from-purple-500/40 to-indigo-500/40"
      />

      <RealmToolPanel
        title="Governance Tools"
        description="Tools for designing laws, councils, governance models, and decision systems."
        aura="from-purple-500/20 to-indigo-500/20"
        tools={[
          {
            title: "Council Builder",
            description: "Create governing bodies, roles, and decision structures.",
            aura: "from-purple-500/20 to-indigo-500/20",
          },
          {
            title: "Law Engine",
            description: "Generate laws, rules, and governance frameworks.",
            aura: "from-indigo-500/20 to-blue-500/20",
          },
          {
            title: "Civic Simulation",
            description: "Model political behavior, voting, and collective action.",
            aura: "from-blue-500/20 to-cyan-500/20",
          },
        ]}
      />
    </main>
  );
}
