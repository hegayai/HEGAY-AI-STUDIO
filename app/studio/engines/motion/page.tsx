import EngineTemplate from "../EngineTemplate";
import ModelTestPanel from "../../components/ModelTestPanel";

export default function MotionEnginePage() {
  return (
    <EngineTemplate
      title="Motion Engine"
      description="Generate motion styles, transitions, and dynamic animation effects."
    >
      <ModelTestPanel />
    </EngineTemplate>
  );
}
