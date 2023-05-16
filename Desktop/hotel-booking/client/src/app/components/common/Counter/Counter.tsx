import React from "react";
import Button from "../Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const counterButtonStyles = {
    width: "32px",
    minWidth: "32px",
    height: "32px",
    backgroundColor: "rgb(99, 140, 253)",
    borderRadius: "50%",
    padding: "20px",
    "&:hover": {
        backgroundColor: "rgb(40, 96, 250)"
    },
    "&:disabled": {
        opacity: 0.7
    }
};

type CounterProps = {
    label: string;
    value: number;
    name: string;
    minValue: number;
    maxValue: number;
    onChange: (e: { target: { name: string; value: number } }) => void;
};

const Counter: React.FC<CounterProps> = ({
    label,
    value,
    name,
    minValue,
    maxValue,
    onChange
}) => {
    const handleChange = (name: string, value: number) => {
        const fakeEvent = {
            target: {
                name,
                value
            }
        };
        onChange(fakeEvent);
    };
    const getCounterValue = (status: "min" | "max") => {
        if (status === "min") return value > minValue ? value - 1 : value;
        return value < maxValue ? value + 1 : value;
    };
    return (
        <div className="counter">
            <p className="counter-label">{label}</p>
            <Button
                type="button"
                disabled={value === minValue && true}
                onClick={() => handleChange(name, getCounterValue("min"))}
                sx={counterButtonStyles}
            >
                <RemoveIcon />
            </Button>
            <span className="counter-value">{value}</span>
            <Button
                type="button"
                disabled={value === maxValue && true}
                onClick={() => handleChange(name, getCounterValue("max"))}
                sx={counterButtonStyles}
            >
                <AddIcon />
            </Button>
        </div>
    );
};

export default Counter;
