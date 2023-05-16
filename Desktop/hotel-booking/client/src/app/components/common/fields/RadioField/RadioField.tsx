import React from "react";
import {
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio
} from "@mui/material";

type RadioFieldProps = {
    name: string;
    options: { label: string; value: string }[];
    error?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    row?: boolean;
    sx?: object;
};

const RadioField: React.FC<RadioFieldProps> = (props) => {
    const { name, options, onChange, ...rest } = props;
    return (
        <FormControl>
            <RadioGroup {...{ name, onChange }} {...rest}>
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioField;
