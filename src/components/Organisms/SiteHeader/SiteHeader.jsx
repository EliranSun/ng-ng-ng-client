import { Button } from "../../Atoms";
import { FlowContext, FlowNames } from "../Flow";
import { useContext } from "react";
import { FormatMessage } from "../../../utils/intl";

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
