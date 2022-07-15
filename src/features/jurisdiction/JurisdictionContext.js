import { createContext } from "react";
import noop from "lodash.noop";
import { JurisdictionTypes } from "./constants";
import { useJurisdiction } from "./api/getJurisdiction";

// The next iteration might be to create different apps/repos for each jurisdiction.
const JurisdictionContext = createContext({
  jurisdiction: JurisdictionTypes.Spain,
  handleJurisdictionChange: noop,
});

const JurisdictionProvider = ({ children }) => {
  const jurisdiction = useJurisdiction({});
  console.log({ jurisdiction });
  // const [setJurisdiction] = useState(initJurisdiction);

  // useEffect(() => {
  //   setJurisdiction(initJurisdiction);
  // }, [initJurisdiction]);

  return (
    <JurisdictionContext.Provider
      value={{
        jurisdiction,
      }}>
      {children}
    </JurisdictionContext.Provider>
  );
};

export { JurisdictionContext, JurisdictionProvider };
