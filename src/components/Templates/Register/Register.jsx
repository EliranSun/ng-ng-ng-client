import { FlowContext } from "../../organisms/Flow";
import { useContext } from "react";
import { Stepper } from "../../molecules";
import { useTheme } from "../../../hooks";
import { CreateAccount, RegisterDetails } from "./steps";
const Register = ({ children }) => {
  const theme = useTheme(); // TODO: decide where this should live after brand task

  const shouldPreventNextStep = (currentStepIndex) => {
    // let stepName;
    // switch (currentStepIndex) {
    //   case 0:
    //     stepName = STEP_ONE;
    //     break;
    //   case 1:
    //     stepName = STEP_TWO;
    //     break;
    //   case 2:
    //     stepName = STEP_THREE;
    //     break;
    //   default:
    //     break;
    // }
    // if (!Object.values(fields).length) {
    //   return true;
    // }
    // const fieldsRequired = Object.keys(FieldNames[stepName]).length;
    // const fieldsArr = Object.values(fields[stepName]?.fields);
    // const fieldsInvalid =
    //   fieldsArr.filter((field) => !field.isValid).length > 0;
    // const fieldsMissing = fieldsArr.length < fieldsRequired;
    // console.log({
    //   fieldsArr,
    //   fieldsRequired,
    //   fieldsInvalid,
    //   fieldsMissing,
    // });
    // return fieldsMissing || fieldsInvalid;
    return false;
  };

  // TODO: not sure about the multiple theme props... too much? need to think about that.
  // exporting stepper buttons will eliminate this plus the need for passing some validate input
  // to render the correct button state (in case form is not valid).

  const controls = (
    <div className="flex flex-col">
      <Stepper.Next
        shouldPrevent={shouldPreventNextStep}
        bgColor={theme.BUTTON_PRIMARY}
        textColor={theme.BUTTON_PRIMARY_TEXT}
      />
      <Stepper.Previous bgColor={theme.BUTTON} textColor={theme.BUTTON_TEXT} />
    </div>
  );

  // TODO: another solution than branching? maybe it's not that bad
  if (children) {
    return (
      <Stepper withProgress controls={controls}>
        {children}
      </Stepper>
    );
  }

  return (
    <Stepper withProgress controls={controls}>
      <CreateAccount />
      <RegisterDetails />
    </Stepper>
  );
};

export default Register;
