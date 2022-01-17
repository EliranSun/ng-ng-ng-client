import React, { useState } from "react";

import { Popup, Position } from ".";

export default {
  title: "NG-Client / Popup",
  component: Popup,
  argTypes: {
    content: { control: "text" },
    type: {
      control: {
        type: "select",
        options: ["info", "success", "warning", "error"],
      },
    },
    title: { control: "text" },
    isCloseable: { control: "boolean" },
    position: {
      control: {
        type: "select",
        options: [...Object.values(Position)],
      },
    },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>REGISTER</button>
      <Popup {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  title: "Error",
  content:
    "We've hit a snag. Please contact customer service if this problem persists.",
  type: "error",
  isCloseable: true,
};
