import EngineTemplate from "../EngineTemplate";
import ModelTestPanel from "../../components/ModelTestPanel";

export default function VoiceEnginePage() {
  return (
    <EngineTemplate
      title="Voice Engine"
      description="Generate voice synthesis, vocal styles, and spoken‑word creative output."
    >
      <ModelTestPanel />
    </EngineTemplate>
  );
}
