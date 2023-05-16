import React from "react";
import { ruLocale } from "../../../../configs/ruDatePickerConfig";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DatePickerMUI } from "@mui/x-date-pickers/DatePicker";
import { FakeEventType } from "../../../../types/types";

ruLocale();

type DatePickerFieldProps = {
    name: string;
    value: Date;
    error?: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | FakeEventType) => void;
    sx?: object;
    minDate?: Date;
};

const DatePickerField: React.FC<DatePickerFieldProps> = (props) => {
    const { name, value, error, label, minDate, onChange, ...rest } = props;
    const handleChange = (newValue: any) => {
        const fakeEvent = {
            target: {
                name: name,
                value:
                    newValue?._d.toString() === "Invalid Date" || !newValue
                        ? ""
                        : newValue._d
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
                        error={Boolean(error)}
                        helperText={error}
                    />
                )}
            />
        </LocalizationProvider>
    );
};

export default DatePickerField;
