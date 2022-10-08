import React from "react";
import TextField from "../../../common/form/TextField";
import Button from "../../../common/Button";
import { validatorConfig } from "./validatorConfig";
import { useForm } from "../../../../hooks/useForm";
import CheckboxField from "../../../common/form/CheckboxField";

const SignUpForm = () => {
    const { handleChange, data, errors, handleSubmit } = useForm(
        {
            name: "",
            email: "",
            password: "",
            license: ""
        },
        validatorConfig
    );

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
                sx={{ marginBottom: "10px", minWidth: "320px" }}
                helperText={errors.password}
            />
            <br />
            <CheckboxField
                label="Я люблю реакт"
                value={data.license}
                name="license"
                onChange={handleChange}
                error={Boolean(errors.license)}
                helperText={errors.license}
                sx={{ marginBottom: "7px" }}
            />
            <br />
            <Button type="submit" sx={{ width: "100%", padding: "9px" }}>
                Зарегистрироваться
            </Button>
        </form>
    );
};

export default SignUpForm;
