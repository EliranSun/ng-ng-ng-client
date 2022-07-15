import { Provider } from "../lib/intl";

const withProvider = (Component) => {
  return (
    <Provider>
      <Component />
    </Provider>
  );
};

export default withProvider;
