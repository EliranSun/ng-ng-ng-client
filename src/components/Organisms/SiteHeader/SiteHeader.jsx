import { useContext } from "react";
import { Button } from "../../atoms";
import { FlowContext, FlowNames } from "../Flow";
import { FormatMessage } from "../../../lib/intl";

const SiteHeader = () => {
  const { setFlowName } = useContext(FlowContext);

  return (
    <header>
      <Button onClick={() => setFlowName(FlowNames.LOGIN)}>
        <FormatMessage id="header.login" />
      </Button>
    </header>
  );
};

export default SiteHeader;
