import { useState } from "react";
import { Register } from "../../../templates";
import { CreateAccount, RegisterDetails, LocaleInformation } from "./Steps";

const SpainRegister = ({ isOpen, onClose, stepIndex, children }) => {
  const [fields, setFields] = useState({});
  const handleFieldChange = ({ value, isValid, fieldName, stepName }) => {
    // TODO: lodash this
    setFields({
      ...fields,
      [stepName]: {
        fields: {
          ...fields[stepName]?.fields,
          [fieldName]: { value, isValid },
        },
      },
    });
  };

  return (
    <Register>
      <CreateAccount />
      <RegisterDetails />
      <LocaleInformation />
    </Register>
  );
};

export default SpainRegister;
