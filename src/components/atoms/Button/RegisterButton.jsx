import Button from "./Button";
import { setFlowName, FlowNames } from "../../organisms/Flow";
import { FormatMessage } from "../../../lib/intl";

const RegisterButton = () => {
  return (
    <Button onClick={() => setFlowName(FlowNames.REGISTER_FLOW)}>
      <FormatMessage id="header.register" />
    </Button>
  );
};

export default RegisterButton;
