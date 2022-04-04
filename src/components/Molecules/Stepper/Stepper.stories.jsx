import React from "react";
import Stepper from "./Stepper";

export default {
  title: "components / Stepper / Progress",
  component: Stepper,
  argTypes: {
    numberOfSteps: { control: "number", defaultValue: 3 },
    stepIndex: { control: "number", defaultValue: 0 },
  },
  decorators: [],
};

const Template = (args) => (
  <>
    <Stepper withProgress stepIndex={args.stepIndex}>
      {Array(args.numberOfSteps)
        .fill(undefined)
        .map((_item, index) => (
          <div>{index + 1}</div>
        ))}
    </Stepper>
  </>
);
export const Progress = Template.bind({});
Progress.args = {};
