import { FlowProvider } from "./Organisms/Flow";
import { Lobby } from "./Templates/Lobby";

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
