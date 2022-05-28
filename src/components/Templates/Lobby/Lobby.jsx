import React from "react";
import { Slider, GameCategories } from "../../Molecules";
import { SiteHeader, FlowModal } from "../../Organisms";

const Lobby = () => {
  return (
    <>
      <SiteHeader />
      <Slider />
      <GameCategories />
      <FlowModal />
    </>
  );
};

export default Lobby;
