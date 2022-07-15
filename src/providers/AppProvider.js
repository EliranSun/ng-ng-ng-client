import { QueryClientProvider } from "react-query";
import { queryClient } from "../lib/query";
import { FlowProvider } from "../components/organisms/Flow";
import { JurisdictionProvider } from "../features/jurisdiction";
import { IntlProvider } from "../lib/intl";

const AppProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider>
        <JurisdictionProvider>
          <FlowProvider>{children}</FlowProvider>
        </JurisdictionProvider>
      </IntlProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
