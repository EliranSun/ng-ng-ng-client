import React from "react";
import { withModalProvider } from "../Modal/Modal";
import SiteHeaderComponent from "./SiteHeader";

export default {
  title: "Organisms / Site Header",
  component: SiteHeaderComponent,
  argTypes: {},
  decorators: [(Story) => withModalProvider(Story)({})],
};

const Template = (args) => <SiteHeaderComponent {...args} />;
export const SiteHeader = Template.bind({});
SiteHeader.args = {};
