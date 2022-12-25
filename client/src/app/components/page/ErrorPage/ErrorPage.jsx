import React from "react";
import errorImage from "../../../assets/svg/error.svg";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
import "./scss/error-page.scss";

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleTogglePage = () => {
        navigate("/rooms");
    };
    return (
        <main className="error__page">
            <div className="error__text-block">
                <h2 className="error__title">Страница не найдена :(</h2>
                <ul className="error__list">
                    <li className="error__item">
                        Мы везде искали эту страницу
                    </li>
                    <li className="error__item">
                        Вы уверены, что URL сайта правильный?
                    </li>
                    <li className="error__item">
                        Свяжитесь с владельцем сайта
                    </li>
                </ul>
                <Button variant="outlined" onClick={handleTogglePage}>
                    Вернуться к номерам
                </Button>
            </div>
            <img src={errorImage} alt="error" className="error__error-image" />
        </main>
    );
};

export default ErrorPage;
