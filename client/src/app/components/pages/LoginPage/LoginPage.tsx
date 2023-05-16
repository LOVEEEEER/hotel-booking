import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../ui/forms/LoginForm";
import FormCardStyles from "../../ui/hoc/FormCardStyles";

const LoginPage = () => {
    return (
        <main className="signin__page">
            <div className="container signin__container">
                <FormCardStyles>
                    <h1 className="form-title">Вход</h1>
                    <LoginForm />
                    <div className="form-offer">
                        Нет аккаунт на Cosmos?{" "}
                        <Link to="/login/signup" className="form-offer-link">
                            Создать аккаунт
                        </Link>
                    </div>
                </FormCardStyles>
            </div>
        </main>
    );
};

export default LoginPage;
