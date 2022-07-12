import React from "react";

export interface SelectProps {
  optionLabels: string[];
}

const Select = (props: SelectProps) => {
  return (
    <select>
      {props.optionLabels && props.optionLabels.map((opt) => (
        <option value={opt}>{opt}</option>
      ))}
    </select>
  );
};

export default Select;