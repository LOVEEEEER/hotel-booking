import React, { useState } from "react";
import TextField from "../../../common/form/TextField";
import Button from "../../../common/Button";
import { validatorConfig } from "./validatorConfig";
import { useForm } from "../../../../hooks/useForm";
import { useAuth } from "../../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { FormHelperText } from "@mui/material";

const SignInForm = () => {
    const [authError, setAuthError] = useState();
    const { signIn } = useAuth();
    const history = useHistory();
    const { handleChange, data, errors } = useForm(
        {
            email: "",
            password: ""
        },
        validatorConfig
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(errors).length !== 0) return;
        try {
            await signIn(data);
            history.replace(history.location.state ? "/profile" : "/rooms");
        } catch (error) {
            console.log(error.message);
            setAuthError(error.message);
        }
    };
    return (
        <form className="signin__form" onSubmit={handleSubmit}>
            <TextField
                error={Boolean(errors.email)}
                label="Введите ваш E-mail"
                name="email"
                onChange={handleChange}
                value={data.email}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                helperText={errors.email ? errors.email : null}
            />
            <br />
            <TextField
                error={Boolean(errors.password)}
                label="Введите ваш пароль"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                helperText={errors.password ? errors.password : null}
            />
            <br />
            {authError && (
                <p>
                    <FormHelperText error={true}>{authError}</FormHelperText>
                </p>
            )}
            <Button type="submit" sx={{ width: "100%", padding: "9px" }}>
                Войти
            </Button>
        </form>
    );
};

export default SignInForm;
