import { Popup } from "../../../components/Molecules";
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
    <Popup
      title="Register"
      isOpen={isOpen}
      onClose={onClose}
      headerBgColor={headerBgColor}
      headerTextColor={headerTextColor}>
      <div className={styles.register}>{children}</div>
    </Popup>
  );
};

export default withQueryClient(Register);
