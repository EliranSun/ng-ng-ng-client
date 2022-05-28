import React from "react";
import { withModalProvider } from "../Modal/Modal";
import SiteHeaderComponent from "./SiteHeader";
import { withIntlProvider, withFlow } from "../../../HOC";

export default {
  title: "Organisms / Site Header",
  component: SiteHeaderComponent,
  argTypes: {},
  decorators: [
    withIntlProvider,
    withFlow,
    (Story) => withModalProvider(Story)({}),
  ],
};

const Template = (args) => <SiteHeaderComponent {...args} />;
export const SiteHeader = Template.bind({});
SiteHeader.args = {};
