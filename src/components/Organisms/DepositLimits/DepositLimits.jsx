import { useContext } from "react";
import { FlowContext } from "../Flow";
const DepositLimits = () => {
  const { next, prev } = useContext(FlowContext);

  return (
    <div>
      <h1>DEPO LIMITs</h1>
      <button onClick={next}>NEXT</button>
      <button onClick={prev}>PREV</button>
    </div>
  );
};

export default DepositLimits;
