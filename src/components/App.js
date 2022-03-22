import { FlowModal, FlowProvider } from "./Organisms/Flow";
import { Lobby } from "./Templates/Lobby";

import "./App.scss";

function App() {
  return (
    <FlowProvider>
      <Lobby />
      <FlowModal />
    </FlowProvider>
  );
}

export default App;
