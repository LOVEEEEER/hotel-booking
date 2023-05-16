import { TextField } from "@mui/material";
import React from "react";

type TextAreaFieldProps = {
    error: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    placeholder?: string;
    sx?: object;
    rows: number;
};

const TextAreaField: React.FC<TextAreaFieldProps> = ({ error, ...rest }) => {
    return (
        <TextField
            fullWidth
            multiline
            error={Boolean(error)}
            helperText={error}
            {...rest}
        />
    );
};

export default TextAreaField;
