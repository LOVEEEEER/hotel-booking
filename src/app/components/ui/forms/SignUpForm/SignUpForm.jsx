import React from "react";
import TextField from "../../../common/form/TextField";
import Button from "../../../common/Button";
import { validatorConfig } from "./validatorConfig";
import { useForm } from "../../../../hooks/useForm";
import { useAuth } from "../../../../hooks/useAuth";

const SignUpForm = () => {
    const { signUp } = useAuth();
    const { handleChange, data, errors } = useForm(
        {
            name: "",
            email: "",
            password: "",
            license: ""
        },
        validatorConfig
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(data);
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
            <Button type="submit" sx={{ width: "100%", padding: "9px" }}>
                Зарегистрироваться
            </Button>
        </form>
    );
};

export default SignUpForm;
