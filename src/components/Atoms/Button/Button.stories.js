import React from "react";
import ButtonComponent from "./Button";

export default {
  title: "Atoms / Button",
  component: ButtonComponent,
  argTypes: {},
  decorators: [],
};

const Template = (args) => <ButtonComponent {...args}>Button</ButtonComponent>;
export const Button = Template.bind({});
Button.args = {};
