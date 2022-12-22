import React from "react";
import { ruLocale } from "../../../../configs/ruDatePickerConfig";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DatePickerMUI } from "@mui/x-date-pickers/DatePicker";

ruLocale();

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
                    dateValue?._d.toString() === "Invalid Date" || !dateValue
                        ? ""
                        : dateValue._d
            }
        };
        onChange(fakeEvent);
    };
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string
};

export default React.memo(DatePicker);
