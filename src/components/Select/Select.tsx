import React from "react";

export interface SelectProps {
  optionLabels: string[];
}

const Select = ({ optionLabels }: SelectProps) => {
  return (
    <div>
      <label htmlFor="login">Choose a login</label>
      <select name="login" id="login">
        {optionLabels &&
          optionLabels.map((opt) => <option value={opt}>{opt}</option>)}
      </select>
    </div>
  );
};

export default Select;
