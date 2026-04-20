import React from "react";
import { CosmicContainer } from "../../../ui/layout/CosmicContainer";
import { CosmicPanel } from "../../../ui/components/CosmicPanel";
import { NodeEditor } from "../editor/NodeEditor";
import { LivePreview } from "../components/LivePreview";

export const ImageRealmPage = () => {
  return (
    <CosmicContainer>
      <CosmicPanel title="Image Realm">
        <div style={{ display: "flex", gap: "24px" }}>
          <div style={{ flex: 2, height: "600px" }}>
            <NodeEditor />
          </div>

          <div style={{ flex: 1 }}>
            <LivePreview />
          </div>
        </div>
      </CosmicPanel>
    </CosmicContainer>
  );
};
