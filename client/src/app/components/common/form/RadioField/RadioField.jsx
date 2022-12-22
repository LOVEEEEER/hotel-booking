import React from "react";
import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const RadioField = ({ options, onChange, name, ...rest }) => {
    return (
        <FormControl>
            <RadioGroup name={name} {...rest}>
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                        onChange={onChange}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

RadioField.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    onChange: PropTypes.func
};

export default RadioField;
