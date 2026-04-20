import React from "react";
import { CosmicPanel } from "../../../ui/components/CosmicPanel";
import { CosmicContainer } from "../../../ui/layout/CosmicContainer";
import { ColorPalette } from "../components/ColorPalette";
import { LogoPreview } from "../components/LogoPreview";

export const BrandRealmPage = () => {
  return (
    <CosmicContainer>
      <CosmicPanel title="Brand Realm">
        <ColorPalette />
        <div style={{ marginTop: "24px" }}>
          <LogoPreview />
        </div>
      </CosmicPanel>
    </CosmicContainer>
  );
};
