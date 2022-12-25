import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/svg/logo.svg";
import "./scss/logo.scss";

const Logo = () => {
    return (
        <Link to="/">
            <img className="logo" src={logo} alt="logo" />
        </Link>
    );
};

export default Logo;
