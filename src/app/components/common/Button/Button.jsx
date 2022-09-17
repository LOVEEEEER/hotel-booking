import React from "react";
import { styled } from "@mui/material";
import { Button as ButtonMui } from "@mui/material";

const ColorButton = styled(ButtonMui)(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "rgb(134, 118, 226)",
  "&:hover": {
    backgroundColor: "rgb(100, 73, 255)",
  },
}));

const Button = ({ type, label, variant, children, ...rest }) => {
  const styleByOutlined =
    variant === "outlined"
      ? {
          paddingLeft: "14px",
          paddingRight: "14px",
          backgroundColor: "transparent",
          border: "1px solid rgb(134, 118, 226)",
          color: "rgb(134, 118, 226)",
          transition: "0.5s",
          "&:hover": {
            backgroundColor: "rgb(241, 239, 255)",
            border: "1px solid rgb(91, 65, 238)",
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
