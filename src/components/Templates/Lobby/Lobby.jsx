import React from "react";
import { Slider, GameCategories } from "../../Molecules";
import { SiteHeader } from "../../Organisms";

const Lobby = () => {
  return (
    <>
      <SiteHeader />
      <Slider />
      <GameCategories />
    </>
  );
};

export default Lobby;
