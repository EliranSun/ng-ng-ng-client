import React from "react";
import { datatype, random } from "faker";
import { rest } from "msw";
import { initializeWorker, mswDecorator } from "msw-storybook-addon";
import { addDecorator } from "@storybook/react";

import Slider from "./Slider";
import { GET_SLIDER_DATA_URL } from "../../../constants";
import { SliderFactory } from "../../../factories";

initializeWorker();
addDecorator(mswDecorator);

export default {
  title: "NG-Client / Slider",
  component: Slider,
  argTypes: {
    imageUrls: { control: { type: "array", items: { type: "string" } } },
    isControllable: { control: "boolean" },
  },
};

const Template = (args) => <Slider {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  isControllable: true,
};

Primary.parameters = {
  msw: [
    rest.get(GET_SLIDER_DATA_URL, (req, res, ctx) => {
      return res(ctx.json(SliderFactory.build()));
    }),
  ],
};
