// TODO: Translations

import { useState } from "react";
import styles from "./Input.module.scss";

const Hint = ({ children }) => {
  return <div className={styles.hint}>{children}</div>;
};

const Error = ({ children }) => {
  return <div className={styles.error}>{children}</div>;
};

const Input = ({
  type,
  errors = [],
  hints = [],
  validate = () => {},
  ...rest
}) => {
  const [isHintView, setIsHintView] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div>
      <input
        type={type}
        className="input"
        onFocus={() => setIsHintView(true)}
        onBlur={() => setIsHintView(false)}
        placeholder="Type something..."
        onChange={(event) => {
          const { value } = event.target;
          if (validate(value)) {
            setIsError(false);
            return;
          }

          setIsError(true);
        }}
        {...rest}
      />
      {isHintView && !!hints.length && <Hint>{hints[0]}</Hint>}
      {!isHintView && isError && !!errors.length && <Error>{errors[0]}</Error>}
    </div>
  );
};

export default Input;
