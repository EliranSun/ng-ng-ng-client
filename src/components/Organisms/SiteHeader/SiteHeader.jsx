import { Button } from "../../Atoms";
import { FlowContext, FlowNames } from "../Flow";
import { useContext } from "react";

const SiteHeader = () => {
  const { setFlowName } = useContext(FlowContext);

  return (
    <header>
      <Button onClick={() => setFlowName(FlowNames.LOGIN)}>LOGIN</Button>
    </header>
  );
};

export default SiteHeader;
