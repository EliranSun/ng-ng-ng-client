import { createContext, useState } from "react";
// TODO: that's not a page
import { Register } from "../../Pages/GratoGana/Register";
import { DepositLimits } from "../DepositLimits";
import { RealityCheck } from "../RealityCheck";
import Modal from "../Modal/Modal";

const useFlow = ({ flowLength, onFlowEnd, onFlowStart }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const next = () => {
    const isLastStep = stepIndex + 1 < flowLength;
    if (isLastStep) {
      setStepIndex(stepIndex + 1);
    } else {
      onFlowEnd();
    }
  };

  const prev = () => {
    const isFirstStep = stepIndex - 1 >= 0;
    if (isFirstStep) {
      setStepIndex(stepIndex - 1);
    } else {
      onFlowStart();
    }
  };

  return { stepIndex, next, prev };
};

export const FlowContext = createContext();

export const Flows = {
  REGISTER_FLOW: "REGISTER_FLOW",
};

const FlowProvider = ({ children }) => {
  const [flow, setFlow] = useState({});

  const { stepIndex, next, prev } = useFlow({
    flowLength: children.length,
    onFlowEnd: () => {},
    onFlowStart: () => {},
  });
  console.log(children);

  return (
    <FlowContext.Provider value={{ stepIndex, next, prev, flow, setFlow }}>
      {children[stepIndex]}
    </FlowContext.Provider>
  );
};

const Flow = ({ children }) => {
  return <div className="flow">{children[0]}</div>;
};

export const RegisterFlow = () => {
  return (
    <FlowProvider>
      <Register />
      <DepositLimits />
      <RealityCheck />
    </FlowProvider>
  );
};

export const FlowModal = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <RegisterFlow />
    </Modal>
  );
};

export default Flow;
