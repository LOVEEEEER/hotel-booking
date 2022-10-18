import React from "react";
import Logo from "../Logo";
import Button from "../Button";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import NavProfile from "../../ui/NavProfile";

const Header = () => {
    const { currentUser } = useAuth();
    const links = [
        { path: "/rooms", text: "Номера", id: 1 },
        { path: "/services", text: "Услуги", id: 2 },
        { path: "/vacancies", text: "Вакансии", id: 3 },
        { path: "/news", text: "Новости", id: 4 }
    ];

    const { pathname: location } = useLocation();

    const getNavLinkClasses = (path) => {
        return "header__nav-link" + (location.includes(path) ? " active" : "");
    };

    return (
        <header className="header">
            <div className="container header__container">
                <nav className="header__nav">
                    <Logo />
                    <ul className="header__nav-list">
                        {links.map((link) => (
                            <li className="header__nav-item" key={link.id}>
                                <Link
                                    to={link.path}
                                    className={getNavLinkClasses(link.path)}
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <input
                    id="menu__toggle"
                    className="header__menu-toggle"
                    type="checkbox"
                />
                <label className="header__menu-button" htmlFor="menu__toggle">
                    <span></span>
                </label>
                <ul className="header__auth-list">
                    {!currentUser ? (
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
                </ul>
            </div>
        </header>
    );
};

export default Header;
