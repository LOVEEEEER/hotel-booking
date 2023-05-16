import React, { useState } from "react";
import {
    TextField as TextFieldMUI,
    InputAdornment,
    IconButton
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type TextFieldProps = {
    name: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    error?: string | undefined;
    label: string;
    placeholder?: string;
    sx?: object;
};

const TextField: React.FC<TextFieldProps> = (props) => {
    const {
        name,
        value,
        type = "text",
        error,
        label,
        onChange,
        ...rest
    } = props;
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <>
            {" "}
            {type === "password" ? (
                <TextFieldMUI
                    {...{
                        name,
                        value,
                        onChange,
                        label,
                        ...rest
                    }}
                    helperText={error}
                    error={Boolean(error)}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            ) : (
                <TextFieldMUI
                    // className="muiinput"
                    variant="outlined"
                    error={Boolean(error)}
                    id={name}
                    helperText={error}
                    {...{
                        name,
                        value,
                        type,
                        label,
                        onChange,
                        ...rest
                    }}
                />
            )}
        </>
    );
};

export default TextField;
