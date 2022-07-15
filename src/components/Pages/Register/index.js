import { useContext } from "react";
import {
  JurisdictionContext,
  JurisdictionTypes,
} from "../../../features/jurisdiction";
import { SpainRegister } from "./SpainRegister";
import { UnregulatedRegister } from "./UnregulatedRegister";
import { Register as RegisterTemplate } from "../../templates";

const JuridictionRegister = {
  [JurisdictionTypes.Spain]: SpainRegister,
  [JurisdictionTypes.Unregulated]: UnregulatedRegister,
};

// TODO: only one problem with this implementation - new devs won't know to look here?
// maybe this kind of a strategy pattern should be encapsulated and devs should only use getRegister?
// there's one more thing to this - the same code will be relevant for login, games, modals etc.
// so it'll be scattered across the app this way, instead of being in one place. If there will be a bug or
// a change requirement, it wont be easy to find, fix and replace this way.

// BUT! any change requirement actually WILL be specific per feature.
// and this way the code will be more readable and maintainable. Same with bugs
// actually. If there's a bug, why would it be all over the place and not specifically for the registration
// logic here?

// TODO: Let's think about it
const Register = (props) => {
  const { jurisdiction } = useContext(JurisdictionContext);

  if (JuridictionRegister[jurisdiction]) {
    return JuridictionRegister[jurisdiction](props);
  }

  return <RegisterTemplate {...props} />;
};

export { Register };
