"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function ImageRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Image Realm"
        description="The visual imagination engine of your Creative OS — image generation, style crafting, visual atmospheres, and aesthetic intelligence."
        aura="from-blue-500/40 to-cyan-500/40"
      />

      <RealmToolPanel
        title="Image Tools"
        description="Tools for generating images, crafting styles, building visual atmospheres, and shaping aesthetic intelligence."
        aura="from-blue-500/20 to-cyan-500/20"
        tools={[
          {
            title: "Image Generator",
            description: "Create high‑quality images from prompts, styles, and concepts.",
            aura: "from-blue-500/20 to-cyan-500/20",
          },
          {
            title: "Style Crafter",
            description: "Design visual styles, palettes, and aesthetic signatures.",
            aura: "from-cyan-500/20 to-teal-500/20",
          },
          {
            title: "Atmosphere Painter",
            description: "Generate moods, lighting, and environmental textures.",
            aura: "from-indigo-500/20 to-blue-500/20",
          },
          {
            title: "Aesthetic Intelligence Engine",
            description: "Analyze and enhance visual quality, composition, and style.",
            aura: "from-purple-500/20 to-blue-500/20",
          },
        ]}
      />
    </main>
  );
}
