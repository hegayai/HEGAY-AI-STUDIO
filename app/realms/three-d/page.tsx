"use client";

import ToolCard from "@/app/components/ui/ToolCard";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function ThreeDRealmPage() {
  return (
    <RealmToolPanel
      title="3D Realm"
      description="Engines for generating models, materials, scenes, lighting, and rendered 3D environments."
      aura="from-purple-500/20 to-blue-500/20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <ToolCard
          title="3D Model Generator"
          description="Generate meshes, objects, characters, props, and 3D assets."
          href="/tools/three-d/model-generator"
          aura="from-purple-500/30 to-indigo-500/30"
        />

        <ToolCard
          title="Material Engine"
          description="Create PBR materials, shaders, textures, and surface definitions."
          href="/tools/three-d/material-engine"
          aura="from-indigo-500/30 to-blue-500/30"
        />

        <ToolCard
          title="Scene Builder"
          description="Assemble 3D scenes, object placement, spatial layouts, and world geometry."
          href="/tools/three-d/scene-builder"
          aura="from-blue-500/30 to-cyan-500/30"
        />

        <ToolCard
          title="Lighting Engine"
          description="Generate lighting setups, HDRI configurations, and cinematic illumination."
          href="/tools/three-d/lighting-engine"
          aura="from-cyan-500/30 to-teal-500/30"
        />

        <ToolCard
          title="Environment Engine"
          description="Create landscapes, skies, atmospheres, and environmental simulations."
          href="/tools/three-d/environment-engine"
          aura="from-teal-500/30 to-emerald-500/30"
        />

        <ToolCard
          title="Render Engine"
          description="Generate render settings, camera rigs, and final output configurations."
          href="/tools/three-d/render-engine"
          aura="from-emerald-500/30 to-green-500/30"
        />

      </div>
    </RealmToolPanel>
  );
}
