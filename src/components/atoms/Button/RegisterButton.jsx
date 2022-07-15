import { useContext } from "react";
import Button from "./Button";
import { FlowContext, FlowNames } from "../../organisms/Flow";
import { FormatMessage } from "../../../lib/intl";

const RegisterButton = () => {
  const { setFlowName } = useContext(FlowContext);
  return (
    <Button onClick={() => setFlowName(FlowNames.REGISTER_FLOW)}>
      <FormatMessage id="header.register" />
    </Button>
  );
};

export default RegisterButton;
