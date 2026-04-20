import React from "react";
import { CosmicPanel } from "../../ui/components/CosmicPanel";
import { CosmicContainer } from "../../ui/layout/CosmicContainer";
import { SearchBar } from "../components/SearchBar";
import { SearchResults } from "../components/SearchResults";

export const GlobalSearchPage = () => {
  return (
    <CosmicContainer>
      <CosmicPanel title="Global Search">
        <SearchBar />
        <SearchResults />
      </CosmicPanel>
    </CosmicContainer>
  );
};
