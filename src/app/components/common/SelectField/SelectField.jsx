import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectField = ({ value, label, options, onChange, name }) => {
  return (
    <>
      <FormControl sx={{ maxWidth: 200 }} variant="outlined" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select label={label} value={value} onChange={onChange} name={name}>
          <MenuItem disabled>{label}</MenuItem>
          {options.map((option) => (
            <MenuItem
              key={option.value + "_" + option.name}
              value={option.value}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectField;
