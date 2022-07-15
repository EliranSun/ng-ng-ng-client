import { FlowProvider } from "../components/organisms/Flow";

const withFlow = (Component) => {
  return (
    <FlowProvider>
      <Component />
    </FlowProvider>
  );
};

export default withFlow;
