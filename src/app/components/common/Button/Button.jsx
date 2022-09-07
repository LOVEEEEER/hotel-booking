import React from "react";
import { Button as ButtonMui } from "@mui/material";

const Button = ({ type, label, ...rest }) => {
  return (
    <ButtonMui type={type} {...rest}>
      {label}
    </ButtonMui>
  );
};

Button.defaultProps = {
  label: "text",
};

export default Button;