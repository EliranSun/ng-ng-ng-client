import {
  Username,
  FirstName,
  MiddleName,
  LastName,
  Birthdate,
  Nif,
  Fiscal,
} from "../../../../molecules";

const CreateAccount = () => {
  return (
    <>
      <Username />
      <FirstName />
      <MiddleName />
      <LastName />
      <Birthdate />
      <Nif />
      <Fiscal />
    </>
  );
};

export default CreateAccount;
