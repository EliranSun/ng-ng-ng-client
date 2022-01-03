import { Register } from "../../../Organisms";
import { Stepper, Fields } from "../../../Molecules";

const GratoganaTheme = {
  Register: {},
};

/**
 *
 * When I phrase it:
 * Gratogana register has 3 steps:
 * 1. username, first name, middle name, surname, birthdate, Fiscal
 * 2. Nationality, email, password, confirm password, currency
 * 3. Gender, country, postal code, address, city, promotion, t&c/privacy policy
 *
 */

const StepOne = () => {
  return (
    <>
      <Fields.Username />
      <Fields.FirstName />
      <Fields.MiddleName />
      <Fields.LastName />
      <Fields.Birthdate />
      <Fields.Fiscal />
    </>
  );
};

const StepTwo = () => {
  return (
    <>
      <Fields.Nationality />
      <Fields.Password />
      <Fields.Password />
      <Fields.LastName />
      <Fields.Birthdate />
      <Fields.Fiscal />
    </>
  );
};

const StepThree = () => {
  return (
    <>
      <Fields.Username />
      <Fields.FirstName />
      <Fields.MiddleName />
      <Fields.LastName />
      <Fields.Birthdate />
      <Fields.Fiscal />
    </>
  );
};

const GratoganaRegister = () => {
  return (
    <Register theme={GratoganaTheme.Register}>
      <Stepper>
        <StepOne />
        <StepTwo />
        <StepThree />
      </Stepper>
    </Register>
  );
};

export default GratoganaRegister;
