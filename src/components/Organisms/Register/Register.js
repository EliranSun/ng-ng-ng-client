import withQueryClient from "../../../HOC/withQueryClient";

import styles from "./Register.module.scss";

// TODO: should not know about next/previous terminology. onsubmit/oncancel?
const Register = ({
  headerBgColor,
  headerTextColor,
  children,
  isOpen,
  onClose,
}) => {
  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <div>{children}</div>
    </div>
  );
};

export default withQueryClient(Register);
