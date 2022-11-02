import React from "react";
import TextField from "../../../common/form/TextField";
import Button from "../../../common/Button";
import { validatorConfig } from "./validatorConfig";
import { useForm } from "../../../../hooks/useForm";
import { FormHelperText } from "@mui/material";
import { getAuthSignInError, signIn } from "../../../../store/users";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const SignInForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const authError = useSelector(getAuthSignInError());
    const { handleChange, data, errors, validateBySubmit } = useForm(
        {
            email: "",
            password: ""
        },
        validatorConfig
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (!isValid) return;
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : "/rooms";
        dispatch(signIn({ payload: data, redirect }));
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
            <Button
                disabled={!Object.keys(errors).length === 0}
                type="submit"
                sx={{ width: "100%", padding: "9px" }}
            >
                Войти
            </Button>
        </form>
    );
};

export default SignInForm;
