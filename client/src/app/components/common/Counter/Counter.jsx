import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./scss/counter.scss";

const Counter = ({
    label,
    value,
    name,
    minValue,
    maxValue,
    onChange,
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
            backgroundColor: "rgb(40, 96, 250)"
        },
        "&:disabled": {
            opacity: 0.7
        }
    };
    const handleChange = (name, value) => {
        const fakeEvent = {
            target: {
                name,
                value
            }
        };
        onChange(fakeEvent);
    };
    const getCounterValue = (status) => {
        if (status === "min") return value > minValue ? value - 1 : value;
        if (status === "max") return value < maxValue ? value + 1 : value;
    };
    return (
        <div className="counter">
            <p className="counter-label">{label}</p>
            <Button
                type="button"
                disabled={value === minValue && true}
                onClick={() => handleChange(name, getCounterValue("min"))}
                sx={counterButtonStyles}
                {...rest}
            >
                <RemoveIcon />
            </Button>
            <span className="counter-value">{value}</span>
            <Button
                type="button"
                disabled={value === maxValue && true}
                onClick={() => handleChange(name, getCounterValue("max"))}
                sx={counterButtonStyles}
                {...rest}
            >
                <AddIcon />
            </Button>
        </div>
    );
};

Counter.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Counter;
