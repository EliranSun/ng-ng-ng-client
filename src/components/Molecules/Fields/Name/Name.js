import { Input } from "../../../Atoms";

const Name = ({ placeholder, ...rest }) => {
  const validate = (value) => {
    if (/^[a-zA-Z0-9]{2,25}$/.test(value)) {
      console.info("valid name", value);
      return true;
    }

    console.error("invalid name", value);
    return false;
  };

  return (
    <Input
      type="text"
      validate={validate}
      placeholder={placeholder}
      errors={["Invalid name"]}
      hints={["Name must be so and so"]}
      {...rest}
    />
  );
};

export const FirstName = ({ ...rest }) => {
  return <Name placeholder="First Name" {...rest} />;
};

export const MiddleName = ({ ...rest }) => {
  return <Name placeholder="Middle Name" {...rest} />;
};

export const LastName = ({ ...rest }) => {
  return <Name placeholder="Last Name" {...rest} />;
};
