import EngineTemplate from "../EngineTemplate";
import ModelTestPanel from "../../components/ModelTestPanel";

export default function MusicEnginePage() {
  return (
    <EngineTemplate
      title="Music Engine"
      description="Generate music, atmospheres, soundscapes, and audio compositions."
    >
      <ModelTestPanel />
    </EngineTemplate>
  );
}
