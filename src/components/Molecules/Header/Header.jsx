import React from "react";
import classnames from "classnames";

import styles from "./Header.module.scss";

const Header = ({ title, isCloseable, onClose, type, bgColor, textColor }) => {
  return (
    <div
      className={classnames(styles.header, styles[type], bgColor, textColor)}
    >
      <div className={styles["header-title"]}>{title}</div>
      {isCloseable && (
        <button className={styles.close} onClick={onClose}>
          X
        </button>
      )}
    </div>
  );
};

export default Header;
