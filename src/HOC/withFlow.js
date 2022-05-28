import { FlowProvider } from "../components/Organisms/Flow";

const withFlow = (Component) => {
  return (
    <FlowProvider>
      <Component />
    </FlowProvider>
  );
};

export default withFlow;
