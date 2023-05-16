import { SelectChangeEvent } from "@mui/material";
import { useState, useEffect } from "react";
import { DataType, FakeEventType } from "../types/types";
import { validator, ValidatorConfigType } from "../utils/validator";

export default function useForm<T extends DataType>(
    initialState: T,
    config?: ValidatorConfigType
) {
    const [data, setData] = useState<T>(initialState);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = ({
        target
    }:
        | React.ChangeEvent<HTMLInputElement>
        | SelectChangeEvent
        | FakeEventType) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    useEffect(() => {
        if (config) {
            validate();
        }
    }, [data]);

    const validate = () => {
        if (config) {
            const errors = validator(data, config);
            const userErrors: DataType = {};
            Object.keys(data).forEach((item) => {
                if (errors[item] && data[item]) {
                    userErrors[item] = errors[item];
                }
            });
            setErrors(userErrors);
            return Object.keys(errors).length === 0;
        }
    };

    const validateBySubmit = () => {
        if (config) {
            const errors = validator(data, config);
            setErrors(errors);
            return Object.keys(errors).length === 0;
        }
    };

    return { data, handleChange, errors, setData, setErrors, validateBySubmit };
}
