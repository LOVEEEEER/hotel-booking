import React from "react";
import PropTypes from "prop-types";
import { Checkbox, FormControl } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";

const CheckboxField = ({
    helperText,
    error,
    label,
    value,
    name,
    onChange,
    ...rest
}) => {
    const handleChange = (e) => {
        // const fakeEvent = {
        //     target: {
        //         name,
        //         value: !value
        //     }
        // };
        onChange(e);
    };
    return (
        <div>
            <FormControl error={error} {...rest}>
                <FormControlLabel
                    control={
                        <Checkbox
                            value={value}
                            onChange={handleChange}
                            name={name}
                            {...rest}
                        />
                    }
                    label={label}
                />
                {error && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </div>
    );
};

CheckboxField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string
};

export default CheckboxField;
