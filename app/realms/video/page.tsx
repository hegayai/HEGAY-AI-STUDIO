"use client";

import ToolCard from "@/app/components/ui/ToolCard";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function VideoRealmPage() {
  return (
    <RealmToolPanel
      title="Video Realm"
      description="Engines of motion, cinematic storytelling, scene evolution, and dynamic visual creation."
      aura="from-purple-500/20 to-indigo-500/20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <ToolCard
          title="Video Generator"
          description="Generate cinematic video clips from prompts, styles, and motion cues."
          href="/tools/video/video-generator"
          aura="from-purple-500/30 to-indigo-500/30"
        />

        <ToolCard
          title="Scene Sequencer"
          description="Assemble scenes into narrative sequences with pacing and flow."
          href="/tools/video/scene-sequencer"
          aura="from-indigo-500/30 to-blue-500/30"
        />

        <ToolCard
          title="Motion Style Engine"
          description="Apply cinematic motion styles, rhythm, and visual pacing."
          href="/tools/video/motion-style"
          aura="from-blue-500/30 to-cyan-500/30"
        />

        <ToolCard
          title="Audio Sync Engine"
          description="Sync music, voice, and sound effects to video timing."
          href="/tools/video/audio-sync"
          aura="from-cyan-500/30 to-emerald-500/30"
        />

        <ToolCard
          title="Transition Engine"
          description="Generate transitions, cuts, blends, wipes, and motion bridges."
          href="/tools/video/transition-engine"
          aura="from-fuchsia-500/30 to-purple-500/30"
        />

        <ToolCard
          title="Storyboard Engine"
          description="Create visual storyboards, shot plans, and cinematic layouts."
          href="/tools/video/storyboard-engine"
          aura="from-rose-500/30 to-orange-500/30"
        />

      </div>
    </RealmToolPanel>
  );
}
