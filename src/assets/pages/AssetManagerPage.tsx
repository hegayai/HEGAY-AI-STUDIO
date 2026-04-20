import React from "react";
import { CosmicPanel } from "../../ui/components/CosmicPanel";
import { CosmicContainer } from "../../ui/layout/CosmicContainer";
import { AssetGrid } from "../components/AssetGrid";

export const AssetManagerPage = () => {
  return (
    <CosmicContainer>
      <CosmicPanel title="Asset Manager">
        <AssetGrid />
      </CosmicPanel>
    </CosmicContainer>
  );
};
