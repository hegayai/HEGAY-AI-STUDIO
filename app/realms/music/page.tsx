"use client";

import ToolCard from "@/app/components/ui/ToolCard";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function MusicRealmPage() {
  return (
    <RealmToolPanel
      title="Music Realm"
      description="Engines of sound creation, rhythm, harmony, vocals, and sonic identity."
      aura="from-emerald-500/20 to-cyan-500/20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <ToolCard
          title="Music Generator"
          description="Generate full musical compositions from prompts, moods, and styles."
          href="/tools/music/music-generator"
          aura="from-emerald-500/30 to-cyan-500/30"
        />

        <ToolCard
          title="Beat Sequencer"
          description="Create rhythmic patterns, drum grids, and percussive structures."
          href="/tools/music/beat-sequencer"
          aura="from-cyan-500/30 to-blue-500/30"
        />

        <ToolCard
          title="Melody Engine"
          description="Generate melodies, motifs, hooks, and emotional musical lines."
          href="/tools/music/melody-engine"
          aura="from-blue-500/30 to-indigo-500/30"
        />

        <ToolCard
          title="Vocal Synth"
          description="Create AI vocals, harmonies, and expressive voice textures."
          href="/tools/music/vocal-synth"
          aura="from-indigo-500/30 to-purple-500/30"
        />

        <ToolCard
          title="Mix Engine"
          description="Balance stems, EQ, compression, and spatial mix."
          href="/tools/music/mix-engine"
          aura="from-purple-500/30 to-fuchsia-500/30"
        />

        <ToolCard
          title="Sonic Atmosphere Engine"
          description="Generate ambient soundscapes, pads, and emotional sonic textures."
          href="/tools/music/sonic-atmosphere"
          aura="from-fuchsia-500/30 to-rose-500/30"
        />

      </div>
    </RealmToolPanel>
  );
}
