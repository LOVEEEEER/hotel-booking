import React from "react";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleTogglePage = () => {
        navigate("/rooms");
    };
    return (
        <main className="error">
            <div className="container error__container">
                <div className="error__text-wrapper">
                    <h1 className="error__title" data-tilt-scale="1.1">
                        страница не найдена
                    </h1>
                    <ul className="error__errors-list">
                        <li className="error__errors-item">
                            Мы искали эту страницу по всему сайту
                        </li>
                        <li className="error__errors-item">
                            Вы уверены что вы ввели корректную ссылку?
                        </li>
                        <li className="error__errors-item">
                            Свяжитесь с владельцом сайта
                        </li>
                    </ul>
                    <Button variant="outlined" onClick={handleTogglePage}>
                        Вернуться к подбору номера
                    </Button>
                </div>
                <img
                    src="https://pngimg.com/uploads/air_balloon/air_balloon_PNG19402.png"
                    className="error__error-image"
                    alt="error"
                />
            </div>
        </main>
    );
};

export default ErrorPage;
