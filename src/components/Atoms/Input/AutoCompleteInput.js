import { useState } from "react";
import Select from "./Select";

const AutoCompleteInput = ({ options = [], placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [matchingValues, setMatchingValues] = useState(options);

  return (
    <div>
      <input
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(event) => {
          const { value } = event.target;
          const matchingValues = options.filter((option) => {
            return option && (option.value || option).includes(value);
          });
          setMatchingValues(matchingValues);
        }}
      />
      <Select
        options={matchingValues}
        placeholder={placeholder}
        isOpen={isFocused}
      />
    </div>
  );
};

export default AutoCompleteInput;
