import EngineTemplate from "../EngineTemplate";
import ModelTestPanel from "../../components/ModelTestPanel";

export default function VideoUniversePage() {
  return (
    <EngineTemplate
      title="AI Video Universe"
      description="Generate cinematic video, long‑form scenes, character‑consistent shots, and motion‑aware sequences."
    >
      <ModelTestPanel requiredTier="studio" />
    </EngineTemplate>
  );
}
