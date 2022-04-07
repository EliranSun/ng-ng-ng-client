import { useContext } from "react";
import { JurisdictionContext, JurisdictionTypes } from "../../../jurisdiction";
import { SpainRegister } from "./SpainRegister";
import { UnregulatedRegister } from "./UnregulatedRegister";
import { Register as RegisterTemplate } from "../../Templates/Register";

const JuridictionRegister = {
  [JurisdictionTypes.Spain]: SpainRegister,
  [JurisdictionTypes.Unregulated]: UnregulatedRegister,
};

const Register = () => {
  const { jurisdiction } = useContext(JurisdictionContext);
  return JuridictionRegister[jurisdiction]() || RegisterTemplate;
};

export { Register };
