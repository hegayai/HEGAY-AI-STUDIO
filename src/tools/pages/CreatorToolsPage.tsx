import React from "react";
import { CosmicPanel } from "../../ui/components/CosmicPanel";
import { CosmicContainer } from "../../ui/layout/CosmicContainer";
import { ToolCard } from "../components/ToolCard";

export const CreatorToolsPage = () => {
  const tools = [
    { title: "Image Generator", description: "Create visuals from prompts." },
    { title: "Audio Synth", description: "Generate soundscapes and music." },
    { title: "Video Composer", description: "Assemble cinematic sequences." },
    { title: "Text Engine", description: "Craft stories and scripts." },
  ];

  return (
    <CosmicContainer>
      <CosmicPanel title="Creator Tools">
        <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "1fr 1fr" }}>
          {tools.map((t) => (
            <ToolCard key={t.title} title={t.title} description={t.description} />
          ))}
        </div>
      </CosmicPanel>
    </CosmicContainer>
  );
};
