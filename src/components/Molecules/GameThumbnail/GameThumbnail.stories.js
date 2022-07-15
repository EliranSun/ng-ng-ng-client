import React from "react";
import { faker } from "@faker-js/faker";

import GameThumbnail from "./GameThumbnail";

export default {
  title: "Molecules / GameThumbnail",
  component: GameThumbnail,
  argTypes: {
    imageUrl: { control: "text" },
  },
};

const Template = (args) => <GameThumbnail {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  imageUrl: faker.image.imageUrl(),
};
