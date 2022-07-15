import { useContext } from "react";
import Button from "./Button";
import { FlowContext, FlowNames } from "../../organisms/Flow";
import { FormatMessage } from "../../../lib/intl";

const LoginButton = () => {
  const { setFlowName } = useContext(FlowContext);
  return (
    <Button onClick={() => setFlowName(FlowNames.LOGIN)}>
      <FormatMessage id="header.login" />
    </Button>
  );
};

export default LoginButton;
