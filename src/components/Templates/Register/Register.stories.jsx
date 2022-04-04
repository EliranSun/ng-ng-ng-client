import React from "react";
import { withProvider } from "../../../utils/intl";
import RegisterComponent from "./Register";

export default {
  title: "Templates / Register",
  component: RegisterComponent,
  argTypes: {},
  decorators: [withProvider],
};

const Template = (args) => <RegisterComponent {...args} />;
export const Register = Template.bind({});
Register.args = {};
