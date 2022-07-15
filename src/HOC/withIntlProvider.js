import { IntlProvider } from "../lib/intl";

const withProvider = (Component) => {
  return (
    <IntlProvider>
      <Component />
    </IntlProvider>
  );
};

export default withProvider;
