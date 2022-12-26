import React, { useEffect } from "react";
import TextField from "../../../common/form/TextField";
import Button from "../../../common/Button";
import { validatorConfig } from "./validatorConfig";
import { useForm } from "../../../../hooks/useForm";
import { getAuthSignInError, signIn } from "../../../../store/slices/users";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const SignInForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const authError = useSelector(getAuthSignInError());
    const { handleChange, data, errors, validateBySubmit, setErrors } = useForm(
        {
            email: "",
            password: ""
        },
        validatorConfig
    );

    useEffect(() => {
        setErrors((prevState) => ({ ...prevState, password: authError }));
    }, [authError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (!isValid) return;
        const redirect = location.state
            ? location.state.from.pathname
            : "/rooms";
        dispatch(signIn({ payload: data, redirect, navigate }));
    };
    return (
        <form className="signin__form" onSubmit={handleSubmit}>
            <TextField
                label="E-mail"
                placeholder="example@mail.com"
                name="email"
                onChange={handleChange}
                value={data.email}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                errorMessage={errors.email}
            />
            <br />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                sx={{ marginBottom: "30px", minWidth: "320px" }}
                errorMessage={errors.password}
            />
            <br />
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
