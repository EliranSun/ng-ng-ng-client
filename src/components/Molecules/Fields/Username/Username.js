import { Input } from "../../../Atoms";

// username regex validation, 6-14 characters, no spaces, no special characters.
// TODO: regex by brand/jurisdiction
// TODO: error by validation
const Username = ({ ...rest }) => {
  const validate = (value) => {
    if (/^[a-zA-Z0-9]{6,14}$/.test(value)) {
      console.info("valid username", value);
      return true;
    }

    console.error("invalid username", value);
    return false;
  };

  return (
    <Input
      type="text"
      placeholder="Username"
      validate={validate}
      errors={["Username invalid!!!"]}
      hints={["Username must be so and so"]}
      {...rest}
    />
  );
};

export default Username;
