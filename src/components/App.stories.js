import React from "react";

import AppComponent from "./App";
// TODO: better name than types?
import { JurisdictionTypes } from "../features/jurisdiction";

export default {
  title: "App",
  component: AppComponent,
  argTypes: {
    jurisdiction: {
      control: "select",
      options: Object.values(JurisdictionTypes),
    },
  },
};

const Template = (args) => <AppComponent {...args} />;

export const App = Template.bind({});
