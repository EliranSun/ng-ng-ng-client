import { Lobby } from "./templates/Lobby";
import { AppProvider } from "../providers";

import "./App.scss";

const App = () => {
  return (
    <AppProvider>
      <Lobby />
    </AppProvider>
  );
};

export default App;
