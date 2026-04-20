import EngineTemplate from "../EngineTemplate";
import ModelTestPanel from "../../components/ModelTestPanel";

export default function MusicStudioPage() {
  return (
    <EngineTemplate
      title="AI Music Studio"
      description="Compose gospel, Afrobeats, scores, and full songs with vocals, harmonies, and mastering."
    >
      <ModelTestPanel requiredTier="pro" />
    </EngineTemplate>
  );
}
