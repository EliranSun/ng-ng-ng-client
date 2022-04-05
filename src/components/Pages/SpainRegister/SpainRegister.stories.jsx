import { useState } from "react";
import { SpainRegister } from ".";
// import { withTheme } from "../../../HOC";
// import { Theme } from "../../../constants";
import { withProvider } from "../../../utils/intl";

export default {
  title: "Pages / Register / Spain",
  component: SpainRegister,
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
  // const themedRegister = withTheme(SpainRegister)({
  //   ...args,
  //   isOpen,
  //   onClose: () => setIsOpen(false),
  //   theme: Theme.Gratogana,
  // });

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>REGISTER</button>
      <SpainRegister />
    </div>
  );
};

export const Spain = Template.bind({});
Spain.args = {
  stepIndex: 0,
};
