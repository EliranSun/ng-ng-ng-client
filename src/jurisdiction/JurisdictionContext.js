import { useState, createContext } from "react";
import noop from "lodash.noop";
import { JurisdictionTypes } from "./constants";

export const JurisdictionContext = createContext({
  jurisdiction: JurisdictionTypes.Spain,
  handleJurisdictionChange: noop,
});

export const JurisdictionProvider = ({ children }) => {
  const [jurisdiction, setJurisdiction] = useState(JurisdictionTypes.Spain);

  const handleJurisdictionChange = (jurisdiction) => {
    setJurisdiction(jurisdiction);
  };

  return (
    <JurisdictionContext.Provider
      value={{
        jurisdiction,
        handleJurisdictionChange,
      }}>
      {children}
    </JurisdictionContext.Provider>
  );
};
