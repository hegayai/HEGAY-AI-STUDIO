import EngineTemplate from "../pages";
import ModelTestPanel from "../../components/ModelTestPanel";
import { CURRENT_USER_SUBSCRIPTION, canUseFeature } from "../../subscriptionConfig";
import LockedFeature from "../../components/LockedFeature";

export default function MotionEnginePage() {
  const tier = CURRENT_USER_SUBSCRIPTION.tier;
  const allowed = canUseFeature(tier, "motion");

  return (
    <EngineTemplate
      title="AI Motion Engine"
      description="Transform images into acting performances, motion, lip‑sync, and character animation."
    >
      {!allowed ? (
        <LockedFeature feature="AI Motion" />
      ) : (
        <ModelTestPanel requiredTier="studio" featureCostCoins={5} />
      )}
    </EngineTemplate>
  );
}
