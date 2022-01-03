import React from "react";
import classnames from "classnames";
import { Header, Footer } from "..";

import styles from "./Popup.module.scss";

export const Position = {
  CENTER: "center",
  BOTTOM_RIGHT: "bottom-right",
};

const Popup = ({
  title,
  isCloseable,
  content,
  children,
  type,
  onClose,
  position = Position.CENTER,
  footerContent = null,
}) => {
  return (
    <div className={classnames(styles.popup, styles[position])}>
      <Header
        title={title}
        isCloseable={isCloseable}
        type={type}
        onClose={onClose}
      />
      <div className={styles.content}>{content || children}</div>
      {footerContent && <Footer />}
    </div>
  );
};

export default Popup;
