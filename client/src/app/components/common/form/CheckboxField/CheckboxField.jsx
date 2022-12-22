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
    options,
    ...rest
}) => {
    const handleChange = ({ target }, lastValue) => {
        if (!options) {
            const fakeEvent = {
                target: {
                    name: target.name,
                    value: !lastValue
                }
            };
            onChange(fakeEvent);
        } else {
            const newValue = value.includes(target.value)
                ? value.filter((item) => item !== target.value)
                : [...value, target.value];
            const fakeEvent = {
                target: {
                    name: target.name,
                    value: newValue
                }
            };
            onChange(fakeEvent);
        }
    };
    return (
        <div>
            {!options ? (
                <div>
                    <FormControl error={error} {...rest}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value={value}
                                    onChange={(e) => handleChange(e, value)}
                                    name={name}
                                    checked={Boolean(value)}
                                    {...rest}
                                />
                            }
                            label={label}
                        />
                        {error && <FormHelperText>{helperText}</FormHelperText>}
                    </FormControl>
                </div>
            ) : (
                options.map((option) => (
                    <div key={option.value + "_" + option.label}>
                        <FormControl error={error} {...rest}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={option.value}
                                        onChange={handleChange}
                                        name={name}
                                        checked={value.includes(option.value)}
                                        {...rest}
                                    />
                                }
                                label={option.label}
                            />
                            {error && (
                                <FormHelperText>{helperText}</FormHelperText>
                            )}
                        </FormControl>
                    </div>
                ))
            )}
        </div>
    );
};

CheckboxField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.exact({
            label: PropTypes.string,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
    )
};

export default CheckboxField;
