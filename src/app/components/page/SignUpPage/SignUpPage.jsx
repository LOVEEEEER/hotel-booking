import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../../ui/SignUp";

const SignUpPage = () => {
  return (
    <main className="signup__page">
      <div className="container signup__container">
        <div className="form-card">
          <h1 className="form-title">Регистрация</h1>
          <SignUp />
          <div className="form-offer">
            Уже есть аккаунт на Cosmos? <Link to="/login/signin">Войти</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
