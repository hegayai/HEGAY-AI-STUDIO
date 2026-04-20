import EngineTemplate from "../pages";
import ModelTestPanel from "../../components/ModelTestPanel";

export default function SocialSuitePage() {
  return (
    <EngineTemplate
      title="AI Social Suite"
      description="Generate posts, hooks, carousels, titles, and thumbnails optimized for every platform from one Studio."
    >
      <ModelTestPanel />
    </EngineTemplate>
  );
}
