import {
  Username,
  FirstName,
  MiddleName,
  LastName,
  Birthdate,
  Nif,
  Fiscal,
} from "../../../../Molecules";

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
