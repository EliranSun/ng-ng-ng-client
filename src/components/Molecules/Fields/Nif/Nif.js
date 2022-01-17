// 04164947S
// TODO: Input type should be on constants?
import { Input, InputType } from "../../../Atoms";

const isDni = (value) => {
  const dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";
  const letter = dniLetters.charAt(parseInt(value, 10) % 23);
  return letter === value.charAt(8);
};

const isNie = (value) => {
  let niePrefix = value.charAt(0);

  switch (niePrefix) {
    case "X":
      niePrefix = 0;
      break;
    case "Y":
      niePrefix = 1;
      break;
    case "Z":
      niePrefix = 2;
      break;
    default:
      break;
  }

  return isDni(niePrefix + value.substr(1));
};

const getIdType = (value) => {
  const DNI_REGEX = /^(\d{8})([A-Z])$/;
  const NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;

  if (value.match(DNI_REGEX)) {
    return "dni";
  }
  if (value.match(NIE_REGEX)) {
    return "nie";
  }
  return value;
};

const validateNif = (value) => {
  if (!value) {
    return false;
  }

  const id = value.toUpperCase().replace(/\s/, "");
  const type = getIdType(id);

  switch (type) {
    case "dni":
      return isDni(value);

    case "nie":
      return isNie(value);

    default:
      return false;
  }
};

const Nif = ({ ...rest }) => {
  return (
    <Input
      type={InputType.TEXT}
      validate={validateNif}
      errors={["Invalid NIF"]}
      hints={["NIF"]}
      placeholder="NIF: NIE/DNI"
      {...rest}
    />
  );
};

export default Nif;
