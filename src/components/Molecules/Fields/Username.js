import { Input } from "../../Atoms";

// username regex validation, 6-14 characters, no spaces, no special characters.
// TODO: regex by brand/jurisdiction
// TODO: error by validation
const Username = () => {
  const validate = (value) => {
    if (/^[a-zA-Z0-9]{6,14}$/.test(value)) {
      console.info("valid username", value);
      return true;
    }

    console.error("invalid username", value);
    return false;
  };

  return (
    <Input type="text" validate={validate} errors={["Username invalid!!!"]} />
  );
};

export default Username;
