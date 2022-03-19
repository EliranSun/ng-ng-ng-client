import React from "react";
import ModalComponent from "./Modal";

export default {
  title: "Organisms / Modal",
  component: ModalComponent,
  argTypes: {},
  decorators: [],
};

const Template = (args) => <ModalComponent {...args} />;
export const Modal = Template.bind({});
Modal.args = {};
