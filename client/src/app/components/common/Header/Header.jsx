import React, { useState } from "react";
import Logo from "../Logo";
import Button from "../Button";
import { Link, NavLink } from "react-router-dom";
import NavProfile, { NavProfileLoading } from "../../ui/profile/NavProfile";
import { useSelector } from "react-redux";
import { getIsLoading, getIsLoggedIn } from "../../../store/slices/users";
import PhoneMenu from "../../ui/PhoneMenu";
import "./scss/header.scss";

const Header = () => {
    const [open, setOpen] = useState(false);
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersLoading = useSelector(getIsLoading());
    const links = [
        { path: "/rooms", text: "Номера", _id: 1 },
        { path: "/services", text: "Вакансии", _id: 2 },
        { path: "/vacancies", text: "Услуги", _id: 3 },
        { path: "/news", text: "Политика", _id: 4 }
    ];
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <header className="header">
            <div className="header__container container">
                <nav className="header__nav">
                    <Logo />
                    <ul className="header__nav-list">
                        {links.map((link) => (
                            <li className="header__nav-item" key={link._id}>
                                <NavLink
                                    className={({ isActive }) =>
                                        `header__nav-link ${
                                            isActive ? "active" : ""
                                        }`
                                    }
                                    to={link.path}
                                >
                                    {link.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__toggler">
                    <input
                        id="menu__toggle"
                        className="header__menu-toggle"
                        type="checkbox"
                        onClick={toggleMenu}
                    />
                    <label
                        className="header__menu-button"
                        htmlFor="menu__toggle"
                    >
                        <span></span>
                    </label>
                </div>
                <ul className="header__auth-list">
                    {!usersLoading ? (
                        <>
                            {!isLoggedIn ? (
                                <>
                                    <li className="header__auth-item">
                                        <Link
                                            to="/login/signin"
                                            className="header__auth-link"
                                        >
                                            Вход
                                        </Link>
                                    </li>
                                    <li className="header__auth-item">
                                        <Link
                                            to="/login/signup"
                                            className="header__auth-link"
                                        >
                                            <Button variant="outlined">
                                                Регистрация
                                            </Button>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <NavProfile />
                                </>
                            )}
                        </>
                    ) : (
                        <NavProfileLoading />
                    )}
                </ul>
            </div>
            <PhoneMenu open={open} navLinks={links} onToggleMenu={toggleMenu} />
        </header>
    );
};

export default Header;
