import { Stepper, StepperContext } from "../../Molecules";
import {
  Birthdate,
  Currency,
  Email,
  FirstName,
  LastName,
  MiddleName,
  Password,
  PhoneNumber,
  RepeatPassword,
  Username,
} from "../../Molecules/Fields";

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

const RegisterDetails = () => {
  return (
    <div>
      <Email />
      <PhoneNumber />
      <Password />
      <RepeatPassword />
      <Currency />
    </div>
  );
};

const Register = () => {
  return (
    <Stepper withProgress>
      <CreateAccount />
      <RegisterDetails />
    </Stepper>
  );
};

export default Register;
