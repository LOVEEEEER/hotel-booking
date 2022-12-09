import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const PhoneMenu = ({ open, navLinks }) => {
    return (
        <div className={"header__menu" + (open ? " active" : "")}>
            <ul className="header__menu-list">
                {navLinks.map((link) => (
                    <li key={link._id} className="header__menu-item">
                        <NavLink
                            className={({ isActive }) =>
                                `header__nav-link ${isActive ? "active" : ""}`
                            }
                            to={link.path}
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
    navLinks: PropTypes.array.isRequired
};

export default PhoneMenu;
