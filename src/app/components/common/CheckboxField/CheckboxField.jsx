import React from "react";
import { Checkbox, FormGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckboxField = ({ children, value, name, onChange, sx }) => {
  const handleChange = ({ target: { name } }) => {
    const fakeEvent = {
      target: {
        name,
        value: !value,
      },
    };
    onChange(fakeEvent);
  };
  return (
    <>
      <FormControlLabel
        sx={sx}
        control={<Checkbox value={value} onChange={handleChange} name={name} />}
        label={children}
      />
    </>
  );
};

export default CheckboxField;
