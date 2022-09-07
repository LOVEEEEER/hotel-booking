import React from "react";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckboxField = ({ label, value, name, onChange, sx }) => {
  const handleChange = ({ target: { name } }) => {
    const fakeEvent = {
      target: {
        name,
        value: !value,
      },
    };
    console.log(value);
    onChange(fakeEvent);
  };
  return (
    <>
      <FormControlLabel
        sx={sx}
        control={<Checkbox value={value} onChange={handleChange} name={name} />}
        label={label}
      />
    </>
  );
};

export default CheckboxField;
