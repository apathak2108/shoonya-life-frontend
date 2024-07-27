import React from "react";
import Select from "react-select";
import { customStyles } from "../../utils";

const StyledSelect = ({ options, onChange, placeholder }) => {
  return (
    <Select
      styles={customStyles}
      isClearable
      options={options}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default StyledSelect;
