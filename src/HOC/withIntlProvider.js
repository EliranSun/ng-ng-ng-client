import { Provider } from "../utils/intl";

const withProvider = (Component) => {
  return (
    <Provider>
      <Component />
    </Provider>
  );
};

export default withProvider;
