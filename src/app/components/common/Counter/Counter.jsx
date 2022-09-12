import React from "react";
import Button from "../Button";
import { styled } from "@mui/material/styles";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ColorButton = styled(Button)(({ theme }) => ({
  width: "32px",
  minWidth: "32px",
  height: "32px",
  backgroundColor: "rgb(134, 118, 226)",
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: "rgb(100, 73, 255)",
  },
}));

const Counter = ({
  label,
  value,
  name,
  minValue,
  maxValue,
  onToggleCounter,
  ...rest
}) => {
  return (
    <div className="counter">
      <p className="counter-label">{label}</p>
      <ColorButton
        label={<RemoveIcon />}
        onClick={() =>
          onToggleCounter(name, value > minValue ? value - 1 : value)
        }
        {...rest}
      />
      <span className="counter-value">{value}</span>
      <ColorButton
        label={<AddIcon />}
        onClick={() =>
          onToggleCounter(name, value < maxValue ? value + 1 : value)
        }
        {...rest}
      />
    </div>
  );
};

export default Counter;
