import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import crown from "../../../assets/svg/crown.svg";
import { Link } from "react-router-dom";

const NavProfile = () => {
    const { currentUser } = useAuth();
    return (
        <>
            <div className="header__profile">
                <span
                    className={
                        "header__profile-name" +
                        (currentUser.isAdmin ? " header__profile-admin" : "")
                    }
                >
                    {currentUser.name}
                </span>
                {currentUser.isAdmin && (
                    <img className="header__profile-crown" src={crown} />
                )}
                <Link to="/profile">
                    <img
                        className="header__profile-image"
                        src={currentUser.image}
                        alt="user"
                    />
                </Link>
            </div>
        </>
    );
};

export default NavProfile;
