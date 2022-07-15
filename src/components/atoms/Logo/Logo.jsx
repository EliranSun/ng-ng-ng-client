import { useContext } from "react";
import { JurisdictionContext } from "../../../features/jurisdiction";

const Logo = () => {
  const { logoSrc } = useContext(JurisdictionContext);

  return <img src={logoSrc} alt="Brand Logo" />;
};

export default Logo;
