import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
import { useAppDispatch } from "../../../../store/createStore";
import Button from "../../../common/Button";
import TextField from "../../../common/fields/TextField";
import { validatorConfig } from "./validatorConfig";
import { getAuthLoginError } from "../../../../store/users/usersSelectors";
import { login } from "../../../../store/users/usersActions";

const loginFormInitialState = {
    email: "" as string,
    password: "" as string
};

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const loginError = useSelector(getAuthLoginError());
    const { handleChange, data, errors, validateBySubmit, setErrors } = useForm(
        loginFormInitialState,
        validatorConfig
    );

    useEffect(() => {
        setErrors((prevState) => ({
            ...prevState,
            password: loginError || ""
        }));
    }, [loginError]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (!isValid) return;
        const redirect = location.state
            ? location.state.from.pathname
            : "/rooms";
        dispatch(login({ payload: data, redirect, navigate }));
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <form className="signin__form" onSubmit={handleSubmit}>
            <TextField
                label="E-mail"
                placeholder="example@mail.com"
                name="email"
                onChange={handleChange}
                value={data.email}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                error={errors.email}
            />
            <br />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                error={errors.password}
            />
            <br />
            <Button
                disabled={!isValid}
                type="submit"
                sx={{ width: "100%", padding: "9px" }}
            >
                Войти
            </Button>
        </form>
    );
};

export default LoginForm;
