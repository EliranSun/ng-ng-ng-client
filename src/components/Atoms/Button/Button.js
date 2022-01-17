import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({ bgColor, textColor, children, ...rest }) => (
  <button className={classNames(styles.button, bgColor, textColor)} {...rest}>
    {children}
  </button>
);

export default Button;
