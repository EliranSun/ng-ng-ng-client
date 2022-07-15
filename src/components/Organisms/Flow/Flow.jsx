import {
  createContext,
  useState,
  useContext,
  Children,
  useEffect,
} from "react";
import { Register } from "../../pages";
import { DepositLimits } from "../DepositLimits";
import { RealityCheck } from "../RealityCheck";
import { Modal } from "../Modal";
import { useRealityCheck } from "../../../hooks";

const useFlow = ({ flowStepsCount, onFlowEnd = () => {} }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const next = () => {
    const isLastStep = stepIndex + 1 >= flowStepsCount;
    if (isLastStep) {
      onFlowEnd();
    } else {
      setStepIndex(stepIndex + 1);
    }
  };

  const prev = () => {
    const isFirstStep = stepIndex - 1 < 0;
    console.log({ isFirstStep, "stepIndex - 1": stepIndex - 1 });
    if (isFirstStep) {
      onFlowEnd();
    } else {
      setStepIndex(stepIndex - 1);
    }
  };

  return { stepIndex, setStepIndex, next, prev };
};

export const FlowContext = createContext({});

export const FlowNames = {
  REGISTER_FLOW: "REGISTER_FLOW",
  LOGIN: "LOGIN",
};

export const FlowProvider = ({
  children,
  onEnd = () => {},
  onStart = () => {},
}) => {
  const [flowName, setFlowName] = useState("");
  const [flowStepsCount, setFlowStepsCount] = useState(0);

  const { stepIndex, setStepIndex, next, prev } = useFlow({
    flowStepsCount,
    onFlowEnd: () => {
      setFlowName("");
      setStepIndex(0);
      onEnd();
    },
  });

  return (
    <FlowContext.Provider
      value={{
        stepIndex,
        next,
        prev,
        flowName,
        setFlowStepsCount,
        setFlowName: (flowName) => {
          if (!Object.values(FlowNames).includes(flowName)) {
            throw new Error("Invalid flow name");
          }
          setFlowName(flowName);
        },
      }}>
      {children}
    </FlowContext.Provider>
  );
};

const Flow = ({ children }) => {
  const { stepIndex, setFlowStepsCount } = useContext(FlowContext);
  console.log({ stepIndex });

  useEffect(() => {
    setFlowStepsCount(Children.toArray(children).length);
  }, [children, setFlowStepsCount]);

  return <div className="flow">{children[stepIndex]}</div>;
};

const RegisterFlow = () => {
  const { isRealityCheckDefined } = useRealityCheck();
  return (
    <Flow>
      <Register />
      <DepositLimits />
      {isRealityCheckDefined ? null : <RealityCheck />}
    </Flow>
  );
};

export const FlowModal = () => {
  const { flowName } = useContext(FlowContext);

  console.log({ flowName });

  const renderFlow = () => {
    switch (flowName) {
      case FlowNames.LOGIN:
      case FlowNames.REGISTER_FLOW:
        return <RegisterFlow />;

      default:
        return null;
    }
  };

  if (!Boolean(flowName)) {
    return null;
  }

  return <Modal isOpen>{renderFlow()}</Modal>;
};

export default Flow;
