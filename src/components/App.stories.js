import React from "react";

import AppComponent from "./App";
import { withProvider } from "../utils/intl";
// TODO: better name than types?
import { JurisdictionTypes } from "../jurisdiction";

export default {
  title: "App",
  component: AppComponent,
  argTypes: {
    jurisdiction: {
      control: "select",
      options: Object.values(JurisdictionTypes),
    },
  },
  decorators: [withProvider],
};

const Template = (args) => <AppComponent {...args} />;

export const App = Template.bind({});
