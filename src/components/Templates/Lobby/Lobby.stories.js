import React from "react";
import { datatype, random } from "faker";

import Lobby from "./Lobby";

export default {
  title: "NG-Client / Lobby",
  component: Lobby,
  argTypes: {
    imageUrls: { control: { type: "array", items: { type: "string" } } },
  },
};

const Template = (args) => <Lobby {...args} />;

const randomImageUrls = new Array(datatype.number({ min: 1, max: 5 })).fill(
  random.image()
);
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  imageUrls: randomImageUrls,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  imageUrls: randomImageUrls,
};
