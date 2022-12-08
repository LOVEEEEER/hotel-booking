import React, { useState } from "react";
import PropTypes from "prop-types";
import TextFieldMui from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

const TextField = ({
    name,
    label,
    onChange,
    value,
    type,
    errorMessage,
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <>
            {type === "password" ? (
                <FormControl sx={{ width: "25ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        {label}
                    </InputLabel>
                    <OutlinedInput
                        name={name}
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={value}
                        onChange={onChange}
                        error={Boolean(errorMessage)}
                        helperText={errorMessage}
                        {...rest}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                    onMouseDown={handleShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            ) : (
                <TextFieldMui
                    onChange={onChange}
                    name={name}
                    id={name}
                    label={label}
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
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    errorMessage: PropTypes.string.isRequired
};

export default React.memo(TextField);
