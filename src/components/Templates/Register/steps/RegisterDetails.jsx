import {
  Currency,
  Email,
  Password,
  PhoneNumber,
  RepeatPassword,
} from "../../../molecules";

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

export default RegisterDetails;
