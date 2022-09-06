import React from "react";
import TextFieldMui from "@mui/material/TextField";

const TextField = ({ name, label, onChange, value, ...rest }) => {
  return (
    <TextFieldMui
      onChange={onChange}
      name={name}
      id={name}
      label={label}
      variant="outlined"
      value={value}
      className="muiinput"
      {...rest}
    />
  );
};

export default TextField;
