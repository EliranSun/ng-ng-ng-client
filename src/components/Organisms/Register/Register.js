import withQueryClient from "../../../HOC/withQueryClient";

import styles from "./Register.module.scss";

// TODO: even with added functionality, this layer seems a bit redundant. Can we remove it?
// think about templates and pages. perhaps it fits there. Also I must consider brands/jurisdiction
// involvment in the app before correctly answering this question.

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
