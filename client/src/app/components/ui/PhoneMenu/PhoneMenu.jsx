import React from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import NavProfile from "../profile/NavProfile";
import "./scss/phone-menu.scss";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../../store/slices/users";
import Button from "../../common/Button";

const PhoneMenu = ({ open, navLinks, onToggleMenu }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const navigate = useNavigate();
    return (
        <div className={"header__menu" + (open ? " active" : "")}>
            {isLoggedIn ? (
                <NavProfile />
            ) : (
                <Button
                    variant="outlined"
                    sx={{ width: "100px", marginTop: "3px" }}
                    onClick={() => navigate("/login/signin")}
                >
                    Вход
                </Button>
            )}
            <ul className="header__menu-list">
                {navLinks.map((link) => (
                    <li key={link._id} className="header__menu-item">
                        <NavLink
                            className={({ isActive }) =>
                                `header__nav-link ${isActive ? "active" : ""}`
                            }
                            to={link.path}
                            onClick={onToggleMenu}
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

PhoneMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    navLinks: PropTypes.array.isRequired,
    onToggleMenu: PropTypes.func.isRequired
};

export default PhoneMenu;
