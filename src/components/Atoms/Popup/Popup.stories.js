import React from "react";

import Popup from "./Popup";

export default {
  title: "NG-Client / Popup",
  component: Popup,
  argTypes: {
    content: { control: "text" },
    type: {
      control: {
        type: "select",
        options: ["info", "success", "warning", "error"],
      },
    },
    title: { control: "text" },
    isCloseable: { control: "boolean" },
  },
};

const Template = (args) => <Popup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Error",
  content:
    "We've hit a snag. Please contact customer service if this problem persists.",
  type: "error",
  isCloseable: true,
};
