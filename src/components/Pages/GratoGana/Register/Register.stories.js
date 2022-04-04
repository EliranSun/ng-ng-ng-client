import { useState } from "react";
import { Register } from ".";
import { withTheme } from "../../../../HOC";
import { Theme } from "../../../../constants";
import { withProvider } from "../../../../utils/intl";

export default {
  title: "NG-Client / GratoGana / Register",
  component: Register,
  decorators: [withProvider],
  argTypes: {
    stepIndex: {
      options: [0, 1, 2],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: return an actual element from withTheme
  const themedRegister = withTheme(Register)({
    ...args,
    isOpen,
    onClose: () => setIsOpen(false),
    theme: Theme.Gratogana,
  });

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>REGISTER</button>
      {themedRegister}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  stepIndex: 0,
};
