import { Popup } from "../../../components/Molecules";

// TODO: should not know about next/previous terminology. onsubmit/oncancel?
const Register = ({ theme, children }) => {
  return (
    <Popup title="Register" isCloseable>
      {children}
    </Popup>
  );
};

export default Register;
