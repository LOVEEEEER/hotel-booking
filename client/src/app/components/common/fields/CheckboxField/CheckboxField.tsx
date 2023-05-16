import React from "react";
import {
    Checkbox as CheckboxMUI,
    FormControl,
    FormControlLabel,
    FormHelperText
} from "@mui/material";
import { FakeEventType } from "../../../../types/types";

type CheckboxFieldProps = {
    name: string;
    label?: string;
    options?: { label: string; value: string }[];
    error?: string;
    value: string[] | boolean;
    onChange: (e: FakeEventType) => void;
};

const CheckboxField: React.FC<CheckboxFieldProps> = (props) => {
    const { name, label, options, error, value, onChange, ...rest } = props;
    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        if (!options) {
            onChange({
                target: {
                    name,
                    value: !target.value
                }
            });
            return;
        }
        if (Array.isArray(value)) {
            const newValue = value.includes(target.value)
                ? value.filter((item) => item !== target.value)
                : [...value, target.value];
            const fakeEvent = {
                target: { name, value: newValue }
            };
            onChange(fakeEvent);
        }
    };
    return (
        <div>
            {!options ? (
                <div>
                    <FormControl error={Boolean(error)} {...rest}>
                        <FormControlLabel
                            sx={{ color: "#666" }}
                            control={
                                <CheckboxMUI
                                    value={value}
                                    onChange={(e) => handleChange(e)}
                                    name={name}
                                    checked={Boolean(value)}
                                />
                            }
                            label={label}
                        />
                        {error && <FormHelperText>{error}</FormHelperText>}
                    </FormControl>
                </div>
            ) : (
                options.map((option) => (
                    <div key={option.value + "_" + option.label}>
                        <FormControl error={Boolean(error)} {...rest}>
                            <FormControlLabel
                                control={
                                    <CheckboxMUI
                                        value={option.value}
                                        onChange={handleChange}
                                        name={name}
                                        checked={
                                            Array.isArray(value)
                                                ? value.includes(option.value)
                                                : false
                                        }
                                        {...rest}
                                    />
                                }
                                label={option.label}
                            />
                            {error && <FormHelperText>{}</FormHelperText>}
                        </FormControl>
                    </div>
                ))
            )}
        </div>
    );
};

export default CheckboxField;
