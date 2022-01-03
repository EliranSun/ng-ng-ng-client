import { Input } from "../../Atoms";

const Name = () => {
  return <Input type="text" />;
};

export const FirstName = () => {
  return <Name />;
};

export const MiddleName = () => {
  return <Name />;
};

export const LastName = () => {
  return <Name />;
};
