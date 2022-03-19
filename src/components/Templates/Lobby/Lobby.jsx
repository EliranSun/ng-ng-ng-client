import React from "react";
import { Slider, GameCategories } from "../../Molecules";
import { SiteHeader } from "../../Organisms";
import { FlowModal } from "../../Organisms/Flow";

const Lobby = () => {
  return (
    <div>
      <SiteHeader />
      <Slider />
      <GameCategories />
      <FlowModal isOpen />
    </div>
  );
};

export default Lobby;
