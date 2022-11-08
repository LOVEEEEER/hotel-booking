import React from "react";
import Logo from "../Logo";
import Button from "../Button";
import { Link, NavLink } from "react-router-dom";
import NavProfile from "../../ui/profile/NavProfile";
import { useSelector } from "react-redux";
import { getIsLoading, getIsLoggedIn } from "../../../store/users";

const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersLoading = useSelector(getIsLoading());
    const links = [
        { path: "/rooms", text: "Номера", id: 1 },
        { path: "/services", text: "Услуги", id: 2 },
        { path: "/vacancies", text: "Вакансии", id: 3 },
        { path: "/news", text: "Новости", id: 4 }
    ];

    return (
        <header className="header">
            <div className="container header__container">
                <nav className="header__nav">
                    <Logo />
                    <ul className="header__nav-list">
                        {links.map((link) => (
                            <li className="header__nav-item" key={link.id}>
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
                <input
                    id="menu__toggle"
                    className="header__menu-toggle"
                    type="checkbox"
                />
                <label className="header__menu-button" htmlFor="menu__toggle">
                    <span></span>
                </label>
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
                        "loading..."
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header;
