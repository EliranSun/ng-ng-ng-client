import React from "react";
import classnames from "classnames";

import styles from "./Header.module.scss";

const Header = ({
  title,
  isCloseable = true,
  onClose,
  type,
  bgColor,
  textColor,
}) => {
  return (
    <div
      className={classnames(styles.header, styles[type], bgColor, textColor)}>
      <div className={styles["header-title"]}>{title}</div>
      {isCloseable && onClose && (
        <button className={styles.close} onClick={onClose}>
          X
        </button>
      )}
    </div>
  );
};

export default Header;
