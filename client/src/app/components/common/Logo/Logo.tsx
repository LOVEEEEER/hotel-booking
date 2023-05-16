import React from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../../assets/svg/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img className="logo" src={logoIcon} alt="logo" />
    </Link>
  );
};

export default Logo;
