import React from "react";
import { Slider, GameCategories } from "../../molecules";
import { SiteHeader, FlowModal } from "../../organisms";

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
