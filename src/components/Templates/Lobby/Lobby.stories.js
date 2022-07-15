import React from "react";
import { faker } from "@faker-js/faker";
import { withFlow, withIntlProvider } from "../../../HOC";
import Lobby from "./Lobby";

export default {
  title: "Templates / Lobby",
  component: Lobby,
  decorators: [withIntlProvider, withFlow],
  argTypes: {
    imageUrls: { control: { type: "array", items: { type: "string" } } },
  },
};

const Template = (args) => <Lobby {...args} />;

const randomImageUrls = new Array(
  faker.datatype.number({ min: 1, max: 5 })
).fill(faker.image.imageUrl());
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  imageUrls: randomImageUrls,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  imageUrls: randomImageUrls,
};
