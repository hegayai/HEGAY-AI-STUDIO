import React from "react";
import { CosmicPanel } from "../../../ui/components/CosmicPanel";
import { CosmicContainer } from "../../../ui/layout/CosmicContainer";
import { PostComposer } from "../components/PostComposer";
import { Feed } from "../components/Feed";

export const SocialRealmPage = () => {
  return (
    <CosmicContainer>
      <CosmicPanel title="Social Realm">
        <PostComposer />
        <div style={{ marginTop: "24px" }}>
          <Feed />
        </div>
      </CosmicPanel>
    </CosmicContainer>
  );
};
