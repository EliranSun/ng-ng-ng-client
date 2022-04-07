import React from "react";

import App from "./App";
import { withProvider } from "../utils/intl";

export default {
  title: "App",
  component: App,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [withProvider],
};

const Template = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "App",
};
