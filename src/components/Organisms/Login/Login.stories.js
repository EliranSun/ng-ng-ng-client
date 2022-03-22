import React from "react";
import { Login as LoginComponent, LoginButton } from ".";

export default {
  title: "organisms / Login",
  component: LoginComponent,
  argTypes: {},
  decorators: [],
};

const Template = (args) => <LoginComponent {...args} />;
export const Login = Template.bind({});
Login.args = {};
