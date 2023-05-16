import { FormHelperText } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
import { useAppDispatch } from "../../../../store/createStore";
import { User } from "../../../../types/types";
import Button from "../../../common/Button";
import DatePickerField from "../../../common/fields/DatePickerField";
import RadioField from "../../../common/fields/RadioField";
import TextField from "../../../common/fields/TextField";
import { validatorConfig } from "./validatorConfig";
import { getAuthRegisterError } from "../../../../store/users/usersSelectors";
import { register } from "../../../../store/users/usersActions";

const registerFormInitialState = {
    name: "" as User["name"],
    email: "" as User["email"],
    password: "" as User["password"],
    birth: new Date() as User["birth"],
    sex: "" as User["sex"]
};

const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const registerError = useSelector(getAuthRegisterError());
    const navigate = useNavigate();
    const { handleChange, data, errors, validateBySubmit } = useForm(
        registerFormInitialState,
        validatorConfig
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (!isValid) return;
        dispatch(register({ payload: data, navigate }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Полное имя"
                onChange={handleChange}
                name="name"
                value={data.name}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                error={errors.name}
                placeholder="Иван Иванов"
            />
            <br />
            <TextField
                label="E-mail"
                onChange={handleChange}
                name="email"
                value={data.email}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                error={errors.email}
                placeholder="example@mail.com"
            />
            <br />
            <TextField
                label="Пароль"
                onChange={handleChange}
                type="password"
                name="password"
                value={data.password}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                error={errors.password}
            />
            <br />
            <DatePickerField
                value={data.birth}
                name="birth"
                onChange={handleChange}
                label="День рождения"
                sx={{ marginBottom: "20px", minWidth: "320px" }}
                error={errors.birth}
            />
            <br />

            <RadioField
                options={[
                    {
                        label: "Мужской",
                        value: "male"
                    },
                    {
                        label: "Женский",
                        value: "female"
                    }
                ]}
                name="sex"
                onChange={handleChange}
                row
                value={data.sex}
                sx={{ marginBottom: "20px", minWidth: "320px" }}
            />
            <br />
            {registerError && (
                <p>
                    <FormHelperText error={true}>
                        {registerError}
                    </FormHelperText>
                </p>
            )}
            <Button type="submit" sx={{ width: "100%", padding: "9px" }}>
                Зарегистрироваться
            </Button>
        </form>
    );
};

export default RegisterForm;
