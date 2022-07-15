import { FlowProvider } from "./organisms/Flow";
import { Lobby } from "./templates/Lobby";

import "./App.scss";
import { JurisdictionProvider } from "../features/jurisdiction";

const App = ({ jurisdiction }) => {
  return (
    <JurisdictionProvider jurisdiction={jurisdiction}>
      <FlowProvider>
        <Lobby />
      </FlowProvider>
    </JurisdictionProvider>
  );
};

export default App;
