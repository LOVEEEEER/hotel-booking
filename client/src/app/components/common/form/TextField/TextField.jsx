import React, { useState } from "react";
import PropTypes from "prop-types";
import TextFieldMui from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

const TextField = ({ name, value, type, errorMessage, ...rest }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <>
            {type === "password" ? (
                <TextFieldMui
                    name={name}
                    value={value}
                    helperText={errorMessage}
                    error={Boolean(errorMessage)}
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
                    {...rest}
                />
            ) : (
                <TextFieldMui
                    name={name}
                    id={name}
                    variant="outlined"
                    value={value}
                    className="muiinput"
                    type={type}
                    error={Boolean(errorMessage)}
                    helperText={errorMessage}
                    {...rest}
                />
            )}
        </>
    );
};

TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    errorMessage: PropTypes.string
};

export default TextField;
