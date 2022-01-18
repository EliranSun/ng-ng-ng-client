import { useState } from "react";
import classnames from "classnames";

import styles from "./Input.module.scss";

export const InputType = {
  SELECT: "select",
  TEXT: "text",
  NUMBER: "number",
};

// TODO: Translations
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
  options = [],
  placeholder,
  onChange = () => {},
  validate = () => {},
  ...rest
}) => {
  const [isHintView, setIsHintView] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleValidity = (event) => {
    const { value } = event.target;
    const isValid = validate(value);

    setIsError(!isValid);
    setIsValid(isValid);
    onChange(value, isValid);
  };

  const isErrorView = !isHintView && isError && !!errors.length;

  console.log({ isErrorView, isValid, errors });

  // TODO: refactor this, too much similarity with the render value afterwards
  if (type === InputType.SELECT && options.length) {
    return (
      <div className={styles["input-wrapper"]}>
        <select
          onChange={handleValidity}
          className={classnames(styles.input, styles.select, {
            [styles.error]: isErrorView,
            [styles.valid]: isValid,
          })}>
          {/* TODO: Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. */}
          <option value="" disabled selected>
            {placeholder}
          </option>

          {options.map((option) =>
            typeof option === "string" ? (
              <option key={option} value={option}>
                {option}
              </option>
            ) : (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          )}
        </select>
        {isHintView && !!hints.length && <Hint>{hints[0]}</Hint>}
        {isErrorView && <Error>{errors[0]}</Error>}
      </div>
    );
  }

  return (
    <div className={classnames("p-r-20 p-l-20", styles["input-wrapper"])}>
      <input
        type={type}
        className={classnames(styles.input, {
          [styles["input-error"]]: isErrorView,
          [styles["input-valid"]]: isValid,
        })}
        onFocus={() => setIsHintView(true)}
        onBlur={() => setIsHintView(false)}
        placeholder={placeholder}
        onChange={handleValidity}
        {...rest}
      />
      {isHintView && !!hints.length && <Hint>{hints[0]}</Hint>}
      {isErrorView && <Error>{errors[0]}</Error>}
    </div>
  );
};

export default Input;
