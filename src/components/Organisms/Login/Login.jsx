import { Modal } from "../";
import { Button } from "../../Atoms";

// TODO: should it be here, or in the atoms?
export const LoginButton = () => {
  return <Button onClick={() => {}}>LOGIN</Button>;
};

const Login = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <div>LOGIN</div>
    </Modal>
  );
};

export default Login;
