import React from "react";
import { CosmicPanel } from "../../../ui/components/CosmicPanel";
import { CosmicContainer } from "../../../ui/layout/CosmicContainer";
import { TextEditor } from "../components/TextEditor";

export const TextRealmPage = () => {
  return (
    <CosmicContainer>
      <CosmicPanel title="Text Realm">
        <TextEditor />
      </CosmicPanel>
    </CosmicContainer>
  );
};
