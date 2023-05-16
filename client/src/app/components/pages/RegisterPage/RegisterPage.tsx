import React from "react";
import FormCardStyles from "../../ui/hoc/FormCardStyles";
import userIcon from "../../../assets/svg/user.svg";
import { Link } from "react-router-dom";
import RegisterForm from "../../ui/forms/RegisterForm";

const RegisterPage = () => {
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
                    <RegisterForm />
                    <div className="form-offer">
                        Уже есть аккаунт на Cosmos?{" "}
                        <Link to="/login/signin" className="form-offer-link">
                            Войти
                        </Link>
                    </div>
                </FormCardStyles>
            </div>
        </main>
    );
};

export default RegisterPage;
