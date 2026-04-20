import React from "react";
import { CosmicPanel } from "../../../ui/components/CosmicPanel";
import { CosmicContainer } from "../../../ui/layout/CosmicContainer";
import { VideoPlayer } from "../components/VideoPlayer";

export const VideoRealmPage = () => {
  return (
    <CosmicContainer>
      <CosmicPanel title="Video Realm">
        <VideoPlayer />
      </CosmicPanel>
    </CosmicContainer>
  );
};
