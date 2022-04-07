import {
  Nationality,
  Email,
  PhoneNumber,
  Password,
  RepeatPassword,
  Currency,
} from "../../../../Molecules";

const RegisterDetails = () => {
  return (
    <>
      <Nationality />
      <Email />
      <PhoneNumber />
      <Password />
      <RepeatPassword />
      <Currency />
    </>
  );
};

export default RegisterDetails;
