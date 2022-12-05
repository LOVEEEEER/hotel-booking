import React from "react";
import TextField from "../../../common/form/TextField";
import Button from "../../../common/Button";
import { validatorConfig } from "./validatorConfig";
import { useForm } from "../../../../hooks/useForm";
import { FormHelperText } from "@mui/material";
import { getAuthSignUpError, signUp } from "../../../../store/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DatePicker from "../../../common/form/DatePicker";
import RadioField from "../../../common/form/RadioField";

const SignUpForm = () => {
    const authError = useSelector(getAuthSignUpError());
    const navigate = useNavigate();
    const { handleChange, data, errors, validateBySubmit } = useForm(
        {
            name: "",
            email: "",
            password: "",
            birth: "",
            sex: ""
        },
        validatorConfig
    );

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (!isValid) return;
        dispatch(signUp({ payload: data, navigate }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                error={Boolean(errors.name)}
                label="Полное имя"
                onChange={handleChange}
                name="name"
                value={data.name}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                helperText={errors.name}
                placeholder="Иван Иванов"
            />
            <br />
            <TextField
                error={Boolean(errors.email)}
                label="E-mail"
                onChange={handleChange}
                name="email"
                value={data.email}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                helperText={errors.email}
                placeholder="example@mail.com"
            />
            <br />
            <TextField
                error={Boolean(errors.password)}
                label="Пароль"
                onChange={handleChange}
                type="password"
                name="password"
                value={data.password}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                helperText={errors.password}
            />
            <br />
            <DatePicker
                error={Boolean(errors.birth)}
                value={data.birth}
                name="birth"
                onChange={handleChange}
                label="День рождения"
                sx={{ marginBottom: "20px", minWidth: "320px" }}
                helperText={errors.birth}
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
                sx={{ marginBottom: "20px", minWidth: "320px" }}
            />
            <br />
            {authError && (
                <p>
                    <FormHelperText error={true}>{authError}</FormHelperText>
                </p>
            )}
            <Button type="submit" sx={{ width: "100%", padding: "9px" }}>
                Зарегистрироваться
            </Button>
        </form>
    );
};

export default SignUpForm;
