"use client";

import ToolCard from "@/app/components/ui/ToolCard";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function WritingRealmPage() {
  return (
    <RealmToolPanel
      title="Writing Realm"
      description="Engines of storytelling, worldbuilding, scripts, dialogue, tone, and narrative structure."
      aura="from-amber-500/20 to-orange-500/20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <ToolCard
          title="Writing Generator"
          description="Generate prose, essays, articles, scenes, and narrative content."
          href="/tools/writing/writing-generator"
          aura="from-amber-500/30 to-orange-500/30"
        />

        <ToolCard
          title="Lore Engine"
          description="Create worlds, civilizations, histories, mythologies, and cultural systems."
          href="/tools/writing/lore-engine"
          aura="from-orange-500/30 to-red-500/30"
        />

        <ToolCard
          title="Dialogue Engine"
          description="Generate character conversations, emotional exchanges, and script dialogue."
          href="/tools/writing/dialogue-engine"
          aura="from-red-500/30 to-rose-500/30"
        />

        <ToolCard
          title="Script Engine"
          description="Write screenplays, episodes, formatted scenes, and cinematic scripts."
          href="/tools/writing/script-engine"
          aura="from-rose-500/30 to-pink-500/30"
        />

        <ToolCard
          title="Tone Engine"
          description="Rewrite text into emotional tones, styles, voices, and narrative identities."
          href="/tools/writing/tone-engine"
          aura="from-pink-500/30 to-purple-500/30"
        />

        <ToolCard
          title="Story Structure Engine"
          description="Generate plot arcs, beats, outlines, and narrative frameworks."
          href="/tools/writing/story-structure"
          aura="from-purple-500/30 to-indigo-500/30"
        />

      </div>
    </RealmToolPanel>
  );
}
