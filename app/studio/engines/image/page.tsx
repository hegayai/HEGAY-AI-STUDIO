import EngineTemplate from "../pages";
import ModelTestPanel from "../../components/ModelTestPanel";

export default function ImageForgePage() {
  return (
    <EngineTemplate
      title="AI Image Forge"
      description="Generate posters, key art, thumbnails, character sheets, and cinematic visuals that rival and surpass Midjourney."
    >
      <ModelTestPanel />
    </EngineTemplate>
  );
}
