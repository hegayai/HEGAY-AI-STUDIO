import EngineTemplate from "../pages";
import ModelTestPanel from "../../components/ModelTestPanel";

export default function VoiceStudioPage() {
  return (
    <EngineTemplate
      title="AI Voice Studio"
      description="Create voice‑overs, character voices, gospel voices, and studio‑grade text‑to‑speech with audio enhancement."
    >
      <ModelTestPanel />
    </EngineTemplate>
  );
}
