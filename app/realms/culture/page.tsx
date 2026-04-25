"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function CultureRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Culture Realm"
        description="The cultural intelligence engine of your Creative OS — traditions, rituals, identity systems, and collective meaning‑making."
        aura="from-rose-500/40 to-orange-500/40"
      />

      <RealmToolPanel
        title="Culture Tools"
        description="Tools for crafting cultural systems, rituals, identity frameworks, and symbolic meaning structures."
        aura="from-rose-500/20 to-orange-500/20"
        tools={[
          {
            title: "Tradition Builder",
            description: "Design rituals, customs, and cultural practices.",
            aura: "from-rose-500/20 to-orange-500/20",
          },
          {
            title: "Symbol Engine",
            description: "Generate symbols, emblems, and cultural markers.",
            aura: "from-orange-500/20 to-amber-500/20",
          },
          {
            title: "Cultural Narrative Forge",
            description: "Craft origin stories, myths, and collective identities.",
            aura: "from-amber-500/20 to-yellow-500/20",
          },
        ]}
      />
    </main>
  );
}
