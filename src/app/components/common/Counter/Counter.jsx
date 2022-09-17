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
  };
  return (
    <div className="counter">
      <p className="counter-label">{label}</p>
      <Button
        onClick={() =>
          onToggleCounter(name, value > minValue ? value - 1 : value)
        }
        sx={counterButtonStyles}
        {...rest}
      >
        <RemoveIcon />
      </Button>
      <span className="counter-value">{value}</span>
      <Button
        onClick={() =>
          onToggleCounter(name, value < maxValue ? value + 1 : value)
        }
        sx={counterButtonStyles}
        {...rest}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default Counter;
