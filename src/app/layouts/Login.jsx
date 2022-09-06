import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import SignInPage from "../components/page/SignInPage";
import SignUpPage from "../components/page/SignUpPage";

const Login = () => {
  const { type } = useParams();
  return (
    <>
      <Header />
      {type === "signin" ? <SignInPage /> : <SignUpPage />}
    </>
  );
};

export default Login;
