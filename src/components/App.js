import { FlowModal, FlowProvider } from "./Organisms/Flow";
import { Lobby } from "./Templates/Lobby";

import "./App.scss";
import { JurisdictionProvider } from "../jurisdiction/JurisdictionContext";

function App() {
  return (
    <JurisdictionProvider>
      <FlowProvider>
        <Lobby />
        <FlowModal />
      </FlowProvider>
    </JurisdictionProvider>
  );
}

export default App;
