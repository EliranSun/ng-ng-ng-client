import { useContext } from "react";
import { JurisdictionContext, JurisdictionTypes } from "../../../jurisdiction";
import { SpainRegister } from "./SpainRegister";
import { UnregulatedRegister } from "./UnregulatedRegister";
import { Register as RegisterTemplate } from "../../Templates";

const JuridictionRegister = {
  [JurisdictionTypes.Spain]: SpainRegister,
  [JurisdictionTypes.Unregulated]: UnregulatedRegister,
};

const Register = (props) => {
  const { jurisdiction } = useContext(JurisdictionContext);
  console.log(
    "JuridictionRegister[jurisdiction]",
    JuridictionRegister[jurisdiction],
    jurisdiction
  );
  return JuridictionRegister[jurisdiction](props) || RegisterTemplate;
};

export { Register };
