import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../ui/forms/SignUpForm";
import userIcon from "../../../assets/svg/user.svg";
import FormCardStyles from "../../ui/HOC/FormCardStyles";

const SignUpPage = () => {
    return (
        <main className="signup__page">
            <div className="container signup__container">
                <FormCardStyles>
                    <h1 className="form-title">Создание аккаунта</h1>
                    <div className="signup__user">
                        <img
                            className="signup__user-image"
                            src={userIcon}
                            alt="user"
                        />
                    </div>
                    <SignUpForm />
                    <div className="form-offer">
                        Уже есть аккаунт на Cosmos?{" "}
                        <Link to="/login/signin">Войти</Link>
                    </div>
                </FormCardStyles>
            </div>
        </main>
    );
};

export default SignUpPage;
