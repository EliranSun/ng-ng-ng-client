import { useContext } from "react";
import { FlowContext } from "../Flow";

const RealityCheck = () => {
  const { next, prev } = useContext(FlowContext);
  return (
    <div>
      <h1>REAL CHECK</h1>
      <button onClick={next}>NEXT</button>
      <button onClick={prev}>PREV</button>
    </div>
  );
};

export default RealityCheck;
