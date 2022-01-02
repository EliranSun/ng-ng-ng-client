import React from "react";
import { random } from "faker";

import GameThumbnail from "./GameThumbnail";

export default {
  title: "NG-Client / GameThumbnail",
  component: GameThumbnail,
  argTypes: {
    imageUrl: { control: "text" },
  },
};

const Template = (args) => <GameThumbnail {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  imageUrl: random.image(),
};
