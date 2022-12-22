import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const TextAreaField = ({ errorMessage, ...rest }) => {
    return (
        <TextField
            fullWidth
            multiline
            error={Boolean(errorMessage)}
            helperText={errorMessage}
            {...rest}
        />
    );
};

TextAreaField.propTypes = {
    errorMessage: PropTypes.string
};

export default TextAreaField;
