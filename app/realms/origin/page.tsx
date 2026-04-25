"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function ThreeDRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="3D Realm"
        description="The spatial imagination engine of your Creative OS — models, materials, lighting, and rendering systems."
        aura="from-cyan-500/40 to-blue-500/40"
      />

      <RealmToolPanel
        title="3D Tools"
        description="Tools for generating models, materials, lighting setups, and render pipelines."
        aura="from-cyan-500/20 to-blue-500/20"
        tools={[
          {
            title: "Model Generator",
            description: "Create 3D models, meshes, and geometric structures.",
            aura: "from-cyan-500/20 to-blue-500/20",
          },
          {
            title: "Material Engine",
            description: "Design materials, shaders, and surface properties.",
            aura: "from-blue-500/20 to-indigo-500/20",
          },
          {
            title: "Lighting Engine",
            description: "Generate lighting setups and atmospheric illumination.",
            aura: "from-indigo-500/20 to-purple-500/20",
          },
        ]}
      />
    </main>
  );
}
