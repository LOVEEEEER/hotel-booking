import React from "react";
import Button from "../Button";

const Counter = ({ label, value, name, onToggleCounter }) => {
  return (
    <div className="counter">
      <p className="counter-label">{label}</p>
      <Button
        label="-"
        onClick={() => onToggleCounter(name, value !== 0 ? value - 1 : 0)}
      />
      <span>{value}</span>
      <Button
        label="+"
        onClick={() => onToggleCounter(name, value < 20 ? value + 1 : value)}
      />
    </div>
  );
};

export default Counter;
