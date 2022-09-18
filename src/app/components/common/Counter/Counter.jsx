import React from "react";
import Button from "../Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Counter = ({
  label,
  value,
  name,
  minValue,
  maxValue,
  onToggleCounter,
  ...rest
}) => {
  const counterButtonStyles = {
    width: "32px",
    minWidth: "32px",
    height: "32px",
    backgroundColor: "rgb(99, 140, 253)",
    borderRadius: "50%",
    padding: "20px",
    "&:hover": {
      backgroundColor: "rgb(40, 96, 250)",
    },
    "&:disabled": {
      opacity: 0.7,
    },
  };
  const getCounterValue = (status) => {
    if (status === "min") return value > minValue ? value - 1 : value;
    if (status === "max") return value < maxValue ? value + 1 : value;
  };
  return (
    <div className="counter">
      <p className="counter-label">{label}</p>
      <Button
        disabled={value === minValue && true}
        onClick={() => onToggleCounter(name, getCounterValue("min"))}
        sx={counterButtonStyles}
        {...rest}
      >
        <RemoveIcon />
      </Button>
      <span className="counter-value">{value}</span>
      <Button
        disabled={value === maxValue && true}
        onClick={() => onToggleCounter(name, getCounterValue("max"))}
        sx={counterButtonStyles}
        {...rest}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default Counter;
