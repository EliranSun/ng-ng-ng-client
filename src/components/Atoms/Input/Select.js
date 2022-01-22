import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { Hint, Error } from "./Input";

import styles from "./Input.module.scss";

// TODO: refactor this, too much similarity with the render of Input component
const Select = ({
  options,
  placeholder,
  onChange = () => {},
  isErrorView,
  isHintView,
  isValid,
  errors,
  hints,
  isOpen: isInitOpen,
}) => {
  const selectRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [isOpen, setIsOpen] = useState(isInitOpen);

  useEffect(() => {
    const clickHandler = (event) => {
      event.stopPropagation();
      setIsOpen(false);
    };

    window.addEventListener("click", clickHandler);

    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  useEffect(() => {
    setIsOpen(isInitOpen);
  }, [isInitOpen]);

  return (
    <div className={styles["input-wrapper"]}>
      <ul
        ref={selectRef}
        onChange={onChange}
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={classNames(styles.input, styles.select, {
          [styles.error]: isErrorView,
          [styles.valid]: isValid,
        })}>
        {/* TODO: Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. */}
        <li
          value=""
          disabled
          selected
          className={selectedValue ? "" : styles.placeholder}>
          {selectedValue || placeholder}
        </li>
        <div className={styles.selectOptions}>
          {isOpen &&
            options.map((option, index) => {
              const value = typeof option === "string" ? option : option.value;
              const label = option.label || option;
              const icon = option.icon; // TODO: country/country codes icons?

              return (
                <li
                  key={`${index}-${value}`}
                  onClick={() => {
                    setSelectedValue(label);
                    onChange({ target: { value } });
                  }}
                  value={value}>
                  {icon}
                  {label}
                </li>
              );
            })}
        </div>
      </ul>
      {isHintView && !!hints.length && <Hint>{hints[0]}</Hint>}
      {isErrorView && <Error>{errors[0]}</Error>}
    </div>
  );
};

export default Select;
