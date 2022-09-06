import React from "react";
import SignIn from "../../ui/SignIn";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <div className="signin__page">
        <div className="container signin__container">
          <div className="form-card">
            <h1 className="form-title">Вход</h1>
            <SignIn />
            <div className="form-offer">
              Нет аккаунт на Cosmos?{" "}
              <Link to="/login/signup">Зарегистрироваться</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;