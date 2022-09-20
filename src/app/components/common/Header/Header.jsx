import React from "react";
import Logo from "../Logo";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const links = [
    { path: "/rooms", text: "Номера", id: 1 },
    { path: "/services", text: "Услуги", id: 2 },
    { path: "/vacancies", text: "Вакансии", id: 3 },
    { path: "/news", text: "Новости", id: 4 },
  ];
  const location = useLocation().pathname;

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
                <Link to={link.path} className={getNavLinkClasses(link.path)}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="header__auth-list">
          <li className="header__auth-item">
            <Link to="/login/signin" className="header__auth-link">
              Вход
            </Link>
          </li>
          <li className="header__auth-item">
            <Link to="/login/signup" className="header__auth-link">
              <Button variant="outlined">Регистрация</Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
