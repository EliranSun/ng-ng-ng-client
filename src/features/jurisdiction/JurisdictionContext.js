import { useState, useEffect, createContext } from "react";
import noop from "lodash.noop";
import { JurisdictionTypes } from "./constants";

const JurisdictionContext = createContext({
  jurisdiction: JurisdictionTypes.Spain,
  handleJurisdictionChange: noop,
});

const JurisdictionProvider = ({
  jurisdiction: initJurisdiction = JurisdictionTypes.Spain,
  children,
}) => {
  const [jurisdiction, setJurisdiction] = useState(initJurisdiction);

  useEffect(() => {
    setJurisdiction(initJurisdiction);
  }, [initJurisdiction]);

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

export { JurisdictionContext, JurisdictionProvider };
