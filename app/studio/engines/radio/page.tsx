import EngineTemplate from "../EngineTemplate";
import ModelTestPanel from "../../components/ModelTestPanel";

export default function RadioStationPage() {
  return (
    <EngineTemplate
      title="AI Radio Station"
      description="Automate radio dramas, gospel segments, IDs, jingles, and soundscapes for a living broadcast universe."
    >
      <ModelTestPanel />
    </EngineTemplate>
  );
}
