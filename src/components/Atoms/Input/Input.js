import { useState } from "react";
import classnames from "classnames";
import Select from "./Select";
import AutoCompleteInput from "./AutoCompleteInput";

import styles from "./Input.module.scss";

export const InputType = {
  SELECT: "select",
  TEXT: "text",
  NUMBER: "number",
};

// TODO: Translations
export const Hint = ({ children }) => {
  return <div className={styles.hint}>{children}</div>;
};

export const Error = ({ children }) => {
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
  isAutoComplete,
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

  if (type === InputType.SELECT && options.length) {
    if (isAutoComplete) {
      return <AutoCompleteInput options={options} placeholder={placeholder} />;
    }

    return (
      <Select
        options={options}
        placeholder={placeholder}
        onChange={handleValidity}
        isErrorView={isErrorView}
        isHintView={isHintView}
        isValid={isValid}
        errors={errors}
        hints={hints}
      />
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
