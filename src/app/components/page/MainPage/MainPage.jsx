import React from "react";
import { useNavigate } from "react-router-dom";
import "./scss/mainpage.scss";

const MainPage = () => {
    const navigate = useNavigate();
    const handleToggleHotelsPage = () => {
        navigate("/rooms");
    };
    return (
        <>
            <main className="main__page">
                <div className="container main__container">
                    <h1 className="main__title">
                        Подбери отель своей мечты за 2 клика!
                    </h1>
                    <p className="main__description">
                        Наш сервис поможет подобрать тебе отличный номер по
                        привлекательной цене!
                    </p>
                    <button
                        className="main__buy-button"
                        onClick={handleToggleHotelsPage}
                    >
                        Посмотреть варианты
                    </button>
                </div>
            </main>
        </>
    );
};

export default MainPage;
