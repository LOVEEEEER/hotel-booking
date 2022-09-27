import React from "react";
import PropTypes from "prop-types";
import TextFieldMui from "@mui/material/TextField";

const TextField = ({ name, label, onChange, value, type, ...rest }) => {
    return (
        <TextFieldMui
            onChange={onChange}
            name={name}
            id={name}
            label={label}
            variant="outlined"
            value={value}
            className="muiinput"
            type={type}
            {...rest}
        />
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
    type: PropTypes.string
};

export default TextField;
