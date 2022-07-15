import Button from "./Button";
import { setFlowName, FlowNames } from "../../organisms/Flow";
import { FormatMessage } from "../../../lib/intl";

const LoginButton = () => {
  return (
    <Button onClick={() => setFlowName(FlowNames.LOGIN)}>
      <FormatMessage id="header.login" />
    </Button>
  );
};

export default LoginButton;
