import React from "react";
import { styled } from "@mui/material";
import { Button as ButtonMui } from "@mui/material";

const ColorButton = styled(ButtonMui)(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "rgb(99, 140, 253)",
  "&:hover": {
    backgroundColor: "rgb(40, 96, 250)",
  },
}));

const Button = ({ type, label, variant, children, ...rest }) => {
  const styleByOutlined =
    variant === "outlined"
      ? {
          paddingLeft: "14px",
          paddingRight: "14px",
          backgroundColor: "transparent",
          border: "1px solid rgb(99, 140, 253)",
          color: "rgb(99, 140, 253)",
          transition: "0.5s",
          "&:hover": {
            backgroundColor: "rgb(236, 240, 252)",
            border: "1px solid rgb(40, 96, 250)",
          },
        }
      : "";
  return (
    <ColorButton sx={styleByOutlined} type={type} {...rest}>
      {children}
    </ColorButton>
  );
};

Button.defaultProps = {
  label: "text",
};

export default Button;
