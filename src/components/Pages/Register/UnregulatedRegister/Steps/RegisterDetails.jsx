import {
  Nationality,
  Email,
  PhoneNumber,
  Password,
  RepeatPassword,
  Currency,
} from "../../../../molecules";

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
