import { useContext } from "react";
import { JurisdictionContext, JurisdictionTypes } from "../../../jurisdiction";
import { SpainRegister } from "./SpainRegister";
import { UnregulatedRegister } from "./UnregulatedRegister";
import { Register as RegisterTemplate } from "../../Templates";

const JuridictionRegister = {
  [JurisdictionTypes.Spain]: SpainRegister,
  [JurisdictionTypes.Unregulated]: UnregulatedRegister,
};

// TODO: only one problem with this implementation - new devs won't know to look here?
// maybe this kind of a strategy pattern should be encapsulated and devs should only use getRegister?
// there's one more thing to this - the same code will be relevant for login, games, modals etc.
// so it'll be scattered across the app this way, instead of being in one place. If there will be a bug or
// a change requirement, it wont be easy to find, fix and replace this way.
const Register = (props) => {
  const { jurisdiction } = useContext(JurisdictionContext);

  if (JuridictionRegister[jurisdiction]) {
    return JuridictionRegister[jurisdiction](props);
  }

  return <RegisterTemplate {...props} />;
};

export { Register };
