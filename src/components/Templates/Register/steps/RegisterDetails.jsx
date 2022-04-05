import {
  Currency,
  Email,
  Password,
  PhoneNumber,
  RepeatPassword,
} from "../../../Molecules";

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
