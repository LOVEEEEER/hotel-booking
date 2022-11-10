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
    error,
    helperText,
    ...rest
}) => {
    const first = (dateValue) => {
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
                onChange={(newValue) => {
                    first(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        {...rest}
                        helperText={helperText}
                        error={error}
                    />
                )}
            />
        </LocalizationProvider>
    );
};

DatePicker.propTypes = {
    value: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string
};

export default DatePicker;
