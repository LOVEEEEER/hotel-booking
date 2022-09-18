import React from "react";
import { styled } from "@mui/material";
import { Button as ButtonMui } from "@mui/material";

const ButtonContained = styled(ButtonMui)(({ theme }) => ({
  color: "#FFFFFF",
  paddingLeft: "14px",
  paddingRight: "14px",
  backgroundColor: "rgb(99, 140, 253)",
  "&:hover": {
    backgroundColor: "rgb(40, 96, 250)",
  },
}));

const ButtonOutlined = styled(ButtonMui)(({ theme }) => ({
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
}));

const Button = ({ type, label, variant, children, ...rest }) => {
  return (
    <>
      {variant === "outlined" ? (
        <ButtonOutlined type={type} label={label} {...rest}>
          {children}
        </ButtonOutlined>
      ) : (
        <ButtonContained type={type} label={label} {...rest}>
          {children}
        </ButtonContained>
      )}
    </>
  );
};

Button.defaultProps = {
  label: "text",
};

export default Button;
