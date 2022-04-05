import {
  Birthdate,
  FirstName,
  LastName,
  MiddleName,
  Username,
} from "../../../Molecules";

const CreateAccount = () => {
  return (
    <div>
      <Username />
      <FirstName />
      <MiddleName />
      <LastName />
      <Birthdate />
    </div>
  );
};

export default CreateAccount;
