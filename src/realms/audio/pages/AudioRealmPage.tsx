import React from "react";
import { CosmicPanel } from "../../../ui/components/CosmicPanel";
import { CosmicContainer } from "../../../ui/layout/CosmicContainer";
import { AudioPlayer } from "../components/AudioPlayer";
import { AudioWaveform } from "../components/AudioWaveform";

export const AudioRealmPage = () => {
  return (
    <CosmicContainer>
      <CosmicPanel title="Audio Realm">
        <AudioWaveform />
        <div style={{ marginTop: "16px" }}>
          <AudioPlayer />
        </div>
      </CosmicPanel>
    </CosmicContainer>
  );
};
