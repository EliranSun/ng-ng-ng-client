import {
  Birthdate,
  FirstName,
  LastName,
  MiddleName,
  Username,
} from "../../../molecules";

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
