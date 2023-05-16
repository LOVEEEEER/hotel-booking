import React from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent
} from "@mui/material";

type SelectFieldProps = {
    name: string;
    value: string;
    label: string;
    options: { label: string; value: string | number }[];
    onChange: (e: SelectChangeEvent) => void;
    sx?: object;
};

const SelectField: React.FC<SelectFieldProps> = ({
    value,
    label,
    options,
    name,
    onChange,
    ...rest
}) => {
    return (
        <>
            <FormControl variant="outlined" fullWidth {...rest}>
                <InputLabel>{label}</InputLabel>
                <Select
                    label={label}
                    value={value}
                    onChange={onChange}
                    name={name}
                >
                    <MenuItem disabled>{label}</MenuItem>
                    {options.map((option) => (
                        <MenuItem
                            key={option.value + "_" + option.label}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};

export default SelectField;
