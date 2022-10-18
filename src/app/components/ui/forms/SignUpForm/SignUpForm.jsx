import React, { useState } from "react";
import TextField from "../../../common/form/TextField";
import Button from "../../../common/Button";
import { validatorConfig } from "./validatorConfig";
import { useForm } from "../../../../hooks/useForm";
import { useAuth } from "../../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { FormHelperText } from "@mui/material";

const SignUpForm = () => {
    const [authError, setAuthError] = useState();
    const { signUp } = useAuth();
    const history = useHistory();
    const { handleChange, data, errors, validateBySubmit } = useForm(
        {
            name: "",
            email: "",
            password: ""
        },
        validatorConfig
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (!isValid) return;
        console.log("log");
        try {
            await signUp(data);
            history.replace(
                history.location.state
                    ? history.location.state.from.pathname
                    : "/rooms"
            );
        } catch (error) {
            setAuthError(error.message);
        }
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
