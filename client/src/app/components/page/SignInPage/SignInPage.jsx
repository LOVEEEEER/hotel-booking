import React from "react";
import SignInForm from "../../ui/forms/SignInForm";
import { Link } from "react-router-dom";
import FormCardStyles from "../../ui/HOC/FormCardStyles";
import "./scss/sign-in-page.scss";

const SignInPage = () => {
    return (
        <main className="signin__page">
            <div className="container signin__container">
                <FormCardStyles>
                    <h1 className="form-title">Вход</h1>
                    <SignInForm />
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

export default SignInPage;
