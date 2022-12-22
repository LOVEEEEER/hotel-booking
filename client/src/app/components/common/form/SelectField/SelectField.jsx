import * as React from "react";
import PropTypes from "prop-types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectField = ({ value, label, options, onChange, name, ...rest }) => {
    return (
        <>
            <FormControl
                sx={{ maxWidth: 200 }}
                variant="outlined"
                fullWidth
                {...rest}
            >
                <InputLabel>{label}</InputLabel>
                <Select
                    label={label}
                    value={value}
                    onChange={onChange}
                    name={name}
                >
                    <MenuItem disabled>{label}</MenuItem>
                    {options.map((option) => (
                        <MenuItem
                            key={option.value + "_" + option.label}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};

SelectField.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.exact({
            label: PropTypes.string,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
    ),
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default React.memo(SelectField);
