import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DatePickerMUI } from "@mui/x-date-pickers/DatePicker";

const DatePicker = ({
    value,
    name,
    onChange,
    label,
    errorMessage,
    ...rest
}) => {
    const handleChange = (dateValue) => {
        const fakeEvent = {
            target: {
                name: name,
                value:
                    dateValue?.$d.toString() === "Invalid Date" || !dateValue
                        ? ""
                        : dateValue.$d
            }
        };
        onChange(fakeEvent);
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerMUI
                label={label}
                value={value}
                inputFormat="DD/MM/YYYY"
                onChange={(newValue) => {
                    handleChange(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        {...rest}
                        error={Boolean(errorMessage)}
                        helperText={errorMessage}
                    />
                )}
            />
        </LocalizationProvider>
    );
};

DatePicker.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string
};

export default DatePicker;
