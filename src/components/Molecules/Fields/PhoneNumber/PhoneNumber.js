import { Input, InputType } from "../../../atoms";
// TODO: api this? or remove and use json
// import { usePhoneCode } from "../../../../hooks";

import phoneCodes from "./phone-codes.json";
const phoneCodesArray = Object.values(phoneCodes);

const PhoneNumber = () => {
  // TODO: support country icon?
  return (
    <div className="flex">
      <Input
        type={InputType.SELECT}
        isAutoComplete
        options={phoneCodesArray}
        placeholder="phone code"
      />
      <Input type={InputType.NUMBER} placeholder="phone number" />
    </div>
  );
};

export default PhoneNumber;
