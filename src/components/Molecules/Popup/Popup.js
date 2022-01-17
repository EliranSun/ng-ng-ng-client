import React from "react";
import classnames from "classnames";
import { Header, Footer } from "..";

import styles from "./Popup.module.scss";

export const Position = {
  CENTER: "center",
  BOTTOM_RIGHT: "bottom-right",
};

const Colors = {
  BLACK: "black",
  WHITE: "white",
};

const Size = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

// TODO: create multiple async flows. Prove that state machine was not really nessecary here.
const Popup = ({
  title,
  content,
  children,
  type,
  onClose,
  footerContent = null,
  isCloseable = true,
  position = Position.CENTER,
  headerBgColor = Colors.BLACK,
  headerTextColor = Colors.WHITE,
  size = Size.MEDIUM,
  isOpen = false,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={classnames(styles.popup, styles[position], styles[size])}>
        <Header
          title={title}
          isCloseable={isCloseable}
          type={type}
          onClose={onClose}
          bgColor={headerBgColor}
          textColor={headerTextColor}
        />
        <div className={styles.content}>{content || children}</div>
        {footerContent && <Footer />}
      </div>
      <div className={styles.overlay} />
    </>
  );
};

export default Popup;
