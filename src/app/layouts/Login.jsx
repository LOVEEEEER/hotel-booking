import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header";
import SignInPage from "../components/page/SignInPage";
import SignUpPage from "../components/page/SignUpPage";

const Login = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="signin" element={<SignInPage />} />
                <Route path="signup" element={<SignUpPage />} />
            </Routes>
        </>
    );
};

export default Login;
