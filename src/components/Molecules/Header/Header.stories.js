import React from "react";
import HeaderComponent from "./Header";

export default {
  title: "Molecules / Header",
  component: HeaderComponent,
  argTypes: {},
  decorators: [],
};

const Template = (args) => <HeaderComponent {...args} />;
export const Header = Template.bind({});
Header.args = {};
