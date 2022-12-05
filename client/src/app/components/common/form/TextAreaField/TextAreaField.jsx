import React from "react";
import { TextField } from "@mui/material";

const TextAreaField = ({ ...rest }) => {
  return <TextField fullWidth multiline {...rest} />;
};

export default TextAreaField;
